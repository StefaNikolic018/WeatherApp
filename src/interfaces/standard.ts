export interface IProps {
  children?: React.ReactNode;
}

export interface IDay {
  day: string;
  temp: number;
  icon: string;
}

export interface ICountry {
  Code: string;
  Name: string;
}
