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
    // Step 1: Get the uploads playlist ID
    const channelRes = await fetch(
      `${BASE_URL}/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`,
    );
    const channelData = await channelRes.json();

    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) {
      return NextResponse.json({ error: 'Uploads playlist not found' }, { status: 404 });
    }

    // Step 2: Get all videos from the uploads playlist
    const videosRes = await fetch(
      `${BASE_URL}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${YOUTUBE_API_KEY}`,
    );
    const videosData = await videosRes.json();

    return NextResponse.json(videosData.items);
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
