// current time 

let currentTime = ()=> {
    let curTime = new Date().toLocaleTimeString();
    document.querySelector("h1").innerText = curTime
};
currentTime();
let ans = setInterval(()=>{
    currentTime();
},1000);

//when stop the time then use of code 
/*setTimeout(()=>clearInterval(ans), 5000);*/