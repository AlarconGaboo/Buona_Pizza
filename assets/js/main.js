document.addEventListener('DOMContentLoaded', function () {
    const maxFreeIngredients = 3;
    const ingredientPrice = 800;
    const pizzaPrice = 15000;

    const checkboxes = document.querySelectorAll('.ingredient');
    const selectedIngredientsElement = document.getElementById('selected-ingredients');
    const extraIngredientsElement = document.getElementById('extra-ingredients');
    const extraPriceElement = document.getElementById('extra-price');
    const tipInput = document.getElementById('tip');
    const submitOrderButton = document.getElementById('submit-order');

    let selectedIngredients = [];
    let extraIngredients = [];

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateIngredients);
    });

    function updateIngredients() {
        selectedIngredients = [];
        extraIngredients = [];
        let extraPrice = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                if (selectedIngredients.length < maxFreeIngredients) {
                    selectedIngredients.push(checkbox.value);
                } else {
                    extraIngredients.push(checkbox.value);
                    extraPrice += ingredientPrice;
                }
            }
        });

        selectedIngredientsElement.textContent = selectedIngredients.join(', ');
        extraIngredientsElement.textContent = extraIngredients.join(', ');
        extraPriceElement.textContent = `$${extraPrice}`;
    }

    submitOrderButton.addEventListener('click', function () {
        const tipValue = parseInt(tipInput.value, 10);
        if (isNaN(tipValue) || tipValue <= 0) {
            alert('Aún no ha definido una propina');
        } else {
            alert(`Su propina de $${tipValue} ha sido enviada`);
        }
    });
});
