import { Component } from './interfaces';

export default class Text implements Component {

  x: number;
  y: number;
  size: number;
  font: string;
  background: string;
  align: CanvasTextAlign;
  baseline: CanvasTextBaseline;
  weight: string;
  text: string;
  ctx: CanvasRenderingContext2D;

  /**
   * @param {Object} options options to create text
   * @param {number} options.x x coordinate
   * @param {number} options.y y coordinate
   * @param {number} options.size font size
   * @param {string} options.font font family
   * @param {string} options.background text color
   * @param {string} options.align text alignment
   * @param {string} options.baseline text baseline
   * @param {string} options.weight text weight
   * @param {string} options.text text to be shown
   * @param {CanvasRenderingContext2D} options.ctx canvas context where circle would be drawn
   */
  constructor(
    options :
    { x: number, y: number, size: number, font?: string, background?: string, align?: CanvasTextAlign,
      baseline?: CanvasTextBaseline, weight?: string, text: string, ctx: CanvasRenderingContext2D }
  ) {
    const { x, y, size, font='Arial', background='#000', align='left', baseline='middle', text, ctx, weight = '400' } = options;

    this.x = x;
    this.y = y;
    this.size = size;
    this.font = font;
    this.background = background;
    this.align = align;
    this.baseline = baseline;
    this.weight = weight;
    this.text = text;
    this.ctx = ctx;

    this.draw();

  }

  draw() {

    this.ctx.font = `${this.weight} ${this.size}px ${this.font}`;
    this.ctx.fillStyle = this.background;
    this.ctx.textAlign = this.align;
    this.ctx.textBaseline = this.baseline;
    this.ctx.fillText(this.text, this.x, this.y);

  }
  
}