const formData = document.querySelector('form')
let Usuario
formData.addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
      new FormData(e.target)
    )
     Usuario = JSON?.stringify(data)
     Usuario = JSON.parse(Usuario)
     console.log(Usuario);
     fetch('http://localhost:3000/SubirArchivo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Usuario)
        })
        .then(res => res.json())
        .then(data => {
            console.info(data)
        })
        .catch(error => {
            console.log(error);
        })
    })