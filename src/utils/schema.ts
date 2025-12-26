import { SITE_INFO } from './constants';

/**
 * Schema.org LocalBusiness Data untuk SEO
 * Edit data di bawah sesuai dengan informasi bisnis Anda
 * 
 * Dokumentasi: https://schema.org/AutoDealer
 * Testing: https://search.google.com/test/rich-results
 */

export const BUSINESS_INFO = {
    // Informasi Kontak
    telephone: '+62-815-8141-112',
    email: 'merdekamobil@gmail.com',

    // Alamat (sesuaikan dengan alamat lengkap)
    address: {
        streetAddress: 'Purwokerto',      // Contoh: 'Jl. Jenderal Soedirman No. 123'
        addressLocality: 'Purwokerto',
        addressRegion: 'Jawa Tengah',
        postalCode: '53116',
        addressCountry: 'ID',
    },

    // Koordinat GPS (cek di Google Maps)
    coordinates: {
        latitude: '-7.4213',
        longitude: '109.2342',
    },

    // Jam Operasional
    openingHours: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
    },

    // Social Media
    socialMedia: [
        'https://instagram.com/merdekamobil',
        'https://youtube.com/@merdekamobil',
    ],

    // Range Harga Mobil
    priceRange: 'Rp 50.000.000 - Rp 500.000.000',

    // Radius Area Layanan (dalam meter)
    serviceRadius: '50000', // 50km
};

/**
 * Generate Schema.org JSON-LD untuk AutoDealer
 */
export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'AutoDealer',
        'name': SITE_INFO.shortName,
        'description': SITE_INFO.description,
        'url': SITE_INFO.url,
        'telephone': BUSINESS_INFO.telephone,
        'email': BUSINESS_INFO.email,
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': BUSINESS_INFO.address.streetAddress,
            'addressLocality': BUSINESS_INFO.address.addressLocality,
            'addressRegion': BUSINESS_INFO.address.addressRegion,
            'postalCode': BUSINESS_INFO.address.postalCode,
            'addressCountry': BUSINESS_INFO.address.addressCountry,
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': BUSINESS_INFO.coordinates.latitude,
            'longitude': BUSINESS_INFO.coordinates.longitude,
        },
        'openingHoursSpecification': [
            {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': BUSINESS_INFO.openingHours.days,
                'opens': BUSINESS_INFO.openingHours.opens,
                'closes': BUSINESS_INFO.openingHours.closes,
            },
        ],
        'sameAs': BUSINESS_INFO.socialMedia,
        'priceRange': BUSINESS_INFO.priceRange,
        'image': `${SITE_INFO.url}/og-image.png`,
        'areaServed': {
            '@type': 'GeoCircle',
            'geoMidpoint': {
                '@type': 'GeoCoordinates',
                'latitude': BUSINESS_INFO.coordinates.latitude,
                'longitude': BUSINESS_INFO.coordinates.longitude,
            },
            'geoRadius': BUSINESS_INFO.serviceRadius,
        },
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Mobil Bekas Berkualitas',
            'itemListElement': [
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Car',
                        'name': 'Mobil Bekas Toyota, Honda, Daihatsu & Lainnya',
                    },
                },
            ],
        },
    };
}
