var events = ["Cricket","Football", "Volleyball", "Badminton", "Basketball", "Chess"];
var departments = ["cricket","football","volleyball","Badminton","Basketball","Chess"];
var totalLayout = 6

function createSlide() {
    var e = document.getElementById("slidesDiv");
    for (var t = 1; t <= totalLayout; t++) {
        var a = document.createElement("div");
        a.setAttribute("class", "mySlides hidden"), e.appendChild(a);
        var n = document.createElement("img");
        n.setAttribute("src", "images/" + t + ".png"), n.setAttribute("class", "description w-full object-cover"), n.setAttribute("alt", "Event" + t), n.setAttribute("onclick", "currentSlide(" + t + ")"), a.appendChild(n)
    }
}
createSlide();
var slideIndex = 1;

function plusSlides(e) {
    showSlides(slideIndex += e)
}

function currentSlide(e) {
    showSlides(slideIndex = e)
}

function showSlides(e) {
    var t, a = document.getElementsByClassName("mySlides"),
        n = document.getElementsByClassName("description"),
        i = document.getElementById("event");
    j = document.getElementById("department");
    
    for (e > a.length && (slideIndex = 1), e < 1 && (slideIndex = a.length), t = 0; t < a.length; t++) a[t].style.display = "none";
    for (t = 0; t < n.length; t++) n[t].className = n[t].className.replace(" opacity-100", ""); 
    a[slideIndex - 1].style.display = "block", n[slideIndex - 1].className += " opacity-100", i.innerHTML = events[slideIndex - 1], j.innerHTML =`<a href="./events/${departments[slideIndex - 1]}"
    class="bg-transparent hover:bg-yellow-555 text-yellow-555 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-555 hover:border-transparent">
   Register Now</a>` 
}
showSlides(slideIndex);