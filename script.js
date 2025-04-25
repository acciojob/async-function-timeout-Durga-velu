//your JS code here. If required.

let btn=document.getElementById("btn")

btn.addEventListener(("click"),()=>{
let delay=document.getElementById("delay")
	let text=document.getElementById("text")
	let check=()=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(text.value)
			},delay.value)
		})
	}

async function check()=>{
	let checkValue=await check;
	let output=document.getElementById("output");
	output.innerHTML=output;
}
	check()
})





