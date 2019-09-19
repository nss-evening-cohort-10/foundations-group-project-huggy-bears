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

prevTourCardBuilder(prevTour);