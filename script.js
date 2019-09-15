// giphyApiKey = '1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U';

function sendReq() {
  const output = document.getElementById('output'),
      limit = document.getElementById('select').value,
      offset = 0,
      search = document.getElementById('text').value,
      url = `https://api.giphy.com/v1/gifs/search?api_key=1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U&q=${search}&limit=${limit}&offset=${offset}`;
    // clean form
      output.innerHTML = ""; 

    // request
    axios.get(url)
    .then(function (response) {
      for (let i = 0; i < response.data['data'].length; i++) {
        const gifs = response.data['data'][i]['images']['downsized']['url'];
        const link = document.createElement('img');
        output.appendChild(link);
        link.setAttribute('id', 'gifs');
        link.setAttribute('src', gifs);
      };
    })
    .catch(function (error) {
      console.log(error);
    });
}
