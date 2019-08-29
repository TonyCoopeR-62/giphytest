let giphyAPI = '1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U';

//     var url = "https://api.giphy.com/v1/gifs/search?api_key=1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U&q=cs&limit=10&offset=0";

var result;
function sendReq() {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        search = document.getElementById('text').value,
        limit = 10,
        offset = 0,
        params = 'q=' + encodeURIComponent(search) +'&limit=' + encodeURIComponent(10) + '&offset=' + encodeURIComponent(offset),
        url = "https://api.giphy.com/v1/gifs/search?api_key=1tqwMywkT5HjTrmdg8aF7mw5ZN2h0p2U&" + params;

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                result = xhr.responseText;
            };
        };
    xhr.send();
    console.log(result);
}

