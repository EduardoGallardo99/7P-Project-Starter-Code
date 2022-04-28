$("button").click(function(){
    let variable1= $(".1").val();
    let variable2= $(".2").val();
    let variable3= $(".3").val();
    
    
   let variable4= (variable3 * 1456);
   $(".fortune-display").append(                                          variable1+" you will listen "+ variable2 + variable4 + " hours by the year 2050."
                               );
        console.log(variable1,variable2,variable3);
});