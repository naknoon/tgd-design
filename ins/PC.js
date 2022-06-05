//TEST

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





/////////////////////////////////





















//요소 추가
let tag = 'div';
let content = 'hello world!';
let insElement

function addElement(tag, content) {
    const addTag = document.createElement(tag);
    const addContent = document.createTextNode(content);
    addTag.appendChild(addContent);

    return addTag
}

/*요소 1
tag = 'div';
content = '요소 추가 테스트 중으로 레이아웃이 일부 깨질 수 있습니다';
insElement = addElement(tag, content)
insElement.id = 'topElement'
document.body.prepend(insElement);
*/

//요소 2
tag = 'p';
content = '뒤입니다';
insElement = addElement(tag, content);
document.body.appendChild(insElement);

//요소 3
tag = 'p';
content = '푸터 앞에 넣을 겁니다';
insElement = addElement(tag, content);
target = document.querySelector('footer');
document.body.insertBefore(insElement, target);





//요소 추가 테스트 안내
const topElement = document.querySelector('body');
topElement.insertAdjacentHTML('afterbegin', '<div id="topElement">요소 추가 테스트 중으로 레이아웃이 일부 깨질 수 있습니다</div>');


//브라우저 안내
const browserNoti = document.querySelector('footer .container');
browserNoti.insertAdjacentHTML('afterend', '<span id="browserNoti">원활한 사이트 이용을 위해 최신 버전의 <a href="https://www.google.com/intl/ko_kr/chrome" target="_blank"> Chrome</a> 또는 <a href="https://www.google.com/intl/ko_kr/chrome" target="_blank"> Firefox</a> 브라우저로 접속해주세요</span>');