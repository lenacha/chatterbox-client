var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    Friends.toggleStatus();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.data = data.results;
      console.log(data.results);
      callback();
      
      for (let i = 0; i < Messages.data.length; i++) {
        var message = Messages.data[i]; 
        if (message.username === undefined) {
          message.username = "";
        }
        if (message.text === undefined) {
          message.text = "";
        }
        if (message.roomname === undefined) {
          message.roomname = "";
        }
        if(!Rooms.roomList.includes(message.roomname)){
          Rooms.roomList.push(message.roomname);
          RoomsView.renderRoom(message.roomname);
          Rooms.storage[message.roomname] = [];
        }
        Rooms.storage[message.roomname].push(message);
        MessagesView.renderMessage(message);
        
      }
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
