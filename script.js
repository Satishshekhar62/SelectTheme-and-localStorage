function setWhiteTheme(){

    // alert("White");
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    localStorage.setItem('theme', 'white');
}

function setDarkTheme(){
    // alert("Dark");

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    localStorage.setItem('theme', 'dark');
}

window.onload = function(){
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === 'dark'){
        setDarkTheme();
    }
    else{
        setWhiteTheme();
    }
}