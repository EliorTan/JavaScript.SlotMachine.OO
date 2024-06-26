import SlotMachine from './slot_machine.js';
import IOMgr from './iomgr.js';
class Game{
    constructor(){
        this.ioMgr = IOMgr.getInstance();
    }

    start() {
        this.slotMachine = new SlotMachine();
        while (true){
            this.slotMachine.playRound();

            if (this.slotMachine.isGameOver()) {
                this.ioMgr.printMsg("You ran out of Money!");
                break;
            }
            
            if (this.ioMgr.getPlayAgain() != "y")
                break;
        }
    }
}

const game = new Game();
game.start();