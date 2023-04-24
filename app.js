const url = "https://reqres.in/api/unknown"
const req = new XMLHttpRequest()
req.open("GET", url)
req.responseType = "json"
req.onload = () => {
    let cols = req.response.data
    const datal = document.querySelector('#colors')
    const but = document.querySelector('.but')
    const nam = document.querySelector('.names')
    const color = document.querySelector('.color')
    const block = document.querySelector('.block')
    console.log(nam)
    for (let col of cols) {
        let op = document.createElement('option')
        op.value = col.name
        datal.append(op)
    }
    but.addEventListener('click', () => {
        for (let col of cols) {
            if (color.value == col.name) {
                nam.innerHTML = `${col.name}`
                block.style.backgroundColor = `${col.color}`
            }
        }
    })
}
req.send()