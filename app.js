let gender;
const btn = document.querySelectorAll('.btn button');
btn.forEach(genders => {
    genders.addEventListener('click', () => {
        gender = genders.value;
       document.querySelector("h2").style.display = "none"
    })
})

const GetData = async () => {
    const apiKey = '0+MqXToHwjmS0i7+RVhE1Q==BhuNr2wmhrzkujvH';
    const url = `https://api.api-ninjas.com/v1/babynames?gender=${gender}`;
    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            clearList()
            data.forEach(names => {
                createLI(names)
            })

        })

}
const clearList = () => { // clear the list after add new element
    const list = document.querySelector("#list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
const createLI = (names) => {
    const list = document.querySelector("#list")
    const li = document.createElement('li')
    li.innerHTML = `${names}`
    list.appendChild(li)
}

const Generate = document.querySelector("#generateBtn").addEventListener("click", () => {
    GetData()
    // Refresh the pag;

})