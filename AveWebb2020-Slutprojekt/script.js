//Dropdown
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event){
    if(!event.target.matches('.NavImage')){
        let dropdowns = 
        document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}
//slideshow
let slideIndex = 0;
showSlides();
function showSlides(){
    let i;
    let slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i  < slides.length; i ++){
        slides[i].style.display = "none";
    }
    slideIndex ++;
    if (slideIndex > slides.length){ slideIndex = 1}
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
}
//Form button
function validateForm(){
    const a = document.forms["myForm"]["fname"].value;
    const b = document.forms["myForm"]["femail"].value;
    const c = document.forms["myForm"]["ftelefon"].value;
    const d = document.forms["myForm"]["fdatum"].value;
    const e = document.forms["myForm"]["forder"].value;
    if (a == "" || b=="" || c == "" || d == "" || e==""){
        alert ("Glöm inte fylla i alla fällt!");
        return false;
    }else{
    alert("Tack för din beställning!");
}
 }