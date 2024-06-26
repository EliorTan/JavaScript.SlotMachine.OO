import Board from "./board.js";
import accountMgr from "./account_mgr.js";
import IOMgr from "./iomgr.js";



class SlotMachine {

    static _ROWS = 3;
    static _COLS = 3;


    constructor() {
        this.ioMgr = IOMgr.getInstance();
        this.board = new Board(SlotMachine._ROWS, SlotMachine._COLS);
        this.accountMgr = new accountMgr(this.board,
            this.ioMgr.getDeposit()
        );

    }
    playRound() {
        this.accountMgr.beginRound(
            this.ioMgr.getNumberOfLines(),
            this.ioMgr.getBet((bet) => (!isNaN(bet) && bet > 0 && bet <= this.accountMgr.balance / this.accountMgr.numberOfLines))
        );

        this.board.spin();
        this.ioMgr.printMsg(this.board.getFormattedString());

        const roundPnl = this.accountMgr.calcPnL();
        this.ioMgr.printMsg('Your P/L in this round: ' + roundPnl);
        this.ioMgr.printMsg('Your balance is ' + this.accountMgr.balance);

    }


    isGameOver() {
        return (this.accountMgr.balance <= 0)
    }

}

export default SlotMachine;