document.addEventListener("DOMContentLoaded", () => {
    const goldInput = document.getElementById('goldWeight');
    const puritySelect = document.getElementById('goldPurity');
    const resultOutput = document.getElementById('pureGoldWeight');

    function convertGold() {
        const rawWeight = Number(goldInput.value); // Input weight in grams
        const purity = Number(puritySelect.value); // Selected purity in carats

        const purityPercentage = purity / 24;
        const pureGoldWeight = (rawWeight * purityPercentage) / 1000;
        const formattedWeight = pureGoldWeight.toFixed(3);

        resultOutput.textContent = isNaN(formattedWeight) || rawWeight <= 0
            ? 'Invalid Input!'
            : `${formattedWeight}`;
    }

    goldInput.addEventListener('input', convertGold);
    puritySelect.addEventListener('input', convertGold);
});