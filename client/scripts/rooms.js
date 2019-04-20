var Rooms = {
  roomList: [],
  storage: {},
  add: function() {
    $('#chats').empty();
    if(this.storage[$('#rooms select')] !== undefined){
      for(var i = 0 ; i < this.storage[$('#rooms select')['0'].value].length; i++) {
        MessagesView.renderMessage(this.storage[$('#rooms select')['0'].value][i]);
      }
    }
  }
};