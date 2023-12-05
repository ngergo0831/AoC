import { readFileSync } from "fs";
import { readStream } from "../../utils/readFileStream";

let sum = 0;

const lineCount = readFileSync(`${__dirname}/input.txt`, "utf8").split(
    "\n"
).length;
const scratchcards = new Array(lineCount).fill(1);

readStream(`${__dirname}/input.txt`, (line) => {
    const games = line.split(":");
    const [game, numbers] = games.map((game) => game.split("|"));
    const gameNumber = Number.parseInt(game[0].split(" ").filter(Boolean)[1]);
    const winningNumbers = numbers[0]
        .trimStart()
        .split(" ")
        .map((number) => parseInt(number))
        .filter(Boolean);
    const ourNumbers = numbers[1]
        .trimStart()
        .split(" ")
        .map((number) => parseInt(number))
        .filter(Boolean);

    // Part1
    let counter = -1;

    for (let i = 0; i < scratchcards[gameNumber - 1]; i++) {
        counter = -1;
        for (const number of ourNumbers) {
            if (winningNumbers.includes(number)) {
                counter++;
            }
        }

        if (counter >= 0) {
            for (
                let i = gameNumber;
                i <= counter + gameNumber && i < scratchcards.length;
                i++
            ) {
                scratchcards[i]++;
            }
        }
    }

    // Part2
    return scratchcards.reduce((a, b) => a + b, 0);
});

