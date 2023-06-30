var resourceGatherMin = 1
var resourceGatherMax = 10
var sellMin = 1
var sellMax = 10
var resourceSellingLevel = 1
var resources = 0
var money = 0
var sellfunc;
var energy = 5;
var expenseMin = 1
var expenseMax = 100
var bkMine;

function comsubmit()
    {



        var command = document.getElementById("command").value;
        console.log(command);
        console.log(typeof(command))
        if (sellfunc == true){
            
            console.log("debug");
            if (parseInt(command) <= resources){
                console.log("debug");

                for (let i = 0; i <= resources; i+= 1){
                    console.log(`i = ${i}`)
                    money += randomIntFromInterval(sellMin, sellMax);
                    
                    console.log(`resources = ${resources}`);
                    document.getElementById("money").innerHTML = money;
                    
                }
                document.getElementById("mgain").innerHTML =`+${money}`;
                document.getElementById("mgain").classList.add('ganim');
                resources -= parseInt(command)
                document.getElementById("resources").innerHTML = resources;
            }
            else {
                
                document.getElementById("prompt1").innerHTML = "Invalid Amount or Command";

            }
        }

        if (bkMine == true) {

            if (parseInt(command) <= energy){
                for (let i = 0; i <= energy; i+= 1){
                    console.log(`i = ${i}`)
                    resources += randomIntFromInterval(sellMin, sellMax);
                    
                    console.log(`resources = ${resources}`);
                    document.getElementById("resources").innerHTML = resources;
                    
                }
                energy -= parseInt(command)
                document.getElementById("energy").innerHTML = energy;
                document.getElementById("prompt1").innerHTML = "";

            }


        }
        
        if (energy > 0){
            if (command === "mine") {
                
                resources += randomIntFromInterval(resourceGatherMin, resourceGatherMax)
                document.getElementById("resources").innerHTML = resources;
                energy = energy - 1;
                console.log(energy);
                
            }
            document.getElementById("energy").innerHTML = energy;
        }
        else {
            if (command === "mine") {
                document.getElementById("prompt1").innerHTML = "Not enough Energy!";
                document.getElementById("prompt1").style.color = "rgb(180, 30, 30)";
            }


        }
        if (command === "sell") {
            document.getElementById("prompt1").innerHTML = "How much would you like to sell?";

            sellfunc = true
        }
        if (command === "sleep") {
            energy += randomIntFromInterval(1, 10)
            expenses = randomIntFromInterval(expenseMin, expenseMax)
            money -= expenses
            document.getElementById("money").innerHTML = money;

            document.getElementById("energy").innerHTML = energy;
            document.getElementById("mgain").innerHTML =`+${expenses}`
            document.getElementById("mgain").classList.add('manim');
            setTimeout(function () {
                document.getElementById("mgain").classList.remove('manim');
            }, 1010);
            
        }
        if (command === "bulkmine") {
            document.getElementById("prompt1").innerHTML = "How much energy would you like to spend?";
            bkMine = true

        }
    }

function getImageSource() {
    var someimage = document.getElementById('product_top');
    var myimg = someimage.getElementsByTagName('pickaxe_img')[0];
    $(document).ready(function() {
        $('#img').attr('src', myimg);
      });
    console.log("Image source: " + myimg);
    window.location.href = "tool.html";
}





function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
      
    const rndInt = randomIntFromInterval(1, 6)
    console.log(rndInt)


