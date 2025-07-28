const carouselData = [
    { title: "An update to WRF surface layer parameterization", 
 
    link: "https://iopscience.iop.org/article/10.1088/1748-9326/ac43e2" ,
  
    images: ["images/highlights_logo/1.webp"] },

    { title: "A need for actionable climate projections across the Global South", 
   
    link: "https://www.nature.com/articles/s41598-023-44284-3" ,
  
    images: ["images/highlights_logo/2.webp"] },

    { title: "Impact of climate change on future malaria transmission in Odisha",
  
    link: "https://www.nature.com/articles/s41558-023-01778-2" ,
 
    images: ["images/highlights_logo/3.webp"] },

    { title: "AI/ML models show promising results in predicting the All India Summer Monsoon Rainfall (AISMR) for 2023",
   
    link: "https://www.nature.com/articles/s41612-018-0049-1" ,
   
    images: ["images/highlights_logo/4.webp"] },

    { title: "Future projections of temperature and precipitation for Antarctica", 
   
    link: "https://www.nature.com/articles/s41612-024-00777-0" ,
   
    images: ["images/highlights_logo/5.webp"] },

    { title: "Impact_of_climate_change_on_indian_economy", 
   
    link: "Impact_of_climate_change_on_indian_economy.pdf" ,
    
    images: ["images/highlights_logo/5.webp"] },


];

const carousel = document.getElementById("carousel");

carouselData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "flex flex-col md:flex-row items-center gap-4 min-w-full p-6 card rounded-lg shadow-md";
    
    card.innerHTML = `
        <div class="w-1/3">
            <img src="${item.images[0]}" class="w-full h-auto rounded-md object-cover">
        </div>
        <div class="w-2/3 text-center">
            <h2 class="font-bold text-xl mb-2 text-black">${item.title}</h2>
            <p class="text-gray-700 mb-3">${item.description}</p>
            <a href="${item.link}" target="_blank" class="text-blue-500">${item.citation}</a>
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