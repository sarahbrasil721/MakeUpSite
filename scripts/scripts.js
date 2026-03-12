function showMenu(){
    $('header #nav-left ul#nav-right').css('display', 'flex');
    $('header #nav-left ul#nav-right').addClass('animate__animated animate__fadeInRight animate__slow');

    $('header ul#menu-icon li#menu').css('display', 'none');
    $('header ul#menu-icon li#menuX').css('display', 'flex');


}

function hideMenu(){

    $('header #nav-left ul#nav-right').css('display', 'none');


    $('header ul#menu-icon li#menu').css('display', 'flex');
    $('header ul#menu-icon li#menuX').css('display', 'none');

}

let control = true;

$('header #nav-left ul#menu-icon').click(function(){
    if(control == true){
        showMenu();
        control = false;
    }else{
        hideMenu();
        control = true;
    }
})