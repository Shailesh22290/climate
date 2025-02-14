const carouselData = [
    { title: "An update to WRF surface layer parameterization", 
    description: "Inadequate representation of surface-atmosphere interaction processes is a major source of uncertainty in numerical weather prediction models. Here, an effort has been made to improve the WRF model version 4.2.2 by introducing a unique theoretical framework suggested by Kader and Yaglom (1990) under convective conditions. In addition, to enhance the potential applicability of the WRF modeling system, various commonly used similarity functions under convective conditions have also been installed.", 
    images: ["images/highlights_logo/1.webp"] },

    { title: "A need for actionable climate projections across the Global South", 
    description: "This study highlights the inconsistencies in the climate projections for precipitation and temperature from six generations of IPCC assessments for much of the Global south, which results in many challenges for climate change adaptation. It also discusses about the emerging technologies such as km-scale modeling, region-specific model customization, machine-learning and deep-learning approaches, constrained climate projections using observations as well as strengthening international collaborations to address these challenges.", 
    images: ["images/highlights_logo/2.webp"] },

    { title: "Impact of climate change on future malaria transmission in Odisha",
    description: "Numerous studies suggest that the climate change is likely to impact the distribution of various vector borne diseases such as malaria and dengue in higher altitudes and higher latitudes regions across the globe. This study evaluates the effects of climate change on future malaria transmission using the VECTRI model by forcing temperature and rainfall from a global climate model (CCSM4) over the state Odisha, India for the baseline period (1975-2005) and for the projection periods 2020s, 2050s, and 2080s under RCP8.5 emission scenario.",
     images: ["images/highlights_logo/3.webp"] },

    { title: "AI/ML models show promising results in predicting the All India Summer Monsoon Rainfall (AISMR) for 2023",
     description: "It is well-known that the Artificial Intelligence and Machine Learning (AI/ML) models can complement the existing physical models. In this study, the AI/ML models are employed to predict the All India Summer Monsoon Rainfall (AISMR) for 2023. The data driven models are trained with historical AISMR data, Niño3.4 index data and categorical IOD data, which show promising results.",
      images: ["images/highlights_logo/4.webp"] },

    { title: "Future projections of temperature and precipitation for Antarctica", 
    description: "Antarctica significantly affects over half of the global population living in coastal areas, making future climate projections crucial. However, due to significant variability among climate models, the accuracy of these projections is questionable. This study evaluated 87 global climate models from three major consortia (CMIP5, CMIP6, and NEX-GDDP) to assess their reliability.",
     images: ["images/highlights_logo/5.webp"] },

    { title: "Attributing the recent weakening of the South Asian subtropical westerlies", 
    description: "This study highlights the potential factors that are responsible for the recent weakening trends in the summer westerlies that prevail in South Asia along the monsoon trough region using various reanalysis as well as climate model simulations. It also discusses the associated changes in regional climate that are highly relevant to policymaking across South Asia.", 
    images: ["images/highlights_logo/6.webp"] }
];

const carousel = document.getElementById("carousel");

carouselData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "flex flex-col md:flex-row items-center gap-4 min-w-full p-6 card rounded-lg  shadow-md";
    
    card.innerHTML = `
        <div class="w-1/3">
            <img src="${item.images[0]}" class="w-full h-auto rounded-md object-cover">
        </div>
        <div class="w-2/3 text-center ">
            <h2 class="font-bold text-xl mb-2 text-black">${item.title}</h2>
            <p class="text-gray-700 mb-3 text-gray">${item.description}</p>
        </div>
    `;
    
    carousel.appendChild(card);
});

let index = 0;
const updateCarousel = () => {
    carousel.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index > 0) ? index - 1 : carouselData.length - 1;
    updateCarousel();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index < carouselData.length - 1) ? index + 1 : 0;
    updateCarousel();
});

setInterval(() => {
    index = (index < carouselData.length - 1) ? index + 1 : 0;
    updateCarousel();
}, 3000);
