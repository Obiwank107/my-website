// Simple popup interaction
document.querySelectorAll('.service-card').forEach(card => {
   card.addEventListener('click', () => {
      alert('You clicked a service!');
   });
});

