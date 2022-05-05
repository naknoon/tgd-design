//TEST

/* document.body.onload = addElement;




function addElement () {

  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("환영합니다!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);


  // add the newly created element and its content into the DOM
  const currentDiv = document.querySelector('header')
  document.body.insertBefore(newDiv, currentDiv);


};

*/

// create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("환영합니다!");

// add the text node to the newly created div
newDiv.appendChild(newContent);


// add the newly created element and its content into the DOM
document.body.prepend(newDiv)

//const currentDiv = document.querySelector('header')
//document.body.insertBefore(newDiv, currentDiv);



