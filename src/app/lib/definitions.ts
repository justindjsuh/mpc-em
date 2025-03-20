interface EventLinks {
  lable: string;
  link: string;
}

export interface EventsApiResponse {
  id: number;
  created_at: Date;
  created_by: string;
  name: string;
  description: string;
  end_date: string;
  start_date: string;
  image_url: string;
  liinks: EventLinks[];
};
