import { readFileSync } from "fs";

const input = readFileSync(`${__dirname}/example.txt`, "utf8");

const times = input
    .split("\n")[0]
    .split(" ")
    .filter((time) => Number.parseInt(time))
    .join("");
const distances = input
    .split("\n")[1]
    .split(" ")
    .filter((time) => Number.parseInt(time))
    .join("");

const pairs: [number, number][] = [];

pairs.push([Number.parseInt(times), Number.parseInt(distances)]);

let prod = 1;

pairs.forEach(([time, distance]) => {
    console.log({ time, distance });
    const maxRangeCount = Math.floor(time / 2);
    for (let i = 0; i < maxRangeCount; i++) {
        if (i * (time - i) > distance) {
            console.log(i, time - i);
            prod *= time - i - i + 1;
            break;
        }
    }
});

console.log(prod);

