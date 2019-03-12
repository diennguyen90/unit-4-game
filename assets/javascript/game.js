// globals
let goalNum
let myNum
let wins = 0
let losses = 0
let isDone = false

let getCrystal1 = document.getElementById('crystal1')
let getCrystal2 = document.getElementById('crystal2')
let getCrystal3 = document.getElementById('crystal3')
let getCrystal4 = document.getElementById('crystal4')
// let getWins = document.getElementById('wins')
// let getlosses = document.getElementById('losses')

// reset function after each win and loses
const resetNum = ()=>{
    getCrystal1.setAttribute('value', Math.floor(Math.random()* 20) + 1);
    getCrystal2.setAttribute('value', Math.floor(Math.random()* 20) + 1);
    getCrystal3.setAttribute('value', Math.floor(Math.random()* 20) + 1);
    getCrystal4.setAttribute('value', Math.floor(Math.random()* 20) + 1);
    console.log(getCrystal1)
    goalNum = Math.floor(Math.random() * 100) + 1
    document.querySelector('.goalNum').textContent = goalNum
    myNum = 0

}
// iniializer for the game
const init = () =>{
    isDone = false;
    myNum = 0;
    getBtn = document.getElementsByClassName('btn')
    goalNum = Math.floor(Math.random()* 100) + 1;

    document.querySelector('.goalNum').textContent = goalNum
    document.querySelector('#myNum').innerHTML = myNum

    resetNum();
}
// add for each clicks on crystals also execute reset()for each wins or losses
document.addEventListener('click', e =>{
    if(e.target.className === 'btn' ){
        myNum += parseInt(e.target.value)

        document.getElementById('myNum').innerHTML = myNum;
        console.log(e.target.value)
        console.log(myNum)
        if(myNum === goalNum){
            alert('you won');
            wins++;
            document.querySelector('#wins').innerHTML = 'Wins: '+  wins;
            // goalNum = Math.floor(Math.random() * 100) + 1
            // document.querySelector('.goalNum').textContent = goalNum
            resetNum();
            isDone = true;
        } else if(myNum > goalNum){
            alert('you lost')
            losses++;
            document.querySelector('#losses').innerHTML = 'Losses: '+  losses;
            isDone = true;
            // goalNum = Math.floor(Math.random() * 100) + 1
            // document.querySelector('.goalNum').textContent = goalNum
            resetNum();
        } else if (wins === 10 || losses === 10 ){
            alert('game starting over')
            document.querySelector('#wins').innerHTML = ''
            document.querySelector('#losses').innerHTML = ''
            init();
        }
        
    }
})
init();