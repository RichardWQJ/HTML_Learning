/* 1.不需要网页跳转，可分页显示内容的JS部分 */
// 定义按钮函数
$('.menu-btn').click(function () {

    // 获取按钮名字
    var pageName = $(this).attr('value');
    // 获取按钮类名
    var pageClass = '.' + pageName + 'Page';
    // 背景跳转
    $('.menu-btn').css('background', '');

    // 非按钮对应页面隐藏
    $('.page').css('display', 'none');

    // 按钮对应页面显示
    $(pageClass).css('display', 'block');
})

/* 2.导航栏展开/折叠功能 */
function initTree(t) {
    var tree = document.getElementById(t);//生成树
    tree.style.display = "none";//设置样式为隐藏形式，不显示
    var lis = tree.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {  //取出主要的导航栏
        lis[i].id = "li" + i;
        var uls = lis[i].getElementsByTagName("ul"); //子导航栏
        if (uls.length != 0) {
            uls[0].id = "ul" + i;
            uls[0].style.display = "none";
            var as = lis[i].getElementsByTagName("a"); //子导航栏的内容
            as[0].id = "a" + i;
            as[0].className = "folder";
            as[0].href = "#this";
            as[0].tget = uls[0];
            as[0].onclick = function () {
                openTag(this, this.tget);
            }
        }
    }
    tree.style.display = "block";
}
function openTag(a, t) {
    if (t.style.display == "block") { //点击一些展开，再点击一下折叠
        t.style.display = "none";
        a.className = "folder";
    } else {
        t.style.display = "block";
        a.className = "";
    }
}
window.onload = function () {
    initTree("globalNav");
}