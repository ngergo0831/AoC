import { readFileSync } from "fs";

const isInRange = (number: number, min: number, max: number) =>
    number >= min && number <= max;

const input = readFileSync(`${__dirname}/input.txt`, "utf8");

const parts = input.split("\n\n").map((line) => line.split("\n"));

const seeds = parts[0]
    .map((line) => line.split(": ")[1])[0]
    .split(" ")
    .map(Number);

const splittedParts = parts
    .filter((_, index) => index !== 0)
    .map((part) => part.filter((_, index) => index !== 0))
    .map((part) => part.map((p) => p.split(" ").map(Number)));

const results: number[] = [];

seeds.forEach((seed) => {
    splittedParts.forEach((sn) => {
        sn.every((s) => {
            if (isInRange(seed, s[1], s[1] + s[2])) {
                seed = seed + s[0] - s[1];
                return false;
            }

            return true;
        });
    });
    results.push(seed);
});

console.log(Math.min(...results));

