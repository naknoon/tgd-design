//TEST

/* create a new div element
const newDiv = document.createElement( 'div' );
const newContent = document.createTextNode( "환영합니다!" );
newDiv.appendChild(newContent);

document.body.prepend(newDiv)

*/

let tag = 'div'
let content = 'hello world!'

function addElement () {
    const addTag = document.createElement( tag );
    const addContent = document.createTextNode( content );
    addTag.appendChild(addContent);
}

tag = 'p'
content = '환영합니다! 앞입니다.'
addElement()
document.body.prepend(addTag)

tag = 'div'
content = '환영합니다! 뒤입니다.'
addElement()
document.body.appendChild(addTag)
