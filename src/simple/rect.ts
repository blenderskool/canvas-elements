import { Element } from './base';

export default class Rect extends Element {

  r: number;
  w: number;
  h: number;

  /**
   * 
   * @param {Object} options options to create rectangles
   * @param {number} options.x x coordinate
   * @param {number} options.y y coordinate
   * @param {number} options.w rectangle width
   * @param {number} options.h rectangle height
   * @param {number} options.r border radius (roundness of corners)
   * @param {string} options.borderColor border color
   * @param {string} options.background fill color
   * @param {number} options.borderWidth border width
   * @param {string} options.borderStyle border style
   * @param {CanvasRenderingContext2D} options.ctx canvas context where rectangle would be drawn
   */
  constructor(
    { x, y, w, h, r=0, rotation=0, borderColor, background, borderWidth, borderStyle, ctx } :
    {x: number, y: number, w: number, h: number, r?: number, rotation?: number, borderColor?: string, background?: string,
      borderWidth?: number, borderStyle?: string, ctx: CanvasRenderingContext2D}
  ) {
    super(x, y, rotation, background, borderWidth, borderColor, borderStyle, ctx);
    this.r = r;
    this.w = w;
    this.h = h;

    this.draw();
  }

  draw() {
    super.draw();
    // Initial rotation about the center of the rectangle
    this.rotate(this.w/2 + this.x, this.h/2 + this.y);

    if (this.w < 2 * this.r) this.r = this.w / 2;
    if (this.h < 2 * this.r) this.r = this.h / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(this.x+this.r, this.y);
    this.ctx.arcTo(this.x+this.w, this.y,   this.x+this.w, this.y+this.h, this.r);
    this.ctx.arcTo(this.x+this.w, this.y+this.h, this.x,   this.y+this.h, this.r);
    this.ctx.arcTo(this.x,   this.y+this.h, this.x,   this.y,   this.r);
    this.ctx.arcTo(this.x,   this.y,   this.x+this.w, this.y,   this.r);
    this.ctx.closePath();

    this.ctx.fillStyle = this.background;

    if (this.borderWidth) {
      this.ctx.lineWidth = this.borderWidth;
      this.ctx.strokeStyle = this.borderColor;
      this.ctx.stroke();
    }

    this.ctx.fill();

    // Rotate the canvas back to its original state
    this.rotate(this.w/2 + this.x, this.h/2 + this.y, false);

  }

}