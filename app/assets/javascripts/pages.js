App.room = App.cable.subscriptions.create("WebNotificationsChannel", {
  received: function(data) {
    var messages, textNode;
    messages = document.getElementById("messages");
    if (messages.firstChild) {
      messages.removeChild(messages.firstChild)
    }
    paragraph = document.createElement("p");
    span = document.createElement("span");
    cursor = document.createTextNode("_")
    span.appendChild(cursor);
    textNode = document.createTextNode(data["message"]);
    paragraph.appendChild(textNode);
    paragraph.appendChild(span);
    return messages.appendChild(paragraph);
  }
});
