const products = [];

for (let i = 0; i < 40; i++) {
  products.push({
    id: i,
    name: "Test",
    category: "Sport",
    price: Math.floor(Math.random() * 100 + 1),
    rating: Math.floor(Math.random() * 5),
    image:
      "https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_SL1352_.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, pariatur!",
  });
}

export { products };
