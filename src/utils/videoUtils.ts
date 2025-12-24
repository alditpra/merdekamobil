/**
 * Convert YouTube URL to embed format
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID (already embed format)
 */
export function convertYouTubeUrl(url: string): string | null {
    if (!url) return null;

    // If already embed URL, return as is
    if (url.includes('/embed/')) {
        return url;
    }

    // Extract video ID from various YouTube URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
        /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}`;
        }
    }

    return null;
}

/**
 * Check if URL is a valid YouTube URL
 */
export function isYouTubeUrl(url: string): boolean {
    if (!url) return false;
    return /(?:youtube\.com|youtu\.be)/.test(url);
}
