var fistContainer = document.querySelector('#rollingSign')
var imageOpen = document.querySelectorAll('.imageProject')

var posicaoy = 0;
if (posicaoy <= 600) {
    fistContainer.children[0].style.backgroundColor = "#81FF76"
}

document.addEventListener("scroll", function() {
    posicaoy = window.pageYOffset;
    
    if (posicaoy <= 600) {
        fistContainer.children[0].style.backgroundColor = "#44fd33"
        fistContainer.children[1].style.backgroundColor = "#E3E3E3"
        fistContainer.children[2].style.backgroundColor = "#E3E3E3"
        imageOpen.forEach( image => {
            image.classList.remove("imageProjectAnime")
        })
    }else if(posicaoy > 600 && posicaoy < 1000){
        fistContainer.children[0].style.backgroundColor = "#E3E3E3"
        fistContainer.children[1].style.backgroundColor = "#44fd33"
        fistContainer.children[2].style.backgroundColor = "#E3E3E3"

        imageOpen.forEach( image => {
            image.classList.add("imageProjectAnime")
        })
    }else{
        fistContainer.children[0].style.backgroundColor = "#E3E3E3"
        fistContainer.children[1].style.backgroundColor = "#E3E3E3"
        fistContainer.children[2].style.backgroundColor = "#44fd33"
        imageOpen.forEach( image => {
            image.classList.remove("imageProjectAnime")
        })
    }
})


//-----------------animation arrows


document.addEventListener("scroll", function arrowVisible(){

    const arrow = document.querySelectorAll('.arrow')

    arrow.forEach(element => {

        if (element) {
            const positions = element.getBoundingClientRect();
            const start = positions.top;
            const end = positions.bottom;
    
            let isVisible = false
    
            if((start >= 0) && (end <= window.innerHeight)){
                isVisible = true
            }
            
            if (isVisible) {
                element.classList.add("turnArrow")
            }else{
                element.classList.remove("turnArrow")
            }
        }

    })

})



