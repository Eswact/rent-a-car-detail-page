$(".mini-img").click(function () {
    var selectedImg = this.dataset.img;
    $(".mini-img").each(function () {
        $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $(".car-img").each(function () {
        if (this.dataset.img == selectedImg) {
            $(this).css("display", "block");
        }
        else {
            $(this).css("display", "none");
        }
    });
});
$(".mini-img")[0].click();
$(".img-next").click(function () {
    var visible = $(".car-img:visible").data("img");
    if (visible == 4) {
        var newVisible = 1
    }
    else {
        var newVisible = ++visible;
    }
    $(".mini-img[data-img=" + newVisible + "]").click();
});
$(".img-back").click(function () {
    var visible = $(".car-img:visible").data("img");
    if (visible == 1) {
        var newVisible = 4
    }
    else {
        var newVisible = --visible;
    }
    $(".mini-img[data-img=" + newVisible + "]").click();
});