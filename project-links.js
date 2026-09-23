document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', event => {
        event.stopPropagation();
    });
});
