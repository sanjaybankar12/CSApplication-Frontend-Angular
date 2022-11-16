
export interface Program {
    id?:number;
    title?:string;
    description?:string;
    duedate?:string;
    username?:string;
    activity?:Activity;
    activityId?:number;
    status?:string;
  }


  interface Activity {
      id?:number;
      title?:string;
  }