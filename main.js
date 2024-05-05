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
















// const select = document.querySelector("#availability");
// select.addEventListener("input", () => {
//   console.log(select.value)
// })
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

// switch (select.value) {
//   case "availability-yes":
//     carsList.setCarsArray(carsList.filterAvailable(cars));
//     break;
//   case "availability-no":
//     carsList.setCarsArray(carsList.filterNotAvailable(cars));
//     break
//   case "all"
//     c
// }
// }
