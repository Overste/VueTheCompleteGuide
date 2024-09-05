function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [].
        }
    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }

            return { width: this.monsterHealth + '%' };
        },
        playerBarHealth() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }

            return {width: this.playerHealth + '%'}
        },
        playerHasSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(healthValue) {
            if (healthValue <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (healthValue <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(healthValue) {
            if (healthValue <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (healthValue <= 0) {
                this.winner = 'player'
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster1;'
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();', attackValue)
            this.attackPlayer()
        }
    },
    addLogMessage(who, what, value) {
        this.logMessages.unshift({
            actionBy: who,
            actionType: what,
            actionValue: value
        })
    }
})

app.mount('#game')