export interface IMenu {
  term_id?: number;
  name?: string;
  items?: [
    {
      ID: number;
      title: string;
    }
  ];
}
