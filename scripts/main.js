let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google-logo.png') {
      myImage.setAttribute('src','images/firefox.png');
    } else {
      myImage.setAttribute('src','images/google-logo.png');
    }
}

let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setusername() {
  let myname = prompt('Please enter your name.');
  if(!myname) {
    setusername();
  } else {
    localStorage.setItem('name', myname);
    myheading.textContent = 'Mozilla is cool, ' + myname;
  }
}

if(!localStorage.getItem('name')) {
  setusername();
} else {
  let storedName = localStorage.getItem('name');
  myheading.textContent='Mozilla is cool, '+storedName;
}

mybutton.onclick=function() {
  setusername();
}