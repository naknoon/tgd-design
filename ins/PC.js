//TEST

/* create a new div element
const newDiv = document.createElement( 'div' );
const newContent = document.createTextNode( "환영합니다!" );
newDiv.appendChild(newContent);

document.body.prepend(newDiv)

*/

let tag = 'div';
let content = 'hello world!';

let insElement = addElement(tag, content);

function addElement(tag, content) {
    const addTag = document.createElement(tag);
    const addContent = document.createTextNode(content);
    addTag.appendChild(addContent);

    return addTag
}

tag = 'div';
content = '앞입니다';
document.body.prepend(insElement);

tag = 'div';
content = '뒤입니다';
document.body.appendChild(insElement);