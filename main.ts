import Button from 'elix/src/Button.js';
// import { Button } from 'elix';
import * as symbols from 'elix/src/symbols.js';

const button = new Button();
// button.textContent = 'Hello';

document.body.appendChild(button);
button.inner.textContent = 'Goodbye';
const delegatesFocus = button[symbols.delegatesFocus];
console.log(delegatesFocus);

const s = Symbol();
button[s] = 'hello';
console.log(button[s]);
