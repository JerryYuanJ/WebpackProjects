/**
 * author: Joker
 * creationDate: 2018/3/21
 * usage: 懒加载
 */

function createEle() {
    let element = document.createElement('div'),
        button = document.createElement('button'),
        br = document.createElement('br');
    button.innerHTML = 'Click And See The Console';
    button.style.width = '200px';
    button.style.height = '80px';
    button.style.backgroundColor = '#eaeaea';
    button.style.color = 'blue';
    element.appendChild(br);
    element.appendChild(button);

    //生产环境才可以,nom start的话会报错
    button.onclick = function () {
        import('./service.js').then(module => {
            let print = module.default;

            print();
        })
    };

    return element;
}

document.body.appendChild(createEle());