/* ==========================================================================
   JAVASCRIPT CORE PIPELINE:KUNAL_LABS AI ARCHITECTURAL ENGINE LOGIC
   MANAGES: NEURAL ANIMATION NETWORKS, TIMED LOADER, COUNT MATRIX, GLOW
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initial Processing Matrix Loader Script
    const loadingScreen = document.getElementById("loading-screen");
    const loadPercentage = document.getElementById("load-percentage");
    const loaderBar = document.querySelector(".loader-bar");
    let currentProgress = 0;

    const loaderInterval = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 8) + 4;
        if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(loaderInterval);
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.style.opacity = "0";
                    loadingScreen.style.transform = "scale(1.02)";
                    setTimeout(() => {
                        loadingScreen.style.display = "none";
                        revealOnScroll();
                    }, 600);
                }
            }, 300);
        }
        if (loadPercentage) loadPercentage.textContent = currentProgress;
        if (loaderBar) loaderBar.style.width = `${currentProgress}%`;
    }, 45);

    // 2. Interactive Dynamic Neural Network Background Canvas
    const canvas = document.getElementById("neural-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let structuralNodes = [];
        const maxNodesCount = 75;
        const connectionRadius = 130;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        class NeuralNode {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = (Math.random() - 0.5) * 0.45;
                this.radius = Math.random() * 2 + 1;
            }
            updatePosition() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            drawNode() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = document.body.classList.contains("light-theme") ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.25)";
                ctx.fill();
            }
        }

        function initNetworkMatrix() {
            structuralNodes = [];
            for (let i = 0; i < maxNodesCount; i++) {
                structuralNodes.push(new NeuralNode());
            }
        }
        initNetworkMatrix();

        function renderBackgroundEngine() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < structuralNodes.length; i++) {
                structuralNodes[i].updatePosition();
                structuralNodes[i].drawNode();

                for (let j = i + 1; j < structuralNodes.length; j++) {
                    const dx = structuralNodes[i].x - structuralNodes[j].x;
                    const dy = structuralNodes[i].y - structuralNodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionRadius) {
                        ctx.beginPath();
                        ctx.moveTo(structuralNodes[i].x, structuralNodes[i].y);
                        ctx.lineTo(structuralNodes[j].x, structuralNodes[j].y);
                        const alphaPercentage = (1 - (distance / connectionRadius)) * 0.12;
                        ctx.strokeStyle = document.body.classList.contains("light-theme") 
                            ? `rgba(79, 70, 229, ${alphaPercentage})` 
                            : `rgba(99, 102, 241, ${alphaPercentage})`;
                        ctx.lineWidth = 0.75;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(renderBackgroundEngine);
        }
        renderBackgroundEngine();
    }

    // 3. Mouse Coordinate Radiant Glow
    const mouseGlow = document.getElementById("mouse-glow");
    if (mouseGlow) {
        window.addEventListener("mousemove", (e) => {
            mouseGlow.style.left = `${e.clientX}px`;
            mouseGlow.style.top = `${e.clientY}px`;
        });
    }

    // 4. Typing Terminal Simulation
   // 4. Typing Terminal Simulation
    const typingContainer = document.getElementById("typing-text");
    
    // --- PASTED HERE: Force updates the words array programmatically ---
    if (typingContainer) {
        typingContainer.setAttribute("data-words", '["Software Engineer", "AI Enthusiast", "Full Stack Developer", "Problem Solver"]');
    }

    if (typingContainer && typingContainer.getAttribute("data-words")) {
        const conceptualWordsArr = JSON.parse(typingContainer.getAttribute("data-words"));
        let targetWordIdx = 0;
        let characterIdx = 0;
        let isDeletingMode = false;

        function executeTypingEngine() {
            const currentFullString = conceptualWordsArr[targetWordIdx];
            if (isDeletingMode) {
                typingContainer.textContent = currentFullString.substring(0, characterIdx - 1);
                characterIdx--;
            } else {
                typingContainer.textContent = currentFullString.substring(0, characterIdx + 1);
                characterIdx++;
            }

            let dynamicTypingSpeed = isDeletingMode ? 40 : 90;

            if (!isDeletingMode && characterIdx === currentFullString.length) {
                dynamicTypingSpeed = 2500;
                isDeletingMode = true;
            } else if (isDeletingMode && characterIdx === 0) {
                isDeletingMode = false;
                targetWordIdx = (targetWordIdx + 1) % conceptualWordsArr.length;
                dynamicTypingSpeed = 400;
            }

            setTimeout(executeTypingEngine, dynamicTypingSpeed);
        }
        setTimeout(executeTypingEngine, 1000);
    }

    // 5. Scroll Metrics Progress Bar & Navigation Synchronization
    const scrollBar = document.getElementById("scroll-progress-bar");
    const navigationLinks = document.querySelectorAll(".nav-link");
    const interfaceSections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        const viewportHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const currentScrolledOffset = window.scrollY;
        if (viewportHeight > 0 && scrollBar) {
            const computePercent = (currentScrolledOffset / viewportHeight) * 100;
            scrollBar.style.width = `${computePercent}%`;
        }

        let activeIdentity = "";
        interfaceSections.forEach((sec) => {
            const sectionOffsetTop = sec.offsetTop;
            if (window.scrollY >= (sectionOffsetTop - 220)) {
                activeIdentity = sec.getAttribute("id");
            }
        });

        navigationLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${activeIdentity}`) {
                link.classList.add("active");
            }
        });

        const backToTopBtn = document.getElementById("back-to-top");
        if (backToTopBtn) {
            if (window.scrollY > 600) {
                backToTopBtn.style.display = "flex";
            } else {
                backToTopBtn.style.display = "none";
            }
        }
    });

    const bttElement = document.getElementById("back-to-top");
    if (bttElement) {
        bttElement.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 6. Scroll Reveal Framework Elements
    const revealTargets = document.querySelectorAll(".reveal");
    
    function revealOnScroll() {
        revealTargets.forEach((target) => {
            const elementTop = target.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 80;
            if (elementTop < triggerPoint) {
                target.classList.add("active");
                if(target.id === "statistics" || target.classList.contains("custom-glass-panel")) {
                    executeNumericalCounters();
                }
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);

    const counterElements = document.querySelectorAll(".counter");
    let counterTriggeredState = false;

    function executeNumericalCounters() {
        if (counterTriggeredState) return;
        counterTriggeredState = true;
        
        counterElements.forEach((counter) => {
            const numericalLimit = parseInt(counter.getAttribute("data-target"));
            let startIterationVal = 0;
            const durationStep = Math.floor(2000 / numericalLimit);

            const internalCounterTimer = setInterval(() => {
                startIterationVal += Math.ceil(numericalLimit / 40);
                if (startIterationVal >= numericalLimit) {
                    counter.textContent = numericalLimit;
                    clearInterval(internalCounterTimer);
                } else {
                    counter.textContent = startIterationVal;
                }
            }, durationStep);
        });
    }

    const statsSection = document.getElementById("statistics");
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    executeNumericalCounters();
                }
            });
        }, { threshold: 0.2 });
        statsObserver.observe(statsSection);
    }

    // 7. Interactive 3D Card Structural Tilt Architecture
    const activeTiltCardsArr = document.querySelectorAll(".tilt-card");

    activeTiltCardsArr.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const layoutBoundingBox = card.getBoundingClientRect();
            const mouseCoordX = e.clientX - layoutBoundingBox.left;
            const mouseCoordY = e.clientY - layoutBoundingBox.top;

            const calcAngleX = ((layoutBoundingBox.height / 2) - mouseCoordY) / 14;
            const calcAngleY = (mouseCoordX - (layoutBoundingBox.width / 2)) / 14;

            card.style.transform = `perspective(1000px) rotateX(${calcAngleX}deg) rotateY(${calcAngleY}deg) scale3d(1.01, 1.01, 1.01)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 8. Mobile Navigation Architecture
    const mobileMenuToggleBtn = document.getElementById("mobile-menu-toggle");
    const mobileOverlayContainer = document.getElementById("mobile-overlay");
    const mobileLinksArr = document.querySelectorAll(".mobile-link");

    if (mobileMenuToggleBtn && mobileOverlayContainer) {
        function toggleMobileMenuState() {
            mobileOverlayContainer.classList.toggle("open");
            mobileMenuToggleBtn.classList.toggle("active");
            document.body.style.overflow = mobileOverlayContainer.classList.contains("open") ? "hidden" : "auto";
        }

        mobileMenuToggleBtn.addEventListener("click", toggleMobileMenuState);
        mobileLinksArr.forEach(link => link.addEventListener("click", toggleMobileMenuState));
    }

   // 9. Light/Dark Theme Switching System
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        if (localStorage.getItem("kunallabs-theme-profile") === "light") {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        }

        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            document.body.classList.toggle("dark-theme");
            localStorage.setItem("kunallabs-theme-profile", document.body.classList.contains("light-theme") ? "light" : "dark");
        });
    }
});