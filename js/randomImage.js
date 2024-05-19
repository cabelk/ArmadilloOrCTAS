document.addEventListener('DOMContentLoaded', function () {
    const IMAGE_COUNT = 7; // Set the number of images here
    const images = generateImageFilenames(IMAGE_COUNT);

    // Function to generate image filenames based on the count
    function generateImageFilenames(count) {
        const imageArray = [];
        for (let i = 0; i < count; i++) {
            imageArray.push(`images/image${i}.jpg`); // Adjust the filename pattern as needed
        }
        return imageArray;
    }

    // List of image file names
    // const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your actual image file names

    // Function to pick a random image
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Function to display an image
    function displayImage(src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Random Image';
        img.className = 'img-fluid';

        // Append the image to the first .js-memes-container-col
        const firstColumn = document.querySelector('.js-memes-container-col');
        firstColumn.appendChild(img);
    }

    
    // Display image0 on initial load
    displayImage(images[0]);

    // Event listener for the navbar-brand
    document.querySelector('.navbar-brand').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action
        displayImage(getRandomImage());
    });
    /*
    // Function to scroll to the bottom of the first column
    function scrollToBottom() {
        const firstColumn = document.querySelector('.js-memes-container-col');
        firstColumn.scrollTop = firstColumn.scrollHeight;
    }



    // Event listener for the navbar-brand
    document.querySelector('.navbar-brand').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action

        // Create an img element and set its src attribute to a random image
        const img = document.createElement('img');
        img.src = `images/${getRandomImage()}`;
        img.alt = 'Random Image';
        img.className = 'img-fluid img-override';

        // Append the image to the first .js-memes-container-col
        const firstColumn = document.querySelector('.js-memes-container-col');
        firstColumn.appendChild(img);


        // Scroll to the bottom of the first column
        scrollToBottom();
    });
    */

});
