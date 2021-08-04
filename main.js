var canvas = new fabric.Canvas('myCanvas');

player_y = 1;
player_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image,
		function (Img) {
			block_image_object = Img;

			block_image_object.scaleToWidth(block_image_width);
			block_image_object.scaleToWidth(block_image_height);
			block_image_object.set({
				top: player_y,
				left: player_x
			});

			canvas.add(block_image_object);
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	// red
	if (keyPressed == '82')
		block_x = 200; {
		new_image('red.jpg');
		console.log("red");
	}

	// green
	if (keyPressed == '71') {
		block_x = 200;
		new_image('green.jpg');
		console.log("green");
	}

	// yellow
	if (keyPressed == '89') {
		block_x = 350;
		new_image('yellow.jpg');
		console.log("yellow");
	}

	// pink
	if (keyPressed == '80') {
		block_x = 600;
		new_image('pink.jpg');
		console.log("pink");
	}

	// blue
	if (keyPressed == '66') {
		block_x = 700;
		new_image('blue.jpg');
		console.log("blue");
	}

}

function red() {

}