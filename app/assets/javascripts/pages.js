App.room = App.cable.subscriptions.create("WebNotificationsChannel", {
  received: function(data) {
    var textNode;
    textNode = document.createTextNode(data["message"]);
    return document.getElementById("messages").appendChild(textNode);
  }
});
