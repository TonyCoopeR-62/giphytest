//     giphyApiKey = '1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U';
//     var url = "https://api.giphy.com/v1/gifs/search?api_key=1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U&q=cs&limit=10&offset=0";
let result = [];

function sendReq() {
    let xhr = new XMLHttpRequest(),  
        output = document.getElementById('output'),
        method = "GET",
        search = document.getElementById('text').value,
        limit = document.getElementById('select').value,
        offset = 0,
        url = `https://api.giphy.com/v1/gifs/search?api_key=1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U&q=${search}=&limit=${limit}=&offset=${offset}`;
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onreadystatechange = function () {
                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    result = JSON.parse(xhr.responseText);        
                };
            };
        xhr.send();
    for ( let i = 0; i < result.data.length; i++) {
        let link = document.createElement("img");
        let gifs = result.data[i]['images']['downsized']['url'];
        link.setAttribute("id", "gifs");
        link.setAttribute("src", gifs);
        output.appendChild(link);    
    }
}





