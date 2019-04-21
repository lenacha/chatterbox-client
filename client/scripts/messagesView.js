var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#rooms select').on("change", function(){
      $('#chats').empty();
      for(var i = 0 ; i < Rooms.storage[$('#rooms select')['0'].value].length; i++) {
        MessagesView.renderMessage(Rooms.storage[$('#rooms select')['0'].value][i]);
      }
    });
    $('#goback').click(function(){
      $('#chats').empty();
      App.initialize();
    });

  },

  renderMessage: function (message) {
    var result = MessageView.render(message);
    this.$chats.append(result);
    console.log(Messages.data);
  }
};