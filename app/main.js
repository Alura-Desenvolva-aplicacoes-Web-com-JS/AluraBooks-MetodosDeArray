let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
pegaLivros()

async function pegaLivros(){
    const res = await fetch(endpointAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibeLivro(livrosComDesconto)
}