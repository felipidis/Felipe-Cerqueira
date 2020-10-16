const posts = []

function criarPost() {
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")

    const post = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }

    posts.push(post)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    console.log(posts)
    inserir()
}

function inserir() {
    const container = document.getElementById("container-de-posts")
    container.innerHTML = ""
    for (elemento of posts) {
        container.innerHTML += criar(elemento)
    }
}

function criar(elementos) {
    return "<div class='post-individual'>" +
        "<h3>" + elementos.titulo + "</h3>" +
        "<p><i>" + elementos.autor + "</i></p>" + 
        "<p>" + elementos.conteudo + "</p>"+
        "</div>"
}