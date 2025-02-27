const TownData = [
    {
      name: "Fish haven",
      quote: "This is Fish Haven",
      year: "Year Founded: 1864",
      population: "501",
      rate: "Annual Rain Fall: 14.2",
      photo: "https://thafd.bing.com/th?id=OIP.ZTisYrzghl3dx7XGcgaGTQHaE_&w=282&h=190&c=7&o=5&pid=1.7"
    },
  
    {
        name: "Preston",
        quote: "Home of Napoleon Dynamite",
        year: "Year Founded: 1866",
        population: "5204",
        rate: "Annual Rain Fall: 16.65",
        photo: "https://thafd.bing.com/th?id=OIP.oQmBt9yz8h3yxAb1hrJk4QHaE8&w=285&h=190&c=7&o=5&pid=1.7"
      },    
      {
        name: "Soda Springs",
        quote: "Historic Oregon Trail Oasis. The Soda is on us",
        year: "Year Founded: 1858",
        population: "2985",
        rate: "Annual Rain Fall: 15.75",
        photo: "https://thafd.bing.com/th?id=OIP._hRfgh4CztNuDLgVk8RuLQHaFC&w=251&h=171&c=7&o=5&pid=1.7"
      }
    
  ];

document.getElementById("Town").innerHTML =
 `

${TownData.map(function(Town){
    return `
    <div class="info"> 
        <h5> ${Town.name}</h5>
        <p class="quoteInfo"><i>${Town.quote}</i></p>
        <p class="townInfo">${Town.year} </p>
        <p class="townInfo">${Town.population} </p>
        <img class="town-photo" src="${Town.photo}" >
    </div>
    `
}).join('')}
`