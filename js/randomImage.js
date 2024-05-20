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
        newCard.className = 'card border-0 bounce-in';

        // Append the image to the new card
        newCard.appendChild(img);

        // Append the new card to the card container
        const cardContainer = document.querySelector('.card-container');
        if (!cardContainer) {
            console.error('Error: .card-container not found in the DOM.');
            return;
        }
        cardContainer.appendChild(newCard);
    }


    // Display image0 on initial load
    displayImage(images[0]);

    // Function to display a star animation
    function displayStar() {
        // Create a new img element for the star
        const star = document.createElement('img');
        star.src = './awards/star1.png'; // Replace with the path to your star image
        star.alt = 'Star';
        star.className = 'throw'; // Add star-fly class for animation

        // Randomize horizontal and vertical movement, and rotation
        const horizontalMove = `${Math.random() * 200 - 100}px`;
        const verticalMove = `${-100 + Math.random() * -100}px`;
        const rotation = `${360 * Math.floor(Math.random() * 5 + 1)}deg`;

        // Set custom properties for the animation
        star.style.setProperty('--horizontal-move', horizontalMove);
        star.style.setProperty('--vertical-move', verticalMove);
        star.style.setProperty('--rotation', rotation);

        // Append the star to the body
        document.body.appendChild(star);

        // Remove the star after the animation ends
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }

    // Function to handle button clicks
    function handleButtonClick() {
        displayImage(getRandomImage());

        // 25% chance to display a star
        if (Math.random() < 0.25) {
            displayStar();
        }
    }

   // Event listeners for the buttons
   document.getElementById('left-half').addEventListener('click', handleButtonClick);
   document.getElementById('right-half').addEventListener('click', handleButtonClick);

});
