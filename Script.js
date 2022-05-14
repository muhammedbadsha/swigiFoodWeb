const btnScrollToTop =document.querySelector("#btnscrollToTop");
const nav = document.querySelector('nav');
btnScrollToTop.addEventListener('click',function(){
    console.log("clicking");
    nav.scrollIntoView();
});

console.log(btnScrollToTop);