// 1. CSS unit type
type CSSUnit = `${number}${"px" | "em" | "rem" | "%"}`;

// 2. Event handler type
type EventType = "click" | "focus" | "blur";
type EventHandler = `on${Capitalize<EventType>}`;

// 3. Type-safe CSS function
function createCSSValue(
  value: number,
  unit: "px" | "em" | "rem" | "%",
): CSSUnit {
  return `${value}${unit}`;
}

// 4. Type-safe event handler
function addEventListener(handler: EventHandler): void {
  const eventType = handler.slice(2).toLowerCase() as EventType;
  console.log(`Added ${eventType} event listener`);
}

export {};
