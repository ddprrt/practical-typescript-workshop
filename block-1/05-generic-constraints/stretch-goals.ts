// 2. Event handler type
type EventType = "click" | "focus" | "blur";
type Event = `on${Capitalize<EventType>}`;
type EventHandler<T extends EventType> = (event: T) => void;

type ExtractEventType<T> = T extends `on${infer X}` ? Uncapitalize<X> : never;

const eventMap: Record<Event, EventHandler<any>[]> = {
  onClick: [],
  onFocus: [],
  onBlur: [],
};

// 4. Implement a type-safe event handler
function addEventListener<T extends Event>(
  event: T,
  handler: EventHandler<ExtractEventType<T>>,
): void {
  let eventType = event.slice(2) as EventType;
  eventMap[event].push(handler);
}

addEventListener("onClick", (ev) => {
  console.log("received", ev);
});

export {};
