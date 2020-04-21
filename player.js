class Player{
	constructor(id, board){
		//Receive id from instance
		this.id = id;
		//Receive game board from instance
		this.board = board;
		//game status
		this.isNewGame = true;

		//Pawns of a player is an array
		this.b = new Array(4);
		for(var i = 0; i < 4; i++){
			this.b[i] = new Pawn(this.id);
		}
	}

	//-----------Update/game dynamics-----------
	update(pos){
		//New position
		let h = this.board[pos];
		//Current position absolute value
		let cpv = this.b[0].pos;
		//Current position index value - calculated
		let curPos = 5*floor(cpv.y/(bs/5)) + floor(cpv.x/(bs/5));
	
		this.b[0].update(pos);
	}
	//------------Display-----------------------
	show(pos){
		if(this.isNewGame){
			this.newGame();
		}
	}












	//-------------------------------------------
	//------------Clutter------------------------
	newGame(){
		let h;
			switch(this.id){
				case 0:
					h = this.board[22];
					break;
				case 1:
					h = this.board[14];
					break;
				case 2:
					h = this.board[2];
					break;
				case 3:
					h = this.board[10];
					break;
			}

			this.b[0].show(h.x, h.y-bs/20);
			this.b[1].show(h.x, h.y+bs/20);
			this.b[2].show(h.x+bs/20, h.y);
			this.b[3].show(h.x-bs/20, h.y);

			this.isNewGame = false;
	}
}