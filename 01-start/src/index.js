document.body.style.backgroundColor = 'pink';

function createDiv(text){
	let _div = document.createElement('div');
	_div.style.width = '100px';
	_div.style.height = '100px';
	_div.innerText = text;
	return _div
}

document.body.appendChild(createDiv('Hello Webpack'));