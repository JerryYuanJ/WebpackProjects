
import showMessage from './service'

function createDiv(text) {
    //创建元素
    let _div = document.createElement('div');
    let _btn = document.createElement('button');
    //基本样式设置
    _div.style.width = '300px';
    _div.style.height = '300px';
    _div.style.backgroundColor = 'pink';
    _div.innerText = text;
    _div.classList.add('jay');
    _btn.innerHTML = 'ClickMe';
    //添加监听
    _btn.onclick = showMessage;
    _div.appendChild(_btn);
    return _div
}

document.body.appendChild(createDiv('Hello Webpack'));