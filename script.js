let elements = document.querySelectorAll(".elem");

elements.forEach(function(element){
    element.addEventListener("mouseenter", function(){
        element.childNodes[3].style.opacity = 1;
    })
    element.addEventListener("mouseleave", function(){
        element.childNodes[3].style.opacity = 0;
    })
    element.addEventListener("mousemove", function(dets){
        element.childNodes[3].style.left = dets.x+"px"
        element.childNodes[3].style.top = dets.y+"px"
    })
})