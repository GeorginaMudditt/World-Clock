function updateNiceTime() {
  let niceElement = document.querySelector("#nice");
  let niceDateElement = niceElement.querySelector("#nice-date");
  let niceDate = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
  let niceTimeElement = niceElement.querySelector("#nice-time");
  let niceTime = moment().tz("Europe/Paris").format("HH:mm:ss");

  niceDateElement.innerHTML = niceDate;
  niceTimeElement.innerHTML = niceTime;
}
updateNiceTime();
setInterval(updateNiceTime, 1000);

function updateBristolTime() {
  let bristolElement = document.querySelector("#bristol");
  let bristolDateElement = bristolElement.querySelector("#bristol-date");
  let bristolDate = moment().tz("Europe/London").format("dddd DD MMMM YYYY");
  let bristolTimeElement = bristolElement.querySelector("#bristol-time");
  let bristolTime = moment().tz("Europe/London").format("HH:mm:ss");

  bristolDateElement.innerHTML = bristolDate;
  bristolTimeElement.innerHTML = bristolTime;
}
updateBristolTime();
setInterval(updateBristolTime, 1000);

function updatePerthTime() {
  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector("#perth-date");
  let perthDate = moment().tz("Australia/Perth").format("dddd DD MMMM YYYY");
  let perthTimeElement = perthElement.querySelector("#perth-time");
  let perthTime = moment().tz("Australia/Perth").format("HH:mm:ss");

  perthDateElement.innerHTML = perthDate;
  perthTimeElement.innerHTML = perthTime;
}
updatePerthTime();
setInterval(updatePerthTime, 1000);
