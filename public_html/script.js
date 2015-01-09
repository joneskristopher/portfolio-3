$("document").ready(function(){
    $(".test").css("background-color", "grey")
    $('a').css({"background-color": "black", "color": "white"});
    $('p:first').css({"background-color": "green", "color": "white"});
    $('p:last').css({"background-color": "red", "color": "black"});
    $('#khazix').bind('click', alertButtonClick);
    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click' removeAPara);
});

function alertButtonClick() {
    alert("why would you click that button");
}

function replaceWHtml() {
    $('h3Tag').html('<h6>Now i\'m an h6<h6>')
}

function replaceWText() {
    $('h3Tag').text('<h6>Now i\'m an h6<h6>')
}