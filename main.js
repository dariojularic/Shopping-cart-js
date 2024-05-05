// import './style.css'
import { data } from './data.js'

// izdvoji loop u funkciju updateCars i pozivaj je kad bude bilo promjene u arrayu cars
// u kratorskoj funkciji koje ce funkcionalsnosti biti potrebne i napravi funkcije koje ce obavljati te operacije
// ispod kreatorske funkcije napravi setTImeout i setuj cars nakon jedne sekunde
// pozovi update cars funkciju sa arrayem cars

const carsContainer = document.querySelector(".cars")
const carsUlList = document.querySelector(".cars-list")

function shoppingCartFactory() {
  let carsArray = [];

  const getCarsArray = () => carsArray;
  const setCarsArray = (cars) => carsArray = cars;

  const filterAvailable = (cars) => cars.filter((car) => car.available === "yes");
  const filterNotAvailable = (cars) => cars.filter((car) => car.available === "no");

  const sortPriceHighest = (cars) => cars.sort((b, a) => a.price - b.price);
  const sortPriceLowest = (cars) => cars.sort((a, b) => a.price - b.price);
  const sortAToZ = (cars) => cars.sort((a, b) => a.name.localeCompare(b.name));
  const sortZToA = (cars) => cars.sort((b, a) => a.name.localeCompare(b.name));

  return {getCarsArray, setCarsArray, filterAvailable, filterNotAvailable, sortPriceHighest, sortPriceLowest, sortAToZ, sortZToA}
}

function updateCars(cars) {
  for (let i = 0; i < cars.length; i++) {
    const html = `<li class="car">
                    <h2>${cars[i].name}</h2>
                    <img src="${cars[i].image}"/>
                    <div>
                      <h4>Brand:</h4> <span>${cars[i].brand}</span>
                      <h4>Manufactured Year:</h4> <span>${cars[i].manufacturedYear}</span>
                      <h4>Doors:</h4> <span>${cars[i].doors}</span>
                      <h4>Price:</h4> <span>${cars[i].price}</span>
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
// setTimeout(carsList.setCarsArray(data), 1000)

updateCars(carsList.getCarsArray())


