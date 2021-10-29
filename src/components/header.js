

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement('div');
  const dat = document.createElement('span');
  const h11 = document.createElement('h1');
  const tem = document.createElement('span');

  header.classList.add('header');
  dat.classList.add('date');
  tem.classList.add('temp');

  header.appendChild(dat);
  header.appendChild(h11);
  header.appendChild(tem);

  dat.textContent = date;
  h11.textContent = title;
  tem.textContent = temp;

  return header;
}

const hhll = document.querySelector('.header-container');

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const appedn = document.querySelector(selector)
  const testPanel = Header('Lmabda woohoo', 'jan 1, 1999', '5 degrees')
  appedn.appendChild(testPanel);
}

export { Header, headerAppender }
