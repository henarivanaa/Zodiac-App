
const server = 'http://localhost:3000'

// login and register show-hide

$(document).ready(function () {
  $("#login").show()
  $("#register").hide()
  $('#pageZodiak').hide()
  $('#logout').hide()

  if (!localStorage.getItem('token')) {
    $("#login").show()
    $('#logout').hide()
  } else {
    $("#login").hide()

  }

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

  $('#logout').on('click', function (event) {
    logout()
    $('#login').show()
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
      $('#logout').show()
      Swal.fire({
        title: 'OK Halo!',
        text: 'selamat datang...anda sehat ?.',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpro2-bar-s3-cdn-cf6.myportfolio.com%2Fb113eecaadc1a69b43b38ec15f563c43%2F71d9ca62-6b8f-4fd4-8611-796da6c406bb_rw_1200.gif%3Fh%3De04b7ef76a59724f233aaa23f4ba5406&f=1&nofb=1',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    })
    .fail(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.responseJSON}`,
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-wKGCG6KvRak%2FTryN7tZW9MI%2FAAAAAAAALf4%2FaX_Bbx6vFJo%2Fs1600%2FSPN-supernatural-22294259-500-305.gif&f=1&nofb=1',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        // footer: '<a href>Why do I have this issue?</a>'
      })
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
      $("#register").hide()
      $('#pageZodiak').show()
      $("#login").hide()
      $('#logout').show()

      Swal.fire({
        title: 'Yay Selamat!',
        text: 'selamat datang...',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpresentationpanda.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fwhen-you-finally-figure-out-that-PowerPoint-issue-that-was-driving-you-crazy.gif&f=1&nofb=1',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })


    })
    .fail(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.responseJSON}`,
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-wKGCG6KvRak%2FTryN7tZW9MI%2FAAAAAAAALf4%2FaX_Bbx6vFJo%2Fs1600%2FSPN-supernatural-22294259-500-305.gif&f=1&nofb=1',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        // footer: '<a href>Why do I have this issue?</a>'
      })
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
      $('#logout').show()
      Swal.fire({
        title: 'Yay Selamat!',
        text: 'selamat datang...',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpresentationpanda.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fwhen-you-finally-figure-out-that-PowerPoint-issue-that-was-driving-you-crazy.gif&f=1&nofb=1',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    })
    .fail(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.responseJSON}`,
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-wKGCG6KvRak%2FTryN7tZW9MI%2FAAAAAAAALf4%2FaX_Bbx6vFJo%2Fs1600%2FSPN-supernatural-22294259-500-305.gif&f=1&nofb=1',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        // footer: '<a href>Why do I have this issue?</a>'
      })
      console.log(err.responseJSON)
    })
}





function logout() {
  Swal.fire({
    title: 'Sampai Ketemu lagi..!',
    text: 'hu.hu.hu',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FB8ody8egx8JkA%2F200.gif&f=1&nofb=1',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
  localStorage.clear()
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  })
  $('#pageZodiak').hide()
}

