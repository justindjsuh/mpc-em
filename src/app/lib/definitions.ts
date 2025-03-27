interface EventLinks {
  label: string;
  link: string;
}

export interface EventsApiResponse {
  id: number;
  created_at: Date | string;
  created_by: string;
  name: string;
  description: string;
  end_date: string;
  start_date: string;
  image_url: string;
  links: EventLinks[] | null;
};

interface YoutubeThumbnails {
  default: { url: string; width: number; height: number };
  high: { url: string; width: number; height: number };
  medium: { url: string; width: number; height: number };
}

export interface YoutubeSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: YoutubeThumbnails;
  title: string;
}

export interface YoutubeVideo {
  etag: string;
  id: { kind: string; videoId: string };
  kind: string;
  snippet: YoutubeSnippet;
}
