const textArea = document.getElementById("text-area");

function makeBold() {
  if(textArea.style.fontWeight == 'bold'){
    textArea.style.fontWeight ='normal'
    document.getElementById('bold-text').classList.remove('active')
  }else{
    textArea.style.fontWeight = 'bold'
    document.getElementById('bold-text').classList.add('active')
  }
}
function textItalic(){
    if(textArea.style.fontStyle=='italic'){
        textArea.style.fontStyle='normal'
        document.getElementById('font-italic').classList.remove('active')
    }else{
        textArea.style.fontStyle='italic'
        document.getElementById('font-italic').classList.add('active')
    }
}
function textUnderLine(){
    if(textArea.style.textDecoration=='underline'){
        textArea.style.textDecoration='none'
        document.getElementById('underline-text').classList.remove('active')
    }else{
        textArea.style.textDecoration='underline'
        document.getElementById('underline-text').classList.add('active')
    }
}

function l(){
    textArea.style.textAlign='left'
}
function c(){
    textArea.style.textAlign='center'
}
function r(){
    textArea.style.textAlign='right'
}
function j(){
    textArea.style.textAlign='justify'
}

function textSize(){
    let value= document.getElementById('font-size').value
    textArea.style.fontSize= value + 'px'
}
function fc(){
    if(textArea.style.textTransform=='uppercase'){
        textArea.style.textTransform='none'
        document.getElementById('font-case').classList.remove('active')
    }else{
        textArea.style.textTransform='uppercase'
        document.getElementById('font-case').classList.add('active')
    }
}
function color(){
    let value =document.getElementById('tc').value
    textArea.style.color= value
}