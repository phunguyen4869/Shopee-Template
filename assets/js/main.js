$('.cart-icon').hover(function () {
    $('.cart_list').css('display', 'flex');
    $('.cart_list').hover(function () {
        $('.cart_list').css('display', 'flex');
    }, function () {
        $('.cart_list').css('display', 'none');
    });
}, function () {
    $('.cart_list').css('display', 'none');
});
