$(".list").click(function (e) {
    tab(e.target.dataset.id);
})

let tabBtn = $(".tab-button");
let content = $(".tab-content");

function tab(i) {
    tabBtn.removeClass("orange");
    tabBtn.eq(i).addClass("orange");
    content.removeClass("show");
    content.eq(i).addClass("show");
}
