window.onload = function () {
    //密码修改 按钮
    var btnModifyPasswd = document.getElementById("btn-modifyPasswd");

    //密码修改 对话框
    var modifyPasswdDialog = document.getElementsByClassName("modify-passwd-dialog");

    //密码修改 弹框出来 关闭按钮
    var dialogClose = document.getElementsByClassName("dialog-close-text");

    //对话框中的 取消 按钮
    var btnConfirmModify = document.getElementById("btn-modify-confirm");

    //对话框中的 取消 按钮
    var btnCancleModify = document.getElementById("btn-modify-cancle");

    btnModifyPasswd.addEventListener('click', function () {
        modifyPasswdDialog[0].className = "modify-passwd-dialog open";
    })

    dialogClose[0].addEventListener('click', function () {
        modifyPasswdDialog[0].className = "modify-passwd-dialog";
        resetInput();
    })

    btnConfirmModify.addEventListener('click', function () {
        modifyPasswdDialog[0].className = "modify-passwd-dialog";
    })

    btnCancleModify.addEventListener('click', function () {
        modifyPasswdDialog[0].className = "modify-passwd-dialog";
    })
}

function testIP(s) {
    var arr = s.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
    if (arr == null) return false;
    for (i = 1; i < arr.length; i++)if (String(Number(arr[i])) != arr[i] || Number(arr[i]) > 255) return false;
    return true;
}

function resetInput() {
    document.getElementById("old-password").value = "";
    document.getElementById("new-password").value = "";
}

function modifyPasswd() {
    var ipAddr = document.getElementById("old-password").value;
    var ipMask = document.getElementById("new-password").value;

    if (testIP(ipAddr)) {
        alert("IP地址正确");
    }
    else {
        alert("IP地址错误");
    }

    if (testIP(ipMask)) {
        alert("IP掩码正确");
    }
    else {
        alert("IP掩码错误");
    }

    resetInput();
}

function modifyCancle() {
    resetInput();
}