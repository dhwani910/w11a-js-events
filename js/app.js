var heading = document.querySelector('h1');
heading.addEventListener('mouseover', function(){
    heading.style.color = "red";
})








let message = "holidays coming!!!!";

function checkMessages(){
    alert(message);
    
}

let checkMessagesButton = document.querySelector('.check-messages-button');
checkMessagesButton.addEventListener('click', function(){
    checkMessages();
    
});




let messageInput = document.querySelector('.message');
messageInput.addEventListener('keypress', function(event){
    if(event.keyCode == 32){
        checkMessagesButton.style.color = "blue";
    }else{
        alert('nothing');
    }
})


