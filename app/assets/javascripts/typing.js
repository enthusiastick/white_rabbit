App.room = App.cable.subscriptions.create("WebNotificationsChannel", {
  received: function(data) {
    var messagesDiv, messageElement, textNode;
    messagesDiv = document.getElementById("messages");
    if (messagesDiv.firstChild && data.clear) {
      while (messagesDiv.firstChild) {
      messagesDiv.removeChild(messagesDiv.firstChild);
      }
    } else {
      var messagesDivChildren = messagesDiv.children;
      for (var i = 0, length = messagesDivChildren.length; i < length; i++) {
        messagesDivChildren[i].classList.remove("cursor");
      }
    }
    messageElement = document.createElement("h2");
    messageElement.classList.add("cursor");
    messageElement.classList.add("text-center");
    textNode = document.createTextNode(data.message);
    messageElement.appendChild(textNode);
    return messagesDiv.appendChild(messageElement);
  }
});
