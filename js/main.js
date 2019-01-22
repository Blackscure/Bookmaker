//listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save Bookmark
function saveBookmark(e){
    

    //Get form values
    var siteName =document.getElementById('siteName').value;
    var siteURL =document.getElementById('siteUrl').value;

    var bookmark = {
        name:siteName,
        url: siteUrl
    }

    //Test if bookmarks is null
     if(localStorage.getItem('bookmarks')==null){
         // init array
         var bookmarks = [];
         // add to array
         bookmarks.push = [];
         // set to localStorage
         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
     } else {
         //Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmark to array
        bookmarks.push(bookmark);
        // re-set back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
     }
     

//prevent form from submitting
    e.preventDefault();
} 


//fech bookmarks
function fetchBookmarks(){
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    console.log(bookmarks);
}