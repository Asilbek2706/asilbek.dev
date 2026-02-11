document.addEventListener('DOMContentLoaded', () => {
    // 1. Halftone fonni qo'shish (agar HTMLda yo'q bo'lsa)
    if (!document.querySelector('.halftone-bg')) {
        const bg = document.createElement('div');
        bg.className = 'halftone-bg';
        document.body.appendChild(bg);
    }

    // 2. Panellar skrol bo'lganda chiqishi (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const panelObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('panel-visible');
            }
        });
    }, observerOptions);

    // Hamma "manga-panel" klassli elementlarni kuzatish
    document.querySelectorAll('.manga-panel').forEach(panel => {
        panel.classList.add('panel-hidden');
        panelObserver.observe(panel);
    });

    // 3. Sokin "Ink Ripple" effekti (Sichqoncha bosilganda)
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        ripple.style.width = '2px';
        ripple.style.height = '2px';
        ripple.style.background = '#7D8E95';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9999';
        ripple.style.transform = 'translate(-50%, -50%)';

        document.body.appendChild(ripple);

        const anim = ripple.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 0.5 },
            { transform: 'translate(-50%, -50%) scale(40)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        });

        anim.onfinish = () => ripple.remove();
    });

    // 4. Navigatsiya linklariga kichik tovushsiz animatsiya
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = '0.3s';
            link.style.letterSpacing = '2px';
        });
        link.addEventListener('mouseleave', () => {
            link.style.letterSpacing = 'normal';
        });
    });
});