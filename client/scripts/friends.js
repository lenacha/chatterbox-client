var Friends = {
  friendsList: {},
  toggleStatus: function(){
    $('#chats').on('click', '.username', function(e){
      // e.target.toggleClass('friends');
      Friends.friendsList[$(this)['0'].innerText] = $(this)['0'].innerText;
      console.log(e);
    });
  }


};