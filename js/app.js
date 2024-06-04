function OpenNav(){
    document.getElementById("nav").style.width = "65%";
}
    function CloseNav(){
        document.getElementById("nav").style.width = "0%";
}

// expand-collapse
$(document).ready(function() {
    $('.expand-collapse h3').each(function() {
        var tis = $(this), state = false, answer = tis.next('div').slideUp();
        tis.click(function() {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active',state);
        });
    });
});

// small image
$(function(){
    $("#big-image img:eq(0)").nextAll().hide();
    $(".small-images div").click(function(e){
        var index = $(this).index();
        $("#big-image img").eq(index).show().siblings().hide();
    });
});
function addClassElementEvent(element,className,event){
  
    let elements = document.querySelectorAll(element);
  
    for(var i = 0; i<elements.length; i++) {
        elements[i].addEventListener(event, function(event) {
            [].forEach.call(elements, function(el) {
                  el.classList.remove(className);
             });
             this.classList.add(className);
        });
    }
  }
  addClassElementEvent('.change','active','click');


