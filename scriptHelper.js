// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty") {
    alert("Pilot Name or Co-Pilot Name are empty!");
  }

  if (
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Fuel level and Cargo mass should be numbers!");
  }

  let launchStatus = document.getElementById("launchStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  list.style.visibility = "visible";

  pilot.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilot.innerHTML = `Co-Pilot ${copilot} is ready for launch`;

  if (fuelLevel < 10000) {
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = "Fuel level too low for launch";
  }

  if (cargoLevel > 10000) {
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
    cargoStatus.innerHTML = "Cargo level too high for launch";
  }

  if (fuelLevel > 10000 && cargoLevel < 10000) {
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    const jsonPromise = response.json();
  });

  jsonPromise = planetsReturned;

  return planetsReturned;
}

function pickPlanet(planets) {
  let totalSelection = planets.length();
  let min = 1;
  return Math.floor(Math.random() * (totalSelection - min + 1)) + min;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
