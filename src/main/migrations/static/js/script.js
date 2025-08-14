  document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            // 1. Gestion du bouton hamburger
            if (menuBtn) {
                menuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                    mobileMenu.classList.toggle('mobile-menu');
                });
            }
            
            // 2. Gestion du défilement fluide et fermeture du menu
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    // Empêche le comportement par défaut
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        // Calcule la position de l'élément cible
                        const targetPosition = targetElement.offsetTop - 70;
                        
                        // Défilement fluide
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Ferme le menu mobile s'il est ouvert
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                        }
                    }
                });
            });
            
            // Fermer le menu si on clique en dehors
            document.addEventListener('click', (e) => {
                if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
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


