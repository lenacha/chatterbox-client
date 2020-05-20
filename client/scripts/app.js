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

  },

  fetch: function(callback = ()=>{}) { 
    App.clear();
    Parse.readAll((data) => {
      // examine the response from the server request:
      let items = data.results;
      for(let i = 0; i < items.length; i++) {
        let item = items[i];
        if(item.username === undefined) {
          item.username = '';
        }
        if(item.text === undefined) {
          item.text = '';
        }
        if(item.roomname === undefined) {
          item.roomname = '';
        }
        Messages[item.objectId] = item;
        MessagesView.renderMessage(item);
        if(Rooms[item.roomname] === undefined) {
          Rooms[item.roomname] = item.roomname;
          RoomsView.renderRoom(item.roomname);
        }
      }
      callback();
    });
  },

  clear: function() {
    Messages = {};    
    MessagesView.clear();
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
