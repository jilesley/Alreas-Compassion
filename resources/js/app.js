$(document).ready(function() {
  let $quest = $("#quest .list");
  let $characters = $("#characters .list");
  let $locations = $("#locations .list");
  let $general = $("#general .list");
  let $resources = $("#resources .list");
  let $content = $("#content");
  let $hover = $("#hover");
  let $menu = $("#menu");
  let $menuButton = $("header img");


  // Set default and give title reset button
  const resetContent = function () {
    $content.html("<h1>Welcome to Alrea's Compassion!</h1>" +
                  "<p>Alrea's Compassion is a 5th edition campaign run by our glorious GM - Calum Gaffney.</p>" +
                  "<p>This world is your typical fantasy setting, but with a few twists. In this world, the beings of nature run rampant at night. Almost all villages, towns and cities live within some sort of wall – once a certain population level is reached, the Gods of Nature seems to want to reclaim the land as their own again. Only through at least a palisade can villages hide their presence from the natural forces, and only through large stone walls can towns and cities resist the attention they draw.</p>" +
                  "<br><p>If you would like to add anything to this site the best way is to add a file to <a class='underline italics' target='_blank' href='https://drive.google.com/drive/folders/1rTwWoohLyyS9a8iVUhIy5YnYK05zM4Ap?usp=sharing'>this Google drive folder</a>.</p>" +
                  "<p class='noPad'> - Though please tell me if you do!</p>" +
                  "<p>Oh and don't forget, anything that's added can be seen by everyone, so don't add character stuff that you don't want others to know about.</p>"
    );
  };

  resetContent();

  $("header h1").click(function() {resetContent()});

  // Kill counter stuff
  let killCount = 0;
  characters.player.forEach(function(player) {
    killCount += player.kills;
  });
  $(".killCount").append("<span>" + killCount + "</span>");


  // Create Menu lists with data attached

  // Summary hover function
  const summaryInteract = function($summary) {
    $summary.click(function() {
      $content.html($(this).data("summary") + $(this).data("content"));
      $('.zoom').zoom();
    });
    if ( $( document ).width() > 1000 && !navigator.userAgent.match(/iPad/i)) {
      $summary.mousemove(function(event) {
        xCoord = event.pageX;
        yCoord = event.pageY;
        $hover.html($(this).data("summary"));
        $hover.show();
        $hover.offset({ top: yCoord, left: xCoord + 20 });
      });
      $summary.mouseleave(function() {
        $hover.hide()
      });
    }
  };


  //Quest logs
  for (var i = 0; i < quest.length; i++) {
    let $log = $("<h3>" + quest[i].name + "</h3>");
    $log.data("content", quest[i].content);
    $log.data("summary",
              "<div class='summary'>" +
                "<h1>" + quest[i].name + "</h1>" +
                "<h4><strong>Session Date:</strong> " + quest[i].date + "</h4>" +
                "<h4><strong>Party Members:</strong> <span class='character'>" +
                  quest[i].party.join("</span>, <span class='character'>") +
                "</span></h4>" +
                "<h4><strong>Starting Location:</strong> " + quest[i].location + "</h4>" +
                "<h4><strong>Written by:</strong> " + quest[i].author + "</h4>" +
              "</div>"
    );
    summaryInteract($log);
    $quest.append($log);
  }


  // Characters
  let $charPlayer = $("#charPlayer");
  let $charNPC = $("#charNPC");

  // Player Characters
  for (var i = 0; i < characters.player.length; i++) {
    let $character = $("<h3>" + characters.player[i].name + "</h3>");
    $character.data("summary",
                    "<div class='summary'>" +
                      "<h1 class='title'>" + characters.player[i].name + "</h1>" +
                        "<div class='details'>" +
                        "<img src='" + characters.player[i].img + "' />" +
                        "<div>" +
                          "<h4><strong>Player:</strong> " + characters.player[i].player + "</h4>" +
                          "<h4>Level " +
                            characters.player[i].level + " | " +
                            characters.player[i].race + " | " +
                            characters.player[i].class +
                          "</h4>" +
                          "<h4><strong>Kill Count:</strong> " + characters.player[i].kills + "</h4>" +
                        "</div>" +
                      "</div>" +
                    "</div>"
    );
    $character.data("content", characters.player[i].content);
    summaryInteract($character);
    $charPlayer.append($character);
  }
  // Non Player Characters
  for (var i = 0; i < characters.npc.length; i++) {
    let $character = $("<h3>" + characters.npc[i].name + "</h3>");
    $character.data("summary",
                    "<div class='summary'>" +
                      "<h1 class='title'>" + characters.npc[i].name + "</h1>" +
                      "<div>" +
                        "<h4><strong>Race:</strong> " + characters.npc[i].race + "</h4>" +
                        "<h4><strong>Profession:</strong> " + characters.npc[i].profession + "</h4>" +
                      "</div>" +
                    "</div>"
    );
    $character.data("content", characters.npc[i].content);
    summaryInteract($character);
    $charNPC.append($character);
  }


  //Locations
  for (var i = 0; i < locations.length; i++) {
    let $location;
    if (locations[i].curLocation) {
      $location = $("<h3>" + locations[i].name + " (current location)</h3>");
    } else {
      $location = $("<h3>" + locations[i].name + "</h3>");
    }
    $location.data("name", locations[i].name);
    $location.data("content", locations[i].content);

    $location.click(function() {
      $content.html("<h1>" + $(this).data("name") + "</h1>" +
                    $(this).data("content") +
                    "<p class='heading'>Local Map</p>" +
                    "<div class='zoom'>" +
                      "<img src='resources/images/" + $(this).data("name") + ".jpg' alt='No Map Available'/>" +
                    "</div>"
      );
      $('.zoom').zoom();
    });

    $locations.append($location);
  }


  //General Information
  for (var i = 0; i < general.length; i++) {
    let $info = $("<h3>" + general[i].name + "</h3>");
    $info.data("name", general[i].name);
    $info.data("content", general[i].content);
    $info.click(function() {
      $content.html("<h1>" + $(this).data("name") + "</h1>" +
                    $(this).data("content")
      );
      $('.zoom').zoom();
    });
    $general.append($info);
  }


  //Resources
  for (var i = 0; i < resources.length; i++) {
    let $resource = $("<h3><a href='" + resources[i].link + "' target='_blank'>" + resources[i].name + "</a></h3>");
    $resources.append($resource);
  }


  $menuButton.click(function() {
    if ($menu.css("display") === "none") {
      $menu.show("slide");
    } else {
      $menu.hide("slide");
    }
  });


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
