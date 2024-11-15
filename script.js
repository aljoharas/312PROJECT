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