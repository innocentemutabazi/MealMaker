const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Meal is ${this._meal} for $${this._price}`;
        }
        return "Today's special is not set yet.";
    }
};

const setSpecialButton = document.getElementById('set-special');
const mealInput = document.getElementById('meal');
const priceInput = document.getElementById('price');
const specialDiv = document.getElementById('special');

setSpecialButton.addEventListener('click', function() {
    menu.meal = mealInput.value;
    menu.price = parseFloat(priceInput.value);
    displaySpecial();
});

function displaySpecial() {
    specialDiv.textContent = menu.todaysSpecial;
}
