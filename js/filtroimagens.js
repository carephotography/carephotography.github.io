

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
    } ,
    "norway":{
        "pt":"'Noruega'", "en":"'Norway'"
    }, 
    "oslo":{
        "pt":"'Oslo'", "en":"'Oslo'"
    }
}

function filteronmainpage(filtro, lang){
    var all_items = document.querySelectorAll(".imagemitem").length;
var items = document.querySelectorAll(".imagemitem");
	
	if (filtro == "all"){
		for (let k=0; k < all_items; k++){
			items[k].classList.add("show-element");
			items[k].classList.remove("hide-element");
            AOS.refresh();
		}
        document.getElementById('textotop').innerHTML = textosdict[filtro][lang]
        
	}
	else {
        /*var aaaaaaaaa = document.getElementsByClassName("istanbul")[0].firstElementChild;
        document.getElementsByClassName("istanbul")[0].firstElementChild.attr('fancybox', "aaaaaa");
        var bbbbbbbb = document.getElementsByClassName("istanbul")[0].firstElementChild;
        alert(document.getElementsByName("istanbul"));*/
        
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
    $.getJSON("https://raw.githubusercontent.com/carephotography/carephotography.github.io/main/jsondata_citiescountries/data_countriescitiesopenindex.json", function (data) {
                    var htmltobeinserted = '';
                    $.each(data, function (key, value) {
                      var htmllistcities = '';
                      for (const [key2, value2] of Object.entries(value["cities"])) {
                        htmllistcities = htmllistcities + '<li><a href="#" class="itemlistadropdown" onclick="filteronmainpage(\'' + value2[2] + '\', \'en\')">' + value2[0] + '</a></li>';
                      }

                        htmltobeinserted = htmltobeinserted +  '<li class="dropdown-subsubmenu"> ' +
                           ' <a href="#" class="itemlistadropdown">' + value["country"][0] + '</a>' +
                           ' <ul class="dropdown-menu">' + htmllistcities + '</ul> </li>' ;

                            

                    });
                    $(".contentullicountriestravel").html(htmltobeinserted);
                });


                $.getJSON("https://raw.githubusercontent.com/carephotography/carephotography.github.io/main/jsondata_citiescountries/data_photos.json", function (dataphotos) {
                    var htmltobeinsertedphotos = '';
                    $.each(dataphotos, function (keyphotos, valuephotos) {
                      var htmllistcities = '';
                      var classesfinal = valuephotos["classes"].join(' ');

                      htmltobeinsertedphotos = '<div class="col-6 col-md-6 col-lg-' + valuephotos["col_lg"] + ' ' + classesfinal + ' imagemitem" data-aos="fade-up" data-aos-delay="100"> ' +
                            ' <a href="https://lh3.googleusercontent.com/d/' + valuephotos["link_photo"] + '"  class="d-block photo-item" data-fancybox="gallery"  data-caption="<strong>Location: ' + valuephotos["location"]["en"] + '</strong> &nbsp;&nbsp;||&nbsp;&nbsp;<strong>Gear: ' + valuephotos["Gear"]["en"] + '</strong> <br>' + valuephotos["Story"]["en"] + '"> ' +
                            ' <img src="https://lh3.googleusercontent.com/d/' + valuephotos["link_photo"] + '" alt="Image" class="img-fluid"> ' + 
                            ' <div class="photo-text-more"> ' +  
                            ' <span class="icon icon-search"></span>' +  
                            ' </div> ' +  
                            ' </a> ' +  
                            ' </div>' + htmltobeinsertedphotos ;

                            

                    });
                    $(".contentphotos").html(htmltobeinsertedphotos);

                    
                });
    
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