let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  {
    id: createEventId(),
    title: "New Timed Tracking",
    start: todayStr + "T11:00:00",
    end: todayStr + "T12:00:00",
  },
  {
    id: createEventId(),
    title: "New Timed",
    description: "Lorem ipsum dolor sit amet.",
    start: todayStr + "T01:00:00",
    end: todayStr + "T02:00:00",
    backgroundColor: "#00a65a", //Success (green)
    borderColor: "#00a65a", //Success (green)
  },
];

export function createEventId() {
  return String(eventGuid++);
}
