$(document).ready(function() {
    console.log('Loaded');
    $(window).scroll(function() {
        console.log('Scrolled');
    });
    console.log(window.scrollY);
    if(window.scrollY > 0){
        console.log('Scrolled scrollY' + window.scrollY);
    }
});