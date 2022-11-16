const form = document.querySelector("#form");
const textArea = document.querySelector("#comment-box");

//fn that adds submitted comments to the comments box
function addComment(text){
    const publishedComments = document.getElementById("published-comments")
    let newComment = document.createElement("p");
    newComment.classList.add("comment-block")
    newComment.innerText = text;
    publishedComments.appendChild(newComment);
}

// fn that allows user to submit a comment on clicking submit
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const data = new FormData(form);
    addComment(data.get("comment-box"));

})
//fn that allows user to submit a comment on pressing enter
textArea.addEventListener("keypress", (e) =>{
    if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault();
        const data = new FormData(form);
        addComment(data.get("comment-box"));
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
