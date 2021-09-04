export default interface MessageData {
    read(lg): Promise<string>;
}
