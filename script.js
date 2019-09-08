// giphyApiKey = '1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U';
// keypressed enter Добавить
// добавить в форму кнопку reset и сбрасывать гифки
function sendReq() {
  let output = document.getElementById('output'),
      limit = document.getElementById('select').value,
      offset = 0,
      search = document.getElementById('text').value,
      url = `https://api.giphy.com/v1/gifs/search?api_key=1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U&q=${search}&limit=${limit}&offset=${offset}`;
    axios.get(url)
    .then(function (response) {
      for (let i = 0; i < response.data['data'].length; i++) {
        let gifs = response.data['data'][i]['images']['downsized']['url'];
        let link = document.createElement('img');
        output.appendChild(link);
        link.setAttribute('id', 'gifs');
        link.setAttribute('src', gifs);
      };
    })
    .catch(function (error) {
      console.log(error);
    });
}
