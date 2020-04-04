import {InputCommandsHandler} from "./InputCommandsHandler";

const fs = require('fs');


class MeetMyFamily {
    public static async main() {
        const filename = process.argv[3];
        const contents = await fs.readFileSync(filename, {encoding: 'utf8'})
        const formattedCommands = [];
        const commandLines = contents.split('\n');
        commandLines.forEach(commandLine => {
            formattedCommands.push(commandLine.split(' '));
        });
        const outputs = InputCommandsHandler.execute(formattedCommands).toString().replace(/\,/g, "\n");
        await fs.writeFileSync('./Output/Output.txt', outputs);
    }
}

MeetMyFamily.main();
