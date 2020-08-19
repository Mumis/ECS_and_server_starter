export class EventBus {
    private readonly events = new Map<Function, Function[]>();

    public register(type: Function, callback: Function): void {
        const callbacks = this.events.get(type);

        if (callbacks) {
            callbacks.push(callback);
        } else {
            this.events.set(type, [ callback ]);
        }
    }

    public emit(event: object): void {
        const callbacks = this.events.get(event.constructor);

        if (callbacks) {
            for (const callback of callbacks) {
                callback(event);
            }
        }
    }
}
