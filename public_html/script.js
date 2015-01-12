$("document").ready(function(){
    $(".test").css("background-color", "grey");
    $('a').css({"background-color": "black", "color": "white"});
    $('p:first').css({"background-color": "green", "color": "white"});
    $('p:last').css({"background-color": "red", "color": "black"});
    $('#khazix').bind('click', alertButtonClick);
    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    $('#lastIsFirst').bind('click', lastIsFirst);
    $('#addBefore').bind('click', addBefore);
    $('#addAfter').bind('click', addAfter);
    $('#addToTxetBox').bind('click', addToTxetBox);
});

function alertButtonClick() {
    alert("why would you click that button");
}

function replaceWHtml() {
    $('h3Tag').html('<h6>Now i\'m an h6<h6>');
}

function replaceWText() {
    $('h3Tag').text('<h6>Now i\'m an h6<h6>');
}

function addAPara() {
    $('#randPara').append('<p>another paragraph</p>');
}

function removeAPara() {
    $('#randPara p:last').remove();
}

function lastIsFirst() {
    $('#randPara p:last').append($('#randPara p:first'));
}

function addBefore() {
    $('#randPara p:first').before('i go before anything');
}

function addAfter() {
    $('#randPara p:last').after('i go after anything');
}

function addToTextBox() {
    $('#randText').val('Random text');
}