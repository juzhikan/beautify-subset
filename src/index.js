import Beautifier from './beautifier/javascript/index.js'

let app = document.querySelector('#app')
let _beautifier = new Beautifier(app.textContent)
let result = _beautifier.beautify()
app.textContent = result