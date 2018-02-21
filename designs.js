// Select color input
// Select size input

const form   = document.querySelector("#sizePicker"),
	  height = form.querySelector("#inputHeight"),
	  weight = form.querySelector("#inputWeight"),
	  submit = form.querySelector(".btn");

const color_picker  = document.querySelector("#colorPicker"),
			 canvas = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()

submit.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.nodeName === "INPUT"){
  	makeGrid(height.value , weight.value );
  }
});

function makeGrid(h, w) {
	for(let row = 0; row < h; row++){
		const tr = document.createElement('tr');

		for(let column = 0; column < w; column++){
			const td = document.createElement('td');
			td.textContent =  Math.floor(Math.random() * Math.max(20) - Math.min(1) + 1) +  Math.min(1);
			tr.appendChild(td);
			canvas.addEventListener("click", function(){
				console.log(canvas.rows[row].cells[column].style.backgroundColor = color_picker.value);
			});
		}
		canvas.appendChild(tr);
	}
}

