const galleryItems = [...document.querySelectorAll(".gallery-item")];
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
let currentPhoto = 0;
function showPhoto(index){
  currentPhoto = (index + galleryItems.length) % galleryItems.length;
  lightboxImage.src = galleryItems[currentPhoto].dataset.full;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closePhoto(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
galleryItems.forEach((item,index)=>item.addEventListener("click",()=>showPhoto(index)));
document.getElementById("lightboxClose").addEventListener("click",closePhoto);
document.getElementById("lightboxPrev").addEventListener("click",()=>showPhoto(currentPhoto-1));
document.getElementById("lightboxNext").addEventListener("click",()=>showPhoto(currentPhoto+1));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closePhoto()});
document.addEventListener("keydown",e=>{
  if(!lightbox.classList.contains("open"))return;
  if(e.key==="Escape")closePhoto();
  if(e.key==="ArrowLeft")showPhoto(currentPhoto-1);
  if(e.key==="ArrowRight")showPhoto(currentPhoto+1);
});
document.getElementById("surpriseButton").addEventListener("click",()=>{
  const message=document.getElementById("surpriseMessage");
  message.classList.toggle("show");
  document.getElementById("surpriseButton").innerHTML=message.classList.contains("show")?"Keep this close <span>♡</span>":"One last thing… <span>♡</span>";
});


// Intro and background music: audio begins only after an explicit click.
const introScreen = document.getElementById("introScreen");
const openExperience = document.getElementById("openExperience");
const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = musicToggle.querySelector(".music-label");

async function startMusic(){
  try{
    await backgroundMusic.play();
    musicToggle.classList.add("playing");
    musicLabel.textContent = "MUSIC ON";
    musicToggle.setAttribute("aria-label","Pause background music");
  }catch(error){
    musicToggle.classList.remove("playing");
    musicLabel.textContent = "ADD YOUR SONG";
    musicToggle.setAttribute("aria-label","Background music is not installed yet");
  }
}
function pauseMusic(){
  backgroundMusic.pause();
  musicToggle.classList.remove("playing");
  musicLabel.textContent = "MUSIC OFF";
  musicToggle.setAttribute("aria-label","Play background music");
}
openExperience.addEventListener("click",async()=>{
  introScreen.classList.add("dismissed");
  document.body.classList.add("experience-open");
  await startMusic();
});
musicToggle.addEventListener("click",async()=>{
  if(backgroundMusic.paused) await startMusic();
  else pauseMusic();
});
