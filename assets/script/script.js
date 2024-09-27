AOS.init();

const buttons = document.querySelectorAll(".attract-button");

buttons.forEach((button) => {
	button.addEventListener("mousemove", (e) => {
		const rect = button.getBoundingClientRect();

		// Calculate the position of the mouse relative to the button
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		// Get the center of the button
		const buttonCenterX = button.offsetWidth / 2;
		const buttonCenterY = button.offsetHeight / 2;

		// Calculate the offset to "attract" the button towards the mouse
		const offsetX = (mouseX - buttonCenterX) * 0.3; // Adjust the multiplier for effect strength
		const offsetY = (mouseY - buttonCenterY) * 0.3;

		// Apply the offset to the button's position
		button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
	});

	button.addEventListener("mouseleave", () => {
		// Reset the button position when the mouse leaves the button
		button.style.transform = "translate(0, 0)";
	});
});

document.querySelectorAll('.swiper-container').forEach(function(container) {
  const swiper = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true,
      },
  });

  container.addEventListener('mousemove', function(event) {
      const containerWidth = container.clientWidth;
      const mouseX = event.clientX - container.getBoundingClientRect().left;
      const percentage = mouseX / containerWidth;

      if (percentage > 0.66) {
          swiper.slideTo(2); // Move to the third slide
      } else if (percentage > 0.33) {
          swiper.slideTo(1); // Move to the second slide
      } else {
          swiper.slideTo(0); // Move to the first slide
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const closeDropdown = document.getElementById('closeDropdown');
  const dropdownItems = document.querySelectorAll(".dropdown-item")
  // Toggle dropdown menu on button click
  dropdownButton.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click from bubbling up to the document
      dropdownMenu.classList.toggle('show');
  });

  // Close dropdown menu when clicking outside of it
  document.addEventListener('click', function(event) {
      if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
          dropdownMenu.classList.remove('show');
      }
  });

  // Prevent closing dropdown when clicking inside it
  dropdownMenu.addEventListener('click', function(event) {
      event.stopPropagation();
  });

  // Close dropdown menu when clicking the close button
  closeDropdown.addEventListener('click', function(event) {
      dropdownMenu.classList.remove('show');
  });
  dropdownItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        dropdownMenu.classList.remove('show');
    });
});
});
var input = document.querySelector('#qty');
var btnminus = document.querySelector('#qtyminus');
var btnplus = document.querySelector('#qtyplus');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
	
	var min = Number(input.getAttribute('min'));
	var max = Number(input.getAttribute('max'));
	var step = Number(input.getAttribute('step'));

	function qtyminus(e) {
		var current = Number(input.value);
		var newval = (current - step);
		if(newval < min) {
			newval = min;
		} else if(newval > max) {
			newval = max;
		} 
		input.value = Number(newval);
		e.preventDefault();
	}

	function qtyplus(e) {
		var current = Number(input.value);
		var newval = (current + step);
		if(newval > max) newval = max;
		input.value = Number(newval);
		e.preventDefault();
	}
		
	btnminus.addEventListener('click', qtyminus);
	btnplus.addEventListener('click', qtyplus);
  
}

var swiper = new Swiper(".pairproduct", {
  navigation: {
    nextEl: "#next_slide",
    prevEl: "#prev_slide",
  },
  grabCursor: true,
});
baguetteBox.run('.gallery', {
  buttons: 'auto',
  fullScreen: false,
  noScrollbars: false,
  async: false,
  preload: 2,
  onChange: null,
  overlayBackgroundColor: 'rgba(255,255,255)'
});