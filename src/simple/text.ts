import { Element } from './base';

export default class Text extends Element {

  size: number;
  font: string;
  align: CanvasTextAlign;
  baseline: CanvasTextBaseline;
  weight: string;
  text: string;

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
   * @param {string} options.borderColor border color
   * @param {number} options.borderWidth border width
   * @param {string} options.borderStyle border style
   * @param {CanvasRenderingContext2D} options.ctx canvas context where text would be drawn
   */
  constructor(
    options :
    { x: number, y: number, rotation?: number, size?: number, font?: string, background?: string, align?: CanvasTextAlign,
      baseline?: CanvasTextBaseline, weight?: string, text: string, borderColor?: string, borderWidth?: number, borderStyle?: string, ctx: CanvasRenderingContext2D }
  ) {
    const {
      x, y, size=18,
      rotation=0,
      font='Arial',
      background,
      align='left',
      baseline='middle',
      text, ctx,
      borderColor,
      borderWidth,
      borderStyle,
      weight = '400'
    } = options;

    super(x, y, rotation, background, borderWidth, borderColor, borderStyle, ctx);

    this.size = size;
    this.font = font;
    this.background = background;
    this.align = align;
    this.baseline = baseline;
    this.weight = weight;
    this.text = text;

    this.draw();

  }

  draw() {
    super.draw();
    // Initial rotation about the starting point of text
    this.rotate(this.x, this.y);

    this.ctx.font = `${this.weight} ${this.size}px ${this.font}`;
    this.ctx.fillStyle = this.background;
    this.ctx.textAlign = this.align;
    this.ctx.textBaseline = this.baseline;

    /**
     * Set the border for the text element
     */
    if (this.borderWidth) {
      this.ctx.lineWidth = this.borderWidth;
      this.ctx.strokeStyle = this.borderColor;
      this.ctx.strokeText(this.text, this.x, this.y);
    }
    this.ctx.fillText(this.text, this.x, this.y);

    // Rotate the canvas back to its original state
    this.rotate(this.x, this.y, false);

  }
  
}