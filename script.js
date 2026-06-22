// ============================================
// MOBILE MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle menu on button click
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar');
        if (!navbar.contains(event.target) && navLinks && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });
    }

    // Smooth scroll for navigation links
    setupSmoothScroll();
});

// ============================================
// FORM SUBMISSION HANDLER
// ============================================
function handleFormSubmit() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        comments: formData.get('comments'),
        subscribe: formData.get('subscribe')
    };

    // Validate form
    if (!validateForm(data)) {
        showError('Please fill in all required fields correctly.');
        return;
    }

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate form submission (in production, this would send to a server)
    // Using FormSubmit.co for free form submission
    setTimeout(() => {
        // Clear messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // In a real application, you'd send this to a server
        // For now, we'll show a success message and clear the form
        console.log('Form Data:', data);
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Scroll to message
        successMessage.scrollIntoView({ behavior: 'smooth' });
        
        // Clear form
        form.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }, 1500);
}

// ============================================
// FORM VALIDATION
// ============================================
function validateForm(data) {
    // Check required fields
    if (!data.name || !data.name.trim()) {
        return false;
    }
    if (!data.phone || !data.phone.trim()) {
        return false;
    }
    if (!data.subject || !data.subject.trim()) {
        return false;
    }
    if (!data.comments || !data.comments.trim()) {
        return false;
    }

    // Validate phone number (basic validation)
    if (!/^[\d\-\+\(\)\s]+$/.test(data.phone)) {
        return false;
    }

    // Validate email if provided
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return false;
    }

    return true;
}

// ============================================
// ERROR HANDLING
// ============================================
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorText = errorMessage.querySelector('p');
    errorText.textContent = message;
    errorMessage.style.display = 'block';
    
    // Scroll to error
    errorMessage.scrollIntoView({ behavior: 'smooth' });

    // Hide error after 5 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
window.addEventListener('load', updateActiveNavigation);

// ============================================
// FORM INPUT FEEDBACK
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    formInputs.forEach(input => {
        // Add focus/blur effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });

        // Validate email field
        if (input.type === 'email') {
            input.addEventListener('change', function() {
                if (this.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
                    this.classList.add('invalid');
                } else {
                    this.classList.remove('invalid');
                }
            });
        }
    });
});

// ============================================
// TABLE OF CONTENTS (for module pages)
// ============================================
function generateTableOfContents() {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const headings = mainContent.querySelectorAll('h2');
    if (headings.length === 0) return;

    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Contents</h3><ul>';

    headings.forEach((heading, index) => {
        const id = heading.id || `section-${index}`;
        if (!heading.id) heading.id = id;
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        li.appendChild(a);
        toc.querySelector('ul').appendChild(li);
    });

    toc.innerHTML += '</ul>';
    
    const firstSection = mainContent.querySelector('.module-section');
    if (firstSection) {
        firstSection.parentElement.insertBefore(toc, firstSection);
    }
}

// ============================================
// PAGE TRANSITIONS
// ============================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function setupScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTop';
    scrollButton.textContent = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    `;
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
            scrollButton.style.alignItems = 'center';
            scrollButton.style.justifyContent = 'center';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollButton.addEventListener('mouseover', () => {
        scrollButton.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseout', () => {
        scrollButton.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button when page loads
window.addEventListener('DOMContentLoaded', setupScrollToTop);

// ============================================
// DARK MODE TOGGLE (Optional)
// ============================================
function initDarkMode() {
    const darkModeToggle = document.querySelector('[data-toggle-dark-mode]');
    if (!darkModeToggle) return;

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
}

window.addEventListener('DOMContentLoaded', initDarkMode);

// ============================================
// UTILITY: Debounce function
// ============================================
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ============================================
// LOG INITIALIZATION
// ============================================
console.log('Website loaded successfully');
console.log('Created by: Prince Emmanuel Umoh');
console.log('Registration: 2025/co/cs/071');
console.log('Department: Computer Science');

// ============================================
// OFFLINE AUDIO GENERATION (simple beep message)
// ============================================
window.addEventListener('DOMContentLoaded', function() {
    try {
        const audioEl = document.getElementById('offlineAudio');
        if (!audioEl) return;

        // Generate a short beep WAV (sine tone) using Web Audio API
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        const duration = 2.0; // seconds
        const sampleRate = ctx.sampleRate;
        const frameCount = Math.floor(sampleRate * duration);
        const buffer = ctx.createBuffer(1, frameCount, sampleRate);
        const data = buffer.getChannelData(0);

        // Sine wave at 440Hz with simple envelope and spoken-like tones using frequency changes
        for (let i = 0; i < frameCount; i++) {
            const t = i / sampleRate;
            // frequency sweep for a simple 'message' feel
            const freq = 440 + 220 * Math.sin(2 * Math.PI * 0.5 * t);
            // amplitude envelope (attack/decay)
            const env = Math.min(1, t * 5) * (1 - Math.min(1, t / duration));
            data[i] = Math.sin(2 * Math.PI * freq * t) * 0.2 * env;
        }

        // Convert AudioBuffer to WAV Blob
        function audioBufferToWav(buffer) {
            const numOfChan = buffer.numberOfChannels;
            const length = buffer.length * numOfChan * 2 + 44;
            const bufferArray = new ArrayBuffer(length);
            const view = new DataView(bufferArray);

            /* RIFF identifier */ writeString(view, 0, 'RIFF');
            /* file length */ view.setUint32(4, 36 + buffer.length * numOfChan * 2, true);
            /* RIFF type */ writeString(view, 8, 'WAVE');
            /* format chunk identifier */ writeString(view, 12, 'fmt ');
            /* format chunk length */ view.setUint32(16, 16, true);
            /* sample format (raw) */ view.setUint16(20, 1, true);
            /* channel count */ view.setUint16(22, numOfChan, true);
            /* sample rate */ view.setUint32(24, buffer.sampleRate, true);
            /* byte rate (sampleRate * blockAlign) */ view.setUint32(28, buffer.sampleRate * numOfChan * 2, true);
            /* block align (channel count * bytes per sample) */ view.setUint16(32, numOfChan * 2, true);
            /* bits per sample */ view.setUint16(34, 16, true);
            /* data chunk identifier */ writeString(view, 36, 'data');
            /* data chunk length */ view.setUint32(40, buffer.length * numOfChan * 2, true);

            // write interleaved data
            let offset = 44;
            for (let i = 0; i < buffer.length; i++) {
                for (let channel = 0; channel < numOfChan; channel++) {
                    let sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
                    view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
                    offset += 2;
                }
            }

            return new Blob([view], { type: 'audio/wav' });
        }

        function writeString(view, offset, string) {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        }

        const wavBlob = audioBufferToWav(buffer);
        const url = URL.createObjectURL(wavBlob);
        audioEl.src = url;

        // Optional: unlock audio on user gesture if autoplay blocked
        const unlock = () => {
            if (ctx.state === 'suspended' && typeof ctx.resume === 'function') ctx.resume();
            audioEl.play().catch(() => {});
            window.removeEventListener('click', unlock);
        };
        window.addEventListener('click', unlock);
    } catch (err) {
        console.error('Offline audio generation failed:', err);
    }
});
