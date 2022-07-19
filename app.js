div.innerHTML = `<h1> Redescubriendo los primeros 150 pokemons </h1>`
let contenedor = document.createElement(`ol`);
div.append(contenedor);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
.then( (resp) => resp.json())
.then( (data) => {
    console.log(data);
    data.results.forEach(element => {
        
        let li = document.createElement(`li`);
        li.innerHTML = `${(element.name).toUpperCase()}`
        contenedor.append(li);
    });

})
boton.remove();
buttonAll.remove();

