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


$(window).click(function (e_window) {
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
  // var live = document.getElementsByName("live");
  // var live_useless = document.getElementsByName("useless");
  var live_inschool = document.getElementById("radio38");
  var live_notyet = document.getElementById("radio82");
  var live_other = document.getElementById("radio41");

  var live_outside = document.getElementById("radio39");
  var live_outside_a = document.getElementById("radio44");
  var live_outside_b = document.getElementById("radio45");
  var live_family = document.getElementById("radio40");
  var live_family_a = document.getElementById("radio42");
  var live_family_b = document.getElementById("radio43");


  // 有室友/獨居
  // var live1 = document.getElementsByName("live1");

  // 有家人同住/獨居
  // var live2 = document.getElementsByName("live2");
  
  
  function modifyLiveRequired() {
    if (live_outside_a.checked || live_outside_b.checked || live_family_a.checked || live_family_b.checked) {
      document.querySelectorAll(".live-inside-error").forEach(function(e) {
        e.classList.remove("show");
      })
    }else{
      document.querySelectorAll(".live-inside-error").forEach(function(e) {
        e.classList.add("show");
      })
    }

    // if((live[0].checked || live[5].checked || live[6].checked)&&(live_useless[0].checked||live_useless[1].checked)){
    // }

    // inside out
    // if((live_useless[0].checked&&!live[1].checked&&!live[2].checked)||(live_useless[1].checked&&!live[3].checked&&!live[4].checked)){
    //   live_useless[0].checked = false;
    //   live_useless[1].checked = false;

    // }
    
    // too many target
    // console.log(e_window.target);

    
    if(live_outside.checked || live_family.checked){
      live_outside_a.required = true;
      live_outside_b.required = true;
      live_family_a.required = true;
      live_family_b.required = true;
    }else{
      live_outside_a.required = false;
      live_outside_b.required = false;
      live_family_a.required = false;
      live_family_b.required = false;
    }
      //校外租賃
    if (live_outside.checked) {
      live_outside_a.parentElement.style.display = "block";
      live_outside_b.parentElement.style.display = "block";
      live_family_a.checked = false;
      live_family_b.checked = false;
      // live_outside.name = "";
      console.log("P1");
      
      // live[3].checked = false;
      // live[4].checked = false;
      
      // live[0].checked = false;
      // live[5].checked = false;
      // live[6].checked = false;
      
      // if(live_useless[0].checked||live[5].checked||live[6].checked){
        //   live_useless[0].checked = false;
        //   live_useless[1].checked = false;
        // }
        
      } else{
        live_outside_a.parentElement.style.display = "none";
        live_outside_b.parentElement.style.display = "none";
      }
      //父母家
      if (live_family.checked) {
        live_family_a.parentElement.style.display = "block";
        live_family_b.parentElement.style.display = "block";
        live_outside_a.checked = false;
        live_outside_b.checked = false;
        // live_family.name = "";
        // live[1].checked = false;
        // live[2].checked = false;
        
        // live[0].checked = false;
        // live[5].checked = false;
        // live[6].checked = false;
      } else{
        live_family_a.parentElement.style.display = "none";
        live_family_b.parentElement.style.display = "none";
    }
    
    //text
    if (live_other.checked) {
      $("#textlive").attr("required", "required");
    } else {
      $("#textlive").removeAttr("required");
      $("#textlive").val(null);
    }
  }
  document.querySelectorAll(".form-group-Quest-live input").forEach(function(e){
    e.addEventListener("click", function(event) {
      modifyLiveRequired();
      $('form').parsley().validate("live");        
      // setTimeout(function(){},500);
      
      // alert("OK");
    });
    
  });

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
