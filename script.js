function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const educationIcon = document.getElementById('education-icon');
    const experienceIcon = document.getElementById('experience-icon');
    // Add transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.querySelectorAll('.icon, svg').forEach(el => {
        el.style.transition = 'fill 0.3s ease';
    });

    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        themeIcon.src = './resources/light.png';
        educationIcon.src = './resources/education.png';
        experienceIcon.src = './resources/experience.png';
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.src = './resources/dark.png';
        educationIcon.src = './resources/educationDark.png';
        experienceIcon.src = './resources/experienceDark.png';
        localStorage.setItem('theme', 'dark');
    }

    // Remove transition after it's complete
    setTimeout(() => {
        document.body.style.transition = '';
        document.querySelectorAll('.icon, svg').forEach(el => {
            el.style.transition = '';
        });
    }, 300);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-icon').src = './resources/dark.png';
}