// these are all the functions that are in this project
$("document").ready(function(){
    $(".one").css("background-color", "blue");
    $(".two").css("background-color", "yellow");
    $(".three").css("background-color", "red");
    $(".test").css("background-color", "grey");
    $('a').css({"background-color": "black", "color": "white"});
    $('p:first').css({"background-color": "green", "color": "white"});
    $('p:nth-child(3)').css({"background-color": "red", "color": "black"});
    $('#khazix').bind('click', alertButtonClick);
    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    $('#lastIsFirst').bind('click', lastIsFirst);
    $('#addBefore').bind('click', addBefore);
    $('#addAfter').bind('click', addAfter);
    $('#addToTxetBox').bind('click', addToTextBox);
    $('#hideLogo').bind('click', hideTheImage);
    $('#showLogo').bind('click', showTheImage);
    $('#dubstep').accordion({header: "h3"});
});

//if a button with this function is click a alert will show
function alertButtonClick() {
    alert("this button has been pushed");
}

function replaceWHtml() {
    $('h3Tag').html('<h6>Now i\'m an h6<h6>');
}

function replaceWText() {
    $('h3Tag').text('<h6>Now i\'m an h6<h6>');
}

//this adds a paragraph whenever a line of code with this function is click
function addAPara() {
    $('#randPara').append('<p>i said not to click the red now</p>');
}

//this removes the paragraph that was made with the function above
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

//this hides whatever is under the code with this function on it
function hideTheImage() {
    $('#Logo').hide('puff', {}, 2500);
}

//this brings back what has been hidden by the last function
function showTheImage() {
    $('#Logo').show('puff', {}, 2500);
}