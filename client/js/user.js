import { loginUser } from "../../server/controllers/users";

// login and register show-hide

$(document).ready(function () {
  $("#login").show()
  $("#register").hide()

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

});

function loginUser(email, password) {

}

