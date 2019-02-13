open Revery;
open Revery.Core;
open Revery.UI;

module Block = {
  let component = React.component("Block");

  let createElement =
      (
        ~children as _,
        ~delay,
        ~top=0,
        ~left=0,
        ~width=10,
        ~height=10,
        ~color=Colors.white,
        (),
      ) =>
    component(slots => {
      let (opacityVal: float, _: React.Hooks.empty) =
        Hooks.animation(
          Animated.floatValue(0.),
          {
            toValue: 1.0,
            duration: Seconds(1.),
            delay: Seconds(delay),
            repeat: false,
            easing: Animated.linear,
          },
          slots,
        );

      let style = [
        Style.backgroundColor(color),
        Style.position(`Absolute),
        Style.top(top),
        Style.left(left),
        Style.width(width),
        Style.height(height),
        Style.marginHorizontal(8),
        Style.opacity(opacityVal),
      ];

      <View style />;
    });
};

module Grid = {
  let component = React.component("Grid");

  let createElement = (~children as _, ~size=10, ~width=100, ~height=100, ()) =>
    component(slots => {
      let _: React.Hooks.empty = slots;
      let block_w = width / size;
      let block_h = height / size;
      let blocks =
        Array.make_matrix(size, size, 0)
        |> Array.mapi((i, row) =>
             Array.mapi(
               (j, _) => {
                 let top = block_h * i;
                 let left = block_w * j;
                 let delay = 0.001 *. float_of_int(i) *. float_of_int(j);
                 <Block delay top left width=block_w height=block_h />;
               },
               row,
             )
           )
        |> Array.to_list
        |> List.map(row => row |> Array.to_list |> React.listToElement)
        |> React.listToElement;

      <View> blocks </View>;
    });
};

let init = app => {
  let win = App.createWindow(app, "Welcome to Revery!");

  let containerStyle =
    Style.[position(`Absolute), bottom(0), top(0), left(0), right(0)];

  let innerStyle = Style.[flexDirection(`Row), alignItems(`FlexEnd)];

  let render = () =>
    <View style=containerStyle>
      <View style=innerStyle> <Grid size=100 width=500 height=500 /> </View>
    </View>;

  UI.start(win, render);
};

App.start(init);
