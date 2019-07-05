let cardCollection = [{ foto: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", category: "animal", title: "dog", answer: "hond" },
{ foto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/erik-jan-leusink-561776-unsplash-1539591981.jpg?resize=480:*", category: "animal", title: "kat", answer: "cat" },
{ foto: "https://upload.wikimedia.org/wikipedia/commons/5/54/Mexican_wolf_lounging.jpg", category: "animal", title: "wolf", answer: "wolk" },
{ foto: "https://www.nps.gov/lacl/learn/nature/images/Image-w-cred-cap_-1200w_-Animals-page_-Red-Fox-head-profile_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false", category: "animal", title: "fox", answer: "vos" },
{ foto: "https://live.staticflickr.com/4007/5075169756_d51008b274_b.jpg", category: "plants", title: "tree", answer: "boom" },
{ foto: "https://live.staticflickr.com/7193/6908555819_5919b910e8_b.jpghttps://live.staticflickr.com/7193/6908555819_5919b910e8_b.jpg", category: "plants", title: "grass", answer: "grass" },
{ foto: "https://cdn12.picryl.com/photo/2016/12/31/cluster-flowers-little-flower-nature-landscapes-4027ad-1024.jpg", category: "plants", title: "flower", answer: "bloem" }];


function displayImage() {
    const cardGallery = document.getElementById("imgQuestion");
    cardGallery.innerHTML = null;
    document.getElementById("answerName").innerHTML = null;
    let randomNumber = Math.floor(Math.random() * ((cardCollection.length - 1) + 1));
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
            document.getElementById("answerName").innerHTML = cardCollection[i].answer;
        }
    }
}

function addQuestion() {
    let form = document.createElement('form')
    document.getElementById('formSection').appendChild(form)
    let inputUrl = document.createElement('input')
    inputUrl.placeholder = 'Enter your URL'
    inputUrl.type = 'text';
    inputUrl.id = 'url';
    form.appendChild(inputUrl);

    let inputTitle = document.createElement('input')
    inputTitle.placeholder = 'Enter the word in English'
    inputTitle.type = 'text';
    inputTitle.id = 'title';
    form.appendChild(inputTitle);

    let inputAnswer = document.createElement('input')
    inputAnswer.placeholder = 'Enter the dutch version';
    inputAnswer.type = 'text';
    inputAnswer.id = 'answer';
    form.appendChild(inputAnswer);

    let inputButton = document.createElement('button');
    inputButton.id = 'createObject';
    inputButton.innerHTML = 'Add New Flash Card';
    form.appendChild(inputButton);
    inputButton.addEventListener('click', addFlashCard);     
}

function addFlashCard(event) {
    event.preventDefault()
    const newObject = {}
    newObject.foto = document.getElementById('url').value;
    newObject.title = document.getElementById('title').value;
    newObject.answer = document.getElementById('answer').value;
    cardCollection.push(newObject)
}

displayImage()