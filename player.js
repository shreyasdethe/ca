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
	update(){

	}
	//------------Display-----------------------
	show(){
		if(this.isNewGame){
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

			this.isNewGame = !this.isNewGame;
		}
	}
}