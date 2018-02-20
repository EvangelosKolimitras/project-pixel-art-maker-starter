// Select color input
// Select size input

const form   = document.querySelector("#sizePicker");
const height = form.querySelector("#inputHeight");
const weight  = form.querySelector("#inputWeight");
const submit = form.querySelector(".btn");

const color_picker  = document.querySelector("#colorPicker");
const canvas = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()

submit.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.nodeName === "INPUT"){
  	makeGrid(height.value , weight.value );
  }
});

function makeGrid(h, w) {

	for(let row = 0; row < h; row++){
		const tr    = document.createElement('tr');

		for(let column = 0; column < w; column++){
			const td    = document.createElement('td');
			tr.appendChild(td);
			// td.innerHTML = row * 10 + column + 1;
		}
		canvas.appendChild(tr);
	}
}