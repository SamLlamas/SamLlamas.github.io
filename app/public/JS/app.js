

$('.nav-link, .nav-logo').on('click', function (event) {
    event.preventDefault()
    var elem = $(this.hash)
    var offsetAmount = parseInt(elem.find(">:first-child").css('padding-top'), 10)
    if (offsetAmount === 0) {
        offsetAmount = parseInt(elem.css("padding-top"), 10)
    }
    console.log(elem, offsetAmount)
    $('html, body').animate(
        { scrollTop: (elem.offset().top - offsetAmount) },
        { duration: 1000, easing: 'swing' }
    );
});


const test = document.querySelector("#test");
const text = test.innerHTML.split("");
test.innerHTML = "";
let index = 0;
setTimeout(function(){
    const clearId = setInterval(() => {
        test.innerHTML = test.innerHTML + text[index];
        index++;
        if (index >= text.length) {
            clearInterval(clearId);
        }
    }, 150)
}, 500)
