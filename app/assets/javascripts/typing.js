App.room = App.cable.subscriptions.create("WebNotificationsChannel", {
  received: function(data) {
    var messagesDiv, messageElement, textNode;
    messagesDiv = document.getElementById("messages");
    if (messagesDiv.firstChild) {
      messagesDiv.removeChild(messagesDiv.firstChild)
    }
    messageElement = document.createElement("h2");
    messageElement.classList.add("text-center");
    textNode = document.createTextNode(data["message"]);
    messageElement.appendChild(textNode);
    return messagesDiv.appendChild(messageElement);
  }
});
