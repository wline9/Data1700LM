document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById('job-type').addEventListener('change', function () {
        const curseStrength = document.getElementById('curse-strength-container');
        const curseCheckBox = document.getElementById('curse-removal');
        if (curseCheckBox.checked) {
            curseStrength.classList.remove("hidden");
        } else {
            curseStrength.classList.add("hidden");
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
            document.getElementById('curse-strength-container').classList.add("hidden");
        });
})
