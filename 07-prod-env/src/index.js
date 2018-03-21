import {printHello} from './service';
import './test.css'

function createDiv(text) {
    //创建元素
    let _div = document.createElement('div');
    let _btn = document.createElement('button');
    //基本样式设置
    _div.style.width = '300px';
    _div.style.height = '300px';
    _div.style.backgroundColor = 'pink';
    _div.innerText = text;
    _btn.innerHTML = 'ClickMe';

    _btn.classList.add('hello');
    //添加监听
    _btn.onclick = printHello;
    _div.appendChild(_btn);
    return _div
}

if(process.env.NODE_ENV==='production'){
    console.log('this is prod mode .');
}

document.body.appendChild(createDiv('Hello Webpack DevServer'));