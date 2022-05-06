//TEST


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