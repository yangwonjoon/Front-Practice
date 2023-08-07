$(".list").click(function(e){
    tab(e.target.dataset.id);
})

// $(".list").click(function (e) {
//     if (e.target == document.querySelectorAll(".tab-button")[0]) {
//         tab(0);
//     }
//     if (e.target == document.querySelectorAll(".tab-button")[1]) {
//         tab(1);
//     }
//     if (e.target == document.querySelectorAll(".tab-button")[2]) {
//         tab(2);
//     }
// });

// for (let i = 0; i < tabBtn.length; i++) {
//     tabBtn.eq(i).on("click", function () {
//         tab(i);
//     });
// }

let tabBtn = $(".tab-button");
let content = $(".tab-content");

function tab(i) {
    tabBtn.removeClass("orange");
    tabBtn.eq(i).addClass("orange");
    content.removeClass("show");
    content.eq(i).addClass("show");
}
