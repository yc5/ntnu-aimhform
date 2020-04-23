$("#checkbox2").click(function () {
  if (confirm("您選擇不同意，按下確定後將會立即返回首頁。")) {
    console.log("checkNO");
    var data = { usecheck: $("#checkbox2").val() };
    $.ajax({
      url: "/AIMHcreate/CreateData", //後端的URL
      type: "POST", //用POST的方式
      dataType: "json", //response的資料格式
      cache: false, //是否暫存
      async: false,
      data: data, //傳送給後端的資料
      success: function (response) {
        console.log(response); //成功後回傳的資料
      },
    });
    location.href = "/AIMHtestIndex";
  } else {
    var usecheck = document.getElementsByName("usecheck");
    usecheck[0].checked = false;
    usecheck[1].checked = false;
    return false;
  }
});
