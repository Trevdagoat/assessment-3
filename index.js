console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form submitted successfully!");
	
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catImage = document.querySelector('#catImage');

catImage.addEventListener('mouseover', function() {
	alert('Meow Meow Meow')

	let duckImage = document.querySelector('#rubberDuckImage');

	duckImage.addEventListener('mouseover', function() {
		alert('quack quack quack');
	}

}
