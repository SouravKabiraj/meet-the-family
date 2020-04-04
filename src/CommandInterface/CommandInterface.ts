export abstract class CommandInterface {
    public abstract Execute(): string;

    public abstract UnExecute(): string;
}
