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
content = '앞입니다';
insElement = addElement(tag, content)
insElement.id = 'topElement'
document.body.prepend(insElement);

tag = 'p';
content = '뒤입니다';
insElement = addElement(tag, content);
target = document.querySelector('header');
document.body.insertBefore(insElement, target);

tag = 'p';
content = '푸터 앞에 넣을 겁니다';
insElement = addElement(tag, content);
target = document.querySelector('footer');
document.body.insertBefore(insElement, target);