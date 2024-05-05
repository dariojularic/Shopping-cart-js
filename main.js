// import './style.css'
import { data } from './data.js'

// izdvoji loop u funkciju updateCars i pozivaj je kad bude bilo promjene u arrayu cars
// u kratorskoj funkciji koje ce funkcionalsnosti biti potrebne i napravi funkcije koje ce obavljati te operacije
// ispod kreatorske funkcije napravi setTImeout i setuj cars nakon jedne sekunde
// pozovi update cars funkciju sa arrayem cars

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
                    <div>
                      <h2>${cars[i].name}</h2>
                      <img src="${cars[i].image}"/>
                    </div>
                    <div class="car-info">
                      <h4><strong>Brand:</strong> ${cars[i].brand}</h4>
                      <h4><strong>Manufactured Year:</strong> ${cars[i].manufacturedYear}</h4>
                      <h4><strong>Doors:</strong> ${cars[i].doors}</h4>
                      <h4><strong>Price:</strong> ${cars[i].price}</h4>
                    </div>
                    <div>
                      <h4>Available</h4> <span>${cars[i].available}</span>
                    </div>
                    <button class="delete-btn">
                      Delete
                    </button>
                  </li>`;

    carsUlList.insertAdjacentHTML	("afterbegin", html)
    const listItem = document.querySelector(".car")
    const btn = document.querySelector(".delete-btn");
    btn.addEventListener("click", () => {
      listItem.remove()
    })
  }
}

const carsList = shoppingCartFactory();
carsList.setCarsArray(data)
updateCars(carsList.getCarsArray())

availabilityFilter.addEventListener("input", (event) => {
  // pojasnit donju liniju
  const [key, value] = event.target.value.split("-");
  updateCars(carsList.filter(key, value, carsList.getCarsArray()))
})

sortOptions.addEventListener("input", () => {
  if (sortOptions.value === "price-lowest") updateCars(carsList.sortPriceLowest(carsList.getCarsArray()))
  if (sortOptions.value === "price-highest") updateCars(carsList.sortPriceHighest(carsList.getCarsArray()))
  if (sortOptions.value === "az") updateCars(carsList.sortAToZ(carsList.getCarsArray()))
  if (sortOptions.value === "za") updateCars(carsList.sortZToA(carsList.getCarsArray()))
})



// setTimeout(carsList.setCarsArray(data), 1000)
