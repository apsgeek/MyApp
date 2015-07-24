// JavaScript Document
function tonFunction() {
var input, output;

//Get the value of the input field with id ="num"

input = document.getElementById("num").value;

//Number is Natural and Whole


if (input%1==0)
{
	if(input >0)
	{
		if(input%2==0)
		{
			output="Number is Natural, Whole, +Ve Integer, +Ve Even Number";
		}
		
		else{
			
			output="Number is Natural, Whole, +Ve Integer, +Ve odd  Number";
		}
	}
	
	else if(input <0)
	{
		if(input%2==0)
		{
				output="Number is -Ve Integer and -Ve Even Number";
		
		}
		else{
			
			output="Number is -Ve Integer and -Ve Odd Number";
		}
	}

	else if(input==0 )
	{
		output="Number is Whole";
	}
}

//Number is Decimal Number
if (input%1!=0)
{
	output ="Number is Decimal number";
}


//
//Display Output
document.getElementById("output").innerHTML = output;



}