console.log("hello");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let result = document.querySelector(".result");

let btn = document.querySelector("#btn-search");
btn.addEventListener("click", () => {
    let input_user = document.querySelector("#text").value;
    fetch(`${url}${input_user}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // console.log(input_user);
            result.innerHTML = ` 
            <div class="result-text">
            <h3>${input_user}</h3>
            
            <i class="fa-solid fa-2x fa-volume-high" id="btn-sound" ></i>
            </div>
            <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetics[1].text}</p>
            </div>
            <p id="meaning">
            ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p id="example">
            // ${data[0].meanings[0].definitions[1].definition}
            </p>
            </div>`});

});
