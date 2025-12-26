import { parse } from 'csv-parse/sync';
import type { Car, Settings } from './types';

/**
 * Fetch and parse CSV data from published Google Sheets
 */
async function fetchCSV<T>(url: string): Promise<T[]> {
    try {
        const response = await fetch(url, {
            headers: {
                'Cache-Control': 'no-cache',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch CSV: ${response.statusText}`);
        }

        const csvText = await response.text();
        const records = parse(csvText, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
        });

        return records as T[];
    } catch (error) {
        console.error('Error fetching CSV:', error);
        throw error;
    }
}

/**
 * Parse CSV row to Car object
 */
function parseCarData(row: any): Car {
    // Parse features from semicolon-separated string
    const features = row.features ? row.features.split(';').map((f: string) => f.trim()).filter(Boolean) : [];

    return {
        id: row.id || '',
        brand: row.brand || '',
        model: row.model || '',
        year: parseInt(row.year) || 0,
        price: parseInt(row.price) || 0,
        mileage: parseInt(row.mileage) || 0,
        transmission: row.transmission as 'Manual' | 'Automatic',
        fuel: row.fuel as 'Bensin' | 'Diesel',
        color: row.color || '',
        description: row.description || '',
        features,
        status: row.status === 'sold' ? 'sold' : 'available',
        image1: row.image1 || '',
        image2: row.image2 || '',
        image3: row.image3 || '',
        image4: row.image4 || '',
        image5: row.image5 || '',
        video_url: row.video_url || '',
        featured: row.featured === 'TRUE' || row.featured === 'true' || row.featured === '1',
        sold_date: row.sold_date || '',
        date_added: row.date_added || new Date().toISOString().split('T')[0],
        badge: row.badge || '', // Badge dinamis dari spreadsheet
        bpkb: row.bpkb || '', // Tanggal BPKB (opsional)
    };
}

/**
 * Fetch all cars from Google Sheets CSV
 */
export async function fetchCars(): Promise<Car[]> {
    const csvUrl = import.meta.env.PUBLIC_CARS_CSV_URL;

    if (!csvUrl) {
        console.warn('PUBLIC_CARS_CSV_URL not set, returning empty array');
        return [];
    }

    try {
        const rows = await fetchCSV(csvUrl);
        return rows.map(parseCarData);
    } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
    }
}

/**
 * Fetch settings from Google Sheets CSV
 */
export async function fetchSettings(): Promise<Settings> {
    const csvUrl = import.meta.env.PUBLIC_SETTINGS_CSV_URL;

    const defaultSettings: Settings = {
        whatsapp_number: '628158141112',
        business_name: 'Merdeka Mobil',
        business_tagline: 'Jual Beli Mobil Bekas Terpercaya',
        business_address: 'Purwokerto',
        business_city: 'Purwokerto',
    };

    if (!csvUrl) {
        console.warn('PUBLIC_SETTINGS_CSV_URL not set, using defaults');
        return defaultSettings;
    }

    try {
        const rows = await fetchCSV<{ key: string; value: string }>(csvUrl);
        const settings: any = { ...defaultSettings };

        rows.forEach(row => {
            if (row.key && row.value) {
                settings[row.key] = row.value;
            }
        });

        return settings as Settings;
    } catch (error) {
        console.error('Error fetching settings:', error);
        return defaultSettings;
    }
}

/**
 * Get a single car by ID
 */
export async function getCarById(id: string): Promise<Car | null> {
    const cars = await fetchCars();
    return cars.find(car => car.id === id) || null;
}

/**
 * Get available cars
 */
export async function getAvailableCars(): Promise<Car[]> {
    const cars = await fetchCars();
    return cars.filter(car => car.status === 'available');
}

/**
 * Get sold cars
 */
export async function getSoldCars(): Promise<Car[]> {
    const cars = await fetchCars();
    return cars.filter(car => car.status === 'sold');
}

/**
 * Get featured cars for homepage
 */
export async function getFeaturedCars(): Promise<Car[]> {
    const cars = await fetchCars();
    return cars.filter(car => car.featured && car.status === 'available');
}

/**
 * Fetch testimonials from Google Sheets CSV
 */
export async function fetchTestimonials(): Promise<import('./types').Testimonial[]> {
    const csvUrl = import.meta.env.PUBLIC_TESTIMONIALS_CSV_URL;

    if (!csvUrl) {
        console.warn('PUBLIC_TESTIMONIALS_CSV_URL not set, returning empty array');
        return [];
    }

    try {
        const rows = await fetchCSV<any>(csvUrl);
        return rows.map(row => ({
            id: row.id || '',
            type: (row.type as 'screenshot' | 'photo' | 'video') || 'photo',
            media: row.media || '',
            name: row.name || '',
            car: row.car || '',
            quote: row.quote || '',
            rating: parseInt(row.rating) || 5,
        }));
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
}
