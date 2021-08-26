// Write your JavaScript code here!

const { formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Left off here at 8/26/21
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });

  let form = document.getElementById("launchForm");
  form.addEventListener("submit", function (event) {
    preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]");
    const pilotValue = pilotName.value;

    let copilotName = document.querySelector("input[name=copilotName]");
    const copilotValue = copilotName.value;

    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    const fuelLevelValue = fuelLevel.value;

    let cargoMass = document.querySelector("input[name=cargoMass]");
    const cargoMassValue = cargoMass.value;

    let list = document.getElementById("faultyItems");

    formSubmission(
      document,
      list,
      pilotValue,
      copilotValue,
      fuelLevelValue,
      cargoMassValue
    );
  });
});
