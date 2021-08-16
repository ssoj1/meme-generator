
document.addEventListener("submit", results);

function results(e){
    // preventing the page from reloading
    e.preventDefault();

    //creating variables for each returned value from the form
    let image_link = document.getElementById('image_link').value;
    let top_text = document.getElementById('top_text').value;
    let bottom_text = document.getElementById('bottom_text').value;

    // creating the div to hold the meme
    let div = document.createElement("div");
    div.className = "meme_section";
    div.id = image_link;
    document.querySelector("article").append(div);

    // creating an image and displaying the image at the provided URL
    let img = document.createElement("img");
    img.src = image_link;
    img.className = "image";
    div.appendChild(img);

    // creating a paragraph and displaying the first text block 
    let display_top = document.createElement('p');
    display_top.innerHTML=top_text;
    display_top.className = "top_text";
    div.appendChild(display_top);

    // creating a paragraph and displaying the second text block 
    let display_bottom = document.createElement('p');
    display_bottom.innerHTML=bottom_text;
    display_bottom.className = "bottom_text";
    div.appendChild(display_bottom);

    // creating a div to hold the X to remove the meme later
    let removeButton = document.createElement('div');
    removeButton.innerHTML='x';
    removeButton.className = "remove_button"
    div.appendChild(removeButton);

    // clearing the contents in the form 
    document.getElementById("meme_form").reset();

}

let memeSection = document.querySelector('article');

memeSection.addEventListener("click", function(e){
    if(e.target.tagName === 'DIV'){
        e.target.parentElement.remove();
    }
});





