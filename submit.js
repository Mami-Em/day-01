document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#ampio')
    btn.disabled = true
    const nampiana = document.querySelector('#nampiana')
    nampiana.onkeyup = () => {
        // tsy maazo mandefa zavatra tsy misy
        if(nampiana.value.length > 0) {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }
        
    document.querySelector('form').onsubmit = () => {
        const li = document.createElement('li')        
        li.innerHTML = nampiana.value
        document.querySelector('#vao2').append(li)
        nampiana.value = ''
        return false
    }
});

