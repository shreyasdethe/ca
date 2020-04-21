class Pawn{
	constructor(id){
		this.id = id;
		this.pos = createVector(0, 0);
	}


	update(newPos){
		let newPosVector = createVector(0, 0);

		let padding = (newPos==0 ? 1 : 0);
		// newPosVector.x = (newPos*(bs/5)) + padding*bs/10;
		// newPosVector.y = (newPos*(bs/5)) + padding*bs/10;

		newPosVector.x = ((newPos%5)+1)*bs/5 - bs/10;
		newPosVector.y = (floor(newPos/5)+1)*bs/5 - bs/10;

		this.show(newPosVector.x, newPosVector.y);
	}

	show(posx, posy){
		this.pos.x = posx;
		this.pos.y = posy;

		noStroke();
		switch(this.id){
			case 0:
				fill('blue');
				break;
			case 1:
				fill('red');
				break;
			case 2:
				fill('green');
				break;
			case 3:
				fill('yellow');
				break;
			}

		ellipse(posx, posy, 15, 15);
	}
}