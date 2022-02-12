var isOpen = false;

function toggler(e) {
  
    isOpen = !isOpen;

    let span = document.getElementById('icon');
    document.getElementById("myDropdown").classList.toggle("show");


  if(span.classList.contains('fa-chevron-down')){
    span.classList.remove('fa-chevron-down');
    span.classList.add('fa-chevron-up');
  }
  else{
    span.classList.remove('fa-chevron-up');
    span.classList.add('fa-chevron-down');
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let span = document.getElementById('icon');

    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        span.classList.remove('fa-chevron-up');
        span.classList.add('fa-chevron-down');

      }

    }
  }
} 

function selected(val) {

  let valuePlace = document.querySelector('.valueText');
  let selectedValue = document.querySelector('.selectedValue');
  let selectedContent = document.querySelectorAll('.onselect');
  let third = document.querySelector('.innerThird');
  let second = document.querySelector('.innerSecond');
  let main = document.querySelector('.innerMain');


  valuePlace.innerHTML = val;
  selectedValue.val = val;
  let display = true;
  for(let i = 0; i < selectedContent.length; i++){

    if((selectedContent[i].innerHTML === val) && (val !== 'Titre') && (val !== 'Popularité')){
      selectedContent[i].style.display = ' none';
      second.style.display = 'none';
    }
    // SINON SI val = Popularité
    else if((selectedContent[i].innerHTML === val) && (val !== 'Titre') && (val !== 'Date')){
      selectedContent[i].style.display = ' none';
      second.style.display = 'none';
    }
    // SINON SI val = Titre
    else if((selectedContent[i].innerHTML === val) && (val !== 'Date') && (val !== 'Popularité')){
      selectedContent[i].style.display = ' none';
      second.style.display = 'block';
      third.style.display = 'none';
    }
    else{
      selectedContent[i].style.display = 'block';
      third.style.display = 'block';
    }
  }
  
}