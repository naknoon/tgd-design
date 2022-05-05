//TEST

/* create a new div element
const newDiv = document.createElement( 'div' );
const newContent = document.createTextNode( "환영합니다!" );
newDiv.appendChild(newContent);

document.body.prepend(newDiv)

*/


let tag = 'div';
let content = 'hello world!';
let insElement

function addElement(tag, content) {
    const addTag = document.createElement(tag);
    const addContent = document.createTextNode(content);
    addTag.appendChild(addContent);

    return addTag
}

tag = 'div';
content = '요소 추가 테스트 중으로 레이아웃이 일부 깨질 수 있습니다';
insElement = addElement(tag, content)
insElement.id = 'topElement'
document.body.prepend(insElement);

tag = 'p';
content = '뒤입니다';
insElement = addElement(tag, content);
document.body.appendChild(insElement);

tag = 'p';
content = '푸터 앞에 넣을 겁니다';
insElement = addElement(tag, content);
target = document.querySelector('footer');
document.body.insertBefore(insElement, target);