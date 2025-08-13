  // 1. GESTION DU CLIC SUR LE BOUTON HAMBURGER
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Affiche ou cache le menu en alternant la classe 'hidden' de Tailwind
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. GESTION DU DÉFILEMENT FLUIDE (SMOOTH SCROLL) ET FERMETURE DU MENU
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Fait défiler la page jusqu'à l'élément cible
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // -70px pour compenser la hauteur de la nav-bar
                    behavior: 'smooth'
                });
                
                // Ferme le menu mobile s'il est ouvert après avoir cliqué sur un lien
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

        // Form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log({name, email, subject, message});
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });


 document.addEventListener('DOMContentLoaded', function() {
    const mainVideoPlayer = document.getElementById('main-video-player');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const newSrc = `https://www.youtube.com/embed/${videoId}`;
        mainVideoPlayer.src = newSrc;
      });
    });
  });




        // Form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log({name, email, subject, message});
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });


 document.addEventListener('DOMContentLoaded', function() {
    const mainVideoPlayer = document.getElementById('main-video-player');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const newSrc = `https://www.youtube.com/embed/${videoId}`;
        mainVideoPlayer.src = newSrc;
      });
    });
  });


