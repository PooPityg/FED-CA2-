function agePrice(age) {
    if (age < 10) {
        return ['invalid', 'invalid']
    } else if (age <= 18) {
        return [15, 50]
    } else if (age <= 64) {
        return [17, 56]
    } else return [15, 50]
}

function updatePrice() {
    const age = parseInt(document.getElementById('ageGroup').value) || 0
    const exhibits = parseInt(document.getElementById('exhibits').value) || 0
    const category = agePrice(age);
    let total

    if (exhibits == 4) {
        total = agePrice(age)[1]
    } else {
        total = agePrice(age)[0] * exhibits;
    }

    document.getElementById('price').textContent = ` Total: $${total || 0}`;
}

document.getElementById('ageGroup').addEventListener('input', updatePrice);
document.getElementById('exhibits').addEventListener('input', updatePrice);