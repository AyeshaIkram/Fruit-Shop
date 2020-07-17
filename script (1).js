let input =0;
let total_items = 0;
let total_amount = 0;
let apple_price = 10;
let span = 0;

function add() { 
    if (total_amount <= input ) {
        input =parseInt(document.getElementById('input').value); 
        if (input>apple_price) {
            document.getElementById("span").innerHTML = ++span;
            total_amount = apple_price * span;
            document.getElementById("total-amount").innerHTML= total_amount;
            input = input-apple_price;
            
        }
        else{ 
            alert("Enter some more money")
        }
        
    }
    else{
        alert("End")
    }
}
function minus() {
    
        input = parseInt(document.getElementById('input').value);
        document.getElementById("span").innerHTML = --span;
        total_amount = apple_price * span;
        document.getElementById("total-amount").innerHTML = total_amount;
        input = input + apple_price;
        if (total_amount<0) { 
            alert("Budget is over")
            document.getElementById("span").innerHTML = ++span;
            
            
            
        }
    }
    
