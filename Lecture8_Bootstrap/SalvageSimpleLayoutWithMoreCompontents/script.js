document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".btn-warning[data-bs-toggle='modal']");
    const itemName = document.getElementById("itemName");
    const itemPrice = document.getElementById("itemPrice");
    const confirmPurchaseBtn = document.getElementById("confirmPurchase");
    const purchaseToast = new bootstrap.Toast(document.getElementById("purchaseToast"));

    let selectedItem = "";
    let selectedPrice = "";

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedItem = this.getAttribute("data-item");
            selectedPrice = this.getAttribute("data-price");
            itemName.textContent = selectedItem;
            itemPrice.textContent = selectedPrice;
        });
    });

    // Handle purchase confirmation
    confirmPurchaseBtn.addEventListener("click", function () {
        const modal = bootstrap.Modal.getInstance(document.getElementById("buyModal"));
        modal.hide(); // Close modal
        purchaseToast.show(); // Show toast
    });
});