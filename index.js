 //Question 3

let science = "Physics, Chemistry, Biology, Technical Drawing";
let socscience = "Accounting, Commerce, Marketing, Geography";
let arts = "Government, Economics, Literature, History";
let general = "English, Mathematics";

let bolatito = "arts"

function subjectFinder(name) {
    if (name==="arts"){
        console.log(arts)
    }

    else if (name === "socscience") {
        console.log(socscience)
    } 

    else if (name === "science") {
        console.log(science)
    } 
    
    else {
      console.log(general);
    }
}


subjectFinder(bolatito)



//Question 5


function highestPowerof2(num)
{
	let pwr = null;
	for (let i = num; i >= 1; i--)
		{
		if ((i & (i - 1)) == 0)
			{
				pwr = i;
				break;
			}
		}
	console.log(`The number ${pwr} is the power of 2 nearest to ${num}`);
}



highestPowerof2(40)




