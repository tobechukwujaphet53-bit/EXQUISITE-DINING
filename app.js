const darkModeImage = document.getElementById("dark-mode-image");
const time = document.getElementById("time");
const greetings = document.getElementById("greetings");
const dots1 = document.getElementById("dots-1");
const hiddenText = document.getElementById("hidden-text");
const btn1 = document.getElementById("btn-1");
const hiddenText2 = document.getElementById("hidden-text-2");
const btn2 = document.getElementById("btn-2");
const dots2 = document.getElementById("dots-2");
const copyRight = document.getElementById("copyright");
let askAQuestion = window.prompt(" PLEASE IsiteNPUT YOUR NAME BEFORE YOU ENTER ");

darkModeImage.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        darkModeImage.src = "images/image-4.png";
    }

    else{
        darkModeImage.src = "images/image-3.png";
    }
    
});

function timer(){
    const updateTime = new Date();

    let h = updateTime.getHours();
    let m = updateTime.getMinutes();
    let s = updateTime.getSeconds();

    h = h <10 ? "0" + h : h;
    m = m <10 ? "0" + m : m;
    s = s <10 ? "0" + s : s;

    time.innerText = h + ":" + m + ":" + s;

    
}
setInterval(timer, 1000);
timer();


function greetingUpdated() {
    const greetingsOne = new Date().getHours();

    let greetingsTwo = "";

    if(greetingsOne  >= 0 &&  greetingsOne < 12 ) { greetingsTwo = "GOOD MORNING🌄"}
    else if(greetingsOne >= 12 && greetingsOne < 15) { greetingsTwo = "GOOD AFTERNOON☀️"}
    else if(greetingsOne >= 15 && greetingsOne < 18) { greetingsTwo = "GOOD EVENING🕚"}
    else{ greetingsTwo = "GOOD NIGHT🌃"}

    return greetingsTwo;
}
greetings.innerText = greetingUpdated();

btn1.addEventListener("click", () => {
   if( hiddenText.classList.contains("hidden")){
    hiddenText.classList.remove("hidden");
    dots1.style.display = "none";
    btn1.textContent = "Read Less";
    }

    else{
        hiddenText.classList.add("hidden");
        dots1.style.display = "inline";
        btn1.textContent = "Read More";
    }
});


btn2.addEventListener("click", () =>{
    if(hiddenText2.classList.contains ("hidden-2")){
        hiddenText2.classList.remove("hidden-2");
        dots2.style.display = "none";
        btn2.textContent = "Read Less";
    }

    else{
        hiddenText2.classList.add("hidden-2");
        dots2.style.display = "inline";
        btn2.textContent = "Read More";
    }
});

const updateCopyright = new Date().getFullYear();

copyRight.innerText = "© " + updateCopyright + " All Right Reserved";