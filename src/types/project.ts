export interface Project {
  title: string;
  descr: string;
  url: string;
  languages: Array<string>;
  img?: string;
  /* things below maybe use backend */
  commits?: number;
  stars?: number;
  forks?: number;
}
