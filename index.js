const cardCollection = [{foto : "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", title : "hond", answer : "dog"}, 
                        {foto : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/erik-jan-leusink-561776-unsplash-1539591981.jpg?resize=480:*", title : "kat", answer : "cat"}, 
                        {foto : "https://upload.wikimedia.org/wikipedia/commons/5/54/Mexican_wolf_lounging.jpg", title : "wolf", answer : "wolk"}, 
                        {foto : "https://www.nps.gov/lacl/learn/nature/images/Image-w-cred-cap_-1200w_-Animals-page_-Red-Fox-head-profile_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false", title: "fox", answer : "vos"}, 
                        {foto : "https://live.staticflickr.com/4007/5075169756_d51008b274_b.jpg", title : "tree", answer : "boom"},
                        {foto : "https://live.staticflickr.com/7193/6908555819_5919b910e8_b.jpghttps://live.staticflickr.com/7193/6908555819_5919b910e8_b.jpg", title : "grass", answer : "grass"},
                        {foto : "https://cdn12.picryl.com/photo/2016/12/31/cluster-flowers-little-flower-nature-landscapes-4027ad-1024.jpg", title : "flower", answer : "bloem"}];

displayImage()

function displayImage() {
    const cardGallery = document.getElementById("imgQuestion");
    cardGallery.innerHTML = null;
    document.getElementById("answer").innerHTML = null;
    let randomNumber = Math.floor(Math.random()*((cardCollection.length - 1) + 1));
    let link = cardCollection[randomNumber].foto;

    // adjusting elements
    let img = document.createElement('img');
    img.src = link;
    img.alt = cardCollection[randomNumber].title;
    img.id = "image";

    // displaying elements
    cardGallery.appendChild(img);

    //display variants
}

function getResults() {
    for (let i = 0; i < cardCollection.length; i++) {
        if (document.getElementById("image").src == cardCollection[i].foto) {
            document.getElementById("answer").innerHTML = cardCollection[i].answer;
        }
    }
}
// function submitAnswer() {
//     
// }