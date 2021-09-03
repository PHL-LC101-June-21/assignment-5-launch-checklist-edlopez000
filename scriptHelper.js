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
  let content = document.getElementById("missionTarget");
  content.innerHTML = `
    <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
      </ol>
    <img src='${imageUrl}'>
    `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (Number.isNaN(testInput)) {
    return "Not a Number";
  }
  return "Is a Number";
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

  const launchStatus = document.getElementById("launchStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");
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
  const planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then((response) => {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planetsReturned[Math.floor(Math.random() * planetsReturned.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
