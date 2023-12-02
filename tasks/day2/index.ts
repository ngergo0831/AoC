import { readStream } from "../../utils/readFileStream";

let sum = 0;

const MAX_VALUES = {
    red: 12,
    green: 13,
    blue: 14,
};

readStream(`${__dirname}/input.txt`, (line) => {
    let isGamePossible = true;
    const splittedLine = line.split(":");
    const gameId = splittedLine[0].slice(5);

    splittedLine[1].split(";").map((game) =>
        game.split(",").map((g) => {
            const [cubes, colors] = g.trimStart().split(" ");
            if (cubes > MAX_VALUES[colors]) {
                isGamePossible = false;
                return 0;
            }
        })
    );

    if (isGamePossible) {
        sum += Number.parseInt(gameId);
    }

    return sum;
});

