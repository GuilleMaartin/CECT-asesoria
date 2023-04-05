const fetch_URL = ("javascript/train.json")

const contenedor = document.getElementById("contenedor")

function loading(){
    fetch(fetch_URL)

    .then(function(res){
        return(res.json());
    })


    .then(function(pages){
       let html = '';

        pages.map((page) => {
            html += 
             `  <div class="asideContenedores" style="background-color:${page.backcolor};">
                    <p>${page.number}</p>
                    <h1>${page.asesoria}</h1> <br>
                    </div>
                `
           });

        contenedor.innerHTML = html;
    })    
    .catch(err => {
        console.log(err)
    })
}

loading()