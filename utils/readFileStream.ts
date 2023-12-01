import fs from "fs";
import readLine from "readline";

export const readStream = (path: string, exec?: (line: string) => number) => {
    let result = 0;
    const lineReader = readLine.createInterface({
        input: fs.createReadStream(path),
    });

    lineReader.on("line", function (line) {
        if (exec) {
            result = exec(line);
            return;
        }

        console.log("Line from file:", line);
    });

    lineReader.on("close", function () {
        console.log(`\nResult: ${result}\n`);
        console.log("<<< End of file >>>");
    });
};
