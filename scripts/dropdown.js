const dropDown = [
  { id: 0, label: "Home", icon: "../../images/menubar/1.png", link: "index.html", options: null },
  { id: 1, label: "About", icon: "../../images/menubar/2.png", link: "#about", options: null },
  { id: 2, label: "Research", icon: "../../images/menubar/3.png", link: "#research", options: null },
  { id: 3, label: "Publications", icon: "../../images/menubar/4.png", link: "#publication", options: null },
  { id: 4, label: "Leadership", icon: "../../images/menubar/5.png", link: "#leadership", options: null },
  { id: 5, label: "Advisors", icon: "../../images/menubar/6.png", link: "#advisor", options: null },
  { id: 6, label: "Opportunities", icon: "../../images/menubar/7.png", link: "#Opportunities", options: null },
  { id: 7, label: "Contact Us", icon: "../../images/menubar/8.png", link: "#contact", options: null }
];

const dropDownMobileViewContainer = document.querySelector(".dropdown_mobile_view_container");
const dropDownMobileMenu = document.createElement("div");
dropDownMobileMenu.classList.add("dropdown_mobile_view_option_container");
dropDownMobileViewContainer.appendChild(dropDownMobileMenu);

dropDown.forEach((item, index) => {
  const dropDownItem = document.createElement("div");
  dropDownItem.classList.add("dropdown", `dropdown-${index}`);

  dropDownItem.innerHTML = `
    <span class="flex z-[99999] shadow-sm p-4 transition duration-500 w-full border-b border-zinc-400 hover:bg-gray-300 items-center justify-between text-white cursor-pointer gap-4" onclick="toggleMobileDropdown(${index})">
      <div class="flex gap-2 items-center text-md">
        <img src="${item.icon}" alt="icon" class="w-5 h-5" />
        <a href="${item.link}" class="text-white no-underline">${item.label}</a>
      </div>
    </span>
    <div class="dropdown-content hidden" id="dropdown-content-${index}"></div>
  `;
  dropDownMobileMenu.appendChild(dropDownItem);
});

function menubar_toggle() {
  const hamMenu = document.querySelector(".ham_menu");

  // Toggle the 'open' class on the dropdown menu
  dropDownMobileViewContainer.classList.toggle("open");

  // Toggle the visibility of the hamburger menu
  if (dropDownMobileViewContainer.classList.contains("open")) {
    setTimeout(() => hamMenu.classList.add("hidden"), 300);
  } else {
    setTimeout(() => hamMenu.classList.remove("hidden"), 300);
  }
}

function toggleMobileDropdown(index) {
  const dropdownContent = document.getElementById(`dropdown-content-${index}`);
  dropdownContent.classList.toggle("hidden");
}

// Sticky navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("nav-scrolled", window.scrollY > 180);
});

// Smooth scrolling for anchor links with offset
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offset = 70; // Offset value (30px above the target)
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
