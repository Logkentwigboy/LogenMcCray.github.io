const TownData =  [
 
    {
    name: "Soda Spring",
    photo: "https://ap.rdcpix.com/458080631/228ea67c2623ecc555d97bdb8529fa78l-m0xd-w480_h480_q80.jpg",
    motto: "Historic Oregon Trail Oasis. The Soda is on Us",
    yearFounded: "Year Founded: 1858",
    currentPopulation: "Current population: 2985",
    averageRainfall: " Average rain fall: 16.75",
    events:"Dates and Events Below",
    April:"Feburary 29: Geyser Song Day",
    May: "May 1-6: Days of May Celebration",
    July:"October 15-16: Octoberfest",
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