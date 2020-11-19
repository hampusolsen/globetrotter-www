export interface HappeningFormValues {
  title: string;
  description: string;
  date: Date;
  to_date?: Date;
  images: File[];
  travel_id: string;
  lng: number;
  lat: number;
}
