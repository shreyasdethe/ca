var p1, p2, p3, p4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(25);
	strokeWeight(6);
	stroke(251);
	noFill();

	//--Game board is adjusted according to window size---
	pad = 10;						//Padding for aesthetic
	bs = min(width, height);		//Board size

	rect(pad, pad, bs-pad, bs-pad);

	for(var i = 1; i < 5; i++){
		line(i*bs/5, pad, i*bs/5, bs);
		line(pad, i*bs/5, bs, i*bs/5);
	}

	//Crosses (home squares)
	//top
	line(2*bs/5, pad, 3*bs/5, bs/5);
	line(3*bs/5, pad, 2*bs/5, bs/5);
	//left
	line(pad, 2*bs/5, bs/5, 3*bs/5);
	line(pad, 3*bs/5, bs/5, 2*bs/5);
	//right
	line(4*bs/5, 2*bs/5, bs, 3*bs/5);
	line(bs, 2*bs/5, 4*bs/5, 3*bs/5);
	//bottom
	line(2*bs/5, 4*bs/5, 3*bs/5, bs);
	line(3*bs/5, 4*bs/5, 2*bs/5, bs);
	//centre
	line(2*bs/5, 2*bs/5, 3*bs/5, 3*bs/5);
	line(3*bs/5, 2*bs/5, 2*bs/5, 3*bs/5);

	//----------Position markers ---------------------

	board = new Array(25);
	// every cell centre is a multiple of bs/5
	for(var j = 0; j < 5; j++){
		for(var i = 0; i < 5; i++){
			board[5*j+i] = createVector((i%5)*bs/5, (j%5)*bs/5);
			// have to offset every cell by bs/10
			// using vector addition
			board[5*j+i].add(bs/10, bs/10);
		}
	} 

	//----------------Players------------------------
	p0 = new Player(0, board);
	p1 = new Player(1, board);
	p2 = new Player(2, board);
	p3 = new Player(3, board);

}

function draw() {
	p0.show();
	p1.show();
	p2.show();
	p3.show();
}