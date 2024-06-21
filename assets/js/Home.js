const login = document.getElementById("login");

login.addEventListener("click", (e) => {
  e.preventDefault();
  location.replace("../login.html");
});

const sportCar = [

  {
    name: "BMw M4 Competition",
    model: "2025",
    sereis: "M4",
    images: [
      '../assets/images/home/bmwM4-1.jpg',
      '../assets/images/home/bmw-2.jpg',
      '../assets/images/home/bmwM4-3.jpg',
    ],
    description:`The BMW M4 is a version of the BMW 4 Series automobile developed by BMW's motorsport division, BMW M, that has been built since 2014. As part of the renumbering that splits the coupé and convertible variants of the 3 Series into the 4 Series, the M4 replaced those variants of the BMW M3. Upgrades over the standard BMW 4 Series include an upgraded engine, suspension, exhaust system, brakes and weight reduction measures including increased use of carbon fibre, such as on the roof of the car`
  },

  {
    name: "Ford Mustang Dark Horse",
    model: "2024",
    sereis: "Mustang",
    images:[
      '../assets/images/home/mustang-1.jpg',
      '../assets/images/home/mustang-2.jpg',
      '../assets/images/home/mustang-3.jpg',
    ],
    description: `The brand-new 2024 Mustang Dark Horse model is powered by a naturally asprated Gen-4 5.0L Coyote V8 engine kicking out 500 horsepower and 418lb of toque.That's 100 hp/L for a viscerl driving expreince.`,
  },

  {
    name: 'Lamborghini Hurcan Sterrato',
    model: "2024",
    sereis: "Hurcan",
    images: [
      '../assets/images/home/lamborgini-1.jpg',
      '../assets/images/home/lamborgini-2.jpg',
      '../assets/images/home/lamborgini-3.jpg',
      ],
  },

  {
    name: "Audi RS5 Competition Plus",
    model: "2023",
    sereis: "S5",
    images: [
      "../assets/images/home/audi-1.jpg",
      "../assets/images/home/audi-2.jpg",
      "../assets/images/home/audi-3.jpg",
    ],
    description: `The second-generation Audi RS5 has been an enigma since its debut a half decade ago.On paper, the new one I just drove is worse than the car it replaces. This is nothing new: Remember years ago when Audi replaced a naturally aspirated, 450-hp V-8 and its seven-speed dual-clutch transmission with a twin-turbo, 2.9-liter V-6 good for 444 hp, tied to an eight-speed automatic? And yet that new car was an improvement over the old one.`,
  },

  {
    name: "Mercedes-AMG GT63 S E",
    model: "2025",
    series: "GT",
    images: [
      "../assets/images/home/benz-1.jpg",
      "../assets/images/home/benz-2.jpg",
      "../assets/images/home/benz-3.jpg",
    ],
    description: `This drive makes the Mercedes-AMG GT 63 S E PERFORMANCE the most powerful series model to come out of Affalterbach. Its motorsport genes completely redefine performance: maximum system torque of 900 Nm and acceleration from 0 to 100 km/h in 2.9 seconds.`, 
  },

  {
    name: "Shelby Super Snake",
    model: "2024",
    series: "Super Snake",
    images: [
      "../assets/images/home/shelby-1.jpg",
      "../assets/images/home/shelby-2.jpg",
      "../assets/images/home/shelby-3.jpg",
    ],
    description: `The Shelby Super Snake is back for 2023 with a fresh look and more refinement. Powered by an 825 horsepower supercharged Ford 5.0L V8, the Super Snake launches from 0-60 in 3.5 seconds. With new suspension and brakes, it carves up the road course with ease. And yet it is so tractable, able to roll down the street like a king on its Shelby 20 inch one-piece forged aluminum wheels and high performance tires. Wide Body and suspension options are also available for the ultimate in style and handling.`, 
  },

]

