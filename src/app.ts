import {InputCommandsHandler} from "./InputCommandsHandler";
import fs from 'fs';

export class MeetMyFamily {
    public static async main() {
        const filename = process.argv[2];
        const contents = await fs.readFileSync(filename, {encoding: 'utf8'});
        const formattedCommands = [];
        const commandLines = contents.split('\n');
        commandLines.forEach(commandLine => {
            formattedCommands.push(commandLine.split(' '));
        });
        const formattedOutput = InputCommandsHandler.execute(formattedCommands);
        formattedOutput.forEach(output => {
            if (output !== undefined) {
                console.log(output.toString().replace(/\,/g, " "));
            }
        });
        await fs.writeFileSync('./Output/Output.txt', formattedOutput);
    }
}

MeetMyFamily.main();
