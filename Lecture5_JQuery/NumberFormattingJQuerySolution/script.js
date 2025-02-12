$(document).ready(() => {
    const goldInput = $('#goldWeight');
    const puritySelect = $('#goldPurity');
    const resultOutput = $('#pureGoldWeight');

    function convertGold() {
        const rawWeight = Number(goldInput.val()); // Input weight in grams
        const purity = Number(puritySelect.val()); // Selected purity in carats

        const purityPercentage = purity / 24;
        const pureGoldWeight = (rawWeight * purityPercentage) / 1000;
        const formattedWeight = pureGoldWeight.toFixed(3);

        resultOutput.text(isNaN(formattedWeight) || rawWeight <= 0
            ? 'Invalid Input!'
            : `${formattedWeight}`);
    }

    goldInput.on('input', convertGold);
    puritySelect.on('input', convertGold);
});