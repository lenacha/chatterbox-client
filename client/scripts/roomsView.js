var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(name) {

    this.$select.append($(`<div>${name}</div>`));
  }

};
