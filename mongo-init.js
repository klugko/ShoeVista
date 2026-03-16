db = db.getSiblingDB('shoevista');

db.products.insertMany([
  {
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    brand: 'Nike',
    title: 'Nike Air Max 270',
    rating: 4.5,
    reviews: 234,
    sellPrice: 2499,
    orders: '500+',
    mrp: '3999',
    discount: 38,
    category: 'men'
  },
  {
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400',
    brand: 'Adidas',
    title: 'Adidas Ultraboost 22',
    rating: 4.7,
    reviews: 189,
    sellPrice: 2999,
    orders: '300+',
    mrp: '4500',
    discount: 33,
    category: 'men'
  },
  {
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
    brand: 'Puma',
    title: 'Puma RS-X3',
    rating: 4.3,
    reviews: 156,
    sellPrice: 1999,
    orders: '250+',
    mrp: '2999',
    discount: 33,
    category: 'men'
  },
  {
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400',
    brand: 'Skechers',
    title: 'Skechers Go Walk 6',
    rating: 4.6,
    reviews: 312,
    sellPrice: 1799,
    orders: '800+',
    mrp: '2499',
    discount: 28,
    category: 'women'
  },
  {
    img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400',
    brand: 'Nike',
    title: 'Nike Revolution 6',
    rating: 4.4,
    reviews: 278,
    sellPrice: 1599,
    orders: '600+',
    mrp: '2199',
    discount: 27,
    category: 'women'
  },
  {
    img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400',
    brand: 'Adidas',
    title: 'Adidas Lite Racer',
    rating: 4.2,
    reviews: 145,
    sellPrice: 1299,
    orders: '400+',
    mrp: '1999',
    discount: 35,
    category: 'women'
  },
  {
    img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400',
    brand: 'Puma',
    title: 'Puma Carina L',
    rating: 4.1,
    reviews: 98,
    sellPrice: 1499,
    orders: '200+',
    mrp: '2299',
    discount: 35,
    category: 'child'
  },
  {
    img: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400',
    brand: 'Skechers',
    title: 'Skechers Kids Sport',
    rating: 4.8,
    reviews: 267,
    sellPrice: 999,
    orders: '450+',
    mrp: '1499',
    discount: 33,
    category: 'child'
  },
  {
    img: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400',
    brand: 'Nike',
    title: 'Nike Star Runner 3',
    rating: 4.9,
    reviews: 423,
    sellPrice: 1199,
    orders: '900+',
    mrp: '1799',
    discount: 33,
    category: 'child'
  },
  {
    img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400',
    brand: 'Adidas',
    title: 'Adidas Superstar',
    rating: 4.6,
    reviews: 567,
    sellPrice: 2199,
    orders: '1000+',
    mrp: '2999',
    discount: 27,
    category: 'men'
  },
  {
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
    brand: 'Nike',
    title: 'Nike Air Force 1',
    rating: 4.8,
    reviews: 892,
    sellPrice: 2799,
    orders: '1500+',
    mrp: '3499',
    discount: 20,
    category: 'men'
  },
  {
    img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400',
    brand: 'Puma',
    title: 'Puma Suede Classic',
    rating: 4.4,
    reviews: 234,
    sellPrice: 1899,
    orders: '350+',
    mrp: '2599',
    discount: 27,
    category: 'women'
  }
]);
