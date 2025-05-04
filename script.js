let placarTime1 = 0;
let placarTime2 = 0;

//informações do time 1
const pontosTime1 = document.getElementById("pontos-time1");
const incrementabtnTime1 = document.getElementById("btn-up-time1");
const decrementaBtnTime1 = document.getElementById("btn-down-time1");

incrementabtnTime1.addEventListener('click', () =>{
    placarTime1++;
    pontosTime1.textContent = placarTime1;
});

decrementaBtnTime1.addEventListener('click', () =>{
    placarTime1--;
    pontosTime1.textContent = placarTime1;
});

//informações do time 2
const pontosTime2 = document.getElementById("pontos-time2");
const incrementabtnTime2 = document.getElementById("btn-up-time2");
const decrementabtnTime2 = document.getElementById("btn-down-time2");

incrementabtnTime2.addEventListener('click', ()=>{
    placarTime2++;
    pontosTime2.textContent = placarTime2;
})
decrementabtnTime2.addEventListener('click', ()=>{
    placarTime2--;
    pontosTime2.textContent = placarTime2;
})
