let btnCrete = document.getElementById('btn-calcul-puissance-crete')
let locationResult= document.getElementById('result-calcul-return')
let locationID = document.getElementById('result-calcul-return')


btnCrete.addEventListener('click', ()=>{
let kantiteBatri = document.getElementById('kantitebatri').value;
let tansyonBatri = document.getElementById('tansyonbatri').value;
let kapasiteBatri = document.getElementById('kapasitebatri').value;

function puissanceCrete(kantiteBatri,tansyonBatri,kapasiteBatri){
let enejiBatri = kantiteBatri * tansyonBatri * kapasiteBatri * 1.15
return Math.round(enejiBatri / 5)
}
    console.log(puissanceCrete(kantiteBatri,tansyonBatri,kapasiteBatri));
    let createHeaderResult = document.createElement('h4')
    createHeaderResult.innerText=('Rezilta Devi Ou A')
    locationResult.appendChild(createHeaderResult)
    let divResult = document.createElement('p')
divResult.innerText= (`Pou ${kantiteBatri} batri\n${tansyonBatri} Volt\n${kapasiteBatri} Ah\nW ap bezwen ${puissanceCrete(kantiteBatri,tansyonBatri,kapasiteBatri)} watt pano`)
locationResult.appendChild(divResult)
},{once:true})

