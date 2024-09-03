let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');


menu.onclick = () =>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

} ;

window.onscroll = () =>
{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop:true ,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


let loadMoreBtn = document.querySelector('.package .load-more .btn');
let currentItem = 3;
loadMoreBtn.onclick = () =>
{
    let boxes = [...document.querySelectorAll('.package .box-container .box')];
    for (var i =  currentItem; i < currentItem + 3; i++){
        boxes[i].style.display = 'inline-block';

    };
    currentItem += 3;
    if(currentItem>=boxes.length)
    {
        loadMoreBtn.style.display='none';
    }
};

const chatInput  = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");


let userMessage;
const createChatLi = (message, className) => 
{
const chatLi = document.createElement("li");
chatLi.classList.add("chat" , className );
let chatContent = className === "outgoing" ? `<p>${message} </p>` : `<span class= "material-symbols-outlined"> smart_toy</span> <p>${message}</p>` ;
chatLi.innerHTML = chatContent;
return chatLi;
}

 
const handleChat = () =>
{
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));



}

sendChatBtn.addEventListener("click", handleChat);






const scriptURL = 'https://script.google.com/macros/s/AKfycbxyIvuOEvkhFKZHjm_tDHUV-aeqaBV2ldrQyxalX2KS1pGhI-DyfkCvEP1rdg-NfJ9jwA/exec'

const form = document.forms['booking']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
});

 





$(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });
  

  let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})