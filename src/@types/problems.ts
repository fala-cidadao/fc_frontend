export interface IProblem {
  title: string;
  createdAt: string;
  _id: string;
  sector: string;
  author: string;
  status: string;
  images: string[];
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
  latitude: string;
  longitude: string;
}
