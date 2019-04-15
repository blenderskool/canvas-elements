class Element {
  
  x:number;
  y:number;
  rotation: number;
  background: string;
  borderWidth: number;
  borderColor: string;
  ctx: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    rotation: number = 0,
    background: string = '#000',
    borderWidth: number = 0,
    borderColor: string = '#000',
    ctx: CanvasRenderingContext2D
  ) {

    if (!x)
      throw new Error('X coordinate is not defined');
    if (!y)
      throw new Error('Y coordinate is not defined');
    if (!ctx)
      throw new Error('Canvas rendering context is not defined');

    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.background = background;
    this.borderWidth = borderWidth;
    this.borderColor = borderColor;
    this.ctx = ctx;
  }

  /**
   * Rotates the canvas about the given center point
   * @param cx X coordinate of center
   * @param cy Y coordinate of center
   * @param clockwise clockwise/anti-clockwise rotation
   */
  protected rotate(cx: number, cy: number, clockwise:boolean = true) {
    this.ctx.translate(cx, cy);
    this.ctx.rotate((clockwise ? 1 : -1)*this.rotation);
    this.ctx.translate(-cx, -cy);
  }

}

export { Element };