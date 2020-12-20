console.log("App js initialised");

function translateToPirate(){
    var pirate_box = document.querySelector('#pirate_text');
    var translate_text = document.querySelector("#translate_text").value;

    if(translate_text != ''){
        btnTranslate.innerText = "Please wait...";
        
        fetch("https://api.funtranslations.com/translate/pirate.json"+"?text="+translate_text)
        .then(response => response.json())
        .then(data => {
            pirate_box.innerText = data.contents.translated;
            btnTranslate.innerText = "Translate to Pirate";
        })
        .catch(error => alert("Error with server: ", error))
    }
    else{
        console.log("else part: ", translate_text);
    }
}

var btnTranslate = document.querySelector('#btn_translate');

btnTranslate.addEventListener("click", translateToPirate);