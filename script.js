const form = document.querySelector("#form");
const textArea = document.querySelector("#comment-box");

function createCommentBlock(text){
    console.log(1);
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
    //put them all together
    div.appendChild(username);
    div.appendChild(comment);
    comment.appendChild(replyButton);
    //publish to page
    const publishedComments = document.getElementById("published-comments")
    publishedComments.appendChild(div);
    console.log(2);
}


// fn that allows user to submit a comment on clicking submit
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const data = new FormData(form);
    createCommentBlock(data.get("comment-box"));
    document.querySelector("#comment-box").value = "";

})
//fn that allows user to submit a comment on pressing enter
textArea.addEventListener("keypress", (e) =>{
    if(e.key === "Enter" && !e.shiftKey){
        const data = new FormData(form);
        createCommentBlock(data.get("comment-box"));
        document.querySelector("#comment-box").value = "";
    }
})

//fn that counts the no. of characters remaining and publishes
// form.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     //find out no.of remaining characters:
//     const data = new FormData(form);
//     const text = data.get("comment-box");
//     let remainingCharacters = 100 - text.length;
//     //publish this number to page:
//     let number = document.createElement("p");
//     number.innerText = remainingCharacters;
//     let publishedComments = document.querySelector("#published-comments");
//     publishedComments.appendChild(number);

// } )

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
