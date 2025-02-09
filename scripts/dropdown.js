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
  let hamMenu = document.querySelector(".ham_menu");

  if (dropDownMobileViewContainer.classList.contains("-top-[100%]")) {
    dropDownMobileViewContainer.classList.replace("-top-[100%]", "top-0");
    setTimeout(() => hamMenu.classList.add("hidden"), 300);
  } else {
    dropDownMobileViewContainer.classList.replace("top-0", "-top-[100%]");
    setTimeout(() => hamMenu.classList.remove("hidden"), 300);
  }
}

function toggleMobileDropdown(index) {
  const dropdownContent = document.getElementById(`dropdown-content-${index}`);
  dropdownContent.classList.toggle("hidden");
}

// sticky navabar
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("nav-scrolled", window.scrollY > 200);
});



document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

// Toggle Mobile Dropdown
function menubar_toggle() {
  let hamMenu = document.querySelector(".ham_menu");

  if (dropDownMobileViewContainer.classList.contains("-top-[100%]")) {
    dropDownMobileViewContainer.classList.replace("-top-[100%]", "top-0");
    setTimeout(() => hamMenu.classList.add("hidden"), 300);
  } else {
    dropDownMobileViewContainer.classList.replace("top-0", "-top-[100%]");
    setTimeout(() => hamMenu.classList.remove("hidden"), 300);
  }
}

// Toggle Submenus in Mobile View
function toggleMobileDropdown(index) {
  const dropdownContent = document.getElementById(`dropdown-content-${index}`);
  dropdownContent.classList.toggle("hidden");
}

// Populate Web View Dropdown
const dropdownWebView = document.querySelector(".dropdown_web_view");

dropDown.forEach((item, index) => {
  const dropDownWebItem = document.createElement("div");
  dropDownWebItem.classList.add(`dropdown-web-${index}`);

  dropDownWebItem.innerHTML = `
    <div class="relative inline-block text-left group">
      <div>
        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-white hover:text-white/50" id="menu-button-${index}" aria-expanded="true" aria-haspopup="true">
          <a href="${item.link}">${item.label}</a>
          ${item.options ? `
          <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>` : ""}
        </button>
      </div>
      ${item.options ? `
        <div class="absolute z-[999999] dropdownWebContent-${index} hidden w-[250px] group-hover:flex top-0 right-0 mt-9 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            ${item.options.map(option => `
              <a href="${option.link}" target="_blank" class="w-[250px] hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
                ${option.label}
              </a>`).join("")}
          </div>
        </div>
      ` : ""}
    </div>
  `;
  dropdownWebView.appendChild(dropDownWebItem);
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

