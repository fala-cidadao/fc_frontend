export interface IProblem {
  title: string;
  createdAt: string;
  _id: string;
  sector: string;
  author: string;
  status: string;
  image: string;
  description: string;
  comments: IComment[];
  location: ILocation;
}

interface IComment {
  owner: string;
  text: string;
  role: string;
  image: string;
}

interface ILocation {
  address: string;
  city: string;
  state: string;
  district: string;
}
