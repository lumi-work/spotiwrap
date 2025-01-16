export interface storeState {
    data: any; 
    loading: boolean; 
    error: string | null; 
    fetchData: (param?: any) => Promise<void>;
  }