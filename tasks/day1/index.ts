import { readStream } from "../../utils/readFileStream";

let sum = 0;

const PAIRS = {
    one: "o1e",
    two: "t2o",
    three: "t3e",
    four: "f4r",
    five: "f5e",
    six: "s6x",
    seven: "s7n",
    eight: "e8i",
    nine: "n9e",
};

const replaceWordsWithNumbers = (line: string) => {
    for (const [key, value] of Object.entries(PAIRS)) {
        const regex = new RegExp(key, "g");
        line = line.replace(regex, value);
    }

    return line.replace(/\D/g, "");
};

readStream(`${__dirname}/input.txt`, (line) => {
    let firstNum: number | null = null,
        lastNum: number | null = null;

    line = replaceWordsWithNumbers(line);

    firstNum = Number.parseInt(line[0]);
    lastNum = Number.parseInt(line[line.length - 1]);

    const res = Number.parseInt("" + firstNum + lastNum);

    if (!Number.isNaN(res)) {
        sum += res;
    }

    return sum;
});

