// Image data array
const images = [
    {
        src: 'images/hulk.jpg',
        hdSrc: 'images/hulk.jpg',
        caption: 'Hulk in his powerful, green form from the Marvel Universe, known for his immense strength.'
    },
    {
        src: 'images/naruto.jpg',
        hdSrc: 'images/naruto.jpg',
        caption: 'Naruto Uzumaki, the spirited ninja and protagonist of Naruto, with his signature headband and orange jumpsuit.'
    },
    {
        src: 'images/Shikamaru.jpeg',
        hdSrc: 'images/Shikamaru.jpeg',
        caption: 'Shikamaru Nara, a genius strategist from Naruto, often seen with his signature lazy attitude and a shadow jutsu.'
    },
    {
        src: 'images/Thor.jpeg',
        hdSrc: 'images/Thor.jpeg',
        caption: 'Thor, the Norse god of thunder, holding his enchanted hammer, Mjolnir, from the Marvel Universe.'
    },
    {
        src: 'images/iron man.jpeg',
        hdSrc: 'images/iron man.jpeg',
        caption: 'Iron Man (Tony Stark) in his iconic red and gold armor, a tech genius and a key member of the Avengers.'
    },
    {
        src: 'images/optimus prime.jpeg',
        hdSrc: 'images/optimus prime.jpeg',
        caption: 'Optimus Prime, the brave leader of the Autobots from Transformers, standing strong in his robot form.'
    },
    {
        src: 'images/flash.jpeg',
        hdSrc: 'images/flash.jpeg',
        caption: 'The Flash (Barry Allen), the fastest man alive, known for his red costume and lightning bolt emblem.'
    },
    {
        src: 'images/captain america.jpeg',
        hdSrc: 'images/captain america.jpeg',
        caption: 'Captain America, the super-soldier with his indestructible shield, leading the charge for justice and freedom.'
    },
    {
        src: 'images/Doctor Strange.jpeg',
        hdSrc: 'images/Doctor Strange.jpeg',
        caption: 'Doctor Strange, the Sorcerer Supreme, wielding magic to protect the world from mystical threats.'
    },
    {
        src: 'images/batman.jpeg',
        hdSrc: 'images/batman.jpeg',
        caption: 'Batman (Bruce Wayne), the dark knight vigilante of Gotham City, known for his detective skills and unmatched combat prowess.'
    },
    {
        src: 'images/roman reigns.jpeg',
        hdSrc: 'images/roman reigns.jpeg',
        caption: 'Roman Reigns, the WWE Superstar, known for his dominance in the ring and his “Tribal Chief” persona.'
    },
    {
        src: 'images/brock lesenar.jpeg',
        hdSrc: 'images/brock lesenar.jpeg',
        caption: 'Brock Lesnar, the Beast Incarnate, a WWE and MMA legend known for his brutal strength and dominance in the ring.'
    }
];

// Get elements from the DOM
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const caption = document.getElementById('caption');
const close = document.getElementById('close');

// Populate the gallery with images
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.caption;
    imgElement.classList.add('gallery-image');
    imgElement.dataset.details = image.caption;

    // Add click event to each image
    imgElement.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.hdSrc;
        caption.innerText = image.caption;
    });

    // Append the image to the gallery
    gallery.appendChild(imgElement);
});

// Close the modal when the close button is clicked
close.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
