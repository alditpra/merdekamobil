/**
 * Image utility functions
 * Supports direct image URLs (self-hosted or CDN)
 */

/**
 * Optimize Cloudinary image URL with transformations
 * @param url - Original Cloudinary URL
 * @param width - Target width
 * @param quality - Quality (auto, 80, etc)
 * @returns Optimized URL with transformations
 */
export function optimizeCloudinaryUrl(
    url: string,
    width: number = 800,
    quality: string = 'auto'
): string {
    // Check if it's a Cloudinary URL
    if (!url.includes('res.cloudinary.com')) {
        return url;
    }

    // Check if already has transformations
    if (url.includes('/upload/')) {
        // Insert transformations after /upload/
        return url.replace(
            '/upload/',
            `/upload/w_${width},q_${quality},f_auto/`
        );
    }

    return url;
}

/**
 * Get all image URLs from a car object
 * @param car - Car object with image1-image5 fields
 * @returns Array of valid image URLs
 */
export function getCarImages(car: {
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
}): string[] {
    const images: string[] = [];

    // Collect all non-empty image URLs and optimize them
    if (car.image1?.trim()) images.push(optimizeCloudinaryUrl(car.image1.trim(), 1200));
    if (car.image2?.trim()) images.push(optimizeCloudinaryUrl(car.image2.trim(), 1200));
    if (car.image3?.trim()) images.push(optimizeCloudinaryUrl(car.image3.trim(), 1200));
    if (car.image4?.trim()) images.push(optimizeCloudinaryUrl(car.image4.trim(), 1200));
    if (car.image5?.trim()) images.push(optimizeCloudinaryUrl(car.image5.trim(), 1200));

    return images;
}

/**
 * Get primary image for a car (optimized for card display)
 * @param car - Car object
 * @param fallback - Fallback image path
 * @returns Primary image URL or fallback
 */
export function getCarPrimaryImage(
    car: { image1?: string },
    fallback: string = '/placeholder-car.svg'
): string {
    const imageUrl = car.image1?.trim();
    if (!imageUrl) return fallback;

    // Optimize for card display (matches 665px actual display size)
    return optimizeCloudinaryUrl(imageUrl, 700);
}
