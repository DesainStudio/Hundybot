function color() {
  if (button.innerText === 'Light') {
      // document.getElementById('logo').innerHTML = `<img src="/bilder/hundy.png" alt="Logo">`;
      document.querySelector("body").dataset.theme = "light";
      document.getElementById('minimenut').innerText = "Gray";
      document.cookie = "mode=light; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/";
  } else if (button.innerText === 'Gray') {
      // document.getElementById('logo').innerHTML = `<img src="/bilder/hundy2.png" alt="Logo">`;
      document.querySelector("body").dataset.theme = "gray";
      document.getElementById('minimenut').innerText = "Black";
      document.cookie = "mode=gray; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/";
  } else if (button.innerText === 'Black') {
      // document.getElementById('logo').innerHTML = `<img src="/bilder/hundy2.png" alt="Logo">`;
      document.querySelector("body").dataset.theme = "black";
      document.getElementById('minimenut').innerText = "Light";
      document.cookie = "mode=black; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/";
  }
}