$(document).ready(function() {
  let $quest = $("#quest");
  let $characters = $("#characters");
  let $locations = $("#locations");
  let $resources = $("#resources");
  let $content = $("#content")

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

  for (var i = 0; i < characters.length; i++) {
    let $character = $("<h3>" + characters[i].name + "</h3>");
    $characters.append($character);
  }

  for (var i = 0; i < locations.length; i++) {
    let $location = $("<h3>" + locations[i].name + "</h3>");
    $locations.append($location);
  }

  for (var i = 0; i < resources.length; i++) {
    let $resource = $("<h3><a href='" + resources[i].link + "' target='_blank'>" + resources[i].name + "</a></h3>");
    $resources.append($resource);
  }
})
