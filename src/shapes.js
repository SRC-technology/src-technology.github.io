export const rect = context2d => (x, y, width, height) => {
  context2d.fillRect(x, y, width, height)
}

export const circle = context2d => (x, y, radius) => {
  context2d.beginPath();
  context2d.arc(x, y, radius, 0, 2 * Math.PI)
  context2d.fill()
}

export const dot = context2d => (x, y) => {
  context2d.beginPath();
  context2d.arc(x, y, 2, 0, 2 * Math.PI)
  context2d.fill()
}

export const triangle = context2d => (x, y, up, left, width, height) => {
  context2d.beginPath()
  context2d.moveTo(left ? x : x + width, up ? y : y + height)
  context2d.lineTo(left ? x : x + width, up ? y + height : y)
  context2d.lineTo(left ? x + width : x, up ? y + height : y)
  context2d.closePath()
  context2d.fill()
}

export const triangleBoundary = context2d => (x, y, up, left, width, height) => {
  context2d.beginPath()
  if (up && left) {
    context2d.moveTo(x + width, y)
    context2d.lineTo(x + width, y + (height / 10))
    context2d.lineTo(x + (width / 10), y + (height / 10))
    context2d.lineTo(x + (width / 10), y + height)
    context2d.lineTo(x, y + height)
    context2d.lineTo(x, y)
  } else if (!up && !left) {
    context2d.moveTo(x, y + height)
    context2d.lineTo(x, y + height - (height / 10))
    context2d.lineTo(x + width - (width / 10), y + height - (height / 10))
    context2d.lineTo(x + width - (width / 10), y)
    context2d.lineTo(x + width, y)
    context2d.lineTo(x + width, y + height)
  } else if (!up && left) {
    context2d.moveTo(x + width, y + height)
    context2d.lineTo(x + width, y + height - (height / 10))
    context2d.lineTo(x + (width / 10), y + height - (height / 10))
    context2d.lineTo(x + (width / 10), y)
    context2d.lineTo(x, y)
    context2d.lineTo(x, y + height)
  } else if (up && !left) {
    context2d.moveTo(x, y)
    context2d.lineTo(x + width, y)
    context2d.lineTo(x + width, y + height)
    context2d.lineTo(x + width - (width / 10), y + height)
    context2d.lineTo(x + width - (width / 10), y + (height / 10))
    context2d.lineTo(x, y + (height / 10))
  }
  context2d.closePath()
  context2d.fill()
}