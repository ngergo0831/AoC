import { readFileSync } from "fs";

let sum = 0;

const input = readFileSync(`${__dirname}/input.txt`, "utf-8");
const lines = input.split("\n");

let isCorrect = false;

const findLeftNumber = (line: string, index: number) => {
    let number = "";

    for (let i = index - 1; i >= 0; i--) {
        const char = line[i];

        if (!Number.isInteger(+char)) {
            break;
        }

        number = char + number;
    }

    return number;
};

const findRightNumber = (line: string, index: number) => {
    let number = line[index];

    for (let i = index + 1; i < line.length; i++) {
        const char = line[i];

        if (!Number.isInteger(+char)) {
            break;
        }

        number = number + char;
    }

    return number;
};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let numbers: string[] = [];

    for (let j = 0; j < line.length; j++) {
        const numbers: string[] = [];
        const char = line[j];

        if (char !== "*") {
            continue;
        }

        // Top left is number
        if (lines[i - 1] && lines[i - 1][j - 1] && Number.isInteger(+lines[i - 1][j - 1])) {
            const leftPart = findLeftNumber(lines[i - 1], j - 1);
            const rightPart = findRightNumber(lines[i - 1], j - 1);

            numbers.push(leftPart + rightPart);
        }

        // Top is number
        if (lines[i - 1] && lines[i - 1][j] && Number.isInteger(+lines[i - 1][j]) && !Number.isInteger(+lines[i - 1][j - 1])) {
            const rightPart = findRightNumber(lines[i - 1], j);

            numbers.push(rightPart);
        }

        // Top right is number
        if (lines[i - 1] && lines[i - 1][j + 1] && Number.isInteger(+lines[i - 1][j + 1]) && !Number.isInteger(+lines[i - 1][j])) {
            const rightPart = findRightNumber(lines[i - 1], j + 1);

            numbers.push(rightPart);
        }

        // Left is number
        if (lines[i] && lines[i][j - 1] && Number.isInteger(+lines[i][j - 1])) {
            const leftPart = findLeftNumber(lines[i], j);

            numbers.push(leftPart);
        }

        // Right is number
        if (lines[i] && lines[i][j + 1] && Number.isInteger(+lines[i][j + 1])) {
            const rightPart = findRightNumber(lines[i], j + 1);

            numbers.push(rightPart);
        }

        // Bottom left is number
        if (lines[i + 1] && lines[i + 1][j - 1] && Number.isInteger(+lines[i + 1][j - 1])) {
            const leftPart = findLeftNumber(lines[i + 1], j - 1);
            const rightPart = findRightNumber(lines[i + 1], j - 1);

            numbers.push(leftPart + rightPart);
        }

        // Bottom is number
        if (lines[i + 1] && lines[i + 1][j] && Number.isInteger(+lines[i + 1][j]) && !Number.isInteger(+lines[i + 1][j - 1])) {
            const rightPart = findRightNumber(lines[i + 1], j);

            numbers.push(rightPart);
        }

        // Bottom right is number
        if (lines[i + 1] && lines[i + 1][j + 1] && Number.isInteger(+lines[i + 1][j + 1]) && !Number.isInteger(+lines[i + 1][j])) {
            const rightPart = findRightNumber(lines[i + 1], j + 1);

            numbers.push(rightPart);
        }

        if (numbers.length === 2) {
            const result = +numbers[0] * +numbers[1];

            sum += result;
        }
    }
}

console.log(sum);
