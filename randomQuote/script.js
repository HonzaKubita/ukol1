const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

function getQuote() {
    fetch('https://api.api-ninjas.com/v1/quotes',
        {
            headers: {
                'X-Api-Key': 'TKXdFvosYPZ0QCVkmFkuWg==DKpDTVNDYXgkZjvb'
            }
        }
    )
        .then(response => response.json())
        .then(data => {
            quoteEl.textContent = data[0].quote;
            authorEl.textContent = data[0].author;
        });
}

getQuote();