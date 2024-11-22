document.querySelector('.burger').addEventListener('click', () => {
   const navLinks = document.querySelector('.nav-links');
   navLinks.classList.toggle('active');
});
var icon=document.getElementById("icon")
icon.onclick=function(){
   document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
       icon.src="sun.png";
   }
   else{
       icon.src="half-moon.png";
   }
   
}