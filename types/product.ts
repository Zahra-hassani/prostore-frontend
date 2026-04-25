interface product {
  id: number;
  name: string;
  stock: number;
  price: number;
}

interface productDetails {
  description: string;
  brand: string;
  category: string;
}

type images = [
  {
    id: number;
    img_url: string;
    imageable_type: string;
    imageable_id: number;
  },
];

export interface productInfo extends product, productDetails, images {
  images: images;
}
