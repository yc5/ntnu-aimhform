$(document).ready(function(e){
    $(".card-box").addClass("normal-box");
    $("form").parsley();
});

// pasrsley

// $("form").parsley().on('field:validated', function() {
//   // var ok = $('.parsley-error').length === 0;
//   // $('.bs-callout-info').toggleClass('hidden', !ok);
//   // $('.bs-callout-warning').toggleClass('hidden', ok);
//   console.log("Nice");
  
// })
// .on('form:submit', function() {
//   return false; // Don't submit form for this demo
// });


$(window).click(function () {
  //驗正年齡
  var birth = new Date($("#birthday").val());

  if (birth) {
    var calyear = 1000 * 60 * 60 * 24 * 365;
    var calnow = new Date();
    var calbirthday = new Date(birth);
    var age = parseInt((calnow - calbirthday) / calyear);
    console.log(age);
    if (age < 15) {
      alert("生日資料不正確，請重新輸入!");
      $("#birthday").val("");
    }
  }

  //學制
  var school = document.getElementsByName("school");
  var schoth = document.getElementsByName("schoth");
  if (school[5].checked) {
    $("#schoth").attr("required", "required");
    // console.log(schoth[0].required);
    //console.log(schoth[0].value);
  } else {
    $("#schoth").removeAttr("required");
    schoth[0].value = null;
    //console.log(schoth[0].required);
    //console.log(schoth[0].value);
  }
  //入學方式
  var OnSchool = document.getElementsByName("OnSchool");
  if (OnSchool[8].checked) {
    $("#onsoth").attr("required", "required");
  } else {
    $("#onsoth").removeAttr("required");
    $("#onsoth").val(null);
  }
  //身分別
  var Identity = document.getElementsByName("Identity");
  if (Identity[2].checked) {
    $("#ideoth1").attr("required", "required");
  } else {
    $("#ideoth1").removeAttr("required");
    $("#ideoth1").val(null);
  }
  if (Identity[3].checked) {
    $("#ideoth2").attr("required", "required");
  } else {
    $("#ideoth2").removeAttr("required");
    $("#ideoth2").val(null);
  }
  if (Identity[4].checked) {
    $("#ideoth3").attr("required", "required");
  } else {
    $("#ideoth3").removeAttr("required");
    $("#ideoth3").val(null);
  }
  if (Identity[5].checked) {
    $("#ideoth4").attr("required", "required");
  } else {
    $("#ideoth4").removeAttr("required");
    $("#ideoth4").val(null);
  }
  if (Identity[6].checked) {
    $("#ideoth5").attr("required", "required");
  } else {
    $("#ideoth5").removeAttr("required");
    $("#ideoth5").val(null);
  }

  //住宿狀況
  var live = document.getElementsByName("live");
  var live1 = document.getElementsByName("live1");
  var live2 = document.getElementsByName("live2");
  if (!live[1].checked) {
    live1[0].checked = false;
    live1[1].checked = false;
  }
  if (!live[2].checked) {
    live2[0].checked = false;
    live2[1].checked = false;
  }
  //child
  if (live[1].checked) {
    live1[0].required = true;
    live1[1].required = true;
    live1[0].parentElement.style.display = "block";
    live1[1].parentElement.style.display = "block";
  } else {
    live1[0].required = false;
    live1[1].required = false;
    live1[0].parentElement.style.display = "none";
    live1[1].parentElement.style.display = "none";
  }
  if (live[2].checked) {
    live2[0].required = true;
    live2[1].required = true;
    live2[0].parentElement.style.display = "block";
    live2[1].parentElement.style.display = "block";
  } else {
    live2[0].required = false;
    live2[1].required = false;
    live2[0].parentElement.style.display = "none";
    live2[1].parentElement.style.display = "none";
  }
  //text
  if (live[4].checked) {
    $("#textlive").attr("required", "required");
  } else {
    $("#textlive").removeAttr("required");
    $("#textlive").val(null);
  }

  //父母婚姻狀況
  var marriage = document.getElementsByName("marriage");
  //var marriage1 = document.getElementsByName('marriage1');
  //var marriage2 = document.getElementsByName('marriage2');
  //if (!marriage[0].checked) {
  //    marriage1[0].checked = false;
  //    marriage1[1].checked = false;
  //}
  //if (!marriage[1].checked) {
  //    marriage2[0].checked = false;
  //    marriage2[1].checked = false;
  //}
  ////child
  //if (marriage[0].checked) {
  //    marriage1[0].required = true;
  //    marriage1[1].required = true;

  //} else {
  //    marriage1[0].required = false;
  //    marriage1[1].required = false;
  //}
  //if (marriage[1].checked) {
  //    marriage2[0].required = true;
  //    marriage2[1].required = true;

  //} else {
  //    marriage2[0].required = false;
  //    marriage2[1].required = false;
  //}
  //text
  if (marriage[4].checked) {
    $("#maroth").attr("required", "required");
  } else {
    $("#maroth").removeAttr("required");
    $("#maroth").val(null);
  }
  //父親國籍
  //var country = document.getElementsByName('country');
  //if (country[1].checked)
  //    {
  //    $("#couoth").attr("required", "required");
  //} else {
  //    $("#couoth").removeAttr("required");
  //    $("#couoth").val(null);
  //}
  //母親國籍
  //var country1 = document.getElementsByName('country1');
  //if (country1[1].checked) {
  //    $("#couoth1").attr("required", "required");
  //} else {
  //    $("#couoth1").removeAttr("required");
  //    $("#couoth1").val(null);
  //}
  //money
  //var money = document.getElementsByName('money');
  //if (money[5].checked) {
  //    $("#moneyoth").attr("required", "required");
  //} else {
  //    $("#moneyoth").removeAttr("required");
  //    $("#moneyoth").val(null);
  //}

  //判斷班級字元數
  var classname = $("#classname").val();
  if (classname.length > 10) {
    alert("班級名稱限制10個字內!");
    $("#classname").val("");
  }
});

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
