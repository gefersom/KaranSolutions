   function init(){
      var button = document.getElementById("btnCalculate");
      button.addEventListener('click', calculatePrimeFactors, false);
      
      var numberInput = document.getElementById('number');
      numberInput.addEventListener('input', changeFontSize, false);
      numberInput.addEventListener('input', validateInputNumber, false);
   }	
         
   function isPrime(number)
   {
   		var square = Math.sqrt(number);
	   	var prime = false;
	   	
	   	if ( number == 1 )
		   	return true;
		   	
		if ( number === 2 )
			return true;

      	for( var i = 2; i < number ; ++i)
	   	{
	   		prime = prime || ( (number % i) === 0 );
		}
		
		return !prime;
   }
         
   function calculatePrimeFactors()
   {
   		var inputNumber = document.getElementById('number');
   		var number = inputNumber.value;
   		var calculatedValueOutput = document.getElementById("calculatedValue");
   		
   		calculatedValueOutput.innerHTML = "factors";
   		
   		if ( number >= 1 )
   		{
   			var results = [];
	
	   		for( var n = 1; n < number ; ++n)
	   		{
		   		if ( isPrime(n) )
					results.push( n );
			}
			
			if ( results.length > 0)
			{
				calculatedValueOutput.innerHTML = "<p>" + results + "</p>"; 
				document.writeln(calculatedValueOutput.innerHTML.style.width);
			}
			else
				calculatedValueOutput.innerHTML = "It's not a prime number. "; 
   		}
   		else
   		{
            calculatedValueOutput.innerHTML = "Inform a number greater than 0.";
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

