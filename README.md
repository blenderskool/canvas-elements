# Canvas Elements

Canvas Elements is a library of commonly used components for HTML5 canvas made easy to use with JavaScript and Node.js.
It wraps the structure and the styling of elements into one which makes it easy to create new elements on the canvas.

## Installation
### Using NPM
To use Canvas Elements in Node.js, install the npm package by using the command below.
```bash
npm install canvas-elements
```

### Using CDN
The project also includes a minified CDN file in the `build/cdn` directory of the project.
```
https://unpkg.com/canvas-elements@latest/build/cdn/canvas-elements.min.js
```

## Using the library
### Using Node
```javascript
var CanvasElements = require('canvas-elements');
// All elements are in CanvasElements object. Example: CanvasElements.Circle, CanvasElements.Text

// Using ES6 import, specifically choose elements that you need
import { Circle, Text } from 'canvas-elements';
```
**Note: If you are using ES6 import, ignore `CanvasElements` object in the following documentation.**

### Using CDN
CDN exposes a `CanvasElements` object to the window which contains the constructors of all the elements.
```javascript
var circle = new CanvasElements.Circle({
   // options
});
```

### Example usage
This example program creates a circle with blue rounded rectangle which has 'Hello Canvas' text at the center.
```javascript
var canvas = document.getElementsByTagName('canvas')[0]; // Get the canvas element reference
var ctx = canvas.getContext('2d'); // Get context of the canvas

// Create a circle
var circle = new CanvasElements.Circle({
  x: 80,
  y: 80,
  r: 60,
  background: 'white',
  borderWidth: 4,
  borderColor: '#000',
  ctx: ctx
});

// Creates a blue rounded rectangle 
var text = new CanvasElements.Rect({
  x: 25,
  y: 63,
  r: 20,
  w: 110,
  h: 30,
  background: '#03a9f4',
  ctx: ctx
})

// Create 'Hello Canvas' text
var text = new CanvasElements.Text({
  x: 80,
  y: 80,
  background: '#ffffff',
  text: 'Hello Canvas',
  size: 16,
  align: 'center',
  baseline: 'middle',
  weight: '600',
  ctx: ctx
});
```

## Options Reference
All the elements constructors take options object which allows you to configure the structure and style of the element.

### Common options
These options are common between all the elements included in the library.

|Option| Type | Description |
|:--:| -- | -- |
| x | `number` (required) | X coordinate of the element in canvas |
| y | `number` (required) | Y coordinate of the element in canvas |
| ctx | `CanvasRenderingContext2D` (required) | Context of the canvas to which the element must be drawn |
| background| `string` (optional) | Fill color. Eg. `#6ddad0`, `rgba(20, 30, 40, 0.5)` |

### Circle
Some exclusive options for Circle element.

|Option| Type | Description |
|:--:| -- | -- |
| r | `number` (required) | Radius of the circle |
| borderColor | `string` (optional) | Color of the border around the circle |
| borderWidth | `number` (optional) | Thickness of the border |

### Rect (Rectangle)
Some exclusive options for Rect element to create rectangles.

|Option| Type | Description |
|:--:| -- | -- |
| w | `number` (required) | Width of the rectangle |
| h | `number` (required) | Height of the rectangle |
| r | `number` (required) | Roundness of every corner. Same as `border-radius` CSS property |
| borderColor | `string` (optional) | Color of the border around the rectangle |
| borderWidth | `number` (optional) | Thickness of the border |

### Ellipse
Some exclusive options for Ellipse element.

|Option| Type | Description |
|:--:| -- | -- |
| radiusX | `number` (required) | Horizontal radius of the ellipse |
| radiusY | `number` (required) | Vertical radius of the ellipse |
| borderColor | `string` (optional) | Color of the border around the ellipse |
| borderWidth | `number` (optional) | Thickness of the border |

### Text
Some exclusive options for Text element to render text.

|Option| Type | Description |
|:--:| -- | -- |
| text | `string` (required) | Text to be shown |
| size | `number` (required) | Font size |
| font | `string` (optional) | Font family |
| align | `string` (optional) | Horizontal text alignment |
| baseline | `string` (optional) | Vertical text alignment |
| weight | `string` (optional) | Text weight |

## Contributing
To contribute to the development of this project, you must first fork this project into your own account.
Make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed. Then follow the given commands

```bash
git clone https://github.com/your-username/canvas-elements
cd canvas-elements
npm install
```
The source code is located in the `src` folder. Once the project is built or bundled, `build` directory would be created which
contains the code for distribution.

### To build the project
```bash
npm run build
```

### To bundle and minify source
```bash
npm run bundle
```
Bundled CDN file would be located in `build/cdn` directory.

## License
This project is under [MIT License](https://github.com/blenderskool/canvas-elements/blob/master/LICENSE)