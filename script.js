var [second]=document.getElementsByClassName("second")
var [minute]=document.getElementsByClassName("minute")
var [hour]=document.getElementsByClassName("hour")
var [show]=document.getElementsByClassName("show")
var [message]=document.getElementsByClassName("message")
var [wasted]=document.getElementsByClassName("wasted")
var count=0
gsap.fromTo(".show",{opacity:0,scale:0,rotation:700},{delay:3,duration:1,opacity:1,scale:1,rotation:0})
gsap.fromTo(".clock",{opacity:0,scale:0},{duration:1,opacity:1,scale:1})


setInterval(() => {
    count=count + 1
    wasted.innerHTML=`you wasted ${count}s`
}, 1000);

show.addEventListener("click",()=>{
    show.classList.add("hide")
    message.classList.add("messageshow")
})



setInterval(() => {
    var date=new Date()
    var mysecond=date.getSeconds()
    var myminute=date.getMinutes()
    var myhour=date.getHours()
    second.style.transform=`rotate( ${mysecond*6}deg)`
    minute.style.transform=`rotate( ${myminute*6}deg)`
    hour.style.transform=`rotate( ${myhour*30 + myminute*0.5}deg)`
}, 1000);
