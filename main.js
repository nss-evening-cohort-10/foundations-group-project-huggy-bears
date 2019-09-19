
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

const printToDom = (divId, toPrint) => {
document.getElementById(divId).innerHTML = toPrint;
}

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
      <a href="https://open.spotify.com/playlist/37i9dQZF1DWTTthpScXd3v"type="button" class="btn btn-primary spotify">Spotify</a>
      <a href="https://music.amazon.com/home" type="button" class="btn btn-secondary purchase">Purchase</a>
    </div>
  </div> 
  </div>`;
  if(i % 2 === 1){
    domString += `</div>`;
  }
}
  printToDom('albumsDiv',domString);
};
albumscardBuilder();

const prevTour = [ 
    {
    image: 'https://66.media.tumblr.com/834e49bf932ba8de2a8aa1ed80e081d0/tumblr_pwyb8q5oSO1uptadjo1_1280.jpg', 
    city: 'New York, New York', 
    date: 'July 2019' 
    },
    {
    image: 'https://66.media.tumblr.com/7b17ac32dfaa8b7f213c004e7cc7cac3/tumblr_pwyb8q5oSO1uptadjo3_1280.jpg', 
    city: 'Singapore', 
    date: 'August 2019' 
    },
    {
    image: 'https://66.media.tumblr.com/1c807df65d197462c19979238debc059/tumblr_ptelcr47gd1uptadjo4_1280.jpg', 
    city: 'Toronto, Canada', 
    date: 'August 2019' 
    }
    ];

const prevTourCardBuilder = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i ++) {
        const tour = arr[i];
        domString += `
        <div class="card multi" style="width: 18rem;">
            <img src="${tour.image}" class="card-img-top" alt="${tour.city}">
            <div class="card-body">
                <h5 class="card-title">${tour.city}</h5>
                <p class="card-text">${tour.date}</p>
            </div>
        </div>
      `
    }
    printToDom('prevTour', domString);
}

prevTourCardBuilder(prevTour);

