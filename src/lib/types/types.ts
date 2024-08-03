interface Meta {
    page:number,
    pages:number,
    per_page:number,
    total:number
}

interface UserData {
    is_primary: boolean,
    label:string,
    modifier: string,
    value:string
}

export interface TagItem {
    id:string,
    tag:string
}
export interface Fields {
    email:UserData[],
    "first name"?: UserData[],
    "last name"?:UserData[]
}

export interface ResourcesItem {
    id:string,
    avatar_url:string,
    fields:Fields,
    tags: TagItem[]
}

export interface IContactInfoAPI{
    resources:ResourcesItem[]
}


export interface IContactAPI{
    meta:Meta,
    resources:ResourcesItem[]
}


export interface CreateContactInputs {
    firstName?: string;
    lastName?: string;
    email: string;
  }




  export interface ContactItemType {
    id: string;
    avatar_url: string;
    email: string;
    firstName: string;
    lastName: string;
    tags: TagItem[];
  }