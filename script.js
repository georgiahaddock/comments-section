const form = document.querySelector("#form");
const textArea = document.querySelector("#comment-box");
var noOfComments = 0;
var noOfLikes = 0;

function createCommentBlock(text){
    noOfComments +=1;
    //create comment div
    let div = document.createElement("div");
    div.classList.add("comment-block");
    //create username title
    let username = document.createElement("header");
    username.innerText = "unknown user";
    username.classList.add("username");
    //add comment
    let comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerText = text;
    //add reply button
    let replyButton = document.createElement("button");
    replyButton.classList.add("reply-button");
    replyButton.innerText = "Reply";

    //add like button
    let likeButton = document.createElement("button");
    //likeButton.classList.add("like-button");
    likeButton.innerText = "Like";
    //put them all together
    div.appendChild(username);
    div.appendChild(comment);
    div.appendChild(replyButton);
    div.appendChild(likeButton);
    //publish to page
    const publishedComments = document.getElementById("published-comments");
    publishedComments.appendChild(div);
}

//like the photo
document.querySelector("#like-button").addEventListener("click", (e) => {
    noOfLikes ++;
    let p = document.querySelector("#no-of-likes");
    p.innerText = `Likes: ${noOfLikes}`;

})



// fn that allows user to submit a comment on clicking submit
form.addEventListener("submit", (event) =>{
    if(document.querySelector("#comment-box").value !== ""){
    event.preventDefault();
    const data = new FormData(form);
    createCommentBlock(data.get("comment-box"));
    document.querySelector("#comment-box").value = "";
    }

})
//fn that allows user to submit a comment on pressing enter
textArea.addEventListener("keypress", (e) =>{
    const data = new FormData(form);
    if(e.key === "Enter" && !e.shiftKey && document.querySelector("#comment-box").value !== ""){
        createCommentBlock(data.get("comment-box"));
        document.querySelector("#comment-box").value = "";
    }
})

function countChars(obj){
    var maxLength = 100;
    var strLength = obj.value.length;
    if(maxLength-strLength<10){
        document.getElementById("remaining-characters").innerHTML = '<span style="color: red;">'+(maxLength-strLength)+'</span>' + " characters remaining.";
    }else
    if(strLength <= maxLength){
        document.getElementById("remaining-characters").innerHTML = maxLength - strLength +" characters remaining."
    }
    else{
        document.getElementById("remaining-characters").innerHTML = "Maximum characters exceeded."
    }
}
