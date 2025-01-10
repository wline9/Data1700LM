document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById('curse-removal').addEventListener('change', function () {
        const curseStrength = document.getElementById('curse-strength');
        const curseLabel = document.getElementById('curse-strength-label');
        if (this.checked) {
            curseStrength.style.display = 'block';
            curseLabel.style.display = 'block';
        } else {
            curseStrength.style.display = 'none';
            curseLabel.style.display = 'none';
        }
    });

    // Hijack the form submit action
    document.getElementById('order-form').addEventListener('submit',
        function (event) {
            event.preventDefault(); // Prevent the default form submission behaviour

            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            console.log(data);

            // Reset the form
            event.target.reset();
            document.getElementById('curse-strength').style.display = 'none';
            document.getElementById('curse-strength-label').style.display = 'none';
        });
})
