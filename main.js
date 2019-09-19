const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint
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
  printToDom(tourdom, 'cardArea')
}

document.getElementById('tour').addEventListener('click', () => {
tourLoopBuilder(upcomingTours);
});



