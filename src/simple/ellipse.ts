import { Component } from './interfaces';

export default class Ellipse implements Component {

  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
  rotation: number;
  background: string;
  borderColor: string;
  borderWidth: number;
  ctx: CanvasRenderingContext2D;

  /**
   * @param {Object} options options to create a circle
   * @param {number} options.x x coordinate of the circle
   * @param {number} options.y y coordinate of the circle
   * @param {number} options.r radius of the circle
   * @param {string} options.background fill color
   * @param {string} options.borderColor border color
   * @param {number} options.borderWidth border width
   * @param {CanvasRenderingContext2D} options.ctx canvas context where circle would be drawn
   */
  constructor(options :
    { x: number, y: number, radiusX: number, radiusY: number,
      rotation?: number, background?: string, borderColor?: string, borderWidth?: number, ctx: CanvasRenderingContext2D }
  ) {

    const { x, y, radiusX, radiusY, rotation, background, borderColor, borderWidth, ctx} = options;

    this.x = x;
    this.y = y;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.rotation = rotation || 0;
    this.background = background || 'black';
    this.borderColor = borderColor;
    this.borderWidth = borderWidth || 0;
    this.ctx = ctx;

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