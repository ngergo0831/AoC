import { readStream } from "../../utils/readFileStream";

let sum = 0;

readStream(`${__dirname}/example.txt`, (line) => {
    const games = line.split(":");
    const [_,numbers] = games.map(game =>game.split('|'));
    const winningNumbers = numbers[0].trimStart().split(' ').map(number => parseInt(number)).filter(Boolean);
    const ourNumbers = numbers[1].trimStart().split(' ').map(number => parseInt(number)).filter(Boolean);

    let counter = -1;

    for(const number of ourNumbers){
        if(winningNumbers.includes(number)){
            counter++;
        }
    }

    if(counter >= 0){
        sum += Math.pow(2, counter);
    }

    return sum;
});