// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Wish = require('../models/Wish')


const bcryptSalt = 10;


mongoose
  .connect( `${process.env.DBURL}`, {useNewUrlParser: true,  useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
  

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  }
]

const dataWish = [{
  title: "Viajazo",
  description: "Aruba Todo incluido 10 días, hotel Only Adults",
  price: 3524,
  date: 01/03/2020,
  deadline: 01/09/2021,
  image: "../public/images/aruba.jpg",
  wishGranted:"https://www.logitravel.com/packagesasyncsp/BookingDetailsMaterial?AvailabilityId=59908F3137318EDB5D2D9C3775D41598&HashRooms=30A&DestinationCode=9478&DestinationType=ZON&OriginAirportCode=MAD&SelectedTransportOption=&SelectedTransportOptionBaggages=&SelectedTransfer=&SelectedCarOption=&BoardHash=106278%7CTI%7CHabitaci%C3%B3n%2BDeluxe%2B-%2BVista%2BMar%7CFalse%7CFalse&DestinationAirportCode=&Spc=1569453666&Dimension=&SelectedHotelOption=106278&HotelChain=&CabinClass=0&FamilyDiscount=0&ProductType=9&DepartureDate=23%2F03%2F2020&ReturnDate=02%2F04%2F2020&LineOfBusiness=1&LeisureHoliday=0&AdvertisementCode=&VehiclesHash=&Bonification=0&FamilyFare=&Tab=0&ShowSearcher=false&BoardCode="
},
{  
  title: "Curso Oficial Piloto de Drones",
  description: "leer el título",
  price: 799,
  date: 07/01/2020,
  deadline: 20/12/2020,
  image: "../public/images/quiero-ser-piloto-de-drones.jpg",
  wishGranted: "https://cursodedrones.es/curso-oficial-piloto-profesional-drones/"
},
{
  title: "Jimmy Choo",
  descriptcion: "Zapatos divinos",
  price: 495,
  date: 26/02/2020,
  deadline:05/09/2020,
  image: "../public/images/jimmy.jpg",
  wishGranted: "https://row.jimmychoo.com/en/collections/womens-collections/red-carpet-collection/anouk/black-patent-leather-pointed-pumps-ANOUKPAT010003.html?cgid=collection-awardscollection#start=1"
},
{
  title: "Bubbles",
  description: "palillero caligrafía",
  price: 65,
  date: 16/04/2019,
  deadline: 30/03/2020,
  image: "../public/images/penholder.png",
  wishGranted: "https://www.galanpenholders.com/store/p239/PALILLERO_RECTO_BUBBLE.html"
},
{
  title: "Libros",
  description: "Web Design with HTML, CSS, JavaScript and jQuery Set",
  price: 46,
  date: 12/02/2020,
  deadline: 13/03/2021,
  image: "../public/images/librosjs.jpg",
  wishGranted: "https://www.amazon.es/Web-Design-HTML-JavaScript-jQuery/dp/1118907442"
},
{
  title: "Caligrafía Copperplate",
  description: "Curso caligrafía Inglesa nivel II",
  price: 190,
  date: 10/02/2020,
  deadline: 20/06/2020,
  image:"..//public/images/deletras.jpg",
  wishGranted: "https://deletras.com/producto/caligrafia-inglesa-nivel-2/"
},
{
  title: "Iniciación al punto",
  description: "Taller continuo de iniciación al punto",
  price: 60,
  date: 29/02/2020,
  deadline: 01/10/2020,
  image: "../public/images/agujas-lana-y-punto.jpg",
  wishGranted: "https://www.thehobbymaker.com/curso/taller-continuo-de-iniciacion-al-punto/02032020-2/"
},
{
  title: "Roge Noir Channel",
  descriptcion: "Laca de uñas Channel",
  price: 27,
  date: 28/02/2020,
  deadline: 20/05/2020,
  image: "../public/images/chanel-esmalte.jpg",
  wishGranted: "https://www.chanel.com/es_ES/perfumes-belleza/maquillaje/p/unas/laca-de-unas.html"
},
{
  title: "RUBY WOO",
  description: "Barra de labios M.A.C",
  price: 25,
  date: 26/02/2020,
  deadline: 10/07/2020,
  image: "../public/images/rubywoo.jpeg",
  wishGranted:"https://www.notino.es/mac/retro-matte-lipstick-barra-de-labios-con-efecto-mate/"
},
{
  title: "All Blacks",
  description: "Entradas España vs All Blacks, Wanda Metyropolitano ",
  price: 50,
  date: 02/01/2020,
  deadline: 29/05/2020,
  image: "../public/images/allblacks.jpeg",
  wishGranted: "https://proticketing.com/rugbywandametropolitano/es_ES/entradas/evento/17171?gclid=EAIaIQobChMIxK7d4ML75wIVScreCh0t8AHZEAAYASAAEgIU3_D_BwE"
},
{
  title: "Acuarela Museo Abc",
  description: "Taller Acualela, la Técnica al completo, Pablo Rubén López Sanz",
  price: 90,
  date: 02/03/2020,
  deadline: 04/09/2020,
  image: "../public/images/CURSO-ACUARELA-web.jpg",
  wishGranted: "https://proticketing.com/rugbywandametropolitano/es_ES/entradas/evento/17171?gclid=EAIaIQobChMIxK7d4ML75wIVScreCh0t8AHZEAAYASAAEgIU3_D_BwE"
}
]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  Wish.deleteMany()
  .then(() => {
    console.log('entra aqui')
    return Wish.create(dataWish)
  })
  .then(dataCreated => {
    console.log(`${dataCreated.length} wishes created with the following id:`);
    console.log(dataCreated.map(u => u._id));
  })
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
