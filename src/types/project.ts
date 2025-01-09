export interface Project {
    title: string,
    descr: string,
    url: string,
    /* things below maybe use backend */
    commits?: number,
    stars?: number,
    forks?: number,
    languages: Array<string>,
}