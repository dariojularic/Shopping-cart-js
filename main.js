// import './style.css'
import { data } from './data.js'

// izdvoji loop u funkciju updateCars i pozivaj je kad bude bilo promjene u arrayu cars
// u kratorskoj funkciji koje ce funkcionalsnosti biti potrebne i napravi funkcije koje ce obavljati te operacije
// ispod kreatorske funkcije napravi setTImeout i setuj cars nakon jedne sekunde
// pozovi update cars funkciju sa arrayem cars


// kako napravit da mi min width ne dozvoli da suzim prozor

// napravit state loading koji ce bit na pocetku false
// napravit funkc setLoading koja mijenja state na true ili false
// unutar funck napravit validaciju da ne prihvaca nijednu vrijednost osim true ili false
/* stavi loading na true prikazi loading spiner */
/* stavi loading false prikazi cars
global state factory
why do we need react or vue, why not use javascript for everything */



const carsUlList = document.querySelector(".cars-list");
const availabilityFilter = document.querySelector("#availability");
const sortOptions = document.querySelector("#sort-options")

function shoppingCartFactory() {
  let carsArray = [];

  const getCarsArray = () => carsArray;
  const setCarsArray = (cars) => carsArray = cars;

  const filter = (key, value, cars) => cars.filter((car) => car[key] === value);

  const sortPriceLowest = (cars) => cars.sort((b, a) => a.price - b.price);
  const sortPriceHighest = (cars) => cars.sort((a, b) => a.price - b.price);
  const sortZToA = (cars) => cars.sort((a, b) => a.name.localeCompare(b.name));
  const sortAToZ = (cars) => cars.sort((b, a) => a.name.localeCompare(b.name));

  return {filter, getCarsArray, setCarsArray, sortPriceHighest, sortPriceLowest, sortAToZ, sortZToA}
}

function updateCars(cars) {
  carsUlList.innerHTML = "";
  for (let i = 0; i < cars.length; i++) {
    const html = `<li class="car">
                    <div class="car-image">
                      <h2>${cars[i].name}</h2>
                      <img src="${cars[i].image}"/>
                    </div>
                    <div class="car-info">
                      <h4><strong>Brand:</strong> ${cars[i].brand}</h4>
                      <h4><strong>Manufactured Year:</strong> ${cars[i].manufacturedYear}</h4>
                      <h4><strong>Doors:</strong> ${cars[i].doors}</h4>
                      <h4><strong>Price:</strong> ${cars[i].price}</h4>
                    </div>
                    <div class="action">
                      <h4 class="ready"><strong>Available:</strong> ${cars[i].available}</h4>
                      <button class="delete-btn">
                        Delete
                      </button>
                    </div>
                  </li>`;

    carsUlList.insertAdjacentHTML	("afterbegin", html)
    const listItem = document.querySelector(".car")
    const readyToBuy = document.querySelector(".ready");
    const btn = document.querySelector(".delete-btn");
    readyToBuy.style.backgroundColor = cars[i].available === "yes" ? "#00bb00" : "#e93535";
    // izbrisat car iz statea
    btn.addEventListener("click", () => {
      updateCars(cars.filter((car) => car.id !== cars[i].id))
    })
  }
}
// updateCars(carsList.getCarsArray())
const carsList = shoppingCartFactory();
carsList.setCarsArray(data)

availabilityFilter.addEventListener("input", (event) => {
  // array destructuring
  //object destructuring

  // zasto all funkcionira?
  const [key, value] = event.target.value.split("-");
  updateCars(carsList.filter(key, value, carsList.getCarsArray()))
})

sortOptions.addEventListener("input", () => {
  if (sortOptions.value === "price-lowest") updateCars(carsList.sortPriceLowest(carsList.getCarsArray()))
    if (sortOptions.value === "price-highest") updateCars(carsList.sortPriceHighest(carsList.getCarsArray()))
      if (sortOptions.value === "az") updateCars(carsList.sortAToZ(carsList.getCarsArray()))
        if (sortOptions.value === "za") updateCars(carsList.sortZToA(carsList.getCarsArray()))
})


setTimeout(() => {
  updateCars(carsList.getCarsArray())
}, 1000)
