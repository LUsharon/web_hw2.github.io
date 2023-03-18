
function load(){

    var list = document.querySelector('.list')
    var box = document.querySelector('.box');
    let left = list.style.left;
    let timer;
    function move(){
        clearInterval(timer);
        timer=setInterval(function(){
            left = left - 2;//讓漢堡往左移動
            console.log(list.clientLeft);//讓console頁面會顯示left值
            if(left == -(6*200)){//一組是200寬度
                left = 0;//顯示出來的螢幕最左邊為0
            }
            list.style.left = left + 'px';//把在js的值賦值給css的list的left
        },30);//每30毫秒
    }

    move();
    // box.onmouseover = function(){
    //     clearInterval(timer);
    // };

    // box.onmouseleave = function(){
    //     move();
    // };
};
document.addEventListener('DOMContentLoaded',load);