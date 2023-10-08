function openModal() {
    const modal = document.querySelector(".modalka");
    modal.style.display = "block";
  
    
    setTimeout(function() {
      const closeButton = document.querySelector(".close__modalka");
      closeButton.addEventListener('click', () => {
        modal.style.display = "none";
      })
    }, 5000);
  }
  
  function closeModal() {
    const modal = document.querySelector(".modalka");
    modal.style.display = "none";
}
setInterval(openModal, 120000);
  