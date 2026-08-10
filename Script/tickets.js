function agePrice(age) {
    if (age < 10) {
        return ['0', '0']
    } else if (age <= 18) {
        return [15, 50]
    } else if (age <= 64) {
        return [17, 56]
    } else return [15, 50]
}
// Determine the price per exhibit based on the age group, including the 4-exhibit package
function updatePrice() {
    const age = parseInt(document.getElementById('ageGroup').value)
    const exhibits = parseInt(document.getElementById('exhibits').value) 
    const category = agePrice(age);
    let total

    if (exhibits == 4) {
        total = agePrice(age)[1]
    } else {
        total = agePrice(age)[0] * exhibits;
    }
    // Change the price label 
    document.getElementById('price').textContent = ` Total: $${total}`;
}
// Change the total to say booking confirmed when the button is presed.
function updateTotal() {
    const submit = document.getElementById('submit');
    document.getElementById('price').textContent = "Ticket booking confirmed!"
}

document.getElementById('ageGroup').addEventListener('input', updatePrice);
document.getElementById('exhibits').addEventListener('input', updatePrice);
document.getElementById('submit').addEventListener('click', updateTotal);