




const albums = [

    {
       albumName: 'Tech City',
       image:'img/MCT.png',
       songs: ["Nashville Yards", "Dev Heights","Who's Hiring"],
       id: 'album1',
    },
    {
      albumName: 'Bootstrap',
      image:'img/Bootstrap.png',
      songs: ['Nav Bar', 'Buttons','Jumbotron'] ,
      id: 'album2', 
    },
    {
      albumName: 'Safari',
      image:'img/safari.jpeg',
      songs: ['Lonely', 'Google Who','Better than Yahoo'],
      id: 'album3',
    },
    {
      albumName: 'Alphabet Inc.',
       image:'img/Google.jpeg',
       songs: ['Google It', 'We are the Champions','Never Gonna Quit'],
       id: 'album4',
    },
    {
      albumName: 'Apple',
      image:'img/apple.jpeg',
      songs: ['Touch Screen', 'iPhone','Siri'],
      id: 'album5',
    },
    {
      albumName: 'Bezos',
       image:'img/download.png',
       songs: ['Ruler of Tech', 'Pioneer','AWS'],
       id: 'album6',
    }];


const printToDom = (stringToPrint, divId) =>{
  document.getElementById(divId).innerHTML = stringToPrint;
};


const albumscardBuilder = () => {
  let domString = '';
  for(let i =0;i<albums.length;i++){
    if(i % 2 === 0){
      domString += `<div class="row">`
    }
    let album= albums[i];
  domString +=`
  <div class="album-cards text-center col-6 ${albums[i].id}">
  <div class="card" >
  <img src="${albums[i].image}" class="card-img-top image rounded" alt="...">
    <div class="card-body ">
      <h2 class="card-title">${albums[i].albumName}</h2>
      <p class="card-text">${albums[i].songs.join('<br>')}</p>
    </div>
  </div> 
  <button type="button" class="btn btn-primary spotify">Spotify</button>
  <button  type="button" class="btn btn-secondary purchase">Purchase</button>
  </div>`;
  if(i % 2 === 1){
    domString += `</div>`;
  }
}
  printToDom(domString,'albumsDiv');
};
albumscardBuilder();








// const playEvents = () => {
//   const bandAlbums = document.getElementsByClassName('album-cards');
//   for(let i=0; i<bandAlbums.length; i++){
//     bandAlbums[i].addEventListener('click', albumClick);
//   }
// };
// playEvents();



// Sorting Hat
// const removeCard = () =>{
//   const cardsToRemove = document.getElementsByClassName('expel');
//   for (let i =0;i<cardsToRemove.length;i++){
//     const deleteMe = cardsToRemove[i];
//     deleteMe.addEventListener('click' ,(e) =>{
//       const btnClicked = e.target;
//       const cardToRemove = btnClicked.parentNode.parentNode;
//       cardToRemove.remove();
//     })
//   }
// };
