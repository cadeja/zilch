

// rolls n number of dice (1-6)
// returns array
const rollDice = (n) => {
    arr = [];
    for (let i = 1; i <= n; i++){
        arr.push(Math.floor(Math.random() * 6) + 1);
    }
    return arr;
};



// const checkHand = (dice) => {

// };

const checkForOne = (arr) => {
    return (new Set(arr).size === 1);
}

const checkForStraight = (arr) => {
    if (arr.length != 6) return false;
    
    for (let i = 1; i <= 6; i++){
        if (arr[i - 1] != i) return false;
    }
    return true;
}


//takes roll array and returns score value
const convertToScore = (dice) => {
    let sdice = dice.slice().sort();
    switch(sdice.length) {

        case 6:
            if (checkForStraight(sdice)) return 300;
            if (checkForOne(sdice)) return 1000;
            if (sdice[0] == sdice[1] && sdice[2] == sdice[3] && sdice[4] == sdice[5]) {
                return 100;
            }
            break;
        
        case 5:
            if (checkForOne(sdice)) return sdice[0] == 1 ? 400 : sdice[0] * 40;
            break;


        default:
            return 0;

    }
    return 0;
}