function updateNiceTime() {
  let niceElement = document.querySelector("#nice");
  let niceDateElement = niceElement.querySelector("#nice-date");
  let niceDate = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
  let niceTimeElement = niceElement.querySelector("#nice-time");
  let niceTime = moment().tz("Europe/Paris").format("HH:mm:ss");

  niceDateElement.innerHTML = niceDate;
  niceTimeElement.innerHTML = niceTime;
}

function updateBristolTime() {
  let bristolElement = document.querySelector("#bristol");
  let bristolDateElement = bristolElement.querySelector("#bristol-date");
  let bristolDate = moment().tz("Europe/London").format("dddd DD MMMM YYYY");
  let bristolTimeElement = bristolElement.querySelector("#bristol-time");
  let bristolTime = moment().tz("Europe/London").format("HH:mm:ss");

  bristolDateElement.innerHTML = bristolDate;
  bristolTimeElement.innerHTML = bristolTime;
}

function updatePerthTime() {
  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector("#perth-date");
  let perthDate = moment().tz("Australia/Perth").format("dddd DD MMMM YYYY");
  let perthTimeElement = perthElement.querySelector("#perth-time");
  let perthTime = moment().tz("Australia/Perth").format("HH:mm:ss");

  perthDateElement.innerHTML = perthDate;
  perthTimeElement.innerHTML = perthTime;
}

function changeDisplayedCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city-container">
            <div class="city-date">
              <h2>${cityName}</h2>
              <p>${cityTime.format("dddd DD MMMM YYYY")}</p>
            </div>
            <div class="time">
              <p>${cityTime.format("HH:mm:ss")}</p>
            </div>
        </div>`;
  let reloadElement = document.querySelector("#reload");
  if (reloadElement) {
    reloadElement.style.display = "block";
  }
  let reloadButton = document.querySelector("#reload-button");
  if (reloadButton) {
    reloadButton.addEventListener("click", function () {
      location.reload();
    });
  }
}

let citiesSelectElement = document.querySelector("#cities-dropdown");
citiesSelectElement.addEventListener("change", changeDisplayedCity);

updateNiceTime();
setInterval(updateNiceTime, 1000);
updateBristolTime();
setInterval(updateBristolTime, 1000);
updatePerthTime();
setInterval(updatePerthTime, 1000);
