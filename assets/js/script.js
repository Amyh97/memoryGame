var data = [
  {"name":"hippo", "icon":'<i class="fa-solid fa-hippo"></i>',"colour": '#ffff00'},
  {"name":"otter", "icon":'<i class="fa-solid fa-otter"></i>', "colour":'#33ccff'},
  {"name":"dragon", "icon":'<i class="fa-solid fa-dragon"></i>', "colour":'#ff0000'},
  {"name":"spider", "icon":'<i class="fa-solid fa-spider" style="color: #ffffff;"></i>', "colour":'#000000'},
  {"name":"horse", "icon":'<i class="fa-solid fa-horse"></i>', "colour":'#996633'},
  {"name":"shrimp", "icon":'<i class="fa-solid fa-shrimp"></i>', "colour":'#ff9999'},
  {"name":"fish", "icon":'<i class="fa-solid fa-fish" style="color: #ffffff;"></i>', "colour":'#0000ff'},
  {"name":"locust", "icon":'<i class="fa-solid fa-locust"></i>', "colour":'#00ff00'},
  {"name":"frog", "icon":'<i class="fa-solid fa-frog"></i>', "colour":'#669900'},
  {"name":"dog", "icon":'<i class="fa-solid fa-dog"></i>', "colour":'#ff66ff'},
  {"name":"kiwi", "icon":'<i class="fa-solid fa-kiwi-bird"></i>', "colour":'#669999'},
  {"name":"cat", "icon":'<i class="fa-solid fa-cat"></i>', "colour":'#9933ff'},
]

function RenderCards(x) {
  $(".option").addClass("disabled");
  $(".reset").removeClass("hidden");
  var dataOpt = data.slice(0, x)
  var pairdData = dataOpt.concat(dataOpt);
  function shuffle(pairdData) {
    pairdData.sort(() => Math.random() - 0.5);
    return pairdData
  }
  let template = ''
  for(const {name, icon, colour} of shuffle(pairdData)) {
      template += '' +
      '<div class="col-2 py-4 ps-5">' +
        '<div class="card ' + name + ' covered" cardName="' + name + '" style="background-color:'+colour +'; width:150px; height:150px;">'+
          '<h1 class="text-center my-auto">'+
            icon +
          '</h1>' +
        '</div>' +
      '</div>';
  }
  $("#cards").append(template);

  var toCheck = []
  $(".card").on("click", function() {
    if($(this).hasClass("covered")){
      $(this).removeClass("covered")
      console.log($(this))
      if (toCheck.length < 2) {
        toCheck.push($(this).attr("cardName"))
      } 
    }  

      if(toCheck.length == 2) {
        checkMatch(toCheck[0], toCheck[1])
        toCheck = []
      }
  })
}

function reset() {
  $("#cards").empty();
  $(".option").removeClass("disabled");

}

function checkMatch(item1, item2) {
  if(item1 == item2){
    $("."+item1).parents(".col-2").empty()
  } else {
    $("."+item1).addClass("covered");
    $("."+item2).addClass("covered");
    console.log("no match");
  }
}

