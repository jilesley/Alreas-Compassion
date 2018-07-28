$(document).ready(function() {
  let $quest = $("#quest .list");
  let $characters = $("#characters .list");
  let $locations = $("#locations .list");
  let $resources = $("#resources .list");
  let $content = $("#content");

  // Create Menu lists with data attached

  //Quest logs
  for (var i = 0; i < quest.length; i++) {
    let $log = $("<h3>" + quest[i].name + "</h3>");
    $log.data("content", quest[i].content);
    $log.data("date", quest[i].date);
    $log.data("party", quest[i].party);
    $log.data("location", quest[i].location);
    $log.click(function() {
      $content.html("<h4><strong>Session Date:</strong> " + $(this).data("date") + "</h4>" +
                    "<h4><strong>Party Members:</strong> " + $(this).data("party").join(", ") + "</h4>" +
                    "<h4><strong>Starting Location:</strong> " + $(this).data("location") + "</h4>" +
                    $(this).data("content")
      );
    });
    $quest.append($log);
  }

  //Characters
  let $charPlayer = $("#charPlayer");
  let $charNPC = $("#charNPC");
  for (var i = 0; i < characters.player.length; i++) {
    let $character = $("<h3>" + characters.player[i].name + "</h3>");
    $character.data("summary",
                    "<div class='summary'>" +
                      "<h2 class='title'>" + characters.player[i].name + "</h2>" +
                        "<div class='details'>" +
                        "<img src='" + characters.player[i].img + "' />" +
                        "<div>" +
                          "<h4><strong>Player:</strong> " + characters.player[i].player + "</h4>" +
                          "<h4>Level " +
                            characters.player[i].level + " | " +
                            characters.player[i].race + " | " +
                            characters.player[i].class +
                          "</h4>" +
                        "</div>" +
                      "</div>" +
                    "</div>"
    );
    $character.data("content", characters.player[i].content);
    $character.click(function() {
      $content.html($(this).data("summary") + $(this).data("content"));
    })
    $charPlayer.append($character);
  }
  for (var i = 0; i < characters.npc.length; i++) {
    let $character = $("<h3>" + characters.npc[i].name + "</h3>");
    $charNPC.append($character);
  }

  //Locations
  for (var i = 0; i < locations.length; i++) {
    let $location = $("<h3>" + locations[i].name + "</h3>");
    $locations.append($location);
  }

  //Resources
  for (var i = 0; i < resources.length; i++) {
    let $resource = $("<h3><a href='" + resources[i].link + "' target='_blank'>" + resources[i].name + "</a></h3>");
    $resources.append($resource);
  }

  // Give Menu catagories dropdown functionality

  $("#menu h2").click(function() {
    $list = $(this).parent().children(".list");
    if ($list.css("display") === "none") {
      $list.slideDown(400);
    } else {
      $list.slideUp(400);
    }
  });
})
