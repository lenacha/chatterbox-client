var MessagesView = {
  // $chats: $('#chats'),

  initialize: function () {
    this.$chats = $("#chats");
  },

  clear: function () {
    this.$chats.empty();
  },

  renderMessage: function (message) {
    message.username = message.username || "anonymous";
    message.roomname = message.roomname || "lobby";

    var html = MessageView.render(message);
    var $message = $(html);
    $message.find(".username").on("click", function (event) {
      Friends.toggleStatus(event.target.innerText);
    });
    this.$chats.append($message);
  },
};
