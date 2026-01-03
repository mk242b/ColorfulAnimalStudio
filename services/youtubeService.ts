import { PortfolioItem } from '../types';

const apiKey = 'AIzaSyA3_38VHbxmowH3R62DoPakjz9sBe9KZvs';
const CHANNEL_HANDLE = 'ColorfulAnimalStudio'; 

export interface ChannelStats {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
}

// Mock data to ensure the UI looks good even if the API quota is exceeded or key is restricted
const MOCK_STATS: ChannelStats = {
    subscriberCount: '2530',
    viewCount: '142000',
    videoCount: '28'
};

const MOCK_VIDEOS: PortfolioItem[] = [
  { 
    id: '1', 
    title: 'Fun Learning Adventure', 
    category: 'Learning', 
    imageUrl: '', 
    videoId: '34mRRnRFcps'
  },
  { 
    id: '2', 
    title: 'Animal Songs for Kids', 
    category: 'Music', 
    imageUrl: '',
    videoId: 'K5sPA2YAf18'
  },
  { 
    id: '3', 
    title: 'Colors & Shapes', 
    category: 'Education', 
    imageUrl: '',
    videoId: '_N2TUUkMySI'
  },
  { 
    id: '4', 
    title: 'Playtime Stories', 
    category: 'Stories', 
    imageUrl: '',
    videoId: 'HdyejSdLmaI'
  }
];

export const fetchChannelStats = async (): Promise<ChannelStats | null> => {
  // If no key is present, immediately return mock data for development/demo
  if (!apiKey) {
    return MOCK_STATS;
  }

  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/channels');
    url.searchParams.append('part', 'statistics');
    url.searchParams.append('forHandle', `@${CHANNEL_HANDLE}`);
    url.searchParams.append('key', apiKey);
    
    const response = await fetch(url.toString());
    
    if (!response.ok) {
        console.warn("YouTube API unavailable (likely restricted or quota exceeded). Switching to demo mode.");
        return MOCK_STATS;
    }

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const stats = data.items[0].statistics;
      return {
        subscriberCount: stats.subscriberCount,
        viewCount: stats.viewCount,
        videoCount: stats.videoCount,
      };
    } else {
        console.warn(`YouTube API: No channel found for handle @${CHANNEL_HANDLE}. Using mock data.`);
        return MOCK_STATS;
    }
  } catch (error) {
    console.warn("Error fetching YouTube channel stats, using fallback.");
    return MOCK_STATS;
  }
};

export const fetchLatestVideos = async (): Promise<PortfolioItem[]> => {
  if (!apiKey) return MOCK_VIDEOS;

  try {
    // 1. Get Channel Uploads Playlist ID
    const channelUrl = new URL('https://www.googleapis.com/youtube/v3/channels');
    channelUrl.searchParams.append('part', 'contentDetails');
    channelUrl.searchParams.append('forHandle', `@${CHANNEL_HANDLE}`);
    channelUrl.searchParams.append('key', apiKey);
    
    const channelRes = await fetch(channelUrl.toString());
    if (!channelRes.ok) throw new Error('Channel fetch failed');
    const channelData = await channelRes.json();
    
    const uploadsId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    
    if (!uploadsId) return MOCK_VIDEOS;

    // 2. Get Videos from Uploads Playlist
    const playlistUrl = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
    playlistUrl.searchParams.append('part', 'snippet');
    playlistUrl.searchParams.append('playlistId', uploadsId);
    playlistUrl.searchParams.append('maxResults', '4');
    playlistUrl.searchParams.append('key', apiKey);

    const playlistRes = await fetch(playlistUrl.toString());
    if (!playlistRes.ok) throw new Error('Playlist fetch failed');
    const playlistData = await playlistRes.json();

    if (!playlistData.items) return MOCK_VIDEOS;

    return playlistData.items.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      category: 'Latest Video',
      imageUrl: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
      videoId: item.snippet.resourceId.videoId
    }));

  } catch (error) {
    console.warn("Error fetching YouTube videos:", error);
    return MOCK_VIDEOS;
  }
};

export const formatNumber = (numStr: string): string => {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) return '0';
    
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
    }
    return num.toString();
}