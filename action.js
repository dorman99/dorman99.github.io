$("#cities").click(function () {
    $("#div1").fadeIn("slow");
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn("slow");
    $("#city").html("there you go!")
});

$("#cities.button").click(function(){
    $(".own").slideUp("fast")
    $(".own2").slideUp("fast")
    $(".own3").slideUp("fast")
})
$("#iffa").click(function(){
    $("#lorem p").html('Flag football is a version of American football where the basic rules of the game are similar to those of the mainstream game (often called "tackle football" for contrast), but instead of tackling players to the ground, the defensive team must remove a flag or flag belt from the ball carrier ("deflagging") to end a down, and contact is not permitted between players which will result in a penalty for the team that initiates it.')
})
$("#div1").click(function(){
    $(".own").slideDown("slow");
})

$("#div2").click(function () {
    $(".own2").slideDown("slow")
})

$("#div3").click(function () {
    $(".own3").slideDown("slow")
})

$(".show-picture").click(function(){
    $(".pictures").fadeIn('slow')
})