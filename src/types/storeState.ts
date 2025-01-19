export interface storeState {
    data: any; 
    loading: boolean; 
    error: string | null; 
    fetchData: (param?: string, param2?: string) => Promise<void>;
  }