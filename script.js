// Modal Functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const span = document.getElementsByClassName("modal-close")[0];

document.querySelectorAll('.achievement-list li').forEach(item => {
    item.onclick = function() {
        const imgSrc = this.getAttribute('data-image');
        const imgSrc2 = this.getAttribute('data-image-2');
        const achievementText = this.querySelector('span').innerText;
        
        modal.style.display = "block";
        modalImg.src = imgSrc;
        
        const modalImg2 = document.getElementById("modalImg2");
        const wrapper = document.querySelector(".modal-images-wrapper");
        
        if (imgSrc2) {
            modalImg2.src = imgSrc2;
            modalImg2.style.display = "block";
            wrapper.classList.add("dual-images");
            modalImg2.onerror = function() {
                this.style.display = "none";
                wrapper.classList.remove("dual-images");
            };
        } else {
            modalImg2.style.display = "none";
            wrapper.classList.remove("dual-images");
        }

        captionText.innerHTML = achievementText;

        // Fallback for missing images
        modalImg.onerror = function() {
            this.src = 'https://placehold.co/800x600/1e293b/38bdf8?text=Project+Image+Coming+Soon';
        };
    }
});

// Close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Close when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

console.log("Portfolio Interactive Features Loaded");
