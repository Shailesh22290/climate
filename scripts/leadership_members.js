const leadershipMembers = [
    { name: "Prof. Amitabh BHATTACHARYA", designation: "Department of Applied Mechanics, IIT Delhi", img: "images/team/amitabh.jpg", profileLink: "https://example.com" },
    { name: "Prof. Tanmoy CHAKRABORTY", designation: "Department of Electrical Engineering, IIT Delhi", img: "images/team/tanmoy.png", profileLink: "https://example.com" },
    { name: "Prof. Vamsi. K. CHALAMALLA", designation: "Department of Applied Mechanics, IIT Delhi", img: "images/team/vamsi.jpg", profileLink: "https://example.com" },
    { name: "Prof. Amlendu K. DUBEY", designation: "Department of Management Studies, IIT Delhi", img: "images/team/amlendu.jpg", profileLink: "https://example.com" },
    { name: "Prof. Saroj K. MISHRA", designation: "Centre for Atmospheric Sciences, IIT Delhi", img: "images/people/saroj.png", profileLink: "https://example.com" },
    { name: "Prof. Prashant PALKAR", designation: "Department of Mechanical Engineering, IIT Delhi", img: "images/team/prashant.jpg", profileLink: "https://example.com" },
    { name: "Prof. Bijaya K. PANIGRAHI", designation: "Department of Electrical Engineering, IIT Delhi", img: "images/team/panigrahi1.jpg", profileLink: "https://example.com" },
    { name: "Dr. Maithali SHARAN", designation: "INSA Senior Scientist", img: "images/team/mathilis.jpg", profileLink: "https://example.com" },
    { name: "Prof. Shaurya SHRIYAM", designation: "Department of Mechanical Engineering, IIT Delhi", img: "images/team/shaurya.jpg", profileLink: "https://example.com" },
    { name: "Prof. Sawan S. SINHA", designation: "Department of Applied Mechanics, IIT Delhi", img: "images/team/sawan.jpg", profileLink: "https://example.com" },
    { name: "Prof. Amber SRIVASTAVA", designation: "Department of Mechanical Engineering, IIT Delhi", img: "images/team/Amber.jpg", profileLink: "https://example.com" }
];
// Function to dynamically create member cards
function createMemberCard(member) {
    const div = document.createElement('div');
    div.classList.add("bg-white", "shadow-lg", "rounded-xl", "p-4", "text-center", "transition-transform", "hover:shadow-2xl", "w-64");

    div.innerHTML = `
        <img src="${member.img}" alt="${member.name}" class="w-24 h-24 mx-auto rounded-full object-cover shadow-md">
        <h2 class="text-lg font-semibold mt-3">${member.name}</h2>
        <h4 class="text-sm font-light mt-3">${member.designation}</h4>
        <a href="${member.profileLink}" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block">
            Visit Profile
        </a>
    `;
    return div;
}

// Function to render leadership members into the DOM
function renderLeadershipMembers() {
    const container = document.getElementById('leadership-members');
    container.innerHTML = ""; // Clear previous content

    // Ensure vertical stacking of members
    container.classList.add('flex', 'flex-col', 'items-center', 'gap-6', 'w-full');

    // Append each member directly to the container
    leadershipMembers.forEach((member) => {
        container.appendChild(createMemberCard(member));
    });
}

// Call the function to render the members when the page loads
renderLeadershipMembers();


