
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('img[data-placeholder]').forEach(function(img){
    if(!img.getAttribute('src') || img.getAttribute('src').trim()===''){
      img.src = 'images/placeholder.svg';
    }
  });
});
