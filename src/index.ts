export function helloWorld(message: string): void {
  console.log(`Hello world ${message ? ("\n" + message)  : ""}`)
}

helloWorld("Welcome")