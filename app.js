const form = document.querySelector('form')
const input = document.querySelector('form input')
const liste = document.querySelector('ul')
let toutesLesTaches = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const text = input.value.trim()

    if (text !== '') {
        rajouterUneTache(text)
        input.value = ''
    }

})

function rajouterUneTache(text) {

    const todo = {
        text,
        // La methode Dat.now() renvoie le nombre de millisecondes ecoulées depuis le 1er Janvier 1970
        id: Date.now()
    }

    afficherListe(todo)
}

function afficherListe(todo) {

    const item = document.createElement('li')
    item.setAttribute('data-Key', todo.id)

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.addEventListener('click', tacheFaite)
    item.appendChild(input)

    const txt = document.createElement('span')
    txt.innerText = todo.text
    item.appendChild(txt)

    const btn = document.createElement('button')
    btn.addEventListener('click', supprimerTache)
    const img = document.createElement('img')
    img.setAttribute('src', 'ressources/fermer.svg')
    btn.appendChild(img)
    item.appendChild(btn)


    liste.appendChild(item)
    toutesLesTaches.push(item)
}

function tacheFaite(event) {
    event.target.parentNode.classList.toggle('finDeTache')
}

function supprimerTache(e) {
    toutesLesTaches.forEach(el => {
        if (e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
            el.remove()
        }
    })
}