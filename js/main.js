$(document).ready(function(){
     
    $nav = $('.nav');
    $toggleCollpase = $('.toggle-collapse')


    /*      Click event on toggle menu    */
    $toggleCollpase.click(function(){
        $nav.toggleClass('collapse');
    })
});