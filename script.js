$(".mini-img").click(function(){
    var selectedImg = this.dataset.img;
    $(".mini-img").each(function(){
        $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $(".car-img").each(function(){
        if(this.dataset.img == selectedImg){
            $(this).css("display","block");
        }
        else{
            $(this).css("display","none");
        }
    });
});
$(".mini-img")[0].click();