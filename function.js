var openi = document.getElementById("open")
var closei = document.getElementById("close")
var sidebarchangediv = document.getElementById("sidebarchangediv")
var sidebar =  document.getElementById("sidebar")

openi.addEventListener('click', ()=>{
   sidebarchangediv.style.display="inline-block";
   openi.style.visibility="hidden";
   closei.style.visibility="visible";
})
   
closei.addEventListener('click', ()=>{
   sidebarchangediv.style.display="none";
   closei.style.visibility="hidden";
   openi.style.visibility="visible";

})
// Cart()=>
var cartcount = 0;
var realcartcount = document.querySelectorAll("cartcount")
var addtocart = document.querySelectorAll("#addtocartbtn")


// function addtoocart(){
   // addtocart.forEach(addtocart)
   // var cartcount =document.querySelectorAll("#cartcount")
   addtocart.forEach(function (addcart){
     cartcount++;
         console.log(cartcount)
         // console.log(addtocart)
         
         realcartcount.innerHTML=cartcount.toString(); 
      }
   )

      
   