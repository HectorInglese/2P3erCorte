function move() {
    var elem = document.getElementById("myBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("label").innerHTML = width * 1  + '%';
      }
    }
  }

  function clean() {
    var elem = document.getElementById("myBar");   
    var width = 10;
    var id = setInterval(frame, 0);
    function frame() {
        width--; 
        elem.style.width = 0 + '%'; 
        document.getElementById("label").innerHTML = 0   + '%';
        clearInterval(id);
    }
  }