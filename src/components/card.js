import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  
  const card = document.createElement('div');
  const head = document.createElement('div');
  const author = document.createElement('div');
  const imgCont = document.createElement('div');
  const img = document.createElement('img');
  const footNt = document.createElement('span');

  card.appendChild(head);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(footNt);

  card.classList.add('card');
  head.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container')

  head.textContent = article.headline;
  img.src = article.authorPhoto;
  footNt.textContent = `By: ${article.authorName}`;

  card.addEventListener('click', ()=>{
    console.log(head.textContent);
  })
  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
    .then(esp=>{
      //console.log(esp.data.articles)



      Object.entries(esp.data.articles).forEach(([key, value])=>{
        console.log(key);
        value.forEach(re=>{
          const dogs = Card(re);
          document.querySelector(selector).appendChild(dogs);
        })
      })

      /*esp.data.articles.javascript.forEach(res=>{
        const dogs = Card(res);
        document.querySelector(selector).appendChild(dogs);
      })

      esp.data.articles.bootstrap.forEach(res=>{
        const dogs = Card(res);
        document.querySelector(selector).appendChild(dogs);
      })

      esp.data.articles.technology.forEach(res=>{
        const dogs = Card(res);
        document.querySelector(selector).appendChild(dogs);
      })

      esp.data.articles.jquery.forEach(res=>{
        const dogs = Card(res);
        document.querySelector(selector).appendChild(dogs);
      })

      esp.data.articles.node.forEach(res=>{
        const dogs = Card(res);
        document.querySelector(selector).appendChild(dogs);
      })*/



      

      //const dogs = Card(esp.data.articles.technology[1]);
      //document.querySelector(selector).appendChild(dogs);
    })
    .catch(err=>{
      console.error(err);
    });
}

//const testPanel = Card({headline:'ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects', authorName:'Kramer', authorPhoto:'https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg'})
//document.querySelector('.cards-container').appendChild(testPanel);

export { Card, cardAppender }
