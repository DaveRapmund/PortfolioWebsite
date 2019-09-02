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

var test = document.querySelectorAll(".temp");
for(var i = 0; i < test.length; i++){
  test[i].addEventListener('click', function(e){
    e.preventDefault();
    var currentClass = e.currentTarget.classList[1];
    loadData(currentClass);
    for(var j = 0; j < test.length; j++){
      test[j].querySelector('svg').classList.add("hide-me");
    }
    e.currentTarget.querySelector('svg').classList.toggle("hide-me");
  })
}

function loadData(currentClass = "html5"){
  var request;
  if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
  }else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.open('GET', '/js/data.json', true);
  request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200){
      var clean = JSON.parse(request.responseText);
      document.querySelector('.skill-header').innerHTML = clean["text-data"][currentClass].title;
      document.querySelector('.skill-body').innerHTML = clean["text-data"][currentClass].text.join('\n');
    }
  }
  request.send();
}
