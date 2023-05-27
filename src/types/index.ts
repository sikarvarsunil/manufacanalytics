export interface itemTpye {
    "title": string;
    "mean": number;
    "median": number;
    "mode": number[];
    
}
export interface itemsTpye  {
    [key: string]: itemTpye;
}
export interface DataTableType {
    tData: itemsTpye;
    tableTitle: string;
    categoryTitle: string;
}

export interface keyType {
    [key: number]: string;
}