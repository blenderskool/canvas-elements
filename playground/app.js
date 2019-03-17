const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
new CanvasElements.Rect({
  x: 50,
  y: 50,
  w: 30,
  h: 20,
  background: '#FFFFFF55',
  borderWidth: 1.5,
  rotation: 0,
  borderColor: '#FFFFFF',
  ctx
});

new CanvasElements.Text({
  x: 50,
  y: 50,
  text: 'Hello',
  rotation: Math.PI*2,
  align: 'center',
  baseline: 'middle',
  background: '#FF0000',
  weight: '600',
  ctx
});