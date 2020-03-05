// let $birthdateForm = $('#birthdate-form')
// let $birthdateInput = $('#birthdate-input')
// let $birthmonthInput = $('#birthmonth-input')

// $birthdateForm.on('submit', (e) => {
//     e.preventDefault()
//     let birthdate = $birthdateInput.val()
//     let birthmonth = $birthmonthInput.val()
//     addBirthdate(birthdate, birthmonth)
// })

// const addBirthdate = (birthdate, birthmonth) => {
//     $.ajax({
//         method: 'post',
//         url: 'http://localhost:3000/zodiacs',
//         data: {
//             "birthdate" : birthdate,
//             "birthmonth" : birthmonth
//         },
//         success: () => {
//             console.log('success')
//             $birthdateForm[0].reset()
//         }
//     })
// }

