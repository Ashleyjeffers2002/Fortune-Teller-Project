$("button").click(function(){
  var name = $(".nameInput").val();
    $(".purple").text("Hi Nice To Meet You, " + name);
});
$("button").click(function(){
 var water = $(".juiceinput").val();
 parseInt(water);
 var gallons = (water*7)/8;
    $("#blue").text("In a week, you will drink " + gallons + " gallons of water");
});
$("button").click(function(){
var hours = $("Sleepinput").val();
var sleep= (hours*7)/8;
$("#pink").text("In Five Days You will get " + hours + " hours of sleep ");
});
$("button").click(function(){
    var age =$("Jumpinput").val();
    $("#grey").text("In 10 years you will be " + age );
});