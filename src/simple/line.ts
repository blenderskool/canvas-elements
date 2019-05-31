import { Element } from './base';

export default class Line extends Element {

  x2: number;
  y2: number;
  lineCap: CanvasLineCap;

  /**
   * @param {Object} options options to create a line
   * @param {number} options.x starting x coordinate
   * @param {number} options.y starting y coordinate
   * @param {number} options.x2 ending x coordinate
   * @param {number} options.y2 ending y coordinate
   * @param {number} options.r distance from starting coordinate
   * @param {number} options.angle angle of the line from horizontal axis (Clockwise is positive) 
   * @param {string} options.background fill color
   * @param {string} options.borderColor border color
   * @param {number} options.borderWidth Width of the line
   * @param {string} options.borderStyle border style
   * @param {CanvasRenderingContext2D} options.ctx canvas context where line would be drawn
   */
  constructor(options: 
    {x: number, y:number, x2?: number, y2?: number, r?: number, angle?: number,
      rotation?: number, background?: string, borderColor?: string, borderWidth?: number, borderStyle?: string
      lineCap?: CanvasLineCap, ctx: CanvasRenderingContext2D}
  ) {
    const { x, y, x2, y2, r, angle, rotation = 0, background, borderColor, borderWidth, borderStyle, lineCap = 'square', ctx } = options;
    super(x, y, rotation, background || borderColor, borderWidth, borderColor, borderStyle, ctx);

    if (typeof x2 === "number" && typeof y2 === "number") {
      /**
       * Support for cartesian system
       */
      this.x2 = x2;
      this.y2 = y2;
    }
    else if (typeof r === "number" && typeof angle == "number") {
      /**
       * Support for polar system
       */
      this.x2 = this.x + r * Math.cos(angle);
      this.y2 = this.y + r * Math.sin(angle);
    }
    else {
      /**
       * When neither of the systems have sufficient values
       */
      throw new Error('Insufficient values to draw a line');
    }

    this.lineCap = lineCap;
    this.draw();
  }

  draw(): void {
    super.draw();
    /**
     * Rotation is along the axis through the midpoint of the line.
     * Hence mid point coordinates are calculated
     */
    const midX = (this.x + this.x2)/2;
    const midY = (this.y + this.y2)/2;

    this.rotate(midX, midY);

    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x2, this.y2);
    if (this.borderWidth) {
      this.ctx.lineCap = this.lineCap;
      this.ctx.lineWidth = this.borderWidth;
      this.ctx.strokeStyle = this.background;
    }
    this.ctx.stroke();

    this.rotate(midX, midY, false);

  }

}