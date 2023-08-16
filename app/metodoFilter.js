const btnFiltrar = document.querySelectorAll('.btn')
btnFiltrar.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : filtrarCategoria(categoria)
    exibeLivro(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularvalorTotalLivrosDisponiveis(livrosFiltrados)
        exibirvalorTotalLivrosDisponiveis(valorTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirvalorTotalLivrosDisponiveis(valorTotal){
    sectionValorLivrosdisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}