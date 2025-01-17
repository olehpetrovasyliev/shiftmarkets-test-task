export type Category = { id: string; name: string };

export type CategoriesList = Category[];

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  category: string;
};

export type EventsList = Event[];
