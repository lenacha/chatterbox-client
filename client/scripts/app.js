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
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.data = data.results;
      console.log(data.results);
      // var allData = Messages.data;
      // var text = '';
      // for (var i = 0; i < 20; i ++) {
      //   if (allData[i].roomname) {
      //     MessageView.render(allData[i])
      //   }
      // }
      // //console.log(text)
      // //$('#chats').append($('#message'))
      callback();
      
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
