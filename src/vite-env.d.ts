/// <reference types="vite/client" />

interface TurnstileObject {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
}

interface Window {
  turnstile?: TurnstileObject;
}
