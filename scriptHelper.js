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
    <img src="${imageUrl}"/>
    `;
  console.log(imageUrl);
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (isNaN(testInput)) {
    return "Not a Number";
  }
  return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty") {
    alert("Pilot Name or Co-Pilot Name are empty!");
  } else {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
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

  if (fuelLevel <= 10000 && cargoLevel <= 10000) {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    list.style.visibility = "visible";
  }

  if (fuelLevel >= 10000 && cargoLevel >= 10000) {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    list.style.visibility = "visible";
  }

  if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
    list.style.visibility = "visible";
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
  let planetsReturned = planets;
  return planetsReturned[Math.floor(Math.random() * planetsReturned.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
