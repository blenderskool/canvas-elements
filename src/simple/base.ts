class Element {
  
  x:number;
  y:number;
  rotation: number;
  background: string;
  borderWidth: number;
  borderColor: string;
  borderStyle: string|[number];
  ctx: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    rotation: number = 0,
    background: string = '#000',
    borderWidth: number = 0,
    borderColor: string = '#000',
    borderStyle: string = 'solid',
    ctx: CanvasRenderingContext2D
  ) {

    if (typeof x !== 'number')
      throw new Error('X coordinate is not defined');
    if (typeof y !== 'number')
      throw new Error('Y coordinate is not defined');
    if (!ctx)
      throw new Error('Canvas rendering context is not defined');

    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.background = background;
    this.borderWidth = borderWidth;
    this.borderColor = borderColor;
    this.borderStyle = borderStyle;
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

  draw() {
    if (typeof this.borderStyle == 'string') {
      switch (this.borderStyle) {
        // Dotted border
        case 'dotted':
          this.ctx.setLineDash([1, 2*this.borderWidth]);
          break;
        // Dashed border
        case 'dashed':
          this.ctx.setLineDash([8, 10]);
          break;
        // Default border
        default:
          this.ctx.setLineDash([]);
          break;
      }
    }
    // If user specifies line dash pattern array then use it directly
    else if (Array.isArray(this.borderStyle)) {
      this.ctx.setLineDash(this.borderStyle);
    }
  }

}

export { Element };