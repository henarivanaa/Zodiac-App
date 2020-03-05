
const server = 'http://localhost:3000'

// login and register show-hide

$(document).ready(function () {
  $("#login").show()
  $("#register").hide()
  $('#pageZodiak').hide()

  $("#toRegister").on('click', function () {
    $("#login").hide()
    $("#register").show()
  })

  $('#toLogin').on('click', function () {
    $("#login").show()
    $("#register").hide()
  })

  $('#login').on('submit', function () {
    loginUser()
  })

  // to login action
  $("#loginAction").on('submit', function (event) {
    event.preventDefault()
    let emailLogin = $('#emailLogin').val()
    let passwordLogin = $('#passwordlogin').val()
    loginUser(emailLogin, passwordLogin)
  })

  // to register action
  $("#registerAction").on('submit', function (event) {
    event.preventDefault()
    let usernameRegister = $('#usernameRegister').val()
    let emailRegister = $('#emailRegister').val()
    let passwordRegister = $('#passwordRegister').val()
    registerUser(usernameRegister, emailRegister, passwordRegister)
  })

});


function loginUser(email, password) {
  $.ajax({
    method: 'POST',
    url: `${server}/users/login`,
    data: {
      email: email,
      password: password
    }
  })
    .done(data => {
      localStorage.setItem('token', data)
      $('#pageZodiak').show()
      $("#login").hide()
    })
    .fail(err => {
      console.log(err.responseJSON)
    })
}

function registerUser(username, email, password) {
  $.ajax({
    method: "POST",
    url: `${server}/users/register`,
    data: {
      username: username,
      email: email,
      password: password
    }
  })
    .done(data => {
      localStorage.setItem('token', data)
      $('#pageZodiak').show()
      $("#register").hide()
    })
    .fail(err => {
      console.log(err.responseJSON)
    })
}

function onSignIn(googleUser) {

  var id_token = googleUser.getAuthResponse().id_token;

  $.ajax({
    method: "POST",
    url: `${server}/users/googleSignIn`,
    data: {
      token: id_token
    }
  })
    .done(data => {
      localStorage.setItem('token', data)
      $('#pageZodiak').show()
      $("#login").hide()
    })
    .fail(err => {
      console.log(err.responseJSON)
    })
}