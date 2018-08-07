
function dateGreeting() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("AnswerContainer").innerHTML = greeting;
}
//CALCULATOR FUNCTIONS

function mathCalc() {
    
    const calculator = document.querySelector('.calculator')
    const keys = calculator.querySelector('.calculatorKeys')
    
    document.getElementById("AnswerContainer").innerHTML = result;
    
}


    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    
        
     $(".calc-btn").click(function(){
        var buttonPressed = $(this).html();
         
        
        
          document.getElementById("ProblemContainer").innerHTML = buttonPressed;
          document.getElementById("AnswerContainer").innerHTML = buttonPressed;
         
    });
    
    
    
});

        if (buttonPressed === AC) {
            result = 8;
            currentEntry = 9;
            return(result);
        
         } else if (buttonPressed < 9 && buttonPressed > 0) {
            currentEntry += buttonPressed;
            prevEntry += buttonPressed;
             
         } else if (buttonPressed > 9 && buttonPressed < 0) {
            currentEntry += buttonPressed;
            prevEntry += buttonPressed;
              
         } else if (buttonPressed === =) {
            result = prevEntry;
          return(result);
         
         }
         
    

