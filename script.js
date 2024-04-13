document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('.quantity');
    const increaseButtons = document.querySelectorAll('.fa-plus-circle');
    const decreaseButtons = document.querySelectorAll('.fa-minus-circle');
    const totalPriceElement = document.querySelector('.total');
  
    // Function to calculate the total price
    function calculateTotalPrice() {
      let totalPrice = 0;
  
      // Loop through each product
      quantityInputs.forEach((quantityInput, index) => {
        const unitPriceElement = document.querySelectorAll('.unit-price')[index];
        const unitPrice = parseFloat(unitPriceElement.textContent.replace('$', ''));
        const quantity = parseInt(quantityInput.textContent);
        totalPrice += unitPrice * quantity;
      });
  
      // Update the total price displayed on the page
      totalPriceElement.textContent = totalPrice.toFixed(2) + ' $';
    }
  
    // Function to update quantity and recalculate total price
    function updateQuantity(element, delta) {
      let currentValue = parseInt(element.textContent);
      let newValue = currentValue + delta;
  
      // Ensure quantity doesn't go below 0
      if (newValue < 0) {
        newValue = 0;
      }
  
      element.textContent = newValue;
      calculateTotalPrice();
    }
  
    // Add event listeners to increase buttons
    increaseButtons.forEach(button => {
      button.addEventListener('click', function() {
        const quantityElement = this.parentElement.querySelector('.quantity');
        updateQuantity(quantityElement, 1);
      });
    });
  
    // Add event listeners to decrease buttons
    decreaseButtons.forEach(button => {
      button.addEventListener('click', function() {
        const quantityElement = this.parentElement.querySelector('.quantity');
        updateQuantity(quantityElement, -1);
      });
    });
  
    // Initial calculation of total price when the page loads
    calculateTotalPrice();
  });
  document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.fa-heart');
  
    // Function to toggle like and unlike
    function toggleLike(button) {
      button.classList.toggle('liked');
      if (button.classList.contains('liked')) {
        button.style.color = 'red'; // Change color to indicate like
      } else {
        button.style.color = 'black'; // Change color to indicate unlike
      }
    }
  
    // Add event listeners to like buttons
    likeButtons.forEach(button => {
      button.addEventListener('click', function() {
        toggleLike(this);
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
  const deleteButtons = document.querySelectorAll('.fa-trash-alt');

  // Function to delete item from the cart
  function deleteItem(button) {
    const cardBody = button.closest('.card-body');
    cardBody.parentElement.remove(); // Remove the entire card element
    calculateTotalPrice(); // Recalculate total price after deleting the item
  }

  // Add event listeners to delete buttons
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      deleteItem(this);
    });
  });

  // Function to calculate the total price
  function calculateTotalPrice() {
    let totalPrice = 0;

    // Loop through each product and calculate total price
    document.querySelectorAll('.unit-price').forEach((unitPriceElement, index) => {
      const quantityElement = document.querySelectorAll('.quantity')[index];
      const unitPrice = parseFloat(unitPriceElement.textContent.replace('$', ''));
      const quantity = parseInt(quantityElement.textContent);
      totalPrice += unitPrice * quantity;
    });

    // Update the total price displayed on the page
    const totalPriceElement = document.querySelector('.total');
    totalPriceElement.textContent = totalPrice.toFixed(2) + ' $';
  }
});
