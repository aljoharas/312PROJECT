/* ###################### CART ###################### */

    /* Checkout Message */
        function checkout() {
            var total = document.getElementById("totalCost").innerHTML;
            alert("Thank you for your purchase! \nYour total is: " + total);
            window.location.href="Product evaluation.html";
        }

    /* Quantity Buttons */
        // Decrease 
        function decrease(button) {
            var parent = button.parentNode;
            var quant = parseInt(parent.querySelector(".quantity").value);
            if (quant > 1) {
                parent.querySelector(".quantity").value = quant - 1;
                var price = parseInt(parent.parentNode.querySelector(".price").innerHTML.replace("$", ""));
                var subTotal = (quant-1) * price;
                parent.parentNode.querySelector(".subtotal").innerHTML = "$" + subTotal;
            }
            else {
                parent.parentNode.parentNode.remove(); 
            }
            updatePrice();
        }

        // Increase 
        function increase(button) {
            var parent = button.parentNode;
            var quant = parseInt(parent.querySelector(".quantity").value) + 1;
            parent.querySelector(".quantity").value = quant;
            var price = parseInt(parent.parentNode.querySelector(".price").innerHTML.replace("$", ""));
            var subTotal = quant * price;
            parent.parentNode.querySelector(".subtotal").innerHTML = "$" + subTotal;
            updatePrice();
        }

    /* Remove */
    function removeItem(button) {
        button.parentNode.parentNode.parentNode.remove();
        var items = document.getElementsByClassName("item");
        if (items.length == 0){
            document.getElementById("shippingCost").innerHTML = "$0"  
        }
        updatePrice();
    }

    /* Empty Cart */
    function empty() {
        var cart = document.getElementById("cart");
        var items = cart.getElementsByClassName("item");
        for (var i = items.length - 1; i >= 0; i--) {
            items[i].remove();
        }
        document.getElementById("shippingCost").innerHTML = "$0"
        updatePrice();
    }

    /* Update total price */
    function updatePrice(){
        var subTotal = 0;
        var total = 0;
        var items = document.getElementsByClassName("item");
        for (var i=items.length -1 ; i >=0 ; i--){
            subTotal += parseInt(items[i].querySelector(".subtotal").innerHTML.replace("$",""));
            total += parseInt(items[i].querySelector(".subtotal").innerHTML.replace("$",""));
        }
        total += parseInt(document.getElementById("shippingCost").innerHTML.replace("$",""));
        document.getElementById("finalSubtotal").innerHTML = "$" + subTotal;
        document.getElementById("totalCost").innerHTML = "$" + total;
        discount();
    }

    /* Continue Shopping */
    function shop(){
        window.location.href="homepage.html";
    }

    /* Apply Discount */
    /*function discount(){
        var discount = document.getElementById("discountbox").value;
        if (discount.startsWith("TTL")){
            var discountPercent = parseFloat(discount.substring(3));
            var total = parseInt(document.getElementById("subtotal").innerHTML.replace("$",""));
            var discountedAmount = total * (discountPercent/100);
            document.getElementById("discountedAmount").innerHTML = "$" + discountedAmount;
            var shippingCost = parseInt(document.getElementById("shippingCost").innerHTML.replace("$",""));
            var newTotal = total - discountedAmount + shippingCost;
            document.getElementById("totalCost").innerHTML = "$" + newTotal;
        }
        else{
            alert("Invalid discount code. \nTry again!");
        }
    }*/

/* ###################### Seller Daashboard ###################### */  
document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const productCount = document.getElementById("product-count");
   
    let products = JSON.parse(localStorage.getItem("products")) || [];

    productCount.textContent = products.length;

    if (products.length === 0) {
        productList.innerHTML = "<p style='padding: 1em; color: #888;'>No products available.</p>";
    } else {
        displayProducts(products);

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    }

    function displayProducts(products) {
        productList.innerHTML = ""; 
        if (products.length === 0) {
            productList.innerHTML = "<p style='padding: 1em; color: #888;'>No products available.</p>";
        } else {
            products.forEach((product, index) => {
                const productBox = document.createElement("div");
                productBox.classList.add("product-box");

                productBox.innerHTML = `
                    <div class="product-item">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.label}">
                        </div>
                        <div class="product-details">
                            <div class="product-header">
                                <p class="product-name">${product.label}</p>
                                <p class="product-price">$${product.price}</p>
                            </div>
                            <div class="product-description">${product.description}</div>
                            <div class="product-quantity-category">
                                <div class="product-category">
                                    <p>Quantity: ${product.quantity}</p>
                                </div>
                                <div class="product-category">
                                    <p>Category: ${product.category}</p>
                                </div>
                            </div>
                            <div class="delete-container">
                                <button class="delete-button" data-index="${index}">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
                productList.appendChild(productBox);
            });

            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', handleDelete);
            });
        }
    }

    function handleDelete(event) {
        const productIndex = event.target.getAttribute('data-index');
        
        const isConfirmed = confirm("Are you sure you want to delete this product?");
        if (isConfirmed) {
            products.splice(productIndex, 1);
            localStorage.setItem('products', JSON.stringify(products));
            displayProducts(products);
            productCount.textContent = products.length;
        }
    }
});
/* ###################### INSERT NEXT PAGE NAME ###################### */
/* Category pages */
/* sorting */
/*
document.addEventListener("DOMContentLoaded",() => {
    const filterDropdown = document.getElementById("filter");
    const productGrid = document.querySelector(".product-grid");
    const products= array.from(productGrid.children);
    filterDropdown.addEventListener("change" , () => {
        const selectedOption= filterDropdown.value;
let sortedProducts;
if(selectedOption=="order2"){
    // high to low
    sortedProducts = products.sort((a,b)=>{
return getPrice(b)-getPrice(a);});
    }else if(SelectionOption=="order3"){
        // low to high
        sortedProducts = products.sort((a,b)=>{
            return getPrice(a)-getPrice(b);});
    }else if(selectOption == "A to Z"){
        // A to Z
        sortedProducts= products.sort((a,b)=>{
            return getName(a).localeCompare(getName(b));
        });
        }else if(selectOption == "Z to A"){
            // Z to A
            sortedProducts= products.sort((a,b)=>{
                return getName(b).localeCompare(getName(a));
            });
    }
    productGrid.innerHTML="";
    sortedProducts.forEach(product=> productGrid.appendChild(product));
});
function getPrice(product){
    const priceText = product.querySelector("p").textContent;
    return parseFloat(pricetext.match(/(\d+)/)[0]);
}
function getName(product){
    return product.querySelector("h4").textContent.trim();}
   
}); */


