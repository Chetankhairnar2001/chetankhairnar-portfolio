    var icon = document.getElementById('icon');
// when u refresh your page earlier the color used to come back to its root vale
//so now use  localstorage it will save all changes in browser so works well

    if(localStorage.getItem("theme")== null){
        localstorage.setItem("theme","light");
    }

    let localData = localStorage.getItem("theme");

    if(localData == "light"){ //for light theme
        icon.src = "images/moon.png";
    document.body.classList.remove("dark-theme");//to remove dark and keep light
    }
    else if(localData == "dark"){
        icon.src = "images/sun.png";
        document.body.classList.add("dark-theme");
    }

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src= "images/sun.png";
            localStorage.setItem("theme","dark");
        }
        else{
        icon.src ="images/moon.png";
        localStorage.setItem("theme","light");
    }
    }