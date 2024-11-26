// CSS unit type
type CSSUnit = `${number}${"px" | "em" | "rem" | "%"}`;

// Type-safe CSS function
function createCSSValue(
  value: number,
  unit: "px" | "em" | "rem" | "%",
): CSSUnit {
  return `${value}${unit}`;
}

// Type-safe event handler
function addEventListener(handler: EventHandler): void {
  const eventType = handler.slice(2).toLowerCase() as EventType;
  console.log(`Added ${eventType} event listener`);
}

export {};
