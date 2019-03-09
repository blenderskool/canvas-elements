interface Component {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  background: string;

  draw: Function;

}

export { Component };