document.addEventListener('DOMContentLoaded', function () {
    const IMAGE_COUNT = 16; // Set the number of images here
    const images = generateImageFilenames(IMAGE_COUNT);

    // Function to generate image filenames based on the count
    function generateImageFilenames(count) {
        const imageArray = [];
        for (let i = 0; i < count; i++) {
            imageArray.push(`images/image${i}.jpg`); // Adjust the filename pattern as needed
        }
        return imageArray;
    }

    // Function to pick a random image
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Function to display an image
    function displayImage(src) {
        // Create a new img element
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Random Image';
        img.className = 'card-img-top'; // Use Bootstrap class for card images

        // Create a new card element
        const newCard = document.createElement('div');
        newCard.className = 'card border-0';

        // Append the image to the new card
        newCard.appendChild(img);

        // Append the new card to the card group
        const cardGroup = document.querySelector('.card-container');
        cardGroup.appendChild(newCard);
    }


    // Display image0 on initial load
    displayImage(images[0]);

    // Event listeners for the buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function () {
            displayImage(getRandomImage());
        });
    });
});
