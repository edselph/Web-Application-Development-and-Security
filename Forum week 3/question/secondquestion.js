function getaxoloto()
    fetch('https://theaxolotlapi.netlify.app/#')
    .then(res => {
        if (res.ok){
            console.log("Axoloto is ready")
        }
        else{
            console.log("Axoloto is not ready")
        }
    })
    .then(data => console.log(data))
    .catch(err => console.error(err))


    // the fetch function is to make a request to the API and collect the data.