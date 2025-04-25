//your JS code here. If required.

let btn=document.getElementById("btn")


let delay=document.getElementById("delay")
	let text=document.getElementById("text")
	let check=()=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(text.value)
				reject(error)
				
			},delay.value)
		})
	}

async function displaytext()=>{
	try{
		let checkValue=await check();
	let output=document.getElementById("output");
	output.innerHTML=checkValue;
	}
	catch(error){
		      console.error("Error:", error);
	}
}

btn.addEventListener("click",displaytext)


