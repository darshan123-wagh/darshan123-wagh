  
  document.querySelector(".box1").addEventListener("click",function()
{ 
    document.querySelector(".box1").style.borderBottom="2px solid blue"; 
    document.querySelector(".box2").style.borderBottom="2px solid black"
}
);



document.querySelector(".box2").addEventListener("click",function()
{
    document.querySelector(".box2").style.borderBottom="2px solid blue";  
    document.querySelector(".box1").style.borderBottom="2px solid black";
}
);
document.querySelector(".btn").addEventListener("click",function(){
   alert("OTP sent on your mobile number")
   console.log("darshan");

})

    