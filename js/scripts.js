

$(document).ready(function() {
  $("form#list").submit(function() {
    event.preventDefault();

    var items = ["1","2","3","4","5"];
    var newarr = items.map(function(item) {
      var input = $("#input" + item).val();
      return input.toUpperCase();
    });
    var itemString = "";
    var result = newarr.sort();
    result.forEach(function(el) {
      itemString += "<ul><li>"+el+"</li></ul>"
    });
    $("#list").hide();
    $("#output").html(itemString);

  });
});
