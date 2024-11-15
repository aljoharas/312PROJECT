/* ###################### CART ###################### */

    /* Checkout Message */
    function checkout(){
        alert("Thank you for your purchase!");
    }

    /* Quantity Buttons */
        // Decrease 
        function decrease(button){
            var parent = button.parentNode;
            var quant = parseInt(parent.querySelector(".quantity").value);
            if (quant > 1){
                parent.querySelector(".quantity").value = quant - 1;
            }
            else {
                parent.parentNode.parentNode.remove();
            }
        }

        // Increase 
        function increase(button){
            var parent = button.parentNode;
            var quant = parseInt(parent.querySelector(".quantity").value) + 1;
            parent.querySelector(".quantity").value = quant;
        }

        // Remove 
        function removeItem(button){
            button.parentNode.parentNode.parentNode.remove();
        }

        // Empty Cart
        function empty(){
            var cart = document.getElementById("cart");
            var items = cart.getElementsByClassName("item");
            for (var i = items.length -1 ; i >= 0 ; i--){
                items[i].remove();
            }
        }

