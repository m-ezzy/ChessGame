class Knight extends SuperClass {
	
	//write 'let' in for loops initialization part
	//otherwise lot of problems that you cannot trace origin of

	findMovesAfterMyTurn(){
        let x;
		let y;
		let xx;
		let yy;
		
		let currentPiece;

        for(let i=1 ; i<=8 ; i++){
            if(i == 1){
                xx = -1;
                yy = -2;
            }
            else if(i == 2){
				xx = 1;
                yy = -2;
            }
            else if(i == 3){
                xx = 2;
                yy = -1;
            }
            else if(i == 4){
				xx = 2;
                yy = 1;
            }
			//
			else if(i == 5){
                xx = 1;
                yy = 2;
            }
            else if(i == 6){
				xx = -1;
                yy = 2;
            }
            else if(i == 7){
                xx = -2;
                yy = 1;
            }
            else if(i == 8){
				xx = -2;
                yy = -1;
            }

			x = this.x + xx*unit;
            y = this.y + yy*unit;
				
			if(checkBorderReached(x,y)){
				continue;
			}
            
			currentPiece = whichPieceAt(x,y);
            if(currentPiece == 0){
                this.moves.push({x:x,y:y});
            }
            else if(currentPiece.color == this.color && currentPiece != pieces[this.color*16]){
                currentPiece.isProtected = 1;
            }
            else if(currentPiece == pieces[(!this.color)*16]){
				currentPiece.inCheck++;
				if(currentPiece.inCheck == 1){
					currentPiece.checkPath.push({x:this.x,y:this.y});
				}
            }
			else if(currentPiece.color != this.color){
				this.moves.push({x:x,y:y});
			}
        }
    }
	findMovesBeforeMyTurn(){
		//if knight is pinned then it's moves will never match with pinned path
		//so no meaning of comparing it's moves with pinned path
		if(this.isPinned == 0) {
			let x;
			let y;
			let xx;
			let yy;
			
			let currentPiece;

			for(let i=1 ; i<=8 ; i++){
				if(i == 1){
					xx = -1;
					yy = -2;
				}
				else if(i == 2){
					xx = 1;
					yy = -2;
				}
				else if(i == 3){
					xx = 2;
					yy = -1;
				}
				else if(i == 4){
					xx = 2;
					yy = 1;
				}
				//
				else if(i == 5){
					xx = 1;
					yy = 2;
				}
				else if(i == 6){
					xx = -1;
					yy = 2;
				}
				else if(i == 7){
					xx = -2;
					yy = 1;
				}
				else if(i == 8){
					xx = -2;
					yy = -1;
				}

				x = this.x + xx*unit;
				y = this.y + yy*unit;

				if(checkBorderReached(x,y)){
					continue;
				}
				
				currentPiece = whichPieceAt(x,y);
				if(currentPiece == 0 || currentPiece.color != this.color){
					this.moves.push({x:x,y:y});
				}
			}
		} else {
			this.moves = [];
		}
    }
}
