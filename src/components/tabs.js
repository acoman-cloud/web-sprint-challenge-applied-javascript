import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const placeHolder = [];
  const topcis = document.createElement('div');
  topcis.classList.add('topics');

  for(let i=0;i<topics.length;i++){
    placeHolder.push(document.createElement('div'));
    topcis.appendChild(placeHolder[i]);
    placeHolder[i].classList.add('tab');
    placeHolder[i].textContent = topics[i]
  }

  return topcis;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  const appedn = document.querySelector(selector)
  axios.get('http://localhost:5000/api/topics')
  .then(esp=>{
    //console.log(esp.data.topics);
    const topicsOfDiscussion = Tabs(esp.data.topics);
    appedn.appendChild(topicsOfDiscussion);
  })
  .catch(err=>{
    console.log(err);
  });
}

//const testPanel = Tabs(['javascript', 'bootstrap', 'technology']);
//document.querySelector('.tabs-container').appendChild(testPanel);

export { Tabs, tabsAppender }
