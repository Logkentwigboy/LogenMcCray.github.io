const TownData =  [
 
    {
    name: "Preston",
    photo: "https://southwestdesertlover.files.wordpress.com/2012/08/preston-idaho-land.jpg?w=480&h=257",
    motto: "Home of Napoleon Dynamite",
    yearFounded: "Year Founded: 1866",
    currentPopulation: "Current population: 52054",
    averageRainfall: " Average rain fall: 16.65",
    events:"Dates and Events Below",
    April:"March 29: Work Creek Revival",
    May: "July 8-12: Napoleon Dynamite Festival",
    July:"November 2-4: Freedom Days",
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
    </div>
    `
}).join('')}
`