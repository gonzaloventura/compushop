const products = [
    {
      id: 0,
      title: 'i3 12100',
      description: 'Procesador mid-level de Intel',
      price: '$129.99',
      old_price: '',
      image: '/assets/i3.webp',
      gallery: ['/assets/i312100/00.png'],
      stock: 14,
      free_shipping: false,
      brand: 'Intel',
      category: 'Procesadores'
    },
    {
      id: 1,
      title: 'i5 12400F',
      description: 'Procesador mid-level de Intel',
      price: '$174.99',
      old_price: '$199.99',
      image: '/assets/i5.webp',
      gallery: ['/assets/i512400/00.png'],
      stock: 6,
      free_shipping: true,
      brand: 'Intel',
      category: 'Procesadores'
    },
    {
      id: 2,
      title: 'i7 12700',
      description: 'Procesador high-level de Intel',
      price: '$329.99',
      old_price: '$349.99',
      image: '/assets/i7.webp',
      gallery: ['/assets/i712700/00.jpeg'],
      stock: 4,
      free_shipping: true,
      brand: 'Intel',
      category: 'Procesadores'
    },
    {
      id: 3,
      title: 'Ryzen 9 5900x',
      description: 'Procesador high-level de AMD',
      price: '$349.99',
      old_price: '',
      image: '/assets/ryzen95900x.webp',
      gallery: ['/assets/palit3060ti/01.webp', '/assets/palit3060ti/02.webp'],
      stock: 8,
      free_shipping: false,
      brand: 'AMD',
      category: 'Procesadores',
    },
    {
      id: 4,
      title: 'Ryzen 5 5600x',
      description: 'Procesador mid-level de AMD',
      price: '$249.99',
      old_price: '$299.99',
      image: '/assets/ryzen55600x.webp',
      gallery: ['/assets/ryzen55600x/00.jpeg'],
      stock: 17,
      free_shipping: false,
      brand: 'AMD',
      category: 'Procesadores'
    },
    {
      id: 5,
      title: 'PALIT NVIDIA GEFORCE RTX 3060TI LHR',
      description: 'PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 3060 TI DUAL 8GB GDDR6 256BIT LHR',
      price: '$549.99',
      old_price: '',
      image: '/assets/palit3060ti/00.webp',
      gallery: ['/assets/palit3060ti/01.webp', '/assets/palit3060ti/02.webp'],
      stock: 8,
      free_shipping: true,
      brand: 'NVIDIA',
      category: 'Placas de Video'
    }
  ];

  export default products