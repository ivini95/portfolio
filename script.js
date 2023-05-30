var count = 0

var tech1 = document.querySelector('.tech1')
var tech2 = document.querySelector('.tech2')
var tech3 = document.querySelector('.tech3')
var tech4 = document.querySelector('.tech4')
var tech5 = document.querySelector('.tech5')


function prevTech(){

    if (count == 0) {
        count = 4
    }else {
        count --
    }
    changeTechIndicatorColor()
    changeTechContainer()
  
}

function nextTech(){

    if (count == 4) {
        count = 0
    }else {
        count ++
    }
    changeTechIndicatorColor()
    changeTechContainer()

}

function changeTechIndicatorColor(){

    if (count == 0) {
        tech5.style.backgroundColor = '#ffe8ce'
        tech4.style.backgroundColor = '#ffe8ce'
        tech3.style.backgroundColor = '#ffe8ce'
        tech2.style.backgroundColor = '#ffe8ce'
        tech1.style.backgroundColor = '#FEB833'
    }else if (count == 1) {
        tech5.style.backgroundColor = '#ffe8ce'
        tech4.style.backgroundColor = '#ffe8ce'
        tech3.style.backgroundColor = '#ffe8ce'
        tech1.style.backgroundColor = '#ffe8ce'
        tech2.style.backgroundColor = '#FEB833'
    }else if (count == 2) {
        tech5.style.backgroundColor = '#ffe8ce'
        tech4.style.backgroundColor = '#ffe8ce'
        tech2.style.backgroundColor = '#ffe8ce'
        tech1.style.backgroundColor = '#ffe8ce'
        tech3.style.backgroundColor = '#FEB833'
    }else if (count == 3) {
        tech5.style.backgroundColor = '#ffe8ce'
        tech3.style.backgroundColor = '#ffe8ce'
        tech2.style.backgroundColor = '#ffe8ce'
        tech1.style.backgroundColor = '#ffe8ce'
        tech4.style.backgroundColor = '#FEB833'
    }
    else if (count == 4) {
        tech3.style.backgroundColor = '#ffe8ce'
        tech2.style.backgroundColor = '#ffe8ce'
        tech1.style.backgroundColor = '#ffe8ce'
        tech4.style.backgroundColor = '#ffe8ce'
        tech5.style.backgroundColor = '#FEB833'
    }

}

changeTechIndicatorColor()

var tech1Container = document.getElementById('tech1Container')
var tech2Container = document.getElementById('tech2Container')
var tech3Container = document.getElementById('tech3Container')
var tech4Container = document.getElementById('tech4Container')
var tech5Container = document.getElementById('tech5Container')



function changeTechContainer(){

    if (count == 0) {
        tech5Container.style.display = 'none'
        tech4Container.style.display = 'none'
        tech3Container.style.display = 'none'
        tech2Container.style.display = 'none'
        tech1Container.style.display = 'grid'
    }else if (count == 1) {
        tech5Container.style.display = 'none'
        tech4Container.style.display = 'none'
        tech3Container.style.display = 'none'
        tech1Container.style.display = 'none'
        tech2Container.style.display = 'grid'
    }else if (count == 2) {
        tech5Container.style.display = 'none'
        tech4Container.style.display = 'none'
        tech2Container.style.display = 'none'
        tech1Container.style.display = 'none'
        tech3Container.style.display = 'grid'
    }else if (count == 3) {
        tech5Container.style.display = 'none'
        tech3Container.style.display = 'none'
        tech2Container.style.display = 'none'
        tech1Container.style.display = 'none'
        tech4Container.style.display = 'grid'
    }
    else if (count == 4) {
        tech3Container.style.display = 'none'
        tech2Container.style.display = 'none'
        tech1Container.style.display = 'none'
        tech4Container.style.display = 'none'
        tech5Container.style.display = 'grid'
    }
}



var aboutMsg = document.getElementById('alertAbout')


function closeAbout(){
    
    aboutMsg.style.display = 'none'
}



var previewImg = document.querySelector('.previewImg')


function showPreviewImg(x) {

    if (x == 1) {
        var techImageContainer = document.querySelector('.techImageContainer1')
        var closePreviewImgVar = document.querySelector('.closePreviewImg1')
    }else if (x == 2) {
        var techImageContainer = document.querySelector('.techImageContainer2')
        var closePreviewImgVar = document.querySelector('.closePreviewImg2')
    }else if (x == 3) {
        var techImageContainer = document.querySelector('.techImageContainer3')
        var closePreviewImgVar = document.querySelector('.closePreviewImg3')
    }
    else if (x == 4) {
        var techImageContainer = document.querySelector('.techImageContainer4')
        var closePreviewImgVar = document.querySelector('.closePreviewImg4')
    }
    else if (x == 5) {
        var techImageContainer = document.querySelector('.techImageContainer5')
        var closePreviewImgVar = document.querySelector('.closePreviewImg5')
    }

    techImageContainer.style.position = "absolute"
    techImageContainer.style.margin = "auto"
    techImageContainer.style.top = "0"
    techImageContainer.style.bottom = "0"
    techImageContainer.style.left = "0"
    techImageContainer.style.right = "0"
    techImageContainer.style.height = "544px"
    previewImg.style.display = "none"
    closePreviewImgVar.style.display = "block"
}

function closePreviewImg(x){

  
    
    if (x == 1) {
        var techImageContainer = document.querySelector('.techImageContainer1')
        var closePreviewImgVar = document.querySelector('.closePreviewImg1')
    }else if (x == 2) {
        var techImageContainer = document.querySelector('.techImageContainer2')
        var closePreviewImgVar = document.querySelector('.closePreviewImg2')
    }else if (x == 3) {
        var techImageContainer = document.querySelector('.techImageContainer3')
        var closePreviewImgVar = document.querySelector('.closePreviewImg3')
    }
    else if (x == 4) {
        var techImageContainer = document.querySelector('.techImageContainer4')
        var closePreviewImgVar = document.querySelector('.closePreviewImg4')
    }
    else if (x == 5) {
        var techImageContainer = document.querySelector('.techImageContainer5')
        var closePreviewImgVar = document.querySelector('.closePreviewImg5')
    }else {
        var techImageContainer = document.querySelector('.techImageContainer')
        var closePreviewImgVar = document.querySelector('.closePreviewImg')
    }

    closePreviewImgVar.style.display = "none"
    techImageContainer.style.position = "relative"
    techImageContainer.style.margin = "16px 0px 0px 0px"
    techImageContainer.style.height = "calc(100vh - 562px)"
    previewImg.style.display = "block"

}