const classicCar = [

  {
    name: "Chevrolet Chevelle SS",
    model: "1970",
    series: "Chevelle SS",
    images: [
      "../assets/images/home/chevrolet-1.jpg",
      "../assets/images/home/chevrolet-2.jpg",
      "../assets/images/home/chevrolet-3.jpg",
    ],
    description: `The Chevrolet Chevelle is a mid-sized automobile that was produced by Chevrolet in three generations for the 1964 through 1977 model years. Part of the General Motors (GM) A-body platform, the Chevelle was one of Chevrolet's most successful nameplates. Body styles included coupes, sedans, convertibles, and station wagons. The "Super Sport" versions were produced through the 1973 model year and Lagunas from 1973 through to 1976.`,  
  },

  {
    name: "Jaguar E-Type Roadster",
    model: "1965",
    series: "E-Type",
    images: [
      "../assets/images/home/jaguar-1.jpg",
      "../assets/images/home/jaguar-2.jpg",
      "../assets/images/home/jaguar-3.jpg",
    ],
    description: `The Jaguar E-Type, or the Jaguar XK-E for the North American market, is a British front mid-engined sports car that was manufactured by Jaguar Cars Ltd from 1961 to 1974. Its combination of exceptional aesthetics, advanced technologies, high performance, and competitive pricing established the model as an icon of the motoring world. The E-Type's claimed 150 miles per hour (240 km/h) top speed,[4] sub-7-second 0 to 60 mph (97 km/h) acceleration, largely unitary body construction, front and rear independent suspension with disc brakes, mounted inboard at the rear, and rack-and-pinion steering, distinguished the car and spurred industry-wide changes.`,
  },

  {
    name: "Aston Martin DBS V8",
    model: "1970",
    series: "DBS",
    images: [
      "../assets/images/home/aston-1.jpg",
      "../assets/images/home/aston-2.jpg",
      "../assets/images/home/aston-3.jpg",
    ],

    description: `The Aston Martin DBS is a grand tourer produced by the British manufacturer Aston Martin Lagonda Limited from 1967 to 1972.
    
    From 2007 to 2012 the DBS name was resurrected for a new model, the Aston Martin DBS V12.`,  
  },

  {
    name: "BMW 2002 Turbo",
    model: "1974",
    series: "2002",
    images: [
      "../assets/images/home/bmw-1.jpg",
      "../assets/images/home/bmw-2.jpg",
      "../assets/images/home/bmw-3.jpg",
    ],
    description: `The BMW 02 Series is a range of sporty compact executive cars produced by German automaker BMW between 1966 and 1977, based on a shortened version of the New Class Sedans.
  
    The first 02 Series produced was the 1600-2 (later renamed 1602) in 1966. In 1975, the 02 Series was replaced by the E21 3 Series (except for the 1502 model, which continued until 1977).`,
  },

  {
    name: "Porsche 911 Carrera RS Clubsport",
    model: "1995",
    series: "911 Carrera",
    images: [
    "../assets/images/home/porche-1.jpg",
    "../assets/images/home/porche-2.jpg",
    "../assets/images/home/porche-3.jpg",
    ],
    description: `The Porsche 993 is the fourth generation of the Porsche 911 model sports car manufactured and sold between January 1994 and early 1998 (model years 1995 1998 in the United States), replacing the 964. Its discontinuation marked the end of air-cooled 911 models.`,
  },

  {
    name: "Ferrari 250 GT California Spyder",
    model: "1963",
    series: "California",
    images: [
      "../assets/images/home/ferrari-1.jpg",
      "../assets/images/home/ferrari-2.jpg",
      "../assets/images/home/ferrari-3.jpg",
    ],
    description: `he Ferrari 250 GT California Spyder is a sports car developed by the Italian car manufacturer Ferrari. It is presented by the brand as Ferrari 250 Gran Turismo Spyder California or simply Ferrari 250 California.[1] Its name is sometimes incorrectly written Spider instead of 'Spyder' which indicates it is similar to a convertible. It was designed by Pininfarina[Note 1] and bodied by Carrozzeria Scaglietti. Starring in the 1986 movie Ferris Bueller's Day Off, it became one of the most popular Ferraris`,
  },

]

const mySportCars = document.getElementById("sport");
mySportCars.innerHTML = sportCar.map((item) =>
  `
  <div class="card d-flex position-relative flex-column" id="sportcars">

    <div class='imgContainer'>
      <img src=${item.images[0]}>
    </div>
  
    <div class="content">

      <h2>Name:${item.name}</h2>
      <p class="description">Model:${item.model}</p>
      <p class="description">Sereis:${item.series}</p>
  
    </div>
  
  </div>

  `
).join("");

const sportCars = document.querySelectorAll('#sportcars');

sportCars.forEach((card, index) => {

  card.addEventListener('click', () => {
    localStorage.setItem('selectedCar', JSON.stringify(sportCar[index]));
    window.location.href = '../pages/cars.html';
  });

});

const myClassicCars = document.getElementById("classic");
myClassicCars.innerHTML = classicCar.map((item)=>
  `
  <div class="card d-flex position-relative flex-column" id="classiccars">
    <div class='imgContainer'>
      <img src=${item.images[0]}>
    </div>
  
    <div class="content">
      <h2>Name:${item.name}</h2>
      <p class="description">Model:${item.model}</p>
      <p class="description">Sereis:${item.series}</p>
  
    </div>
  
  </div>

  `
).join('')

const classicCars = document.querySelectorAll("#classiccars");

classicCars.forEach((card,index)=>{

  card.addEventListener("click", () => {
    location.replace("../pages/cars.html");
    localStorage.setItem("selectedCar", JSON.stringify(classicCar[index]));
    window.location.href = "../pages/cars.html";
  });

});