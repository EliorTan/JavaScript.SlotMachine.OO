

class AccountMgr {
    constructor(board, balance){
        this.balance = balance;
        this.board = board
    }

    beginRound(numberOfLines, bet) {
        this.numberOfLines = numberOfLines
        this.bet = bet
    }

    calcPnL(){
        let pnl = -1 * this.bet * this.numberOfLines

        const wins = this.board.checkWins();


    }
}