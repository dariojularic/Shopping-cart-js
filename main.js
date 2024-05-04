// import './style.css'
import { data } from './data.js'

const carsContainer = document.querySelector(".cars")

// izdvoji loop u funkciju updatecars i pozivaj je kad bude bilo promjene u arrayu cars
// u kratorskoj funkciji koje ce funkcionalsnosti biti potrebne i napravi funkcije koje ce obavljati te operacije
// ispod kreatorske funkcije napravi setTImeout i setuj cars nakon jedne sekunde
// pozovi update cars funkciju sa arrayem cars

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

// for (let i = 0; i < cars.length; i++) {

//   const carItem = document.createElement("ul")
//   const html = `<li class=""></li>`
//   carItem.insertAdjacentHTML("afterbegin", html)
// }









  // const firstData = carsContainer.appendChild(document.createElement("div"))
  // firstData.classList = "first-data";
  // const h2 = firstData.appendChild(document.createElement("h2"));
  // const img = firstData.appendChild(document.createElement("img"));
  // const secondData = carsContainer.appendChild(document.createElement("div"));
  // secondData.classList = "second-data";
  // // const p = secondData.appendChild(document.createElement("p"));
  // const available = carsContainer.appendChild(document.createElement("p"));
  // const deleteButton = carsContainer.appendChild(document.createElement("button"));

  // // console.log(cars)
  // h2.textContent = cars[i].name
  // img.src = cars[i].image
  // secondData.innerHTML = `<p>
  // <strong>Brand:</strong> ${cars[i].brand}
  // <strong>Manufactured Year:</strong> ${cars[i].manufacturedYear}
  // <strong>Doors:</strong> ${cars[i].doors}
  // <strong>Price:</strong> ${cars[i].price}
  // </p>`;
  // available.textContent = `Available: ${cars[i].available}`;
  // deleteButton.textContent = "Delete"
  // deleteButton.addEventListener("click", () => {
  //   console.log(cars.splice(i, 1))
  // }

  // console.log(h2)

  // console.log(i)



// console.log(cars.length)
