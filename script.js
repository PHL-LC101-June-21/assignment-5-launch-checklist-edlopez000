// Write your JavaScript code here!

// const { formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", () => {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then((result) => {
      listedPlanets = result;
    })
    .then(() => {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(listedPlanets);

      addDestination(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.moons,
        selectedPlanet.imageUrl
      );
    });

  let form = document.querySelector("form");
  form.addEventListener("submit", () => {
    event.preventDefault();

    const pilotName = document.querySelector("input[name=pilotName]");
    const pilotValue = pilotName.value;

    const copilotName = document.querySelector("input[name=copilotName]");
    const copilotValue = copilotName.value;

    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const fuelLevelValue = fuelLevel.value;

    const cargoMass = document.querySelector("input[name=cargoMass]");
    const cargoMassValue = cargoMass.value;

    const list = document.getElementById("faultyItems");

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
