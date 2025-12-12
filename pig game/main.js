
'use strict';
let activePlayer=0;
let score1 =0;
let totalscore1= 0;
let score2=0;
let totalscore2=0;


document.querySelector('.btn--roll').addEventListener('click',function()
{
  const image= Math.trunc(Math.random()*6)+1;
   document.getElementById('dice').src= `img/dice-${image}.png`;
   if(activePlayer ===0)
 {
   if(image===1){
    score1=0;
    totalscore1 =0;
    document.getElementById('score--0').textContent=totalscore1;
    document.getElementById('current--0').textContent=score1;
    switchPlayer();

   }else{
    score1 +=image;
     document.getElementById('current--0').textContent=score1;
       totalscore1 =0;
    document.getElementById('score--0').textContent=totalscore1;

   }
 }else{
     if(image===1){
    score2=0;
    document.getElementById('current--1').textContent=score2;
      totalscore2 =0;
    document.getElementById('score--1').textContent=totalscore2;
    switchPlayer();

   }else{
    score2 +=image;
     document.getElementById('current--1').textContent=score2;
       totalscore2 =0;
    document.getElementById('score--1').textContent=totalscore2;
   }

 }


})
 function switchPlayer(){
  document.querySelector('.player--0').classList.toggle('player--active');
document.querySelector('.player--1').classList.toggle('player--active');
activePlayer = activePlayer ===0?1 : 0;

 }

document.querySelector('.btn--hold').addEventListener('click',function(){
  if(activePlayer===0)
{
  totalscore1+=score1;
  score1=0;
    document.getElementById('current--0').textContent=score1;
    document.getElementById('score--0').textContent=totalscore1;
    if(totalscore1>=50){
      document.querySelector('.pl1').textContent="winner is player1";
        document.querySelector('.pl2').style.color='red';
        document.querySelector('.btn--roll').disale= true; 
           document.querySelector('.pl1').style.color='green';
   
    }
  

}else{
    totalscore2+=score2;
  score2=0;
    document.getElementById('current--1').textContent=score2;
    document.getElementById('score--1').textContent=totalscore2;
    if(totalscore2>=50){
      document.querySelector('.pl2').textContent="winner is player2";
       document.querySelector('.pl2').style.color='green';
        document.querySelector('.pl1').style.color='red';
        document.querySelector('.btn--roll').disale=true;
    }

}
})

document.querySelector('.btn--new').addEventListener('click',function(){
   //activePlayer=1;
 score1 =0;
 totalscore1= 0;
  score2=0;
   totalscore2=0;
  document.getElementById('score--0').textContent=totalscore1;
  document.getElementById('current--0').textContent=score1;
  document.getElementById('current--1').textContent=score2;
  document.getElementById('score--1').textContent=totalscore2;
  document.querySelector('.pl2').style.color='blue';
  document.querySelector('.btn--roll').disaled= true; 
  document.querySelector('.pl1').style.color='blue';
  document.querySelector('.pl2').textContent="player2";
  document.querySelector('.pl1').textContent="player1";

  switchPlayer();


})
