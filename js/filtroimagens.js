var all_items = document.querySelectorAll(".imagemitem").length;
var items = document.querySelectorAll(".imagemitem");

var textosdict = {
    "all":{
        "pt":"Todas as Fotografias", "en":"All Photos"
    }, 
    "praiasportuguesas":{
        "pt":"'Praias Portuguesas'", "en":"'Portuguese Beaches'"
    }, 
    "photosessions":{
        "pt":"'Sessões Fotográficas'", "en":"'Photography Sessions'"
    }, 
    "gopro":{
        "pt":"'Fotografias com GoPro'", "en":"'Gopro Photography'"
    }, 
    "drone":{
        "pt":"'Fotografias com Drone'", "en":"'Drone Photography'"
    }, 
    "underwater":{
        "pt":"'Fotografias Debaixo de Água'", "en":"'Underwater Photography'"
    }, 
    "car":{
        "pt":"'Fotografias de Automóveis'", "en":"'Car Photography'"
    },  
    "sports":{
        "pt":"'Fotografias de Desportos'", "en":"'Sports Photography'"
    },  
    "portugal":{
        "pt":"'Portugal'", "en":"'Portugal'"
    }, 
    "lourinha":{
        "pt":"'Lourinhã'", "en":"'Lourinhã'"
    }, 
    "lisbon":{
        "pt":"'Lisboa'", "en":"'Lisbon'"
    }, 
    "nazare":{
        "pt":"'Nazaré'", "en":"'Nazaré'"
    }, 
    "otherspt":{
        "pt":"'Outros Locais de Portugal'", "en":"'Other Portuguese Places'"
    }, 
    "uk":{
        "pt":"'Reino Unido'", "en":"'United Kingdom'"
    }, 
    "scotland":{
        "pt":"'Escócia'", "en":"'Scotland'"
    }, 
    "morroco":{
        "pt":"'Marrocos'", "en":"'Morocco'"
    }, 
    "marrakesh":{
        "pt":"'Marraquexe'", "en":"'Marrakesh'"
    }
}

function filteronmainpage(filtro, lang){
	
	if (filtro == "all"){
		for (let k=0; k < all_items; k++){
			items[k].classList.add("show-element");
			items[k].classList.remove("hide-element");
            AOS.refresh();
		}
        document.getElementById('textotop').innerHTML = textosdict[filtro][lang]
        
	}
	else {
        var aaaaaaaaa = document.getElementsByClassName("istanbul")[0].firstElementChild;
        document.getElementsByClassName("istanbul")[0].firstElementChild.attr('fancybox', "aaaaaa");
        var bbbbbbbb = document.getElementsByClassName("istanbul")[0].firstElementChild;
        
        alert(document.getElementsByName("istanbul"));
		var filtroselecionado = document.querySelectorAll("." + filtro);

		for (let k=0; k < all_items; k++){
			items[k].classList.add("hide-element");
			items[k].classList.remove("show-element");
		}
	
		for (let i=0; i < filtroselecionado.length; i++){
			filtroselecionado[i].classList.remove("hide-element");
			filtroselecionado[i].classList.add("show-element");
		}
        AOS.refresh();
        document.getElementById('textotop').innerHTML = textosdict[filtro][lang]
	}
}



$( document ).ready(function() {
    const params = new URLSearchParams(location.search);
    const query = params.get("sq");
    const lang = params.get("lang");
    if (String(query) != "null"){
        var uri = window.location.toString();
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
        filteronmainpage(query, lang);
        
    } else {
        //pass
    }
});