import './styles.scss'
import img from './matrix.png'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent(){

    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello World!!'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new Image()//pode deixar o tamanho da imagem entre parenteses
    elemImg.src = img
    return elemImg
}

rootStyle()
document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())