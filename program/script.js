// ===== DAY TABS FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const dayTabs = document.querySelectorAll('.day-tab');
    const dayContents = document.querySelectorAll('.day-content');

    dayTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetDay = this.getAttribute('data-day');

            // Remove active class from all tabs and contents
            dayTabs.forEach(t => t.classList.remove('active'));
            dayContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetDay).classList.add('active');
        });
    });

    // ===== SMOOTH SCROLL FOR NAVIGATION =====
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== HEADER SCROLL EFFECT =====
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // ===== PROGRESS BAR ANIMATION =====
    const progressBars = document.querySelectorAll('.progress');
    
    const animateProgress = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.style.width;
                progress.style.width = '0%';
                setTimeout(() => {
                    progress.style.width = width;
                }, 100);
                observer.unobserve(progress);
            }
        });
    };

    const progressObserver = new IntersectionObserver(animateProgress, {
        threshold: 0.5
    });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // ===== CHECKLIST SAVE TO LOCAL STORAGE =====
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    
    // Load saved state
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`checklist-${index}`);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
    });

    // Save state on change
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(`checklist-${index}`, this.checked);
        });
    });

    // ===== CURRENT TIME HIGHLIGHT =====
    function highlightCurrentTime() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinutes = now.getMinutes();
        const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ...

        // Map day number to column index (0 = Pazar -> 7, 1 = Pazartesi -> 1, ...)
        const dayColumnMap = {
            0: 7, // Pazar
            1: 1, // Pazartesi
            2: 2, // Salı
            3: 3, // Çarşamba
            4: 4, // Perşembe
            5: 5, // Cuma
            6: 6  // Cumartesi
        };

        const columnIndex = dayColumnMap[currentDay];

        // Time slots in the schedule
        const timeSlots = [
            { start: 7, end: 7.5 },
            { start: 7.5, end: 8 },
            { start: 8, end: 10 },
            { start: 10, end: 10.25 },
            { start: 10.25, end: 12.25 },
            { start: 12.25, end: 13 },
            { start: 13, end: 15 },
            { start: 15, end: 15.25 },
            { start: 15.25, end: 17 },
            { start: 17, end: 18.5 },
            { start: 18.5, end: 21.5 },
            { start: 21.5, end: 22 }
        ];

        const currentTime = currentHour + currentMinutes / 60;

        // Find current time slot
        const currentSlotIndex = timeSlots.findIndex(slot => 
            currentTime >= slot.start && currentTime < slot.end
        );

        // Remove previous highlights
        document.querySelectorAll('.schedule-table td.current-slot').forEach(td => {
            td.classList.remove('current-slot');
        });

        // Add highlight to current slot
        if (currentSlotIndex !== -1) {
            const rows = document.querySelectorAll('.schedule-table tbody tr');
            if (rows[currentSlotIndex]) {
                const cells = rows[currentSlotIndex].querySelectorAll('td');
                if (cells[columnIndex]) {
                    cells[columnIndex].classList.add('current-slot');
                }
            }
        }
    }

    // Add CSS for current slot highlight
    const style = document.createElement('style');
    style.textContent = `
        .current-slot {
            animation: pulse 2s infinite;
            box-shadow: inset 0 0 0 3px #22c55e !important;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);

    // Run on load and every minute
    highlightCurrentTime();
    setInterval(highlightCurrentTime, 60000);

    // ===== MOTIVATIONAL MESSAGES =====
    const motivationalMessages = [
        "Her gün bir adım ileri! 🚀",
        "Bugün zor, yarın daha kolay olacak! 💪",
        "Tutarlılık başarının anahtarı! 🔑",
        "Küçük adımlar, büyük sonuçlar! 🎯",
        "Vazgeçme, hedefe çok yakınsın! ⭐",
        "Bugün ne öğrendin? 📚",
        "İlerleme mükemmellikten önemli! ✨"
    ];

    function showMotivation() {
        const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        console.log('%c' + randomMessage, 'font-size: 20px; color: #6366f1; font-weight: bold;');
    }

    showMotivation();

    // ===== STUDY TIME COUNTER =====
    let studyMinutes = parseInt(localStorage.getItem('totalStudyMinutes') || '0');
    
    // Display study time in console
    const hours = Math.floor(studyMinutes / 60);
    const mins = studyMinutes % 60;
    console.log(`📊 Toplam Çalışma Süren: ${hours} saat ${mins} dakika`);

    // ===== PRINT BUTTON FUNCTIONALITY =====
    window.printSchedule = function() {
        window.print();
    };

    // ===== DARK/LIGHT MODE TOGGLE (Future Feature) =====
    // Could be implemented for accessibility

    console.log('✅ TOLC-I Master Plan yüklendi! Başarılar! 🎓');
});
