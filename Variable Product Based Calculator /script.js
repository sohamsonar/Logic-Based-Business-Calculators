 function calculateTotal() 	
		{
            let size = parseFloat(document.getElementById('size').value);
            let topSheet = parseFloat(document.getElementById('top_sheet').value);
            let weight = parseFloat(document.getElementById('weight').value);
            let absorption = parseFloat(document.getElementById('absorption').value);
            let material = parseFloat(document.getElementById('material').value);
            let quantity = parseFloat(document.getElementById('quantity').value);

            // Calculate base total
            let totalPerPiece = size + topSheet + main_conditions()+ material;

           

            let total = totalPerPiece * quantity;

            // Display the total amount
            document.getElementById('totalAmount').textContent = "Total Amount: Rs. " + total.toFixed(1);

            // Display the price per pad
            document.getElementById('perPadPrice').textContent = "Price per pad: Rs. " + (total/quantity).toFixed(2);
        }

        function updateDetails() 
		{
            let sizeText = document.getElementById('size').options[document.getElementById('size').selectedIndex].text;
            let topSheetText = document.getElementById('top_sheet').options[document.getElementById('top_sheet').selectedIndex].text;
            let weightText = document.getElementById('weight').options[document.getElementById('weight').selectedIndex].text;
            let absorptionText = document.getElementById('absorption').options[document.getElementById('absorption').selectedIndex].text;
            let materialText = document.getElementById('material').options[document.getElementById('material').selectedIndex].text;
			let total=0;
            document.getElementById('selectedSize').textContent = "Size: " + sizeText;
            document.getElementById('selectedTopSheet').textContent = "Top Sheet: " + topSheetText;
            document.getElementById('selectedWeight').textContent = "Weight: " + weightText;
            document.getElementById('selectedAbsorption').textContent = "Absorption: " + absorptionText;
            document.getElementById('selectedMaterial').textContent = "Material: " + materialText;
			
			
			let size = parseFloat(document.getElementById('size').value);
            let topSheet = parseFloat(document.getElementById('top_sheet').value);
            let weight = parseFloat(document.getElementById('weight').value);
            let absorption = parseFloat(document.getElementById('absorption').value);
            let material = parseFloat(document.getElementById('material').value);
            let quantity = parseFloat(document.getElementById('quantity').value);
			
			
			
            // Calculate base total
             let totalPerPiece = size + topSheet + material;

            // Apply conditions based on quantity
            if(quantity<1000 && size=== 1.55)
			{
				totalPerPiece=3;
				total=totalPerPiece*quantity;
			}
			if(quantity<1000 && size===1.90)
			{
				totalPerPiece=4;
				total=totalPerPiece*quantity;
			}
			if(quantity<1000 && size===2.70)
			{
				totalPerPiece=5;
				total=totalPerPiece*quantity;
			}
			if(quantity>1000 && quantity<100000)
			{
				total = (totalPerPiece+main_conditions()) * quantity;
				
			}
			if(quantity>100000)
			{
				let semi_total = totalPerPiece - 0.10;
				total=(semi_total+main_conditions()) * quantity;
				
			}
			
            

            // Display the total amount
            document.getElementById('totalAmount').textContent = "Total Amount: Rs. " + total.toFixed(2);

            // Display the price per pad
            document.getElementById('perPadPrice').textContent = "Price per pad: Rs. " + (total/quantity).toFixed(2);
        
        }
		function updateImage()
		{
            let size = document.getElementById('size').value;
            let imageElement = document.getElementById('productImage');

            // Change image source based on size selection
            if (size == "1.70") {
                imageElement.src = "img1.jpeg";
            } else if (size == "1.90") {
                imageElement.src = "img2.jpg";
            } else if (size == "2.70") {
                imageElement.src = "img3.jpg";
            } else {
                imageElement.src = "img4.jpg";
            }
			
        }
		
		function main_conditions() 
		{
			let size = document.getElementById('size').value;
			let weight=document.getElementById('weight').value;
			let abso=document.getElementById('absorption').value;
			let type=document.getElementById('material').value;
			let extra=0;
			// Weight Category 
			document.getElementById('7gm').disabled = true;
			document.getElementById('8gm').disabled = true;
			document.getElementById('9gm').disabled = true;
			document.getElementById('10gm').disabled = true;
			document.getElementById('11gm').disabled = true;
			document.getElementById('12gm').disabled = true;
			document.getElementById('13gm').disabled = true;
			
			//Absorption capacity
			document.getElementById('40ml').disabled = true;
			document.getElementById('50ml').disabled = true;
			document.getElementById('60ml').disabled = true;
			document.getElementById('70ml').disabled = true;
			document.getElementById('80ml').disabled = true;
			document.getElementById('100ml').disabled = true;
			document.getElementById('120ml').disabled = true;
			document.getElementById('150ml').disabled = true;
			// Disable Ultra/SAP paper if the selected size is 240 mm
			if (size === "1.55") 
			{  
				if(weight === "9gm")
				{
					extra+=0.10;
				}
				if(abso === "50ml")
				{
					extra+=0.10;
				}
				//weight
				document.getElementById('7gm').disabled = false;
				document.getElementById('8gm').disabled = false;
				document.getElementById('9gm').disabled = false;
				//absorption
				document.getElementById('40ml').disabled = false;
				document.getElementById('50ml').disabled = false;
				
			}
			if (size === "1.90") 
			{  
				//weight
				if(weight === "10gm")
				{
					extra+=0.10;
				}
				// absorption
				if(abso === "150ml")
				{
					extra+=0.40;
				}
				else if(abso === "120ml")
				{
					extra+=0.30;
				}
				else if(abso === "100ml")
				{
					extra+=0.20;
				}
				else if(abso === "80ml")
				{
					extra+=0.10;
				}
				//Type
				if(type==="1.25")
				{
					extra+=0.15;
					document.getElementById('120ml').disabled = false;
					document.getElementById('150ml').disabled = false;
				}
				else if(type==="0.55")
				{
					extra-=0.15;
				} 
				else if(type==="0.35")
				{
					extra+=0.05;
				}
				else if(type==="0.15")
				{
					extra-=0.05;
				}
				
				
					
				
				//weight
				document.getElementById('8gm').disabled = false;
				document.getElementById('9gm').disabled = false;
				document.getElementById('10gm').disabled=false;
				//absorption
				document.getElementById('50ml').disabled = false;
				document.getElementById('60ml').disabled = false;
				document.getElementById('80ml').disabled = false;
				document.getElementById('100ml').disabled = false;
				
			}
			if(size === "2.70") 
			{  
			//weight
				if(weight === "11gm")
				{
					extra+=0.05;
				}
				if(weight === "12gm")
				{
					extra+=0.10;
				}
				if(weight === "13gm")
				{
					extra+=0.15;
				}
			//absorption
				
				 if(abso === "80ml" || abso === "150ml")
				{
					extra+=0.10;
				}
			//Type
				if(type==="1.25")
				{
					extra+=0.65;
					document.getElementById('100ml').disabled = false;
					document.getElementById('120ml').disabled = false;
					document.getElementById('150ml').disabled = false;
				}
				if(type==="0.55")
				{
					extra-=0.55;
				} 
				 if(type==="0.05")
				{
					extra+=0.05;
				}
				if(type==="0.15")
				{
					extra-=0.05;
				}
				//weight
				document.getElementById('9gm').disabled = false;
				document.getElementById('10gm').disabled = false;
				document.getElementById('11gm').disabled = false;
				document.getElementById('12gm').disabled = false;
				document.getElementById('13gm').disabled = false;
				//absorption
				document.getElementById('60ml').disabled = false;
				document.getElementById('70ml').disabled = false;
				document.getElementById('80ml').disabled = false;
				
			}
			return extra;
			
		}
