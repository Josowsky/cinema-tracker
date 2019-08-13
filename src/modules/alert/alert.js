import alertify from 'alertify.js';


alertify
  .maxLogItems(2)
  .logPosition('top left');

const alert = alertify;

export { alert };
