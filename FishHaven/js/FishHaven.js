const TownData =  [
 
    {
    name: "Fish Haven",
    photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/ed/e4/fa/view-from-patio.jpg",
    motto: "This is Fish Haven",
    yearFounded: "Year Founded: 1864",
    currentPopulation: "Current population: 501",
    averageRainfall: " Average rain fall: 14.2",
    events:"Events: Nothing Currently",
    April:"April 1: How Big Was That Fish Day",
    May: "May 15-30: Rush the Creek Days",
    July:"July 24: Lake Blunder Run",
    December: "December 12: Light the Tree",
    }
];
    

document.getElementById("Town").innerHTML =
 `

${TownData.map(function(Town){
    return `
    <div class="info"> 
        <h5> ${Town.name}</h5>
        <img class="town-photo" src="${Town.photo}" >
        <p class="quoteInfo"><i>${Town.motto}</i></p>
        <p class="townInfo">${Town.yearFounded} </p>
        <p class="townInfo">${Town.currentPopulation} </p>
        <p class="townInfo">${Town.averageRainfall} </p>
        <p class="townInfo">${Town.events} </p>
        <p class="townInfo">${Town.April} </p>
        <p class="townInfo">${Town.May} </p>
        <p class="townInfo">${Town.July} </p>   
        <p class="townInfo">${Town.December} </p>        
    </div>
    `
}).join('')}
`