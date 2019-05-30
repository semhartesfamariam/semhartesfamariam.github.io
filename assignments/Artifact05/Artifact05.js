

var myImages =["https://res.cloudinary.com/everything-everywhere/image/upload/dpr_auto,f_auto,q_auto/v1551370312/Ethiopia-World-Heritage-Aksum.jpg",
               "https://www.star2.com/wp-content/uploads/2015/12/str2_inethiopia_ev_4_lalibelachurchofstgeorge_MUSTUSE.jpg",
               "https://lonelyplanetimages.imgix.net/a/g/hi/t/9736c329d67c42657dd3e1e6e25b2bce-royal-enclosure.jpg?sharp=10&vib=20&w=1200",
               "https://iadsb.tmgrup.com.tr/75ba8a/0/0/0/0/1000/584?u=https://idsb.tmgrup.com.tr/2018/10/22/1540229821200.jpg",
               "https://static1.squarespace.com/static/57b88db03e00be38aec142b0/t/59d67ee237c581dd98a182e3/1507229433324/03_HandZaround_Tigray_Churches_Gheralta_Lodge_ETT_Abreha_We_Atsbeha.jpg?format=1000w"];


var captionImages =["Axum","Lalibela","Gonder Fasiledes","Al Negashi","Abrha We Atsbha"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
