class Pawn{
	constructor(id){
		this.id = id;
	}

	show(posx, posy){
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