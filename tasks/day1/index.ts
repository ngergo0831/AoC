import { readStream } from "../../utils/readFileStream";
console.time('time_spent');
let sum = 0;

const PAIRS = {
    one: "o1e",
    two: "t2o",
    three: "t3e",
    four: "f4r",
    five: "f5e",
    six: "s6x",
    seven: "s7n",
    eight: "e8t",
    nine: "n9e",
};

const replaceWordsWithNumbers = (line: string) => {
    return Object.entries(PAIRS)
        .reduce(
            (result, [key, value]) =>
                result.replace(new RegExp(key, "g"), value),
            line
        )
        .replace(/\D/g, "");
};

readStream(`${__dirname}/input.txt`, (line) => {
    line = replaceWordsWithNumbers(line);

    const firstNum = Number.parseInt(line[0]);
    const lastNum = Number.parseInt(line[line.length - 1]);

    const res = Number.parseInt(`${firstNum}${lastNum}`);

    if (!Number.isNaN(res)) {
        sum += res;
    }

    return sum;
});
console.timeEnd('time_spent');

