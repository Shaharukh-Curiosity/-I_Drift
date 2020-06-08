 var el=document.getElementById("btn")
if(el){
    el.addEventListener("click",element_change,false)
}

function element_change()
{

var time=new Date()
document.getElementById('time').innerHTML=time.getHours() + ':' + time.getMinutes();


/*
var color=["red","yellow","green","blue"];

  var elem=document.getElementById('myBar');
  
  var width=1;
  var id=setInterval(progress,100);
  function progress(){
      if(width>=100){
          elem.style.backgroundColor="yellow";
          clearInterval(id);
      }else if(width>=0 && width<=30){
          elem.style.backgroundColor=color[0];
          width++;
          document.getElementById('total').innerHTML=width;
          elem.style.width= width + "%";
      }
      else if(width>=30 && width<=60){

          elem.style.backgroundColor=color[1];
          width++;
          document.getElementById('total').innerHTML=width;
          elem.style.width= width + "%";
      }
      else if(width>=60 && width<=90){
          elem.style.backgroundColor=color[2];
          width++;
          document.getElementById('total').innerHTML=width;
          elem.style.width= width + "%";
      }
       
      else{
          width++;
          document.getElementById('total').innerHTML=width;
          elem.style.width= width + "%";
      }
  }
*/
}