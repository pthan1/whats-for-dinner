var loginView = document.querySelector('.login-view');
var mainView = document.querySelector('.main-page-view');

var letsCookButton = document.querySelector('.lets-cook');
var loginButton = document.querySelector('.login-button');

var rightDiv = document.querySelector('.right-section');
var lookingFor = document.querySelector('.looking-for');

var sideDish = sideDishes[getRandomIndex(sideDishes)];
var mainDish = mainDishes[getRandomIndex(mainDishes)];
var dessert = desserts[getRandomIndex(desserts)];

var nameInputField = document.getElementById('name');

letsCookButton.addEventListener('click', showRecipe);
loginButton.addEventListener('click', loginAndShowMainApp);

function loginAndShowMainApp(e) {
    loginView.classList.add('hidden');
    mainView.classList.remove('hidden');
    mainView.classList.add('flex');
    lookingFor.innerHTML = `<p>Hello, ${nameInputField.value}!</p>
    <p>What are you looking for?</p>`;
    e.preventDefault();
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function showRecipe() {
    if (document.getElementById('side-dish').checked == true) {   
        showSideDish();
    } else if (document.getElementById('main-dish').checked == true) {  
        showMainDish();   
    }  else if (document.getElementById('dessert').checked == true) {
        showDessert(); 
    }
}

function showSideDish() {
    rightDiv.innerHTML = `
    <p>You should make:</p>
    <br>
    <p>${sideDish}
    `;   
}

function showMainDish() {
    rightDiv.innerHTML = `
    <p>You should make:</p>
    <br>
    <p>${mainDish}
    `;  
}

function showDessert() {
    rightDiv.innerHTML = `
    <p>You should make:</p>
    <br>
    <p>${dessert}
    `;  
}




