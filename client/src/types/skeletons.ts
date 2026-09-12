export interface ConfigUItype {
    id: string;
    title: string;
    rows: {
        id: string;
        label: string;
        colors: string[];
    }[];
}
