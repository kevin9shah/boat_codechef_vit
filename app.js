let nextDom= document.getElementById('next');
let prevDom= document.getElementById('prev');
let carouselDom= document.getElementById('.carousel');
let listItemDom= document.getElementById('.carousel ,list');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    if (type==='next') {
        listItemDom.appendChild(itemSlider[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut=setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout = setTimeout(() =>{
        nextDom.click();
    }, timeAutoNext);
}
