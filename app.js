const container = document.getElementById('display');

const url ='https://jsonplaceholder.typicode.com/comments/'

fetch(url)
    .then(res => res.json())
    .then(data => displayComment(data))


const displayComment = (data) => {
    data.forEach(el => {
        const div = document.createElement('div');
        div.className = 'border col-md-5 mx-3 shadow'
        div.innerHTML = `
            <h4>name: ${el.name}</h4>
            <p>email: ${el.email}</p>
            <button class ="btn btn-info" onclick="showDetails('${el.id}')">details</button>
        `
        container.appendChild(div)
    })
}
const details = document.getElementById('displayDetails');

const showDetails =async (id) =>{
   const url = `https://jsonplaceholder.typicode.com/comments/${id}
   `;
    const res = await fetch(url);
    const comment =await res.json();
    const div = document.createElement('div');
    details.textContent = '';
   div.innerHTML =`
   <a>${comment.id}</a>
   <h4>name: ${comment.name}</h4>
   <h5>email: ${comment.email}</h5>
   <p>${comment.body.slice(0,100)}</p>
   `
   details.appendChild(div);

}