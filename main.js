const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
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
                  <a href="${cardData[i].tickets}" role="button" class="btn btn-primary" id="tixFloat">Purchase Tickets</a> 
                </div>
              </div>
            </div>
          </div>
      `
  }
  printToDom('cardArea', tourdom)
}

document.getElementById('tour').addEventListener('click', () => {
tourLoopBuilder(upcomingTours);
});

const albums = [

    {
       albumName: 'Tech City',
       image:'img/img_placeholder.png',
       songs: ['Born In America', 'test song 2','test song 3']
    },
    {
      albumName: 'Boots Who',
      image:'img/img_placeholder.png',
      songs: ['test song1', 'test song 2','test song 3']  
    },
    {
      albumName: 'Safari Survives',
      image:'img/img_placeholder.png',
      songs: ['test song1', 'test song 2','test song 3']
    },
    {
      albumName: 'Bezos Wins',
       image:'img/img_placeholder.png',
       songs: ['test song1', 'test song 2','test song 3']
    }];

    
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

