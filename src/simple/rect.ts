import { Component } from './interfaces';

export default class Rect implements Component {

  x: number;
  y: number;
  r: number;
  w: number;
  h: number;
  background: string;
  borderColor: string;
  borderWidth: number;
  ctx: CanvasRenderingContext2D;

  constructor(
    { x, y, w, h, r, borderColor, background = '#000', borderWidth = 0, ctx } :
    {x: number, y: number, w: number, h: number, r: number, borderColor?: string, background?: string,
      borderWidth?: number, ctx: CanvasRenderingContext2D}
  ) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.w = w;
    this.h = h;
    this.background = background;
    this.borderColor = borderColor;
    this.borderWidth = borderWidth;
    this.ctx = ctx;

    this.draw();
  }


  draw() {
    
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
  }

}