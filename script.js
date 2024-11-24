/* ###################### CART ###################### */
function displayItems(){
    var cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    
}


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


/* ###################### Seller Daashboard ###################### */  
/*document.addEventListener("DOMContentLoaded", function () {
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
});*/


/* ######################        Themes         ###################### */

window.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.querySelector('.theme-toggle'); 
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const themeIcon = document.getElementById("theme-icon");

 
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
     
        body.classList.add('night-mode');
        header.classList.add('night-mode');
        footer.classList.add('night-mode');
        themeIcon.src = "images/theme-toggle0.png"; 
    } else {
     
        body.classList.remove('night-mode');
        header.classList.remove('night-mode');
        footer.classList.remove('night-mode');
        themeIcon.src = "images/theme-toggle1.png"; 
    }

   
    function toggleTheme() {
     
        body.classList.toggle('night-mode');
        header.classList.toggle('night-mode');
        footer.classList.toggle('night-mode');

      
        if (body.classList.contains('night-mode')) {
          
            themeIcon.src = "images/theme-toggle0.png";
            localStorage.setItem('theme', 'night'); 
        } else {
      
            themeIcon.src = "images/theme-toggle1.png";
            localStorage.setItem('theme', 'day');
        }
    }

    
    themeToggle.addEventListener('click', toggleTheme);
});
//Stars code
//first star
const stars = document.querySelectorAll("#Stars1 .stars1 i");
    stars.forEach((star, index1) => {
      star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
          index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
      });
    });
 //second star 
 const stars2= document.querySelectorAll("#Stars2 .stars2 i");
    stars2.forEach((star, index1) => {
      star.addEventListener("click", () => {
        stars2.forEach((star, index2) => {
          index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
      });
    });
   

