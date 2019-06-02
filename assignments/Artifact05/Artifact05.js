
var myImages =["http://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/21607/gallery/asmarawikifiat-tagliero.jpg?itok=EtULZX6O",
               "https://static1.squarespace.com/static/5b4c0383cc8fedc963151ed7/t/5b82e39c032be4d68a48351f/1537217519291/IMG_2796-1024x768.jpg",
               "https://live.staticflickr.com/7452/9209051114_32bb9e18bb_b.jpg",
               "http://4.bp.blogspot.com/-lSmpE5Jq8aI/VoTbN0JwVNI/AAAAAAAAO1E/Tq-8EY_2EqE/s1600/Page7_3.jpg",
               "http://3.bp.blogspot.com/-T2zWF36PWoo/UP7sGRS6x6I/AAAAAAAADFc/9DBoUpu08hY/s1600/461253_10150607916434624_871371906_o.jpg"];


var captionImages =
["FIAT","CATHEDRAL", "ENDA MARIAM", "MASAWA","MAI JAH JAH"];

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
