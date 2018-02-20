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
	alert(h * w);
	return h * w;
}