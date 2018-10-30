/*var canvas = document.getElementById("drawLines");
     var context = canvas.getContext('2d')
     context.beginPath(); 
       context.moveTo(0,150);
       context.lineTo(70,150);
       context.lineTo(95,90);
        context.lineTo(120,150);
        context.lineTo(190,150);
        context.lineTo(135,190);
        context.lineTo(160,255);
        context.lineTo(95,215);
        context.lineTo(30,255);
        context.lineTo(55,185);
     context.closePath();
     context.stroke();
*/

$(document).ready(function(){
   $("#datepicker").datepicker({ monthNames:
      ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август",  
      "Сентябрь","Октябрь","Ноябрь","Декабрь"],
      dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]});



   $(".Fighting_the_mole_img").mouseover(function(){
     $(".Underground_boat_text").slideToggle(1000);
  });
  $(".Fighting_the_mole_img").mouseout(function(){
     $(".Underground_boat_text").slideToggle(1000);
  });



$(".palace_of_Soviets_img").mouseover(function(){
     $(".palace_of_Soviets_text").slideToggle(1000);
  });
  $(".palace_of_Soviets_img").mouseout(function(){
     $(".palace_of_Soviets_text").slideToggle(1000);
  });

});
//Функция к функции:
var K = function (Poisk) {
     var site = "Yandex";
     Poisk (site);
};

K (function(Z) {
     console.log ("Hello " + Z);
});

//Замыкание:
var temp = function(){

     var i = 10;
     return function (){
          return i++;
     }
}();
console.log(temp());
console.log(temp());
console.log(temp());
console.log(temp());


var temp1 = function(){
     console.log("сработал");
}
setTimeout(temp1, 2000);





var Func = function () {
     $(document).ready(function(){ 

  $(".block").css("display","block");
  });
};
setTimeout(Func, 5000);

