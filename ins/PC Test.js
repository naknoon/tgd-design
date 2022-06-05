setTimeout(() => {

    //기본 설정
    function ins(selector) {
        let template = document.querySelector(selector);
        let newContent = document.importNode(template, true);
    
        return newContent
    }
    
    function sel(selector) {
        let target = document.querySelector(selector);
        
        return target
    }
    

    //테스트 요소
    sel('body').append(ins('#test2'));

    //디스코드 버튼
    sel('footer').after(ins('#disBtn'));






}, 800);


