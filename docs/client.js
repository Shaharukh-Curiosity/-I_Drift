const socket = io('http://werealtimechatapp.herokuapp.com/');

const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messageContainer=document.querySelector('.container')

var audio=new Audio('whatsapp_tune.mp3');
var send_audio=new Audio('send_tune.mp3');

 
const append=(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageElement.style.wordBreak="break-all";
    messageElement.focus({preventScroll:true});
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
    append(`you,${message}`,'right');
    socket.emit('send',message);
    messageInput.value='';
})

const name=prompt('Enter name to join beautiful conversation with your friends')
socket.emit('new-user-joined',name)


socket.on('user-joined',name=>{
append(`${name} joined the chat`,'right');
})

socket.on('receive',data=>{
    append(`${data.name}:${data.message}`,'left');
    })
    
