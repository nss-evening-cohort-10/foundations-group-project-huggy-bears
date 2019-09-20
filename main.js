const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
  }  

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




const members = [{  Name: 'Gabe',
                    Image:'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg',
                    socialMedia:'https://www.twitter.com'},
                {   Name: 'maggy',
                    Image:'https://media.gettyimages.com/photos/spring-field-picture-id539016480?s=612x612',
                    socialMedia:'https://www.instagram.com'},
                {   Name: 'Raymond',
                    Image:'./images/raymond.png',
                    socialMedia:'https://www.twitter.com'},
                {   Name: 'Yitbarek',
                    Image:'./images/yitbarek.jpg',
                    socialMedia:'https://www.facebook.com'}];

// const printToDom = (divId, toPrint)=>{
//     document.getElementById(divId).innerHTML = toPrint;
// }
var memberCardBuilder = (memArr)=>{
    let domString = '<div class="row">';
    for (let i = 0; i < memArr.length; i++) {
        const element = members[i];
        domString += `  <div class = "col-6">
                        <div class="card huggy-bears-card-container">
                        <img src="${element.Image}" class="card-img-top card-img" alt="...">
                        <div class="card-body">
                        <div class="name-and-social-media    text-center">
                            <label class="card-title">${element.Name}</label>
                            <a href ="${element.socialMedia}" class="social-media-link target = "_blank" class="btn btn-primary btn-social-media">Social Media</a>
                        </div>
                        </div>
                     </div>
                    </div>`;
    }
    domString += '</div>';
    printToDom('members-container', domString);
}



const upcomingTours = [
  {
  cityImage: 'https://www.planetware.com/photos-large/USWI/us-wisconsin-milwaukee-lakefront.jpg',
  cityAndState:  'Milwaukee, WI',
  date: '11/20/3030',
  venue: 'The Rave/Eagles Club',
  tickets: 'https://www.therave.com/concert_details.asp?id=7067'
  },
  {
  cityImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_VlbSxkLolq_-cvs1QIl3J4y0YpzHqJ4pMMUPj_TPtqtEQwBzg',
  cityAndState:  'Carbondale, IL',
  date: '01/02/3034',
  venue: 'The Hangar 9',
  tickets: 'http://thehangar9.ticketfly.com/'
  },
  {
  cityImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwwW_2guk0ZkDMBrgqLarerFZnFVDJPfNyCbnELyYmQXgpOLnnQ',
  cityAndState: 'Tuscon, AZ',
  date: '05/04/3037',
  venue: 'The Rialto Theater',
  tickets: 'https:www.rialtotheatre.com/'
  },
  {
  cityImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgELPM5O8c91uOyWMq6-iz_OCtNfQgRJvORvO1yzsLbIaFchxm',
  cityAndState:  'Ypsilanti, MI',
  date: '06/12/3040',
  venue: 'EMU Convocation Center',
  tickets: 'https://www.emich.edu/emutix/'
  }
  ]
  
  const tourLoopBuilder = (cardData) => {
    let tourdom = ''
    for (let i = 0; i < cardData.length; i++) {
        tourdom += `
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-3">
                  <img src="${cardData[i].cityImage}" class="card-img" alt="...">
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">${cardData[i].cityAndState}</h5>
                    <p class="card-text">${cardData[i].date}</p>
                    <p class="card-text d-inline">${cardData[i].venue}</p>
                    <a href="${cardData[i].tickets}" role="button" class="btn btn-primary" target="_blank" id="tixFloat">Purchase Tickets</a> 
                  </div>
                </div>
              </div>
            </div>
        `
    }
    printToDom('cardArea', tourdom)
  }
  
  
  
  const newsletter = () => {
    if (nameNewsletter.value === '') {
    return alert("Please enter name and email into appropriate fields")
    } else {
    let name = document.getElementById('nameNewsletter').value;
    let string = '';
    string += `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Sweet Success!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Thanks for signing up for our newsletter, ${name}! You rock!</p>
        </div>
        <div class="modal-body">
          <img class="card-img-top" src="https://media3.giphy.com/media/l46CDHTqbmnGZyxKo/giphy.gif">
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>  
    `
    printToDom('modal', string);
    nameNewsletter.value = '';
    emailNewsletter.value = '';
  }}
  


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

// const printToDom = (divId, toPrint) => {
// document.getElementById(divId).innerHTML = toPrint;
// }

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

const init = () => {
  if(document.URL.includes('index')) {
    prevTourCardBuilder(prevTour);
    document.getElementById('submit').addEventListener('click', newsletter);
  } else if(document.URL.includes('members')) {
    memberCardBuilder(members);
    document.getElementById('submit').addEventListener('click', newsletter);
  } else if(document.URL.includes('tour')) {
    tourLoopBuilder(upcomingTours);
    document.getElementById('submit').addEventListener('click', newsletter);
  } else if(document.URL.includes('jams')) {
    albumscardBuilder();
    document.getElementById('submit').addEventListener('click', newsletter);
  };
};
init();
