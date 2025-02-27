const SixTemples= [
    {
      // address, telephone, email, services, history, ordinance schedule, session schedule, temple closure schedule (from a JSON source), and summary—current weather information obtained from a third party//
      name: "Portland Temple",
      address: "<b>Address</b>: 13600 Kruse Oaks Blvd, Lake Oswego, OR 97035",
      service: "<b>Services</b>: Clothing rental, Cafeteria available, Patron housing, Distribution Center",
      schedule: "<b>Open</b>: 9:00am-9:00pm",
      session: "<b>Session Schdule</b><br> Baptism: 7:00am- 8:00pm <br> Initiaory: 7:00am- 8:30pm <br> Endowment: 2:00pm- 7:30pm <br> Sealing: 7:00am- 8:30pm",
      closed: "<b>Closures</b><br> -Tuesday, 24 December 2019 <br> -Wednesday, 25 December 2019 <br> -Tuesday, 31 December 2019 (Limited Hours) ",
      photo: "https://www.ldstemple.pics/wp-content/uploads/portland-temple-pastel-sunrise-300x300.jpg",
      Portlandsweather:"Current Weather"
    },
  
    {
        name: "Tokyo, Japan Temple",
        address: "<b>Address</b>: 5-8-10 Minami Azabo Minato-ku Tokyo",
      service: "<b>Services</b>: None",
      schedule: "<b>Closed</b>: During Renovation: ",
      session: "<b>Session Schdule</b><br> None",
      closed: "<b>Closures</b><br>Currently under renovation <br><br><br><br><br><br><br>",
        photo: "https://www.bing.com/th?id=OIP.4asUPQlh5yuJaJXS5XFXGQHaHa&pid=Api&rs=1",
        Tokyoweather:"Current Weather"
      },    

      {
        name: "Salt Lake, Temple",
        address: "<b>Address</b>:50 W Nother Temple St, Salt Lake City UT 84150-9709",
      service: "<b>Services</b>: Clothing rental, Cafeteria available, Patron housing, Distribution Center",
      schedule: "<b>Open</b>: 9:00am-9:00pm",
      session: "<b>Session Schdule</b><br> Baptism: 5:00am- 6:00pm <br> Initiaory: 6:00am- 8:00pm <br> Endowment: 3:00pm- 7:00pm <br> Sealing: 7:00am- 8:00pm",
      closed: "<b>Closures</b><br> -Tuesday, 24 December 2019 <br> -Wednesday, 25 December 2019 <br> -Tuesday, 31 December 2019",
        photo: "https://www.ldstemple.pics/wp-content/uploads/salt-lake-temple-golden-sunset-300x300.jpg"
      },

      {
        name: "Las Vegas, Temple",
        address: "<b>Address</b>: 827 Temple View Dr Las Vegas NV 89110-2920",
      service: "<b>Services</b>: Clothing rental, Cafeteria available, Patron housing, Distribution Center",
      schedule: "<b>Open</b>: 9:00am-9:00pm",
      session: "<b>Session Schdule</b><br> Baptism: 7:30am- 3:00pm <br> Initiaory: 7:00am- 8:00pm <br> Endowment: 2:30pm- 7:30pm <br> Sealing: 8:00am- 8:00pm ",
      closed: "<b>Closures</b><br> -Tuesday, 24 December 2019 <br> -Wednesday, 25 December 2019 <br> -Tuesday, 31 December 2019 ",
        photo: "https://www.ldstemple.pics/wp-content/uploads/reno-temple-flowers-300x300.jpg"
      },
      {
        name: "New York, Temple",
        address: "<b>Address</b>: 125 Columbus Ave, Fourth Floor, New York NY 10023-6514",
      service: "<b>Services</b>: Clothing rental, Cafeteria available, Patron housing, Distribution Center",
      schedule: "<b>Open</b>: 9:00am-9:00pm",
      session: "<b>Session Schdule</b><br> Baptism: 6:30am- 8:00pm <br> Initiaory: 10:45am- 8:45pm <br> Endowment: 5:30pm- 8:30pm <br> Sealing: 4:00pm- 9:00pm",
      closed: "<b>Closures</b><br> -Tuesday, 24 December 2019 <br> -Wednesday, 25 December 2019 <br> -Tuesday, 31 December 2019 (Limited Hours) ",
        photo: "https://www.ldstemple.pics/wp-content/uploads/manhattan-temple-golden-hour-300x300.jpg"
      },
      {
        name: "Texsas, Temple",
        address: "<b>Address</b>: 15725 Champion Forest Dr, Spring TX 77379-7036",
      service: "<b>Services</b>: Clothing rental,  NO Cafeteria available, Patron housing, Distribution Center",
      schedule: "<b>Open</b>: 9:00am-9:00pm",
      session: "<b>Session Schdule</b><br> Baptism: 8:00am- 9:00pm <br> Initiaory: 8:00am- 9:30pm <br> Endowment: 5:00pm- 8:00pm <br> Sealing: 8:00am- 9:30pm",
      closed: "<b>Closures</b><br> -Tuesday, 24 December 2019 <br> -Wednesday, 25 December 2019 <br> -Tuesday, 31 December 2019 (Limited Hours) ",
        photo: "https://www.ldstemple.pics/wp-content/uploads/dallas-temple-sunset-north-300x300.jpg",
      }
    
  ];

document.getElementById("Temples").innerHTML =
 `
${SixTemples.map(function(TemplesInfo){
    return `
    <div class="info"> 
        <h2> ${TemplesInfo.name}</h2>
        <p><i>${TemplesInfo.address}</i></p>
        <p>${TemplesInfo.service} </p>
        <p>${TemplesInfo.schedule} </p>
        <p>${TemplesInfo.session} </p>
        <p>${TemplesInfo.closed} </p>
        <img class="town-photo" src="${TemplesInfo.photo}" >
    </div>
    `
}).join('')}
`