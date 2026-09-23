document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("projectModal");
    const modalClose = document.getElementById("projectModalClose");
    const modalOverlay = modal?.querySelector(".project-modal-overlay");
    const modalCategory = document.getElementById("modalCategory");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const galleryImage = document.getElementById("galleryImage");
    const galleryEmpty = document.getElementById("galleryEmpty");
    const galleryCounter = document.getElementById("galleryCounter");
    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");
    const modalTags = document.getElementById("modalTags");

    if (!modal) return;

    let images = [];
    let currentIndex = 0;

    const projectCards = document.querySelectorAll(".gallery-card");

    function getCardImages(card) {
        try {
            return JSON.parse(card.dataset.images || "[]");
        } catch {
            return [];
        }
    }

    function updateGallery() {
        const hasImages = images.length > 0;

        if (!hasImages) {
            galleryImage.style.display = "none";
            galleryEmpty.style.display = "block";
            galleryCounter.textContent = "No screenshots";
            galleryPrev.style.display = "none";
            galleryNext.style.display = "none";
            return;
        }

        galleryImage.style.display = "block";
        galleryEmpty.style.display = "none";
        galleryImage.src = images[currentIndex];
        galleryImage.alt = `${modalTitle.textContent} screenshot ${currentIndex + 1}`;
        galleryCounter.textContent = `${currentIndex + 1} / ${images.length}`;

        const showArrows = images.length > 1;
        galleryPrev.style.display = showArrows ? "flex" : "none";
        galleryNext.style.display = showArrows ? "flex" : "none";
    }

    function openModal(card) {
        images = getCardImages(card);
        currentIndex = 0;

        modalCategory.textContent = card.dataset.category || "";
        modalTitle.textContent = card.dataset.title || "";
        modalDescription.textContent = card.dataset.description || "";

        modalTags.innerHTML = "";
        const tech = (card.dataset.tech || "")
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);

        tech.forEach(tag => {
            const span = document.createElement("span");
            span.textContent = tag;
            modalTags.appendChild(span);
        });

        updateGallery();
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    function showNext() {
        if (images.length < 2) return;
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }

    function showPrevious() {
        if (images.length < 2) return;
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    }

    projectCards.forEach(card => {
        card.addEventListener("click", () => openModal(card));
    });

    galleryNext?.addEventListener("click", showNext);
    galleryPrev?.addEventListener("click", showPrevious);
    modalClose?.addEventListener("click", closeModal);
    modalOverlay?.addEventListener("click", closeModal);

    document.addEventListener("keydown", event => {
        if (!modal.classList.contains("is-open")) return;

        if (event.key === "Escape") closeModal();
        if (event.key === "ArrowRight") showNext();
        if (event.key === "ArrowLeft") showPrevious();
    });
});
