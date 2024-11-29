// 2. Event handler type
type EventType = "click" | "focus" | "blur";
type Event = `on${Capitalize<EventType>}`;
type EventHandler<T extends Event> = (event: T) => void;

const eventMap: Record<Event, EventHandler<any>[]> = {
  onClick: [],
  onFocus: [],
  onBlur: [],
};

// 4. Implement a type-safe event handler
function addEventListener<T extends Event>(
  event: T,
  handler: EventHandler<T>,
): void {
  let eventType = event.slice(2) as EventType;
  eventMap[event].push(handler);
}

addEventListener("onClick", (ev) => {
  console.log("received", ev);
});

export {};
