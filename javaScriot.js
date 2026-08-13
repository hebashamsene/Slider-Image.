//Get slider Items |Array.from
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// console.table(sliderImages);
//Get Number Of Slides
var slidesCount = sliderImages.length;
// console.log(slidesCount);
//set cuurent slide
var currentSlide = 1;
//slide number string element
var slidNumberElement = document.getElementById('slide-number');
//previous and next button
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
//handle click on previous and next button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
//create the main ul element
var paginationElement = document.createElement('ul');
//set id in created ul element
paginationElement.setAttribute('id', 'pagination-ul');
//create list item based on slides count
for (var i = 1; i <= slidesCount; i++) {
    //create the li
    var paginationItem = document.createElement('li');
    //set custom attribute
    paginationItem.setAttribute('data-index', i);
    //set item content
    paginationItem.appendChild(document.createTextNode(i));
    //append child to the main ul list
    paginationElement.appendChild(paginationItem);
}
//add the created ul to the page
document.getElementById('indicators').appendChild(paginationElement);
//get the new created ul
var paginationCreateUl = document.getElementById('pagination-ul');
//Get pagination Items |Array.from
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
//loop through all bullets item
for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}
//trigger the checker function
theChecker();
//next slide function
function nextSlide() {
    // console.log('next');
    if (nextButton.classList.contains('disabled')) {
        //do no thing
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}
//prev slide function
function prevSlide() {
    //console.log('previous');
    if (prevButton.classList.contains('disabled')) {
        //do no thing
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}
//create the checker function
function theChecker() {
    //set the slide number
    slidNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    //remove all active classes
    removeAllActive();
    //set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');
    //set active class on current pagination item
    paginationCreateUl.children[currentSlide - 1].classList.add('active');
    //check if current slide is the first
    if (currentSlide == 1) {
        //add disabled class on previous Button
        prevButton.classList.add('disabled');
    } else {
        //remove disabled class on previous Button
        prevButton.classList.remove('disabled');
    }

    //check if current slide is the last
    if (currentSlide == slidesCount) {
        //add disabled class from next Button
        nextButton.classList.add('disabled');
    } else {
        //remove disabled class from next Button
        nextButton.classList.remove('disabled');
    }
}
//remove all active classes from images and pagination bullets
function removeAllActive() {
    //loop through Images
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    //loop through pagination Bullets
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}




