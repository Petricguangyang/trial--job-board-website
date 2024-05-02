document.addEventListener('DOMContentLoaded', function() {
    const jobs = [
        { title: "Software Engineer", location: "San Francisco", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam risus vitae massa convallis, in consectetur turpis hendrerit." },
        { title: "Data Scientist", location: "New York", description: "Nulla id sapien faucibus, fermentum elit at, vestibulum velit. Nullam ut felis ut quam fermentum rutrum vel in turpis." },
        { title: "Marketing Manager", location: "Los Angeles", description: "Sed sit amet odio vitae sem vehicula rutrum. Mauris a orci vel tortor efficitur pellentesque. Proin tincidunt orci vitae est fermentum, sed suscipit turpis ultricies." },
        { title: "Graphic Designer", location: "Chicago", description: "Pellentesque nec tellus sed felis feugiat convallis. Sed at tellus vitae leo ultricies vestibulum. Vivamus tincidunt nunc sed vehicula tincidunt." },
        { title: "Financial Analyst", location: "Seattle", description: "Morbi rutrum ipsum eu libero consectetur, vel fermentum leo vestibulum. Suspendisse potenti. Cras in dui suscipit, finibus leo sit amet, dictum odio." }
    ];

    const jobList = document.getElementById('job-list');
    const jobDescription = document.getElementById('job-description');
    const searchBtn = document.getElementById('search-btn');

    function displayJobs() {
        jobList.innerHTML = '';
        jobs.forEach(job => {
            const jobItem = document.createElement('div');
            jobItem.classList.add('job-item');
            jobItem.innerHTML = `
                <h2>${job.title}</h2>
                <p>${job.location}</p>
            `;
            jobItem.addEventListener('click', () => {
                showJobDescription(job);
            });
            jobList.appendChild(jobItem);
        });
    }

    function showJobDescription(job) {
        jobDescription.innerHTML = `
            <h2>${job.title}</h2>
            <p>Location: ${job.location}</p>
            <p>Description: ${job.description}</p>
        `;
        jobDescription.style.display = 'block';
    }

    function searchJobs() {
        const searchTermTitle = document.getElementById('search-title').value.toLowerCase();
        const searchTermLocation = document.getElementById('search-location').value.toLowerCase();
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(searchTermTitle) && 
            job.location.toLowerCase().includes(searchTermLocation)
        );
        displayFilteredJobs(filteredJobs);
    }

    function displayFilteredJobs(filteredJobs) {
        jobList.innerHTML = '';
        if (filteredJobs.length === 0) {
            jobList.innerHTML = '<p>No jobs found</p>';
        } else {
            filteredJobs.forEach(job => {
                const jobItem = document.createElement('div');
                jobItem.classList.add('job-item');
                jobItem.innerHTML = `
                    <h2>${job.title}</h2>
                    <p>${job.location}</p>
                `;
                jobItem.addEventListener('click', () => {
                    showJobDescription(job);
                });
                jobList.appendChild(jobItem);
            });
        }
    }

    displayJobs();

    searchBtn.addEventListener('click', searchJobs);
});
