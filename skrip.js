$(document).ready( function() {

  $("button").click(function(){
    var rl = "http://api.giphy.com/v1/gifs/search?q=fail&limit=45&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: rl,
      type: "GET",
      dataType: "json"
    }).done(function(response){
        setInterval(function(){
        var apimgs = [];
        var i = Math.floor(Math.round(Math.random()*33))
        var test = response.data[i].images.original.url;
        apimgs.push(test);
        $("div").html("<img src="+apimgs[apimgs.length-1]+">");
      },3900)
    console.log(response)
    }).fail(function(response){
      console.log("You can't believe, that is why you fail")
    }).always(function(){
      console.log("this always happens")
    })
  });
});
