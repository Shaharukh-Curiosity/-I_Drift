const socket = io('http://werealtimechatapp.herokuapp.com/');

const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messageContainer=document.querySelector('.container')
const user_name=document.getElementById('user_name');
var audio=new Audio('whatsapp_tune.mp3');
var send_audio=new Audio('send_tune.mp3');

 
 const append=(message,position)=>{
    var date=new Date();
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
     messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageElement.style.wordBreak="break-all";
    messageElement.focus({preventScroll:true});
    messageElement.focus();
    messageContainer.append(messageElement);
    
    if(position =='right'){
      send_audio.play();
    }
    if(position == 'left'){
        audio.play();   
    }
}
 

 

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append(`${message}`,'right');
    socket.emit('send',message);
    messageInput.value='';
})

const name=prompt('Enter name to join beautiful conversation with your friends')
user_name.innerText=name;
socket.emit('new-user-joined',name)


socket.on('user-joined',name=>{
append(`${name} joined the chat`,'right');
})

socket.on('receive',data=>{
     append(`${data.name} \n\ ${data.message}`,'left');
    })
    