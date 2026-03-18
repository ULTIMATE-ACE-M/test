// Smooth-scroll "Learn More" button
document.querySelector('.btn').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

console.log('Site loaded!');
