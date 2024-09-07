function pesquisar() {

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
    //no java, quando temos duas palavras (camelcase), é necessário que a segunda comece com a primeira letra minúscula ex.: (getElementById, campoPesquisa)
    let campoPesquisa = document.getElementById("campo-pesquisa").value 


        
    //se for para comparação de valor utilizar == para indicar
    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
        section.innerHTML = "<p class = 'mensagem-erro'>Busca Vazia, Digite um Estilo</p>"
        return
        
    }

    // Validação do termo de pesquisa
if (campoPesquisa.length <= 1) {
    section.innerHTML = "<p class='mensagem-erro'>Por favor, digite mais de um caractere para a pesquisa.</p>";
    return;
  }
  if (campoPesquisa.length <=3) {
    section.innerHTML = "<p class='mensagem-erro'>Por favor, digite algo mais específico.</p>";
    return;
  }
//toLowerCase = letras minúsculas, para condicionar todas as pesquisas sem destinção da escrita
    campoPesquisa = campoPesquisa.toLowerCase()

//no caso de cessar o programa utilizar o "return"


    // Inicializa uma string(linha) vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase ()
        //se titulo includes campoPesquisa    / || significa ou na linguigem de programação
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) )
              //então faça...

        // Cria uma div para cada resultado, formatando o HTML com template literals
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">mais informações</a>
            </div>
        `;
    }
// a ! indica quando está vazio ou não encontrado (negativa)
    if(!resultados) {
        resultados = "<p class = 'mensagem-erro'>Busca não encontrada, Digite outro Estilo</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

//todo parte de funcionalidade do java será feito nesta parte do app