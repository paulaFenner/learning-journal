import { addCopyright } from './footer.js';
import { generateHeader, toggleMenu } from './header.js';

document.addEventListener('DOMContentLoaded', () => {
  generateHeader();
  addCopyright();
});
