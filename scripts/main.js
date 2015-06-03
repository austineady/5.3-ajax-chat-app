(function(){
  'use strict';

  var username = '';
  var date = moment().fromNow();
  var content = $('.typemessage').val();
  var userList = [];

  $(document).ready(function(){

    route();

    $(document).on('submit', '.login-form', function(event) {
      event.preventDefault();
      username = ($(this).find('.login-form-username').val());
      //prevent default behavior of this event which is to refresh page.
      window.location.hash = '/chat';
    });

    $(window).on('hashchange', function(event) {
      event.preventDefault();
      route();
    });
    // $('body').prepend(JST['application']());
  });

  function route() {
    switch(window.location.hash) {
      case '':
      $('.application').html(JST['login']());
        break;
      case '#/chat':
        renderChat();
        $('.chatlist').append(JST['chatnames']({
          usernamelist: username
        }));
        break;
    }
  }

  function renderChat() {
    $('.application').html(JST['chat']());
    console.log('username:', username);
  }

  $(document).on('submit', '.createmessage', function(event) {
    event.preventDefault();
    var content = $('.typemessage').val();
    var message = new Message(content);
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
      type: "POST",
      data: message,
    });
    $('.typemessage').val('');
    getMessages();
  });

  function filterMessages() {
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
    }).then(function(message) {
      var invalid = _.reject(message, function(message) {
        return message.hasOwnProperty('username')
        && message.hasOwnProperty('created_at')
        && message.hasOwnProperty('content')
      }).forEach(function(messages) {
        $.ajax({
          url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/" + message._id,
          type: "DELETE"
        });
      });
    });
  }

  function getMessages() {
    filterMessages();
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
    }).then(function(message) {
      $('.messageboard').html('');
      message.forEach(function(message) {
        var usernames = message.username;
        if(_.contains(userList, usernames) !== true) {
          userList.push(usernames);
          placeUsers(message);
        }
        $('.messageboard').append(JST['message'](message));
      });
    });
  }

  Handlebars.registerHelper('moment', function(date) {
    var result = moment(date).fromNow();
    return new Handlebars.SafeString(result);
  });

  function placeUsers(message) {
    $('.chatlist').append(JST['chatnames'](message));
  }

  function Message(content) {
    this.username = username;
    this.created_at = date;
    this.content = content;
  }

  window.setInterval(getMessages, 1000);




})();
