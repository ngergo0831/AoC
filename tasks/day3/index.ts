import { readFileSync } from "fs";

let sum = 0;

const input = readFileSync(`${__dirname}/input.txt`, "utf-8");
const lines = input.split("\n");

enum Direction {
    LEFT = "left",
    RIGHT = "right",
}

const findNumber = (line: string, index: number, direction: Direction) => {
    let number = "";

    const increment = direction === Direction.RIGHT ? 1 : -1;
    const start = direction === Direction.RIGHT ? index : index - 1;

    for (let i = start; i >= 0 && i < line.length; i += increment) {
        const char = line[i];

        if (!Number.isInteger(+char)) {
            break;
        }

        number = direction === Direction.RIGHT ? number + char : char + number;
    }

    return number;
};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    for (let j = 0; j < line.length; j++) {
        const numbers: string[] = [];
        const char = line[j];

        if (char !== "*") {
            continue;
        }

        // Top left is number
        if (
            lines[i - 1] &&
            lines[i - 1][j - 1] &&
            Number.isInteger(+lines[i - 1][j - 1])
        ) {
            const leftPart = findNumber(lines[i - 1], j - 1, Direction.LEFT);
            const rightPart = findNumber(lines[i - 1], j - 1, Direction.RIGHT);

            numbers.push(leftPart + rightPart);
        }

        // Top is number
        if (
            lines[i - 1] &&
            lines[i - 1][j] &&
            Number.isInteger(+lines[i - 1][j]) &&
            !Number.isInteger(+lines[i - 1][j - 1])
        ) {
            const rightPart = findNumber(lines[i - 1], j, Direction.RIGHT);

            numbers.push(rightPart);
        }

        // Top right is number
        if (
            lines[i - 1] &&
            lines[i - 1][j + 1] &&
            Number.isInteger(+lines[i - 1][j + 1]) &&
            !Number.isInteger(+lines[i - 1][j])
        ) {
            const rightPart = findNumber(lines[i - 1], j + 1, Direction.RIGHT);

            numbers.push(rightPart);
        }

        // Left is number
        if (lines[i] && lines[i][j - 1] && Number.isInteger(+lines[i][j - 1])) {
            const leftPart = findNumber(lines[i], j, Direction.LEFT);

            numbers.push(leftPart);
        }

        // Right is number
        if (lines[i] && lines[i][j + 1] && Number.isInteger(+lines[i][j + 1])) {
            const rightPart = findNumber(lines[i], j + 1, Direction.RIGHT);

            numbers.push(rightPart);
        }

        // Bottom left is number
        if (
            lines[i + 1] &&
            lines[i + 1][j - 1] &&
            Number.isInteger(+lines[i + 1][j - 1])
        ) {
            const leftPart = findNumber(lines[i + 1], j - 1, Direction.LEFT);
            const rightPart = findNumber(lines[i + 1], j - 1, Direction.RIGHT);

            numbers.push(leftPart + rightPart);
        }

        // Bottom is number
        if (
            lines[i + 1] &&
            lines[i + 1][j] &&
            Number.isInteger(+lines[i + 1][j]) &&
            !Number.isInteger(+lines[i + 1][j - 1])
        ) {
            const rightPart = findNumber(lines[i + 1], j, Direction.RIGHT);

            numbers.push(rightPart);
        }

        // Bottom right is number
        if (
            lines[i + 1] &&
            lines[i + 1][j + 1] &&
            Number.isInteger(+lines[i + 1][j + 1]) &&
            !Number.isInteger(+lines[i + 1][j])
        ) {
            const rightPart = findNumber(lines[i + 1], j + 1, Direction.RIGHT);

            numbers.push(rightPart);
        }

        if (numbers.length === 2) {
            const result = +numbers[0] * +numbers[1];

            sum += result;
        }
    }
}

console.log(sum);

