const Search = (query) => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("x-api-key", "44eeed34-8978-435a-89bd-385dcbbb6fc2");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "query": query,
            "useAutoprompt": true
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.metaphor.systems/search", requestOptions)
            .then(response => response.text())
            .then(result => resolve(result))
            .catch(error => reject('error', error));
    })
}

export default Search