import { format } from "date-fns";

const currentDate = new Date();

export const tasksInitialState = [
  {
    id: 0,
    text: "Study lesson",
    completed: true,
    category: "Task",
    date: format(currentDate, "MMMM d, yyyy"),
    time: "10:00am",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, nibh quis sagittis ullamcorper, felis elit tempus sem, eu fringilla tellus sapien sit amet lectus.",
  },
  {
    id: 1,
    text: "Run 5k",
    completed: true,
    category: "Goal",
    date: format(currentDate, "MMMM d, yyyy"),
    time: "08:00am",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, nibh quis sagittis ullamcorper, felis elit tempus sem, eu fringilla tellus sapien sit amet lectus.",
  },
  {
    id: 2,
    text: "Go to party",
    completed: false,
    category: "Event",
    date: format(currentDate, "MMMM d, yyyy"),
    time: "10:00pm",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, nibh quis sagittis ullamcorper, felis elit tempus sem, eu fringilla tellus sapien sit amet lectus.",
  },
  {
    id: 3,
    text: "Game meetup",
    completed: false,
    category: "Event",
    date: format(currentDate, "MMMM d, yyyy"),
    time: "01:00pm",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, nibh quis sagittis ullamcorper, felis elit tempus sem, eu fringilla tellus sapien sit amet lectus.",
  },
  {
    id: 4,
    text: "Take out trash",
    completed: true,
    category: "Task",
    date: format(currentDate, "MMMM d, yyyy"),
    time: "09:00am",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, nibh quis sagittis ullamcorper, felis elit tempus sem, eu fringilla tellus sapien sit amet lectus.",
  },
];
