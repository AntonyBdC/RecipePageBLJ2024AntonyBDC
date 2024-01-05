window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page');
    
    setTimeout(function() {
    switch(page) {
      case 'recipe':
        window.location.href = "recipe.html";
        break;
      case 'contact':
        window.location.href = "contact.html";
        break;
      case 'about':
        window.location.href = "about.html";
        break;
      case 'Impressum':
        window.location.href = "Impressum.html";
        break;
      default:
        window.location.href = "Impressum.html";
    }
    }, 2000);
   };
   