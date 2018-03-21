import './app.css';
import SearchImg from './search.png'

function createDiv(text) {
    let _div = document.createElement('div');
    _div.style.width = '300px';
    _div.style.height = '300px';
    _div.innerText = text;
    _div.classList.add('jay');

    let img = new Image();
    img.src = SearchImg;
    _div.appendChild(img);

    return _div
}

document.body.appendChild(createDiv('Hello Webpack'));