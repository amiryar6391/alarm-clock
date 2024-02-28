let selectoption=document.getElementsByClassName('select-items')
let h1=document.querySelector('h1')
let button=document.querySelector('button')
let selectitems=document.getElementsByClassName('select-items')
let alarm=new Audio('./asset/ringtone.mp3')

let alarmTime

for(let i=23 ; i>0 ; i--){
   i = i<10 ? '0' + i : i;
    selectoption[0].innerHTML+=`<option value="${i}">${i}</option>`

}
for(let i=59 ; i>=0 ; i--){
    i = i<10 ? '0' + i : i;
     selectoption[1].innerHTML+=`<option value="${i}">${i}</option>`
 
 }

 setInterval(()=>{

    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds(); 

    h= h<10 ? '0'+h : h;
    m= m<10 ? '0'+m : m;
    s= s<10 ? '0'+s : s;


    h1.innerHTML=`${h}:${m}:${s}`
    if(alarmTime == `${h}:${m}`){
        alarm.play();
        alarm.loop=true
    }

 },1000)

 button.addEventListener('click' , (x)=>{
   if(x.target.innerHTML == 'Set Alarm'){
    alarmTime=`${selectoption[0].value}:${selectoption[1].value}`
    if(alarmTime.includes('Hour') || alarmTime.includes('Minute')){
       return alert('enter the correct alarm time!!')
    }
    selectitems[0].disabled=true;
    selectitems[1].disabled=true;
    button.innerHTML='reset Alarm'
   }else{
      selectitems[0].disabled=false;
      selectitems[1].disabled=false;
      button.innerHTML='Set Alarm'
      alarmTime=''


      alarm.pause();

   }



 })