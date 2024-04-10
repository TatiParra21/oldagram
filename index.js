const mainId = document.getElementById("main-section")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
function createAll(){
    for(i = 0; i< posts.length;i++){
        let indiPost = posts[i]
        passInfo(indiPost)
    }
}

function passInfo(obj){
    let wholeContainer = document.createElement("div")
    wholeContainer.classList.add("container")
    let iconSect = document.createElement("section")
    let nameLocation= document.createElement("div")
    nameLocation.classList.add("name-location")
    iconSect.classList.add("icon-section")
    iconSect.innerHTML = `
    <div>
    <img class="user-photo" src="${obj.avatar}">
    <div class="user-info-container">
    <h3>${obj.name}</h3>
    <p>${obj.location}</p>
    </div>
    </div>
    
    `
    nameLocation.innerHTML= `
    <img class="post-class" src="${obj.post}">
    <div class="bottom-icons">
        <img src="./images/icon-heart.png" class="icon-heart">
        <img src="./images/icon-comment.png">
        <img src="./images/icon-dm.png">
    </div>
    <p class="likes-part">${obj.likes} likes</p>
    <p> <span class="username">${obj.username}</span> ${obj.comment}</p>
    
    
    
    `
    iconSect.append(nameLocation)
    wholeContainer.append(iconSect)
    mainId.append(wholeContainer)
    //adding event listeners

    let heartIcon = nameLocation.querySelector(".icon-heart")
    let likeCount = nameLocation.querySelector(".likes-part")
    heartIcon.addEventListener("dblclick",function(){
        obj.likes++
        likeCount.textContent = `${obj.likes} likes`
    })
}



createAll()