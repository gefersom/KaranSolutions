
   function init(){
      var button = document.getElementById("btnCalculate");
      button.addEventListener('click', calculatePi, false);
      
      var numberInput = document.getElementById('number');
      numberInput.addEventListener('keyup', changeFontSize, false);
      numberInput.addEventListener('keyup', validateInputNumber, false);
   }	
         
   function calculatePi()
   {
   		var inputNumber = document.getElementById('number');
   		var number = inputNumber.value;
   		var calculatedValueOutput = document.getElementById("calculatedValue");
   		
   		if ( number >= 2 )
   		{
	   		var fib = [0, 1];
	   		
			for(var i = fib.length; i < number; i++) 
			{
			    fib[i] = fib[i-2] + fib[i-1];
			}

			calculatedValueOutput.innerHTML = "<p>" + fib + "</p>"; 
   		}
   		else
   		{
            calculatedValueOutput.innerHTML = "Inform a number greater than 1.";
   		}
   }
   
   function validateInputNumber()
   {
	    var inputNumber= document.getElementById("number");
		var value = inputNumber.value;
	
	   	if ( number.value >= 2 || value.length === 0 )
		{
			inputNumber.style.backgroundColor = "#FCFCFC";	   			
		}
		else
		{
            inputNumber.style.backgroundColor = "#FFD9D9";
		}
   }

	function changeFontSize()
	{
		var element = document.getElementById("number");
		var value = element.value;
		
		if ( value.length === 0 )
		{
			element.style.fontSize="14px";
		}		
		else
		{
			element.style.fontSize="60px";
		}
	}
   
   window.addEventListener('load', init, false);

