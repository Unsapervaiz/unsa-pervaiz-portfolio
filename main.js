document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
        });
        project.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
