document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    
    draggables.forEach(draggable => {
        draggable.addEventListener('mousedown', (e) => {
            let offsetX = e.clientX - draggable.getBoundingClientRect().left;
            let offsetY = e.clientY - draggable.getBoundingClientRect().top;

            draggable.style.position = 'absolute';
            draggable.style.zIndex = 1000;

            function moveElement(e) {
                draggable.style.left = (e.clientX - offsetX) + 'px';
                draggable.style.top = (e.clientY - offsetY) + 'px';
            }

            function stopMoving() {
                document.removeEventListener('mousemove', moveElement);
                document.removeEventListener('mouseup', stopMoving);
            }

            document.addEventListener('mousemove', moveElement);
            document.addEventListener('mouseup', stopMoving);
        });
    });
});
