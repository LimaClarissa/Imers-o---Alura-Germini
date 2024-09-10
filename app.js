function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

	let campoPesquisa = document.getElementById("campo-pesquisa").value

	//se campoPesquisa for uma string vazia
	if(!campoPesquisa) {
		section.innerHTML = "Digite uma artista :)" 
		return
	}

	campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
	let titulo = "";
	let descricao = "";
	let tags = "";

  // Itera sobre cada dado e constrói o HTML para cada resultado
  for (let dado of dados) {
		titulo = dado.titulo.toLowerCase()
		descricao = dado.descricao.toLowerCase()
		tags = dado.tags.toLowerCase()

		// se titulo includes campoPesquisa
		if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
			// Cria um novo elemento HTML para cada resultado, formatando os dados
			resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Saiba mais</a>
      </div>
    `;
		}
    
  }

	// se não existir resultados
	if (!resultados) {
		resultados = "<p>Artista não encontrada na base de dados :(</p>"
	}
  // Insere os resultados construídos na seção HTML
  section.innerHTML = resultados;
}