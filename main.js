import { data } from './data.js'

const carsUlList = document.querySelector(".cars-list");
const availabilityFilter = document.querySelector("#availability");
const sortOptions = document.querySelector("#sort-options")

function globalLoadingFactory() {
  let loading = false;

  const getLoadingState = () => loading;
  // typeof arg !== boolean return
  const setLoadingState = (boolean) => {
    if (boolean === true || boolean === false) loading = boolean;
  }

  return {getLoadingState, setLoadingState}
}

function shoppingCartFactory() {
  let carsArray = [];

  const getCarsArray = () => carsArray;
  const setCarsArray = (cars) => carsArray = cars;

  const filter = (key, value) => {
    console.log("carsArg")
    carsArray = data

    carsArray = carsArray.filter((car) => car[key] === value);
    console.log("carsArray", carsArray)
    return carsArray
  }
  const sortPriceLowest = (cars) => cars.sort((b, a) => a.price - b.price);
  const sortPriceHighest = (cars) => cars.sort((a, b) => a.price - b.price);
  const sortZToA = (cars) => cars.sort((a, b) => a.name.localeCompare(b.name));
  const sortAToZ = (cars) => cars.sort((b, a) => a.name.localeCompare(b.name));

  const deleteCar = (cars, id) => cars.filter((car) => car.id !== id);

  return {deleteCar, filter, getCarsArray, setCarsArray, sortPriceHighest, sortPriceLowest, sortAToZ, sortZToA}
}

function updateCars(cars) {
  console.log("update cars", cars)
  carsUlList.innerHTML = "";
  for (let i = 0; i < cars.length; i++) {
    const html = `<li class="car" data-id=${cars[i].id}>
                    <div class="car-image">
                      <h2>${cars[i].name}</h2>
                      <img src="${cars[i].image}"/>
                    </div>
                    <div class="car-info">
                      <h4><strong>Brand:</strong> ${cars[i].brand}</h4>
                      <h4><strong>Manufactured Year:</strong> ${cars[i].manufacturedYear}</h4>
                      <h4><strong>Doors:</strong> ${cars[i].doors}</h4>
                      <h4><strong>Price:</strong> ${cars[i].price}€</h4>
                    </div>
                    <div class="action">
                      <h4 class="ready"><strong>Available:</strong> ${cars[i].available}</h4>
                      <button class="delete-btn">
                        Delete
                      </button>
                    </div>
                  </li>`;

    carsUlList.insertAdjacentHTML	("afterbegin", html)
    const readyToBuy = document.querySelector(".ready");
    readyToBuy.style.backgroundColor = cars[i].available === "yes" ? "#00bb00" : "#e93535";
  }
}

function showSpinner() {
  if (loader.getLoadingState() === true) {
    carsUlList.innerHTML = `<div class="loader"></div>`
    setTimeout(() => {
      updateCars(carsList.getCarsArray())
    }, 1000)
  }
}

const carsList = shoppingCartFactory();
carsList.setCarsArray(data)

const loader = globalLoadingFactory()
loader.setLoadingState(true);

availabilityFilter.addEventListener("input", (event) => {
  // zasto all funkcionira?
  const [key, value] = event.target.value.split("-");
  console.log("getCarsArray", carsList.getCarsArray())
  carsList.setCarsArray(carsList.filter(key, value))
  console.log("getCarsArray", carsList.getCarsArray())
  updateCars(carsList.getCarsArray())
})

carsUlList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const listItemId = event.target.closest(".car").getAttribute("data-id");
    // mogu li preko .container doci do <select>?
    // console.log(event.target.closest(".container"))
    carsList.setCarsArray(carsList.deleteCar(carsList.getCarsArray(), parseInt(listItemId)));
    // jel bolji UX ako stavim updateCars(carsList.filter(getCarsArray())) ???
    console.log(carsList.getCarsArray())
    updateCars(carsList.getCarsArray());
  }
})

sortOptions.addEventListener("input", () => {
  if (sortOptions.value === "price-lowest") updateCars(carsList.sortPriceLowest(carsList.getCarsArray()))
  if (sortOptions.value === "price-highest") updateCars(carsList.sortPriceHighest(carsList.getCarsArray()))
  if (sortOptions.value === "az") updateCars(carsList.sortAToZ(carsList.getCarsArray()))
  if (sortOptions.value === "za") updateCars(carsList.sortZToA(carsList.getCarsArray()))
})

showSpinner()
