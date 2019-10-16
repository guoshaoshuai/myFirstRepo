interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

export function getCounter(): Counter {
  const counter = (function(start: number) { console.log(start) }) as Counter
  counter.interval = 2
  counter.reset = () => { console.log("reset()") }
  return counter
}
