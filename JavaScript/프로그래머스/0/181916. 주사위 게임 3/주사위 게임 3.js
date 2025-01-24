function getDiceSet(a, b, c, d) {
    return Array.from(new Set([a, b, c, d]));
}

function getSolution(len, diceList, origin) {
    console.log('diceList = ', diceList)
    let result = 0;
    switch(len) {
        case 4: {
            // 네 주사위 모두 다름
            const sort = diceList.sort((a, b) => a - b);
            result = sort[0];
            break;
        }
        case 3: {
            // 두 개가 같은 값, 나머지 두 개의 다른 수
            const [q, r] = diceList.map((dice) => {
                const temp = origin.filter((ori) => ori === dice);
                if(temp.length === 1) {
                    return dice;
                }
            }).filter((v) => v !== undefined);
            result = q * r;
            break;
        }
        case 2: {
            // 세 개의 같은 값 + 하나의 다른 값
            let twiceForEach = true;
            let p = 0;
            let q = 0;
            diceList.forEach((dice) => {
                const temp = origin.filter((ori) => ori === dice);
                if(temp.length === 3) {  // 세 개의 같은 값
                    console.log('temp = ', temp)
                    p = temp[0];
                    twiceForEach = false;
                } 
                if(temp.length === 2) {  // 두 개씩 같은 값  
                    twiceForEach = true;
                }
                if(temp.length === 1) {
                    q = temp[0];
                }
            })
            if(twiceForEach) {
                const [ p, q ] = diceList;
                console.log('twiceForEach p = ',p, 'q = ', q);
                const sub = p - q > 0 ? p - q : (p - q) * -1;
                result = (p + q) * sub;
                console.log('result = ', result)
            } else {
                result = Math.pow((10 * p + q), 2);
            }
            break;
        }
        case 1: {
            const [p] = diceList 
            result = 1111 * p
            break;
        }
    }
    return result;
}

function solution(a, b, c, d) {
    /**
    * 네 주사위가 모두 같음 1
    * 세 주사위가 같고, 하나가 다름 2
    * 두 개씩 같은 값, 2
    * 두 개가 같은 값, 나머지 두 개의 다른 수 3,
    * 네 주사위 모두 다름, 4
    **/
    const dices = getDiceSet(a, b, c, d);
    const len = dices.length;
    const origin = [a, b, c, d];
    const result = getSolution(len, dices, origin);
    return result;
}