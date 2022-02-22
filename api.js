document.addEventListener('DOMContentLoaded', function() {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=330b433e70391973f38c5fc640542a3c&format=1')
        .then(response => response.json())
        .then(data => {

        for (const [key, value] of Object.entries(data.rates)) {
            console.log(`${key}: ${value}`);
            // document.querySelector('body').innerHTML = `${key}: ${value}`
            const li = document.createElement('li')
            li.innerHTML = `${key}: ${value}`
            document.querySelector('ul').append(li)
        }
            // alert(Object.values(data.rates))
        })
        .catch(error => {
            console.log('error:', error);
        })
});