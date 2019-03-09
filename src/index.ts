import { Circle, Rect, Text, Ellipse } from './simple';

declare global {
  interface Window {
    CanvasElements: any;
  }
}

window.CanvasElements = {
  Circle,
  Rect,
  Text,
  Ellipse
} || {};


export { Circle, Rect, Text, Ellipse };