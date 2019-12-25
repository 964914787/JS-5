function btn() {
    var nunber = document.getElementById("a").value;  //获取账号的值
    var password = document.getElementById("b").value;  //获取密码的值
    

    var xhr = new XMLHttpRequest();  //连接服务器 （打开和服务器的链接）
    xhr.open('post','carrots-admin-ajax/a/login/',true); // HTTP方法  连接地址   同步或异步
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
    xhr.send("name=" + nunber + "&pwd=" + password ); //发送数据

    xhr.onreadystatechange = function() {   //onreadystatechange指向一个监听函数
        if(xhr.readyState == 4 && xhr.status == 200) {  //成功时 状态为4
            var resdata = JSON.parse(xhr.readyState);
            console.log(xhr.readyState == 4 && xhr.status == 200)
            console.log(resdata);

            if(resdata.code === 0 ) {
                alert('成功啦')
            } else {
                alert('账号密码错误')
            }

        }

    }
}
