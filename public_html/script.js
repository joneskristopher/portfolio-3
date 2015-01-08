$("document").ready(function(){
    $(".test").css("background-color", "grey")
    $('a').css({"background-color": "black", "color": "white"});
    $('p:first').css({"background-color": "green", "color": "white"});
    $('p:last').css({"background-color": "red", "color": "black"});
    $('#khazix').bind('click', alertButtonClick);
//    $('#textbox1').bind('blur', onBlurEvent)
//                  .bind('focus', onFocusEvent)
//                  .bind('onmousedown', onMDownEvent)
//                  .bind('onmouseup', onMUpEvent)
//                  .bind('change', onChangeEvent);
});

function alertButtonClick() {
    alert("there was a button clicked");
}

