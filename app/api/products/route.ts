import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  variant: 'filled' | 'empty';
  features: string[];
}

export async function GET() {
  try {
    const csvPath = path.join(process.cwd(), 'public/data/products.csv');
    let fileContent = fs.readFileSync(csvPath, 'utf-8');

    // Entferne BOM wenn vorhanden
    if (fileContent.charCodeAt(0) === 0xfeff) {
      fileContent = fileContent.slice(1);
    }

    console.log('CSV Content:', fileContent.substring(0, 200));

    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ';',
      trim: true,
    });

    console.log('Parsed records:', records);

    const products: Product[] = records
      .map((record: any, idx: number) => {
        try {
          // Sammle alle Features
          const features = [
            record.feature1,
            record.feature2,
            record.feature3,
            record.feature4,
            record.feature5,
          ]
            .filter((f: string) => f && f.trim() && f.trim() !== 'feature1')
            .map((f: string) => f.trim());

          // Konvertiere Komma zu Punkt für Preis
          const priceStr = record.price ? record.price.toString().replace(',', '.') : '0';
          const price = parseFloat(priceStr);

          return {
            id: record.id ? record.id.trim() : `product-${idx}`,
            name: record.name ? record.name.trim() : 'Unnamed Product',
            description: record.description ? record.description.trim() : record.name || 'Product',
            price: isNaN(price) ? 0 : price,
            image: record.image ? record.image.trim() : '/images/products/default.jpg',
            variant: (idx % 2 === 0 ? 'filled' : 'empty') as 'filled' | 'empty',
            features: features.length > 0 ? features : ['Hochwertiges Produkt'],
          };
        } catch (e) {
          console.error('Error parsing record:', record, e);
          return null;
        }
      })
      .filter((p: Product | null): p is Product => p !== null);

    console.log('Final products:', products);
    return Response.json(products);
  } catch (error) {
    console.error('Error loading products:', error);
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}