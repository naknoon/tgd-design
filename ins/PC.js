//TEST

/* create a new div element
const newDiv = document.createElement( 'div' );
const newContent = document.createTextNode( "환영합니다!" );
newDiv.appendChild(newContent);

document.body.prepend(newDiv)

*/


let content = 'hello world!'


function addElement (tag, content) {
    const addTag = document.createElement( tag );
    const addContent = document.createTextNode( content );
    addTag.appendChild(addContent);
    return addTag
}

content = '앞입니다'
document.body.prepend(addElement("p", content))

content = '뒤입니다'
document.body.appendChild(addElement("div", content))