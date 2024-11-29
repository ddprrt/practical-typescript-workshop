// 2. Create an event handler type
type Event = unknown;
type EventHandler<T> = Function;

//@ts-expect-error
const eventMap: Record<Event, EventHandler<any>[]> = {
  onClick: [],
  onFocus: [],
  onBlur: [],
};

// 4. Implement a type-safe event handler
function addEventListener(event: Event, handler: EventHandler<any>): void {
  // Implement
}

addEventListener("onClick", (ev: unknown) => {
  console.log("received", ev);
});

export {};
