class GameTable {
    constructor(name){
        this.name = name;
        this.player = null;
        this.enemy = null;
        this.field = null;
        this.move = null;
    }

    getUserData () {
        let  player_name = document.getElementById('login').value;
        let enemy_name = "Enemy";
        let field_size = 3; //document.getElementById('sizeTable').value;
        console.log(player_name, enemy_name, field_size);

 //   startGame () {
        this.player = new Player(player_name, "x");
        this.enemy = new Player(enemy_name, "o");
        this.field = new Field(); // создали объекты
        this.field.drowField(field_size); 
    }

}

class Player {
    constructor(name, symb) {
        this.name = name;
        this.symb = symb;
    }
}

class Field {
    drowField (size){
        var formContainer = document.getElementById('start_block');
        formContainer.style.display = 'none';
        let field_draw = document.getElementById("field_draw");
        field_draw.style.display = 'block';
        for (let i = 0; i< (size*size); i++) {
            let divX = document.createElement('div');
            divX.setAttribute('id', 'block');
            field_draw.appendChild(divX);
        }
        field_draw.addEventListener('click', this.addSymb);
    } 

    checkWinner() {

    }

    addSymb(event) {
        var hod = 0;
        console.log(event);
        if(event.target.className == 'block'){
            if(hod%2==0) {
                event.target.innerHTML = "o";
            } else {
                event.target.innerHTML = "x";
            }
        }
    }        
        
}

var gameTable = new GameTable;

document.getElementById('game').addEventListener('click', gameTable.getUserData);
