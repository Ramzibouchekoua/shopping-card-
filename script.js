function red1(){
    let m = document.getElementById('red')
    m.style.color="red"
}
function plus1(){
    let x = document.getElementById('number')
    let price1000 = document.getElementById('price')
    let total = document.getElementById('total');
    total.innerHTML=+total.innerHTML+2200
    x.innerHTML=+x.innerHTML+1
    price1000.innerHTML=+price1000.innerHTML+2200
}
function moins1(){
    let x = document.getElementById('number')
    let total = document.getElementById('total')
    let price1000 = document.getElementById('price')
    if(x.innerHTML>0){
        x.innerHTML=+x.innerHTML -1 
        total.innerHTML=+total.innerHTML-2200
        price1000.innerHTML=+price1000.innerHTML-2200
    }
    else x.innerHTML=0
}
function red(){
    let z = document.getElementById('red1')
    z.style.color="red"
}
function plus(){
    let xa = document.getElementById('number1')
    let price10000 = document.getElementById('price1')
    let total = document.getElementById('total');
    total.innerHTML=+total.innerHTML+3800
    xa.innerHTML=+xa.innerHTML+1
    price10000.innerHTML=+price10000.innerHTML+3800
}
function moins(){
    let xa = document.getElementById('number1')
    let total = document.getElementById('total')
    let price10000 = document.getElementById('price1')
    if(xa.innerHTML>0){
        xa.innerHTML=+xa.innerHTML -1 
        total.innerHTML=+total.innerHTML-3800
        price10000.innerHTML=+price10000.innerHTML-3800
    }
    else x.innerHTML=0
}
function outz(){
    let o = document.getElementById('art2')
    o.style.display="none"
}
function outx(){
    let o = document.getElementById('art1')
    o.style.display="none"
}





