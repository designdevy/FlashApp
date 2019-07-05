const cardCollection = [{foto : "https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg", title : "hond", answer : "dog"}, 
                        {foto : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/erik-jan-leusink-561776-unsplash-1539591981.jpg?resize=480:*", title : "kat", answer : "cat"}, 
                        {foto : "", answer : "dog"}, 
                        {foto : "", answer : "dog"}, 
                        {foto : "", answer : "dog"}];

displayImage()

function displayImage() {
    let randomNumber = 1;
    const cardGallery = document.getElementById("card");
    let link = cardCollection[randomNumber].foto;

    // adjusting elements
    let img = document.createElement('img');
    img.src = link;
    img.alt = cardCollection[randomNumber].title;

    // displaying elements
    cardGallery.appendChild(img);
}

// function submitAnswer() {
//     
// }