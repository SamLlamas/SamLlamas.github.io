$('.nav-link, .nav-logo').on('click', function (event) {
    event.preventDefault()
    var elem = $(this.hash)
    var offsetAmount = parseInt(elem.find(">:first-child").css('padding-top'),10)
    if (offsetAmount === 0){
        offsetAmount = parseInt(elem.css("padding-top"),10)
    }
    console.log(elem, offsetAmount)
    $('html, body').animate(
        { scrollTop: (elem.offset().top - offsetAmount)},
        { duration: 1000, easing: 'swing' }
    );
});