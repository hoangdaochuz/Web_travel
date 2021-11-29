const menuBtn = document.querySelector('.header-navi-key');
const modal = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-icon')
const imgDestinations = document.querySelectorAll('.app-container-destination-item-body');
const imgDestinationsHovers = document.querySelectorAll('.app-container-destination-item-body__hover')

menuBtn.onclick = function(){
    modal.classList.remove('close');
}
closeBtn.onclick = function(){
    modal.classList.add('close');
}
// imgDestinations.forEach(function(imgDestination){
//     imgDestination.onmouseenter= function(){
//         this.classList.add('close')
//     }

//     imgDestination.onmouseleave = function(){
//         this.classList.remove('close')
//     }
// })


// imgDestinationsHovers.forEach(item=>{
//     item.onmouseenter=function(){
//         item.classList.remove('close')
//     }

//     item.onmouseleave = function(){
//         item.classList.add('close');

//     }
// })

// Hàm để làm cho các ảnh chuyển động sau 1 khoảng thời gian 1 cách automatically
var slideIndex = 0;
var tabUIIndex=0
var tabUI_class = []
function carousel(){
    var i;
    var x = document.getElementsByClassName("app-container-best-beach-img")
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        tabUI_class.push(document.getElementById(`app-container-best-beach-slider-tabUI-item-${i+1}`))
        tabUI_class[i].style.opacity = 0.5
      }
      slideIndex++;
      tabUIIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      if (tabUIIndex > x.length) {tabUIIndex = 1}
      x[slideIndex-1].style.display = "block";
      tabUI_class[tabUIIndex-1].style.opacity=1
      setTimeout(carousel, 5000);
}
carousel()
// -------------   


function clickTabUI(){
    // tabUI_class= document.getElementById(`app-container-best-beach-slider-tabUI-item-${1}`)
    // tabUI_class.onclick = function(){
    //     console.log("Da kich vao")
    // }
    tabUI_class.map(tabUI_element=>{
        tabUI_element.onclick = function(){
            // Vẫn chưa làm được
        }
    })
}

clickTabUI()


