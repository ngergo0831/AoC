import { readFileSync } from "fs";

let sum = 0;
const SYMBOLS = ["*", "-", "#", "/", "=", "%", "$", "&", "@", "+"]; // created a SET from the input.txt file and filtered numberts and . (dots)

const input = readFileSync(`${__dirname}/input.txt`, "utf-8");
const lines = input.split("\n");

let isCorrect = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let numbers: string[] = [];

    for (let j = 0; j < line.length; j++) {
        const char = line[j];

        if (!Number.isInteger(+char)) {
            numbers = [];
            continue;
        }

        numbers.push(char);

        for (let row = i - 1; row <= i + 1; row++) {
            for (let col = j - 1; col <= j + 1; col++) {
                if (row < 0 || col < 0 || row >= lines.length || col >= line.length) {
                    continue;
                }

                if (SYMBOLS.includes(lines[row][col])) {
                    isCorrect = true;
                }
            }
        }

        if (!Number.isInteger(+line[j + 1])) {
            if (isCorrect) {
                sum += +numbers.join("");
            }
            isCorrect = false;
        }
    }
}

console.log(sum);