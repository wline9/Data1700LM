function helloWorld(event) {
    console.log(event);
    alert("Hello World!");
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("helloWorldButton");
    button.addEventListener("click", helloWorld);
});