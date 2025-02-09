type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'scroll' | 'mousemove'


const handelEvent  = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
}

handelEvent('click'); // OK
// handelEvent('scroll'); // Error: Argument of type 'scroll' is not assignable to parameter of type 'ExcludeEvent'.