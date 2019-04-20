var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#rooms').on('click', 'button', function () {
      var newRoomName = prompt("Please enter new room name!");

      if (newRoomName !== null) {
        if(!Rooms.roomList.includes(newRoomName)){
          Rooms.roomList.push(newRoomName);
          RoomsView.renderRoom(newRoomName);
          Rooms.newRoomName = [];
          Rooms.add();     
        }

      }
    });
  },

  renderRoom: function(room) {
    var option = document.createElement("option");
    option.value = room;
    option.text = room;

    this.$select['0'].add(option);
  }

};


