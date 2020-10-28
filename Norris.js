///////////First Api/////
////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
///////create callback function thats used when button clicked////////
const getData = () =>{
    var answer = document.getElementsByClassName('inputValue').value;
    console.log(answer);
    var tops = "https://api.chucknorris.io/jokes/random";

    sendHttprequest('GET', tops);
};
////////// Create callback function with embeded promise/////////////
const sendHttprequest = (method,url) =>{
    const promise = new Promise((resolve, reject) =>{
        console.log(url);
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
///////////// When browser load parse http req to usable format//////////
            const data = JSON.parse(xhr.response);
            console.log(data);
            document.getElementById('change').innerHTML = data.value;
            
 
}
    xhr.send();
    })
}

/// add event listener to get button ///
getBtn.addEventListener('click', getData);
