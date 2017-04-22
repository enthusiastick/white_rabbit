App.room = App.cable.subscriptions.create("WebNotificationsChannel", {
  received: function(data) {
    var messages, textNode;
    messages = document.getElementById("messages");
    if (messages.firstChild) {
      messages.removeChild(messages.firstChild)
    }
    textNode = document.createTextNode(data["message"]);
    return messages.appendChild(textNode);
  }
});
