// TODO unfinished

let myObj = {
    myArrow : () => console.log(this),
    myArrow2 : () => { console.log(this) },
    myFunc : function () {
        console.log(this)
    }
}

let button = document.getElementById('button')

button.addEventListener('click', console.log(this))

document.getElementById('window').addEventListener('click', () => console.log(this))
document.getElementById('window1').addEventListener('click', () => myObj.myArrow())
document.getElementById('window2').addEventListener('click', myObj.myArrow )
document.getElementById('window3').addEventListener('click', myObj.myArrow() ) // autoruns

document.getElementById('nada').addEventListener('click', () => myObj.myArrow)
// document.getElementById('nada1').addEventListener('click', myObj.myArrow())

document.getElementById('objFunc').addEventListener('click', () => myObj.myFunc())

