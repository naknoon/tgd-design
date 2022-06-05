setTimeout(() => {
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
}, 500);


