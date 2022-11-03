const main = document.querySelector('#main')
main.remove()

const newHeader = document.createElement('h1')
document.body.append(newHeader)

document.body.querySelector('h1').id = 'victory'

document.body.querySelector('h1').innerHTML = 'YOUR-NAME is the champion'