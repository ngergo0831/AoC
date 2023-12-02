import { readStream } from "../../utils/readFileStream";

let sum = 0;

const MAX_VALUES = {
    red: 12,
    green: 13,
    blue: 14,
};

readStream(`${__dirname}/input.txt`, (line) => {
    let isGamePossible = true;
    const maxOfColors = {
        red: 0,
        green: 0,
        blue: 0,
    };

    const splittedLine = line.split(":");
    const gameId = splittedLine[0].slice(5);

    splittedLine[1].split(";").map((game) =>
        game.split(",").map((g) => {
            const [cubes, color] = g.trimStart().split(" ");

            // part 1
            if (Number.parseInt(cubes) > MAX_VALUES[color]) {
                isGamePossible = false;
                // return 0;
            }

            // part 2
            if (Number.parseInt(cubes) > maxOfColors[color]) {
                maxOfColors[color] = cubes;
            }
        })
    );

    sum += maxOfColors.red * maxOfColors.green * maxOfColors.blue;

    return sum;
});

