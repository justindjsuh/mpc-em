import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCanA5FibojQ8pJjxu6DxXFg';
// const PLAYLIST_ID = 'YOUR_PLAYLIST_ID';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type'); // ?type=latest or ?type=all

  let YOUTUBE_API_URL;

  if (type === 'latest') {
    YOUTUBE_API_URL = `${BASE_URL}/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`;
  } else if (type === 'all') {
    // YOUTUBE_API_URL = `${BASE_URL}/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=10`;
    YOUTUBE_API_URL = `${BASE_URL}/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  } else {
    return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 });
  }

  try {
    const res = await fetch(YOUTUBE_API_URL);
    const data = await res.json();

    return NextResponse.json(data.items);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
