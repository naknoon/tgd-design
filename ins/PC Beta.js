/*
let target = document.querySelector('body'); //복사 타겟
let template = document.querySelector('#will-be-rendered'); //템플릿 경로
let newContent = document.importNode(template.content, true); //템플릿 복사
target.appendChild(newContent); //타겟에 삽입


target = document.querySelector('body'); //복사 타겟
template = document.querySelector('#will-be-rendered'); //템플릿 경로
newContent = document.importNode(template.content, true); //템플릿 복사
target.appendChild(newContent); //타겟에 삽입

*/



/* function ins(selector) {

    let Templeate = document.querySelector(selector);
    let NewContent = document.importNode(Templeate.content, true);

    return NewContent
}
*/

function ins(selector) {

    let template = document.querySelector(selector);
    let newContent = document.importNode(template, true);

    return newContent
}

function sel(selector) {

    let target = document.querySelector(selector);

    return target
}

sel('body').appendChild(ins('#test2'));

//target = document.querySelector('footer');
//target.before(ins('#test2'));


