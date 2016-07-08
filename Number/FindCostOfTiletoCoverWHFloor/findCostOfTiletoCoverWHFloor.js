
   function init(){
      var button = document.getElementById("btnCalculate");
      button.addEventListener('click', buttonClicked, false);
   }	
         
  function buttonClicked()
   {
   		var inputAreaWidth = document.getElementById('inputAreaWidth');
		var areaWidth = inputAreaWidth.value;
		
		var inputAreaHeight = document.getElementById('inputAreaHeight');
		var areaHeight = inputAreaHeight.value;
		
		var inputTileHeight = document.getElementById('inputTileHeight');
		var tileHeight = inputTileHeight.value;
		
		var inputTileWidth = document.getElementById('inputTileWidth');
		var tileWidth = inputTileWidth.value;
		
   		var totalCostOutput = document.getElementById("totalCost");
		
		var inputTileCost = document.getElementById('inputTileCost');
		var tileCost = inputTileCost.value;		
		

		if ( !(areaWidth > 0 && areaHeight > 0 && tileHeight > 0 && tileWidth > 0 &&  tileCost > 0) )
			return;
			
		var totalCost = (areaWidth * areaHeight) / ( tileWidth * tileHeight );
		totalCost *= tileCost;
			
        var totalCostOutput = document.getElementById("totalCost");
		totalCostOutput.innerHTML = totalCost;
   }
   
   window.addEventListener('load', init, false);

