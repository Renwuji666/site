
function liclick(){
    $('.liItem').click(function(){
        $(this).addClass('cur').siblings().removeClass("cur")
    })
}
function pageClick(){
    $('.fy_span').click(function(){
        $(this).addClass('pageicon').siblings().removeClass("pageicon")
    })
}

