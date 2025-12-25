export interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    transmission: 'Manual' | 'Automatic';
    fuel: 'Bensin' | 'Diesel';
    color: string;
    description: string;
    features: string[];
    status: 'available' | 'sold';
    image1: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
    video_url?: string;
    featured: boolean;
    sold_date?: string;
    date_added: string;
}

export interface Settings {
    whatsapp_number: string;
    business_name: string;
    business_tagline: string;
    business_address: string;
    business_city: string;
    promo_emoji?: string;
    promo_text?: string;
    promo_active?: string;
}

export interface CarFilters {
    brands?: string[];
    yearMin?: number;
    yearMax?: number;
    priceMin?: number;
    priceMax?: number;
    transmission?: string[];
    fuel?: string[];
    search?: string;
}

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'mileage-low' | 'year-new';

export interface Testimonial {
    id: string;
    type: 'screenshot' | 'photo' | 'video';
    media: string;
    name: string;
    car?: string;
    quote?: string;
    rating?: number;
}
