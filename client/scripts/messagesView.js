var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(MessageView.render);
  },

  renderMessage: function (message) {
    var result = MessageView.render(message);
    this.$chats.append(result);
    console.log(Messages.data);
  }



  // render: _.template(`
  //     <!--
  //     <div class="chat">
  //       <div class="username"></div>
  //       <div></div>
  //     </div>
  //     -->
  //   `)
};