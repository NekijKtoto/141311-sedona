var link = document.querySelector(".btn-search");
var form = document.querySelector(".search-form form");
link.addEventListener("click", function(){
  event.preventDefault();
  form.classList.toggle("js-open-form");
});