import Ellipse from './ellipse';

export default class Circle extends Ellipse {

  /**
   * @param {Object} options options to create a circle
   * @param {number} options.x x coordinate of the circle
   * @param {number} options.y y coordinate of the circle
   * @param {number} options.r radius of the circle
   * @param {string} options.background fill color
   * @param {string} options.borderColor border color
   * @param {number} options.borderWidth border width
   * @param {string} options.borderStyle border style
   * @param {CanvasRenderingContext2D} options.ctx canvas context where circle would be drawn
   */
  constructor(options :
    { x: number, y: number, r: number, background?: string, borderColor?: string, borderWidth?: number, borderStyle?: string, ctx: CanvasRenderingContext2D }
  ) {

    const { x, y, r, background, borderColor, borderWidth, borderStyle, ctx} = options;

    super({
      x, y,
      radiusX: r,
      radiusY: r,
      rotation: 0,
      background, borderColor, borderWidth,
      borderStyle,
      ctx
    });
  }

};