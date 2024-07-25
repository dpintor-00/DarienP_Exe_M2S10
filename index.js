$(document).ready(function(){

    $("#text1").mouseenter(function(){
        $("#text2").show();
    })

    $("#text1").mouseout(function(){
        $("#text2").hide();
    })

    $("#caja2").click(function(){
        $("#caja2").css("width", "100%");
    })

    $("#caja2").mouseout(function(){
        $("#caja2").css("width", "20%");
    })

    $("#caja3").dblclick(function(){
        $("#caja3").css("font-size", "xx-large");
    })

    $("#caja3").click(function(){
        $("#caja3").css("font-size", "");
    })
})