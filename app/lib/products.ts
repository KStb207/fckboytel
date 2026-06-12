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

export function getAllProducts(): Product[] {
  try {
    const csvPath = path.join(process.cwd(), 'public/data/products.csv');
    let fileContent = fs.readFileSync(csvPath, 'utf-8');

    // Entferne BOM wenn vorhanden
    if (fileContent.charCodeAt(0) === 0xfeff) {
      fileContent = fileContent.slice(1);
    }

    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ';',
      trim: true,
    });

    const products: Product[] = records
      .map((record: any, idx: number) => {
        try {
          const features = [
            record.feature1,
            record.feature2,
            record.feature3,
            record.feature4,
            record.feature5,
          ]
            .filter((f: string) => f && f.trim() && f.trim() !== 'feature1')
            .map((f: string) => f.trim());

          const priceStr = record.price ? record.price.toString().replace(',', '.') : '0';
          const price = parseFloat(priceStr);

          // Konstruiere Bildpfad
          let imagePath = '/images/products/default.jpg';
          if (record.image && record.image.trim()) {
            imagePath = `/images/products/${record.image.trim()}`;
          }

          return {
            id: record.id ? record.id.trim() : `product-${idx}`,
            name: record.name ? record.name.trim() : 'Unnamed Product',
            description: record.description ? record.description.trim() : record.name || 'Product',
            price: isNaN(price) ? 0 : price,
            image: imagePath,
            variant: (idx % 2 === 0 ? 'filled' : 'empty') as 'filled' | 'empty',
            features: features.length > 0 ? features : ['Hochwertiges Produkt'],
          };
        } catch (e) {
          console.error('Error parsing record:', record, e);
          return null;
        }
      })
      .filter((p: Product | null): p is Product => p !== null);

    return products;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}

export function getProduct(id: string): Product | undefined {
  const products = getAllProducts();
  return products.find(p => p.id === id);
}