var tz = Math.round( ( cellSize / 2 ) /
  Math.tan( ( ( Math.PI * 2 ) / numberOfCells ) / 2 ) );
// or simplified to
var tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / numberOfCells ) );