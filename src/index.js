const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
    
        console.log(input.value);
    
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');//document.getElementById("t")//seems you need to get section elements to target childs
            const summary = document.querySelector('section#movieDetails p');//document.getElementById("s")
            console.log(title)
            console.log(summary)
            title.innerText = data.title;
            summary.innerText = data.summary;   
          
          // LOG: (3) [{…}, {…}, {…}]
        });
      });
    }
    

document.addEventListener('DOMContentLoaded', init);