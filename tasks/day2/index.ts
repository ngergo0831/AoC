import { readStream } from "../../utils/readFileStream";

readStream(`${__dirname}/input.txt`, (line) => 0);