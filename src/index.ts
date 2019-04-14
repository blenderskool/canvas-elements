import { Circle, Rect, Text, Ellipse, Line } from './simple';

declare global {
  interface Window {
    CanvasElements: any;
  }
}

window.CanvasElements = {
  Circle,
  Rect,
  Text,
  Ellipse,
  Line,
} || {};


export { Circle, Rect, Text, Ellipse, Line };