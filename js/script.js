window.addEventListener("DOMContentLoaded", function(){
  loadData();
  document.querySelector('html').classList.add('faded-in');
  document.querySelector('.navbar').classList.add('moved-in-left');
  document.querySelector('.jumbo h1').classList.add('moved-in-top');
  document.querySelector('.jumbo h1:nth-child(2)').classList.add('moved-in-top');
  document.querySelector('.jumbo h5').classList.add('moved-in-top');
  document.querySelector('.c-but-row').classList.add('moved-in-top');
  document.querySelector('#mouse_container').classList.add('faded-in');
});

const skillArray = document.querySelectorAll(".skill");
for(let i = 0; i < skillArray.length; i++){
  skillArray[i].addEventListener('click', function(e){
    e.preventDefault();
    let currentClass = e.currentTarget.classList[1];
    loadData(currentClass);
    for(let j = 0; j < skillArray.length; j++){
      skillArray[j].querySelector('svg').classList.add("hide-me");
    }
    e.currentTarget.querySelector('svg').classList.toggle("hide-me");
  })
}

function loadData(currentClass = "html5"){
  let request;
  if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
  }else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.open('GET', '/js/data.json', true);
  request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200){
      let clean = JSON.parse(request.responseText);
      document.querySelector('.skill-header').innerHTML = clean["text-data"][currentClass].title;
      document.querySelector('.skill-body').innerHTML = clean["text-data"][currentClass].text.join('\n');
    }
  }
  request.send();
}
