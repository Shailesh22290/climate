fetch('scripts/member.json')
  .then(response => response.json())
  .then(members => {
    const advisorContainer = document.getElementById('advisor');

    // Create the header
    const header = document.createElement('h1');
    header.classList.add('font-bold', 'text-4xl', 'text-center', 'mt-6', 'mb-3');
    header.textContent = 'Advisors';
    advisorContainer.appendChild(header);

    // Create the divider line
    const divider = document.createElement('div');
    divider.classList.add('w-[20%]', 'h-[1px]', 'bg-zinc-300', 'mb-6', 'mx-auto');
    advisorContainer.appendChild(divider);

    // Create a flex container for centering
    const wrapper = document.createElement('div');
    wrapper.classList.add('flex', 'justify-center', 'w-full'); // Centers the grid horizontally

    // Create the grid for the members
    const grid = document.createElement('div');
    grid.classList.add(
      'grid', 
      'grid-cols-1', 
      'sm:grid-cols-2', 
      'md:grid-cols-3', 
      'lg:grid-cols-4', 
      'gap-6', 
      'text-center',
      'w-fit', // Ensures only the required width is used
      'place-items-center' // Centers items properly
    );
    
    members.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.classList.add(
        'bg-white',  
        'shadow-lg', 
        'rounded-xl', 
        'p-4', 
        'text-center', 
        "w-72", // Fixed width
        "h-72", // Fixed height
        'flex', 
        'flex-col', 
        'justify-between', // Distributes space evenly
        'items-center', // Centers items horizontally
        'transition-transform',
        'duration-300',
        'hover:shadow-2xl'
      );
      
      const memberImage = document.createElement('img');
      memberImage.classList.add('w-28', 'h-28', 'mx-auto', 'rounded-full', 'object-cover', 'shadow-md');
      memberImage.src = member.image;
      memberImage.alt = member.name;
      
      const name = document.createElement('h2');
      name.classList.add('text-l', 'font-semibold', 'mt-3');
      name.textContent = member.name;
      
      const position = document.createElement('h4');
      position.classList.add('text-sm', 'font-light', 'mt-2');
      position.textContent = member.position;
      
      const profileLink = document.createElement('a');
      profileLink.href = member.profileLink;
      profileLink.target = "_blank";
      profileLink.classList.add('text-blue-600', 'hover:text-blue-800', 'text-sm', 'mt-2', 'inline-block');
      profileLink.textContent = 'Visit Profile';

      // Append everything into the member card
      memberCard.appendChild(memberImage);
      memberCard.appendChild(name);
      memberCard.appendChild(position);
      memberCard.appendChild(profileLink);

      grid.appendChild(memberCard);
    });

    // Wrap the grid inside a flexbox container
    wrapper.appendChild(grid);
    advisorContainer.appendChild(wrapper);
  })
  .catch(error => console.error('Error loading member data:', error));