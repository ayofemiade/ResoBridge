window.addEventListener("scroll", function() {
    var navb = document.querySelector("nav");
    navb.classList.toggle("sticky", window.scrollY > 0);

    var headerScroll = this.document.querySelector("header");
    headerScroll.classList.toggle("sticked-header-offset", this.window.scrollY > 0);
})

document.addEventListener('DOMContentLoaded', () => {
    // Sample project data
    const projects = [
        {
            title: 'Trip to Abuja For Masscom Students',
            description: 'An educational trip for all Masscom students for required exposure.',
            goal: 500000,
            raised: 325000,
            contributors: 214
        },
        {
            title: 'Tech Education for Youth',
            description: 'Provide free coding workshops for students and staffs.',
            goal: 750000,
            raised: 452000,
            contributors: 356
        },
        {
            title: 'Prototype For ResoBrigde',
            description: 'Developing innovative technology for communities.',
            goal: 1000000,
            raised: 620000,
            contributors: 487
        }
    ];

    const featuredProjectsContainer = document.getElementById('featuredProjects');

    // Dynamically create project cards
    function createProjectCards() {
        projects.forEach(project => {
            const progressPercentage = (project.raised / project.goal) * 100;

            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <div class="project-image" style="background-color: #f0f0f0; height: 200px;"></div>
                <div class="project-details" style="padding: 15px;">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="progress-bar" style="width: 100%; background-color: #e0e0e0; height: 10px; border-radius: 5px; margin: 10px 0;">
                        <div style="width: ${progressPercentage}%; background-color: #760a5e; height: 100%; border-radius: 5px;"></div>
                    </div>
                    <div class="project-stats">
                        <div>Raised: ₦${project.raised.toLocaleString()} of ₦${project.goal.toLocaleString()}</div>
                        <div>Contributors: ${project.contributors}</div>
                    </div>
                    <button style="width: 100%; padding: 10px; background-color: #760a5e; color: white; border: none; border-radius: 4px; margin-top: 10px;">
                        Support Project
                    </button>
                </div>
            `;
            featuredProjectsContainer.appendChild(projectCard);
        });
    }

    // Campaign Form Submission
    const campaignForm = document.getElementById('campaignForm');
    if (campaignForm) {
        campaignForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = this.querySelector('input[type="text"]').value;
            const description = this.querySelector('textarea').value;
            const goal = this.querySelector('input[type="number"]').value;
            const endDate = this.querySelector('input[type="date"]').value;

            // In a real app, this would send data to a backend
            alert(`Campaign Created Successfully!
                Title: ${title}
                Description: ${description}
                Funding Goal:₦${goal}
                End Date: ${endDate}`);
            
            this.reset();
        });
    }

    // Login and Signup Button Handlers
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Login functionality to be implemented');
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            alert('Signup functionality to be implemented');
        });
    }

    // Initialize project cards
    createProjectCards();
});
