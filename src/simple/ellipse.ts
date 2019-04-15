import { Element } from './base';

export default class Ellipse extends Element {

  radiusX: number;
  radiusY: number;

  /**
   * @param {Object} options options to create an ellipse
   * @param {number} options.x x coordinate of the ellipse
   * @param {number} options.y y coordinate of the ellipse
   * @param {number} options.radiusX horizontal radius of the ellipse
   * @param {number} options.radiusY vertical radius of the ellipse
   * @param {string} options.background fill color
   * @param {string} options.borderColor border color
   * @param {number} options.borderWidth border width
   * @param {CanvasRenderingContext2D} options.ctx canvas context where ellipse would be drawn
   */
  constructor(options :
    { x: number, y: number, radiusX: number, radiusY: number,
      rotation?: number, background?: string, borderColor?: string, borderWidth?: number, ctx: CanvasRenderingContext2D }
  ) {

    const { x, y, radiusX, radiusY, rotation = 0, background, borderColor, borderWidth, ctx} = options;
    super(x, y, rotation, background, borderWidth, borderColor, ctx);

    this.radiusX = radiusX;
    this.radiusY = radiusY;

    this.draw();
  }

  draw(): void {

    this.ctx.beginPath();
    this.ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, this.rotation, 0, 2*Math.PI, false);
    this.ctx.fillStyle = this.background;
    if (this.borderWidth) {
      this.ctx.lineWidth = this.borderWidth;
      this.ctx.strokeStyle = this.borderColor;
      this.ctx.stroke();  
    }
    this.ctx.fill();
    this.ctx.closePath();

  }

};