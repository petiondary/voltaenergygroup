let btnAnperaj2 = document.getElementById('btn-anperaj2')
let locationResult= document.getElementById('result-calcul-return')


btnAnperaj2.addEventListener('click',()=>{
    let pwisansPanoSole2 = document.getElementById('pwisanspano2').value
    let voltageBatri2 = document.getElementById('voltagebatri2').value

function anperajRegilate(pwisansPanoSole2,voltageBatri2){
    let anperajRegilateA= pwisansPanoSole2 / voltageBatri2
    return Math.round(anperajRegilateA * 1.15)
}

console.log(anperajRegilate(pwisansPanoSole2,voltageBatri2));
let createHeaderResult = document.createElement('h4')
createHeaderResult.innerText=('Rezilta Devi Ou A')
locationResult.appendChild(createHeaderResult)
let divResult =document.createElement('p')
divResult.innerText=(`Pwisans Total Pano Yo : ${pwisansPanoSole2} Watts\n Tansyon Batri : ${voltageBatri2} Volt \n Anperaj Regilatè W ap bezwen an se : ${anperajRegilate(pwisansPanoSole2,voltageBatri2)} Anpè`)
locationResult.appendChild(divResult)
}, {once:true}
)