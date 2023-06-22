const input = document.querySelector(".inputt");
const eyeOpen = document.querySelector(".bxs-show");
const eyeClose = document.querySelector(".bxs-hide");
eyeClose.addEventListener("click",function()
{
    eyeClose.classList.add("hidden");
    eyeOpen.classList.remove("hidden");
    input.setAttribute('type',"text");
    
});
eyeOpen.addEventListener("click",function()
{
    eyeOpen.classList.add("hidden");
    eyeClose.classList.remove("hidden");
    input.setAttribute('type',"password");
});
