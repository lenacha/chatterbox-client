var FormView = {
  $form: $("form"),

  initialize: function () {
    this.$form.on("submit", FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      username: App.username,
      text: $("#message").val(),
      roomname: $("#rooms select").val(),
    };

    Parse.create(message, App.fetch);
  },

  setStatus: function (active) {
    var status = active ? "true" : null;
    FormView.$form.find("input[type=submit]").attr("disabled", status);
  },
};
