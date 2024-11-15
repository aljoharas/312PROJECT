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
            var total = parseInt(document.getElementById("totalCost").innerHTML.replace("$",""))
            alert(discountPercent);
            var discountedAmount = total * (discountPercent/100);
            var newTotal = total - discountedAmount;
            document.getElementById("totalCost").innerHTML = "$" + newTotal;
        }
    }*/

        
/* ###################### INSERT NEXT PAGE NAME ###################### */