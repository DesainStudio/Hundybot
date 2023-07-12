let einstellungOpen = false
    let phoneMenuOpen = false;

    function einstellung() {
        if (phoneMenuOpen) {
            if (!einstellungOpen) {
                einstellungOpen = true
                phoneMenuOpen = false
                document.getElementById('menu').style.visibility = "visible";
                document.getElementById('almenu').style.visibility = 'hidden';
                document.getElementById('einstellung').innerHTML = xsvg
                document.getElementById('lmenu').innerHTML = pmsvg;
            } else {
                einstellungOpen = false
                phoneMenuOpen = false
                document.getElementById('menu').style.visibility = "hidden";
                document.getElementById('almenu').style.visibility = 'hidden';
                document.getElementById('einstellung').innerHTML = esvg
                document.getElementById('lmenu').innerHTML = pmsvg;
            }
        } else {
            if (einstellungOpen) {
                einstellungOpen = false
                phoneMenuOpen = false
                document.getElementById('menu').style.visibility = "hidden";
                document.getElementById('almenu').style.visibility = 'hidden';
                document.getElementById('einstellung').innerHTML = esvg
                document.getElementById('lmenu').innerHTML = pmsvg;
            } else {
                einstellungOpen = true
                phoneMenuOpen = false
                document.getElementById('menu').style.visibility = "visible";
                document.getElementById('almenu').style.visibility = 'hidden';
                document.getElementById('einstellung').innerHTML = xsvg
                document.getElementById('lmenu').innerHTML = pmsvg;
            }
        }
    }

    function phonemenu() {
      if (einstellungOpen) {
          if (!phoneMenuOpen) {
              phoneMenuOpen = true
              einstellungOpen = false
              document.getElementById('menu').style.visibility = "hidden";
              document.getElementById('almenu').style.visibility = 'visible';
              document.getElementById('lmenu').innerHTML = pmxsvg;
              document.getElementById('einstellung').innerHTML = esvg
          } else {
              phoneMenuOpen = false
              einstellungOpen = false
              document.getElementById('menu').style.visibility = "hidden";
              document.getElementById('almenu').style.visibility = 'hidden';
              document.getElementById('lmenu').innerHTML = pmsvg;
              document.getElementById('einstellung').innerHTML = esvg
          }
      } else {
          if (!phoneMenuOpen) {
              phoneMenuOpen = true
              einstellungOpen = false
              document.getElementById('menu').style.visibility = "hidden";
              document.getElementById('almenu').style.visibility = 'visible';
              document.getElementById('lmenu').innerHTML = pmxsvg;
              document.getElementById('einstellung').innerHTML = esvg
          } else {
              phoneMenuOpen = false
              einstellungOpen = false
              document.getElementById('menu').style.visibility = "hidden";
              document.getElementById('almenu').style.visibility = 'hidden';
              document.getElementById('lmenu').innerHTML = pmsvg;
              document.getElementById('einstellung').innerHTML = esvg
          }
      }
  }