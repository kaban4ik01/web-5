document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); // предотвращаем отправку формы

    const tovarSelect = document.getElementById('tovar');
    const quantityInput = document.querySelector('input[name="quantity"]');
    const resultLabel = document.querySelector('label[for="result"]');

    const selectedPrice = parseFloat(tovarSelect.value);
    const quantity = parseFloat(quantityInput.value);

    // Проверяем, вводит ли пользователь дробное число
    if (!Number.isInteger(quantity)) {
        resultLabel.textContent = "Пожалуйста, введите целое число для количества.";
        return;
    }

    // Проверяем, выбран ли товар
    if (isNaN(selectedPrice) || quantity < 1) {
        resultLabel.textContent = "Пожалуйста, выберите товар и введите корректное количество.";
        return;
    }

    const totalPrice = selectedPrice * quantity;
    resultLabel.textContent = `Общая стоимость: ${totalPrice} руб.`;
});
