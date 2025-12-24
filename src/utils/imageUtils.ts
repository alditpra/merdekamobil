/**
 * Image utility functions
 * Supports direct image URLs (self-hosted or CDN)
 */

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

    // Collect all non-empty image URLs
    if (car.image1?.trim()) images.push(car.image1.trim());
    if (car.image2?.trim()) images.push(car.image2.trim());
    if (car.image3?.trim()) images.push(car.image3.trim());
    if (car.image4?.trim()) images.push(car.image4.trim());
    if (car.image5?.trim()) images.push(car.image5.trim());

    return images;
}

/**
 * Get primary image for a car
 * @param car - Car object
 * @param fallback - Fallback image path
 * @returns Primary image URL or fallback
 */
export function getCarPrimaryImage(
    car: { image1?: string },
    fallback: string = '/placeholder-car.svg'
): string {
    return car.image1?.trim() || fallback;
}
