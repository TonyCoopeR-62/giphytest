let giphyApiKey = '1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U';
// embed_url - straight link to a gif
// переделать данные ответа в массив, перебрать массив и найти embed_url
// отправлять данные ссылки в тег <a> 

//     var url = "https://api.giphy.com/v1/gifs/search?api_key=1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U&q=cs&limit=10&offset=0";

function sendReq() {
    var xhr = new XMLHttpRequest(),  
        output = document.getElementById('output'),
        method = "GET",
        search = document.getElementById('text').value,
        limit = 1,
        offset = 0,
        params = '&q=' + encodeURIComponent(search) +'&limit=' + encodeURIComponent(10) + '&offset=' + encodeURIComponent(offset),
        url = "https://api.giphy.com/v1/gifs/search?api_key=1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U"  + params;

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = function () {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                result = JSON.parse(xhr.responseText);             
            };
        };
    xhr.send();

    //output.innerHTML = JSON.stringify(result);
    var arr = JSON.stringify(result);
    function review(data) {
        for (let i = 0; i < data.length; i++) {
            output.innerHTML = data[i].embed_url.innerTEXT;
        }
    }
    review(arr);
}

