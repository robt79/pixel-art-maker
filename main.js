document.addEventListener('DOMContentLoaded', function() {


  let canvas = document.querySelector('.canvas');

  let h1 = document.querySelector('h1');
  let brush = 'red';

  let colors = ['red', 'blue', 'orange', 'yellow', 'green', 'pink', 'purple', 'brown', 'darkblue', 'black', 'white', 'gray', 'gold', 'cyan', 'plum', 'lime', 'maroon', 'olive', 'azure', 'deeppink'];

  let colorIndicator = document.createElement('h1');
  colorIndicator.style.color = 'white';
  h1.appendChild(colorIndicator);



  function canvasCells() {
    for (var i = 0; i < 880; i++) {
      let divs = document.createElement('div');
      //console.log(divs);
      divs.className = 'cells';
      canvas.appendChild(divs);
      divs.addEventListener('click', function() {
        divs.style.backgroundColor = brush;
      })
    }
  }
  canvasCells();


  function palette() {
    for (var i = 0; i < colors.length; i++) {
      let divs = document.createElement('div');
      console.log(divs);
      divs.className = colors[i];
      divs.style.backgroundColor = colors[i];
      h1.appendChild(divs);
      divs.addEventListener('click', function() {
        brush = this.style.backgroundColor;
        colorIndicator.textContent = brush;
      });
    }
  }
  palette();




})
