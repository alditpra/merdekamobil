/**
 * Format price to Indonesian Rupiah
 * Full: Rp 165.000.000
 * Short: Rp 165 Jt
 */
export function formatPrice(price: number, short: boolean = false): string {
    if (short) {
        if (price >= 1000000000) {
            return `Rp ${(price / 1000000000).toFixed(1)} M`;
        } else if (price >= 1000000) {
            return `Rp ${Math.round(price / 1000000)} Jt`;
        } else {
            return `Rp ${Math.round(price / 1000)} Rb`;
        }
    }

    return `Rp ${price.toLocaleString('id-ID')}`;
}

/**
 * Format mileage with separator
 * 45000 → 45.000 km
 */
export function formatMileage(mileage: number): string {
    return `${mileage.toLocaleString('id-ID')} km`;
}

/**
 * Format date to Indonesian format
 * 2024-12-24 → 24 Desember 2024
 */
export function formatDate(dateString: string): string {
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

/**
 * Format WhatsApp number
 * 08158141112 → 628158141112
 */
export function formatWhatsAppNumber(number: string): string {
    // Remove all non-numeric characters
    let cleaned = number.replace(/\D/g, '');

    // If starts with 0, replace with 62
    if (cleaned.startsWith('0')) {
        cleaned = '62' + cleaned.slice(1);
    }

    // If doesn't start with 62, prepend it
    if (!cleaned.startsWith('62')) {
        cleaned = '62' + cleaned;
    }

    return cleaned;
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function generateWhatsAppURL(
    number: string,
    car?: { brand: string; model: string; year: number; id: string }
): string {
    const formattedNumber = formatWhatsAppNumber(number);

    let message = 'Halo Merdeka Mobil, ';

    if (car) {
        message += `saya tertarik dengan mobil ${car.brand} ${car.model} ${car.year} (ID: ${car.id}). Apakah masih tersedia?`;
    } else {
        message += 'saya ingin bertanya tentang mobil yang tersedia.';
    }

    return `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
}
