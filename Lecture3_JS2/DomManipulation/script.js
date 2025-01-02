function helloWorld(event) {
    console.log(event);
    document.getElementById("output").innerText = "Hello World!"
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("helloWorldButton");
    button.addEventListener("click", helloWorld);
});