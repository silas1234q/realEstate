const hamburger = document.querySelector('.hamburger');
const navs = document.querySelector('.navs');

hamburger.addEventListener('click',()=>{
    navs.classList.toggle('visible');
});

AOS.init();
// const scrollers = document.querySelectorAll('.scroller');
// if(!window.matchMedia('prefers-reduced-motion:reduce').matches){
//     addAnimation();
// }
// function addAnimation(){
//     scrollers.forEach(scroller=>{
//         scroller.setAttribute('data-animation',true)

//         const scrollerInner = scroller.querySelector('.scroller-inner');
//         let  scrollerContent = Array.from(scrollerInner.children);
        
//          scrollerContent.forEach(item=>{
//              let duplicateItem = item.cloneNode(true);
//              duplicateItem.setAttribute('aria-hidden',true);
//              duplicateItem.setAttribute('style',"background:red;");
//              scrollerInner.appendChild(duplicateItem);
//         })
//     })
// }