let tabBtn = $(".tab-button");
let content = $(".tab-content");

for(let i=0; i<tabBtn.length; i++){
    tabBtn.eq(i).on("click", function(){
        tabBtn.removeClass("orange");
        tabBtn.eq(i).addClass("orange");
        content.removeClass("show");
        content.eq(i).addClass("show");
    })
}




// $(".tab-button")
//     .eq(0)
//     .on("click", function () {
//         $(".tab-button").eq(0).removeClass("orange");
//         $(".tab-button").eq(1).removeClass("orange");
//         $(".tab-button").eq(2).removeClass("orange");
//         $(".tab-content").eq(0).removeClass("show");
//         $(".tab-content").eq(1).removeClass("show");
//         $(".tab-content").eq(2).removeClass("show");

//         $(".tab-button").eq(0).addClass("orange");
//         $(".tab-content").eq(0).addClass("show");
//     });

// $(".tab-button")
//     .eq(1)
//     .on("click", function () {
//         $(".tab-button").eq(0).removeClass("orange");
//         $(".tab-button").eq(1).removeClass("orange");
//         $(".tab-button").eq(2).removeClass("orange");
//         $(".tab-content").eq(0).removeClass("show");
//         $(".tab-content").eq(1).removeClass("show");
//         $(".tab-content").eq(2).removeClass("show");

//         $(".tab-button").eq(1).addClass("orange");
//         $(".tab-content").eq(1).addClass("show");
//     });

// $(".tab-button")
//     .eq(2)
//     .on("click", function () {
//         $(".tab-button").eq(0).removeClass("orange");
//         $(".tab-button").eq(1).removeClass("orange");
//         $(".tab-button").eq(2).removeClass("orange");
//         $(".tab-content").eq(0).removeClass("show");
//         $(".tab-content").eq(1).removeClass("show");
//         $(".tab-content").eq(2).removeClass("show");

//         $(".tab-button").eq(2).addClass("orange");
//         $(".tab-content").eq(2).addClass("show");
//     });
