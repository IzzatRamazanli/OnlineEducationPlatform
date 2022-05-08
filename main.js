//changing navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});



//show/hide faq answer

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');    
        
        //change icon
        const icon=faq.querySelector('.faq-icon i');
        if(icon.className==='fas fa-plus'){
            icon.className="fas fa-minus";
        }else{
            icon.className="fas fa-plus";
        }
    })

})

//nav menu show/hide

const menu=document.querySelector(".nav-menu");
const menuBtn=document.querySelector(".open-menu-btn");
const closeBtn=document.querySelector(".close-menu-btn");

//opening
menuBtn.addEventListener('click',() => {
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})

//closing
closeBtn.addEventListener('click',()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
})

