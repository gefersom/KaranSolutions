  function init(){
      var button = document.getElementById("btnCalculatePi");
      button.addEventListener('click', calculatePi, false);
      
      var input = document.getElementById('piDecimals');
      input.addEventListener('keyup', changeFontSize, false);
   }	
   
   function calculatePi()
   {
   	   	var pi = 3;
   		var n = 2;
   		var inputDecimalPlaces = document.getElementById('piDecimals');
   		var decimals = inputDecimalPlaces.value;
   		var calculatedPiValue = document.getElementById("calculatedPiValue");
   
   		
   		if ( decimals > 0 )
   		{

  			for ( var i = 0; i < decimals; ++i )
   			{
   				if ( i % 2 === 0 )
   				{
   					pi += 4/( n*(n+1)*(n+2) );
   				}
   				else
   				{
   					pi -= 4/( n*(n+1)*(n+2) );
   				}
   				n += 2;
   			}
   			
			calculatedPiValue.innerHTML = "<p>" + pi + "</p>"; 
   		}
   		else
   		{
            calculatedPiValue.innerHTML = "It's necessary to inform a positive number less then 1000 (a hundred).";
   		}
   }

	function changeFontSize()
	{
		var element = document.getElementById("piDecimals");
		var value = element.value;
		
		if ( value.length === 0 )
		{
			element.style.fontSize="14px";
		}		
		else
		{
			element.style.fontSize="70px";
		}
	}
   
   window.addEventListener('load', init, false);
