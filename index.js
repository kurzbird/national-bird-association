const state = {
    birdCount: 0,
};

const hatchBird = () => {
    const newBird = document.createElement("span");
    const birdContainer = document.querySelector("#birdContainer");
    newBird.textContent = "🐦";
    birdContainer.appendChild(newBird);

    state.birdCount += 1;
    const birdCountContainer = document.querySelector("#birdCount");
    birdCountContainer.textContent = `Larry Birds: ${state.birdCount}`;
};

const registerEventHandlers = () => {
    const birdButton = document.querySelector("#hatchBirdButton");
    birdButton.addEventListener("click", hatchBird);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
