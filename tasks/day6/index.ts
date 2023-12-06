import { readFileSync } from "fs";

const input = readFileSync(`${__dirname}/example.txt`, "utf8");

const times = input
    .split("\n")[0]
    .split(" ")
    .filter((time) => Number.parseInt(time));
const distances = input
    .split("\n")[1]
    .split(" ")
    .filter((time) => Number.parseInt(time));

const pairs: [number, number][] = [];

for (let i = 0; i < times.length; i++) {
    pairs.push([Number.parseInt(times[i]), Number.parseInt(distances[i])]);
}

let prod = 1;

pairs.forEach(([time, distance]) => {
    const maxRangeCount = Math.floor(time / 2);
    for (let i = 0; i < maxRangeCount; i++) {
        if (i * (time - i) > distance) {
            console.log(i, time - i);
            prod *= (time - i - i + 1)
            break;
        }
    }
});

console.log(prod);

