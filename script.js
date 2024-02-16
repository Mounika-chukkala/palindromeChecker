const main=document.querySelector(".main");
const button=document.querySelector("button")

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
    main.style.fontSize=`20px`;
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
    main.innerHTML+=outputHTML;
}



button.addEventListener("click",buttonEvent);


