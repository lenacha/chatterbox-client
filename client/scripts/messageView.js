var MessageView = {

  render: _.template(
    "<div class='#chats'>" +
    "<div class='username'>" + "<%= username %>" + "</div>" +
    "<div class='text'>" + "<%= text %>" + "</div>" +
  "</div>")
};