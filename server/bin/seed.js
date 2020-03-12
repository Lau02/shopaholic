require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Wish = require('../models/Wish');
const Finance = require('../models/Finance');
const bcryptSalt = 10;

userId1 = new mongoose.mongo.ObjectID();
userId2 = new mongoose.mongo.ObjectID();
// const3 = new mongoose.mongo.ObjectID();
// const4 = new mongoose.mongo.ObjectID();
// const5 = new mongoose.mongo.ObjectID();
// const6 = new mongoose.mongo.ObjectID();
// const7 = new mongoose.mongo.ObjectID();


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
    _id: userId1,
    username: "lau",
    password: bcrypt.hashSync("lau", bcrypt.genSaltSync(bcryptSalt)),
    saving: 700
  },
  {
    _id: userId2,
    username: "julio",
    password: bcrypt.hashSync("julio", bcrypt.genSaltSync(bcryptSalt)),
    saving: 2300
  }
]

const dataWish = [{
  title: "Viajazo",
  description: "Aruba Todo incluido 10 días, hotel Only Adults",
  price: 3524,
  date: "01-03-2020",
  deadline: "01-09-2021",
  image: "/images/aruba.jpg",
  wishGranted:"https://www.logitravel.com/packagesasyncsp/BookingDetailsMaterial?AvailabilityId=59908F3137318EDB5D2D9C3775D41598&HashRooms=30A&DestinationCode=9478&DestinationType=ZON&OriginAirportCode=MAD&SelectedTransportOption=&SelectedTransportOptionBaggages=&SelectedTransfer=&SelectedCarOption=&BoardHash=106278%7CTI%7CHabitaci%C3%B3n%2BDeluxe%2B-%2BVista%2BMar%7CFalse%7CFalse&DestinationAirportCode=&Spc=1569453666&Dimension=&SelectedHotelOption=106278&HotelChain=&CabinClass=0&FamilyDiscount=0&ProductType=9&DepartureDate=23%2F03%2F2020&ReturnDate=02%2F04%2F2020&LineOfBusiness=1&LeisureHoliday=0&AdvertisementCode=&VehiclesHash=&Bonification=0&FamilyFare=&Tab=0&ShowSearcher=false&BoardCode=",
  user: userId1
},
{  
  title: "Curso Oficial Piloto de Drones",
  description: "leer el título",
  price: 799,
  date: "07/01/2020",
  deadline: "20/12/2020",
  image: "/images/quiero-ser-piloto-de-drones.jpg",
  wishGranted: "https://cursodedrones.es/curso-oficial-piloto-profesional-drones/",
  user: userId1
},
{
  title: "Jimmy Choo",
  descriptcion: "Zapatos divinos",
  price: 495,
  date: "26/02/2020",
  deadline:"05/09/2020",
  image: "/images/jimmy.jpg",
  wishGranted: "https://row.jimmychoo.com/en/collections/womens-collections/red-carpet-collection/anouk/black-patent-leather-pointed-pumps-ANOUKPAT010003.html?cgid=collection-awardscollection#start=1",
  user: userId1
},
{
  title: "Bubbles",
  description: "palillero caligrafía",
  price: 65,
  date: "16/04/2019",
  deadline: "30/03/2020",
  image: "/images/penholder.png",
  wishGranted: "https://www.galanpenholders.com/store/p239/PALILLERO_RECTO_BUBBLE.html",
  user: userId1
},
{
  title: "Libros",
  description: "Web Design with HTML, CSS, JavaScript and jQuery Set",
  price: 46,
  date: "12/02/2020",
  deadline: "13/03/2021",
  image: "/images/librosjs.jpg",
  wishGranted: "https://www.amazon.es/Web-Design-HTML-JavaScript-jQuery/dp/1118907442",
  user: userId1
},
{
  title: "Caligrafía Copperplate",
  description: "Curso caligrafía Inglesa nivel II",
  price: 190,
  date: "10/02/2020",
  deadline: "20/06/2020",
  image:"/images/deletras.jpg",
  wishGranted: "https://deletras.com/producto/caligrafia-inglesa-nivel-2/",
  user: userId2
},
{
  title: "Caligrafía Copperplate",
  description: "Curso caligrafía Inglesa nivel II",
  price: 190,
  date: "10/02/2020",
  deadline: "20/06/2020",
  image:"/images/deletras.jpg",
  wishGranted: "https://deletras.com/producto/caligrafia-inglesa-nivel-2/",
  user: userId1
},
{
  title: "Iniciación al punto",
  description: "Taller continuo de iniciación al punto",
  price: 60,
  date: "29/02/2020",
  deadline: "01/10/2020",
  image: "/images/agujas-lana-y-punto.jpg",
  wishGranted: "https://www.thehobbymaker.com/curso/taller-continuo-de-iniciacion-al-punto/02032020-2/",
  user: userId2
},
{
  title: "Iniciación al punto",
  description: "Taller continuo de iniciación al punto",
  price: 60,
  date: "29/02/2020",
  deadline: "01/10/2020",
  image: "/images/agujas-lana-y-punto.jpg",
  wishGranted: "https://www.thehobbymaker.com/curso/taller-continuo-de-iniciacion-al-punto/02032020-2/",
  user: userId1
},
{
  title: "Roge Noir Channel",
  descriptcion: "Laca de uñas Channel",
  price: 27,
  date: "28/02/2020",
  deadline: "20/05/2020",
  image: "/images/chanel-esmalte.jpg",
  wishGranted: "https://www.chanel.com/es_ES/perfumes-belleza/maquillaje/p/unas/laca-de-unas.html",
  user: userId1
},
{
  title: "RUBY WOO",
  description: "Barra de labios M.A.C",
  price: 25,
  date: "26/02/2020",
  deadline: "10/07/2020",
  image: "/images/rubywoo.jpeg",
  wishGranted:"https://www.notino.es/mac/retro-matte-lipstick-barra-de-labios-con-efecto-mate/",
  user: userId1
},
{
  title: "All Blacks",
  description: "Entradas España vs All Blacks, Wanda Metyropolitano ",
  price: 50,
  date: "02/01/2020",
  deadline: "29/05/2020",
  image: "/images/allblacks.jpeg",
  wishGranted: "https://proticketing.com/rugbywandametropolitano/es_ES/entradas/evento/17171?gclid=EAIaIQobChMIxK7d4ML75wIVScreCh0t8AHZEAAYASAAEgIU3_D_BwE",
  user: userId2
},
{
  title: "Acuarela Museo Abc",
  description: "Taller Acualela, la Técnica al completo, Pablo Rubén López Sanz",
  price: 90,
  date: "02/03/2020",
  deadline: "04/09/2020",
  image: "/images/CURSO-ACUARELA-web.jpg",
  wishGranted: "https://proticketing.com/rugbywandametropolitano/es_ES/entradas/evento/17171?gclid=EAIaIQobChMIxK7d4ML75wIVScreCh0t8AHZEAAYASAAEgIU3_D_BwE",
  user: userId2
},
{
  title: "Acuarela Museo Abc",
  description: "Taller Acualela, la Técnica al completo, Pablo Rubén López Sanz",
  price: 90,
  date: "02/03/2020",
  deadline: "04/09/2020",
  image: "/images/CURSO-ACUARELA-web.jpg",
  wishGranted: "https://proticketing.com/rugbywandametropolitano/es_ES/entradas/evento/17171?gclid=EAIaIQobChMIxK7d4ML75wIVScreCh0t8AHZEAAYASAAEgIU3_D_BwE",
  user: userId1
},
{
  title: "Madrid Open",
  description: "Entradas tenis Madrid",
  price: 148,
  date: "09/03/2020",
  deadline: "09/05/2020",
  image: "/images/madridtenis.jpeg",
  wishGranted: "https://www.madrid-open.com/entradas/?gclid=EAIaIQobChMI9t77tqaN6AIVC_lRCh1QvgDTEAAYASAAEgKFB_D_BwE",
  user: userId2
},
{
  title: "Madrid Open",
  description: "Entradas tenis Madrid",
  price: 148,
  date: "09/03/2020",
  deadline: "09/05/2020",
  image: "/images/madridtenis.jpeg",
  wishGranted: "https://www.madrid-open.com/entradas/?gclid=EAIaIQobChMI9t77tqaN6AIVC_lRCh1QvgDTEAAYASAAEgKFB_D_BwE",
  user: userId1
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
