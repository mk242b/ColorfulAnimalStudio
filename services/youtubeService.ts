const apiKey = process.env.API_KEY || '';
const CHANNEL_HANDLE = 'ColorfulAnimalStudio'; // Handle for the channel

export interface ChannelStats {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
}

export const fetchChannelStats = async (): Promise<ChannelStats | null> => {
  if (!apiKey) {
    console.warn("API Key is missing. Cannot fetch YouTube stats.");
    return null;
  }

  try {
    // 1. First, search for the channel by handle to get the ID, or use channels list with forHandle if supported
    // The 'forHandle' parameter is supported in the 'channels' endpoint.
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=@${CHANNEL_HANDLE}&key=${apiKey}`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`YouTube API Error: ${response.statusText}`);
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
        // Fallback or retry logic could go here, but for now we return null
        // Assuming maybe the handle resolution failed or quota exceeded
        return null;
    }
  } catch (error) {
    console.error("Error fetching YouTube channel stats:", error);
    return null;
  }
};

export const formatNumber = (numStr: string): string => {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) return '0';
    
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toString();
}