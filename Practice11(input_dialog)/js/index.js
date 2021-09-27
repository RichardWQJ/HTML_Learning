window.onload = function () {
    var btn_1 = document.getElementById("btn_1"); //弹框输入 按钮
    var btn_2 = document.getElementById("btn_2"); //弹框提示 按钮
    var close = document.getElementsByClassName("close"); //弹框输入出来的用户登陆 关闭 按钮
    var close_1 = document.getElementsByClassName("close_1"); //弹框提示输入出来的 取消 按钮
    var dialog = document.getElementsByClassName("dialog"); //弹框提示对话框
    var form_1 = document.getElementsByClassName("form_1"); ////弹框输入 用户登陆 对话框
    btn_1.addEventListener('click', function () {
        form_1[0].className = "form_1 open";
    })
    close[0].addEventListener('click', function () {
        form_1[0].className = "form_1";
    })
    btn_2.addEventListener('click', function () {
        dialog[0].style.visibility = 'visible';
    })
    close_1[0].addEventListener('click', function () {
        dialog[0].style.visibility = 'hidden';
    })
}
