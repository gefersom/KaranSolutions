   function init()
   {
      var buttonStart = document.getElementById("btnStartSearching");
      buttonStart .addEventListener('click', startPrimeCalculation, false);
      
      var buttonStop = document.getElementById("btnStop");
      buttonStop .addEventListener('click', stopPrimeCalculation, false);
      
      var numberInput = document.getElementById('number');
      numberInput.addEventListener('input', changeFontSize, false);
      numberInput.addEventListener('input', validateInputNumber, false);
   }	
         
   function isPrime(number)
   {
   		var square = Math.sqrt(number);

	   	if ( number == 1 )
		   	return true;
		   	
		if ( number === 2 )
			return true;

      	for( var i = 2; i < square; ++i)
	   	{
	   		if ( (number % i) === 0 )
	   		{
	   			return false;
	   		}
		}
		
		return true;
   }
   
   function startPrimeCalculation()
   {
      	lastCalculatedNumber = 1;
   		results = [];
   		primeCalculation = setInterval(calculatePrimeFactors, 700);
   		
   		var inputNumber = document.getElementById('number');
   		var number = inputNumber.value;
   		
		var numberBefore= document.getElementById("numberBefore");
   		numberBefore.innerHTML = ": " + number;
   }
   
   function stopPrimeCalculation()
   {
   		clearInterval(primeCalculation);
   		lastCalculatedNumber = 1;
   		results = [];
   }

         
   function calculatePrimeFactors()
   {
   		var inputNumber = document.getElementById('number');
   		var number = inputNumber.value;
   		var calculatedValueOutput = document.getElementById("calculatedValue");
   		
   		calculatedValueOutput.style.fontSize = "30px";
   		calculatedValueOutput.style.alignItems = "";
   		
   		if(  number < 1 )
   		{
   			calculatedValueOutput.innerHTML = "Inform a number greater than 0.";   		
   		}
   		else
   		{
   			if ( lastCalculatedNumber < number )
   			{
	   			if ( isPrime(lastCalculatedNumber) )
		   			results.push(lastCalculatedNumber);
	   			
				calculatedValueOutput.innerHTML = "<p>" + results + "</p>"; 
	   			
				++lastCalculatedNumber;
			}
			else
			{
				
				stopPrimeCalculation();
			}
   		}            
   }
   
   function validateInputNumber()
   {
	    var inputNumber= document.getElementById("number");
		var value = inputNumber.value;
	 
	   	if ( number.value >= 1 || value.length === 0 )
		{
			inputNumber.style.backgroundColor = "#FCFCFC";
		}
		else
		{
			stopPrimeCalculation();
            inputNumber.style.backgroundColor = "#FFD9D9";
		}
   }

	function changeFontSize(e)
	{
		var element = document.getElementById("number");
		var value = element.value;
		
		if ( value.length === 0 )
		{
			element.style.fontSize="25px";
		}		
		else
		{
			element.style.fontSize="60px";
		}
	}
   
   window.addEventListener('load', init, false);
