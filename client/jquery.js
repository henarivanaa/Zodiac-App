let $headerTitle = $('#zodiac-header')
let $headerDate = $('#zodiac-date-header')
let $physical = $('#physical')
let $mental = $('#mental')
let $compatible = $('#compatible')
let $hate = $('#hate')
let $favorites = $('#favorites')
let $famousPeople = $('#famous-people')




const showZodiac = zodiac => {
    $headerTitle.append(`<h1>${zodiac.name}</h1>`)
    let startDate = zodiac.sun_dates[0].split(' ')[1]
    let startMonth = zodiac.sun_dates[0].split(' ')[0]
    let endDate = zodiac.sun_dates[1].split(' ')[1]
    let endMonth = zodiac.sun_dates[1].split(' ')[0]
    $headerDate.append(`<h3>${startDate} ${startMonth} - ${endDate} ${endMonth}</h3>`)
    // physical traits
    zodiac.physical_traits.forEach(element => {
        $physical.prepend(`<li>${element}</li>`)
    })
    // mental traits
    zodiac.mental_traits.forEach(element => {
        $mental.prepend(`<li>${element}</li>`)
    })
    // compatibility
    zodiac.compatibility.forEach(element => {
        $compatible.prepend(`<li>${element}</li>`)
    })
    // hates
    zodiac.hates.forEach(element => {
        $hate.prepend(`<li>${element}</li>`)
    })
    // favorites
    zodiac.favorites.forEach(element => {
        $favorites.prepend(`<li>${element}</li>`)
    })
    // famous people
    zodiac.famous_people.forEach(element => {
        $famousPeople.prepend(`<li>${element}</li>`)
    })
}

