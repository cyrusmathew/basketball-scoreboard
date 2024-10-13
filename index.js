let homepts = document.getElementById("home-pts");
let homeCounter = 0;
let guestpts = document.getElementById("guest-pts");
let guestCounter = 0;

//HOME BUTTONS
function addHomePoint() {
    homeCounter += 1;
    homepts.textContent = homeCounter;
}
function addHomeTwoPoint() {
    homeCounter += 2;
    homepts.textContent = homeCounter;
}
function addHomeThreePoint() {
    homeCounter += 3;
    homepts.textContent = homeCounter;
}



//GUEST BUTTONS
function addGuestPoint() {
    guestCounter += 1;
    guestpts.textContent = guestCounter;
}
function addGuestTwoPoint() {
    guestCounter += 2;
    guestpts.textContent = guestCounter;
}
function addGuestThreePoint() {
    guestCounter += 3;
    guestpts.textContent = guestCounter;
}

//NEW GAME BUTTON
function resetScores() {
    homeCounter = 0;
    homepts.textContent = homeCounter;

    guestCounter = 0;
    guestpts.textContent = guestCounter;
}
