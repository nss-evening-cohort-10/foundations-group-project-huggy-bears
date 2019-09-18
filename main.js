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
    image: 'insert link', 
    city: 'New York, New York', 
    date: 'July 2019' 
    },
    {
    image: 'insert link', 
    city: 'Singapore', 
    date: 'August 2019' 
    },
    {
    image: 'insert link', 
    city: 'Toronto, Canada', 
    date: 'August 2019' 
    }
    ]