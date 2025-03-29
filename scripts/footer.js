

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
//header

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Splide carousel
  const splide = new Splide('.splide', {
    type: 'fade', // Smooth fade transition between slides
    rewind: true, // Loop back to start after last slide
    autoplay: true, // Auto-rotate slides
    interval: 5000, // 5 seconds per slide
    speed: 1000, // Transition speed in ms
    pauseOnHover: false,
    pauseOnFocus: false,
  }).mount();

  // Get all text content elements
  const textContents = document.querySelectorAll('.text-content');
  
  // Show first text content by default
  textContents[0].classList.add('opacity-100');
  
  // On slide change, update text content
  splide.on('move', function(newIndex) {
    // Hide all text contents
    textContents.forEach(content => {
      content.classList.remove('opacity-100');
      content.classList.add('opacity-0');
    });
    
    // Show the text content for the current slide
    const currentContent = document.querySelector(`.text-content[data-slide="${newIndex}"]`);
    if (currentContent) {
      currentContent.classList.remove('opacity-0');
      currentContent.classList.add('opacity-100');
    }
  });
});

// footer
const contact_us_footer = [
  {
    title: "CONTACT US",
    content: `DST Centre of Excellence for Climate Information, Room No. 414, Block VI, IIT Delhi`,
    phone: "+91-11-2659-1390",
    email: "skm@iitd.ac.in",
    twitter: "https://x.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "#",
    youtube: "#",
  
  },
];

const footer = document.querySelector(".footer");

const contactHTML = contact_us_footer
  .map(
    (contact) => `
    <div>
      <h1 class="footer_heading">${contact.title}</h1>
      <ul>
        <li class="media">
          ${contact.content}<br /><br />
          Phone: ${contact.phone}<br />
          Email: ${contact.email}<br /><br />
          ${contact.twitter ? `<a href="${contact.twitter}"><i class="fa-brands fa-x-twitter"></i></a>&nbsp;&nbsp;` : ''}
          ${contact.facebook ? `<a href="${contact.facebook}"><i class="fa-brands fa-facebook-f"></i></a>&nbsp;&nbsp;` : ''}
          ${contact.linkedin ? `<a href="${contact.linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>&nbsp;&nbsp;` : ''}
          ${contact.youtube ? `<a href="${contact.youtube}"><i class="fa-brands fa-youtube"></i></a>&nbsp;&nbsp;` : ''}
         
        </li>
      </ul>
    </div>
    `
  )
  .join("");

footer.innerHTML += `
  <div
    class="w-full relative bg-[#030917] grid grid-cols-1 md:grid-cols-4 p-8 md:p-24 gap-6 text-white"
  >
    ${contactHTML}
    
    <!-- Google Map Section -->
    <div class="md:col-span-2">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14019.049674019243!2d77.190669!3d28.54686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df42fe25b85%3A0xdb9bc41b24e9f864!2sDST%20CoE%20for%20Climate%20Information!5e0!3m2!1sen!2sin!4v1738538847139!5m2!1sen!2sin" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="md:absolute w-full py-4 opacity-[0.6] bottom-0 border-t border-white/50 md:col-span-4">
      <p class="text-center text-sm">
        © 2024 DST Centre of Excellence for Climate Information, IIT Delhi | All&nbsp;Rights&nbsp;Reserved
      </p>
      <div class="flex justify-between items-center">
        <div class="visitors-counter md:pl-6 text-left flex items-center">
        </div>
        <div class="developer md:pr-16 text-right flex items-center">
          <i class="fa-solid fa-code"></i>
          <a href="https://shaileshkachhi.netlify.app" target="_blank" id="mylink" class="ml-2 text-center text-sm">Developed by</a>
        </div>
      </div>
    </div>
  </div>
  <button id="scroll-to-top" class="scroll-to-top rounded-full">↑</button>
`; 

// Scroll-to-Top Functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
