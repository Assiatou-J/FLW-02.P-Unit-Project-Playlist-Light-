// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
//are these good names for these variables?
let display = document.querySelector(".display");
let imageDisplay = document.querySelector(".display-image");
let songTitleDisplay = document.querySelector(".display-song");
let artistNameDisplay = document.querySelector(".display-artist");
let songLinkDisplay = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let imgURLs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiBK-AO9cnMvd99NyZb6spQVOfOh-wBi5xA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUNb-GCFvhm1pL9EaeoBh631CkVCMbtlN67A&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKVmHPMDB0MayZB0mFu7YQpvJFIlibTrk0A&usqp=CAU", "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F399169849%2F324982619885%2F1%2Foriginal.20221124-040131?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C520%2C1080%2C540&s=47dfdf1e112f1881dd3c2fa6c573a1d7"]
console.log(imgURLs);

/*for (let img of imgURLs) {

  document.querySelector("body").innerHTML = ("beforebegin","<img src=" + img + ">")
}
I wrote this to see if my img links worked*/
let songNames = ["Evergreen", "Know That You Are Loved", "God is Good", "Easier Said Than Done"];
console.log(songNames);
let artists = ["Kennedy Ryon (Yebba)", "Cleo Sol", "Jonathan McReynolds", "Thee Sacred Souls"];
console.log(artists);
let songLinks = ["https://www.youtube.com/watch?v=6QMS9DFEZKw", "https://www.youtube.com/watch?v=OrnZCx859tg", "https://www.youtube.com/watch?v=-f9uGdJYPeA", "https://www.youtube.com/watch?v=9PN_-fY7hL8"];
console.log(songLinks);

// what would you name these arrays that isn't so close to the input variable names?


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


  // task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
