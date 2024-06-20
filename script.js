$(function(){
    $("#mode-btn").click(function(){
        $("body").toggleClass("dark");
    })

    $("#signin-btn").click(function(){
            console.log("working")
            let pass = $("#signin-pass").val();
            if(pass == ""){
                alert("Please enter your password");
            }
    })


    $(window).scroll(function(){
        let a = $(window).scrollTop();
        console.log(a);
        if(a>550){
            $("#nav-bar").css("background","black");
        }else{
            $("#nav-bar").css("background","rgba(0,0,0,0.5)");
        }
    })
})



