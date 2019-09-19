//console.log('bite me');
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
const printToDom = (divId, domString)=>{
    document.getElementById(divId).innerHTML = domString;
}
var memberCardBuilder = (memArr)=>{
    let domString = '<div class="row">';
    for (let i = 0; i < memArr.length; i++) {
        const element = members[i];
        domString += `  <div class = "col-6">
                        <div class="card card-container">
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
const attachNavbarEvent = ()=>{
    document.getElementById('membersButton').addEventListener('click', ()=>{
        memberCardBuilder(members);
    })
}
const init = (e)=>{
    attachNavbarEvent();
};
init(); 