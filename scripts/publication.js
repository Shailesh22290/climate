const publications = [
    {
        title: "Implications of CMIP6 Models‐Based Climate Biases and Runoff Sensitivity on Runoff Projection Uncertainties Over Central India",
        authors: "Tyagi, S., S. Sahany, D. Saraswat, S. K. Mishra, A. Dubey, D. Niyogi",
        year: "2024",
        journal: "International Journal of Climatology",
        link: "https://www.researchgate.net/publication/385280310_Implications_of_CMIP6_Models-Based_Climate_Biases_and_Runoff_Sensitivity_on_Runoff_Projection_Uncertainties_Over_Central_India"
    },
    {
        title: "Attributing the recent weakening of the South Asian subtropical westerlies",
        authors: "Upadhyaya, P., S. K. Mishra, J. T. Fasullo, In-Sik Kang",
        year: "2024",
        journal: "npj Climate and Atmospheric Science",
        link: "https://doi.org/10.5194/gmd-2024-3"
    },
    {
        title: "An Updated Parameterization of the Unstable Atmospheric Surface Layer in WRF Modeling System",
        authors: "Namdev, P., M. Sharan, P. Srivastava, and S. K. Mishra",
        year: "2024",
        journal: "Geoscientific Model Development",
        link: "https://doi.org/10.5194/gmd-2024-3"
    },
    {
        title: "On the Extent of Applicability of Various Non-Linear Similarity Functions for Computation of Surface Fluxes Under Stable Conditions in Numerical Models",
        authors: "Namdev, P., M. Sharan, and S. K. Mishra",
        year: "2024",
        journal: "Boundary Layer Meteorology",
        link: ""
    },
    {
        title: "Assessing Regional-Scale Heterogeneity in Blue-Green Water Availability under the 1.5° C Global Warming Scenario",
        authors: "Tyagi, S., S. Sahany, D. Saraswat , S. K. Mishra, A. Dubey, and D. Niyogi",
        year: "2024",
        journal: "Journal of Applied Meteorology and Climatology, 63(4), 553-574",
        link: "DOI:10.1175/JAMC-D-23-0083.1"
    },
    {
        title: "An Update to WRF Surface Layer Parameterization over an Indian Region",
        authors: "Namdev, P., P. Srivastava, M. Sharan, and S. K. Mishra",
        year: "2023",
        journal: "Dynamics of Atmospheres and Oceans, 105, 101414",
        link: "DOI:10.1016/j.dynatmoce.2023.101414"
    },
    {
        title: "Artificial intelligence predicts normal summer monsoon rainfall for India in 2023",
        authors: "Narang, U., K. Juneja, P. Upadhyaya, P. Salunke, T. Chakraborty, S. K. Behera, S. K. Mishra, and A. D. Suresh",
        year: "2023",
        journal: "Scientific Reports, 14(1), 1495",
        link: "DOI:10.1038/s41598-023-44284-3"
    },
    {
        title: "Modeling the Climate Change Impact on Hydroclimate Fluxes over the Beas Basin using a High-Resolution Glacier-Atmosphere-Hydrology Coupled Setup",
        authors: "Dixit, A., S. Sahany, and S. K. Mishra",
        year: "2023",
        journal: "Journal of Hydrology, 627, 130219",
        link: "DOI:10.1016/j.jhydrol.2023.130219"
    },
    {
        title: "Climate projections for Himalaya-Tibetan Highland",
        authors: "Bhuyan, D. P., P. Salunke, and M. Chadha",
        year: "2023",
        journal: "Theoretical and Applied Climatology, 155(2), 1-11",
        link: "DOI:10.1007/s00704-023-04677-w"
    },
    {
        title: "A Need for Actionable Climate Projections Across the Global South",
        authors: "Mishra, S. K., P. Upadhyaya, J. T. Fasullo, N. P. Keshri, P. Salunke, A. Ghosh, A. B. Sainudeen, and In-Sik Kang",
        year: "2023",
        journal: "Nature Climate Change, 13(9), 883-886",
        link: "DOI:10.1038/s41558-023-01778-2"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    fetchPublications();
});

function fetchPublications() {
    const publicationsList = document.getElementById("publications-list");

    publications.forEach(pub => {
        const listItem = document.createElement("li");
        listItem.className = "shadow-md p-6 rounded-xl hover:shadow-lg transition-transform bg-transparent border border-gray-300";

        listItem.innerHTML = `
            <div class="text-center lg:text-left">
                <h2 class="text-2xl font-semibold">${pub.title}</h2>
                <p class="text-gray-500 text-sm mt-1">${pub.authors} | ${pub.year} | ${pub.journal}</p>
                <a href="${pub.link}" target="_blank" class="mt-4 inline-block px-5 py-2 bg-[#82c9ffa3] text-black rounded-lg hover:bg-[#82c9ff] transition">
                    Read More
                </a>
            </div>
        `;

        publicationsList.appendChild(listItem);
    });
}
