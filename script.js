const main=document.querySelector(".main");
const button=document.querySelector("button");
const input=document.getElementById("text-element");
const answer=document.querySelector("#answer");

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the original cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
const buttonEvent=()=>{
    const value=document.querySelector("input").value;
    if (value===""){
        alert("Please input a value");
        return;
    }
    const palVal=isPalindrome(value);
    main.style.height=`200px`;
    answer.style.height=`50px`;
    answer.style.fontSize=`20px`;

    let outputHTML=``;
    if (palVal){
    outputHTML+=`
        <p><b>${value}</b> is a Palindrome.
        `;
    }
    else{
        outputHTML+=`
        <p ><b>${value}</b> is not a Palindrome.
        `;
    }
    answer.innerHTML+=outputHTML;
}

const resize=()=>{
    main.style.height=`150px`;
    answer.innerHTML="";
    answer.style.height=`0px`;
}
const Eventcall=(event)=>{
    if(event.key==="Enter"){
        buttonEvent();
    }
}
button.addEventListener("click",buttonEvent);
input.addEventListener("click",resize);
button.addEventListener("keydown",Eventcall);

