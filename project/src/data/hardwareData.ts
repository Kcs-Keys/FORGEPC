import { Component } from '../types/hardware';

const hardwareData: Component[] = [
  // CPUs
  {
    id: 'cpu-intel-i5-12600k',
    name: 'Intel Core i5-12600K',
    type: 'cpu',
    brand: 'Intel',
    price: 289.99,
    image: 'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg',
    description: 'Affordable gaming and productivity processor with 10 cores (6P+4E) and 16 threads',
    specs: {
      cores: 10,
      threads: 16,
      baseClock: 3.7,
      boostClock: 4.9,
      tdp: 125,
      socketType: 'LGA1700',
      architecture: 'Alder Lake',
    },
    compatibility: {
      socketType: 'LGA1700',
      tdp: 125,
    },
    explanation: {
      what: 'A processor (CPU) is the primary component that executes instructions and processes data in your computer.',
      purpose: 'The CPU handles all the calculations and operations that make your programs run. It affects overall system performance for every task you do.',
      howToChoose: 'Consider the number of cores (more is better for multitasking), clock speed (higher is better for single-threaded performance), and ensure it\'s compatible with your motherboard socket type.'
    },
    performanceRating: {
      gaming: 8,
      productivity: 7,
      content: 6,
    }
  },
  {
    id: 'cpu-amd-ryzen-5-5600x',
    name: 'AMD Ryzen 5 5600X',
    type: 'cpu',
    brand: 'AMD',
    price: 199.99,
    image: 'https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg',
    description: 'Excellent mid-range gaming processor with 6 cores and 12 threads',
    specs: {
      cores: 6,
      threads: 12,
      baseClock: 3.7,
      boostClock: 4.6,
      tdp: 65,
      socketType: 'AM4',
      architecture: 'Zen 3',
    },
    compatibility: {
      socketType: 'AM4',
      tdp: 65,
    },
    explanation: {
      what: 'A processor (CPU) is the primary component that executes instructions and processes data in your computer.',
      purpose: 'The CPU handles all the calculations and operations that make your programs run. It affects overall system performance for every task you do.',
      howToChoose: 'Consider the number of cores (more is better for multitasking), clock speed (higher is better for single-threaded performance), and ensure it\'s compatible with your motherboard socket type.'
    },
    performanceRating: {
      gaming: 7,
      productivity: 6.5,
      content: 6,
    }
  },
  
  // Motherboards
  {
    id: 'mb-asus-rog-z690',
    name: 'ASUS ROG Strix Z690-A Gaming WiFi',
    type: 'motherboard',
    brand: 'ASUS',
    price: 329.99,
    image: 'https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg',
    description: 'High-end Z690 motherboard for Intel 12th gen processors with WiFi 6E',
    specs: {
      socketType: 'LGA1700',
      chipset: 'Z690',
      formFactor: 'ATX',
      memorySlots: 4,
      memoryType: 'DDR5',
      maxMemory: 128,
      pciSlots: 3,
      m2Slots: 4,
      wifi: true,
      bluetooth: true,
    },
    compatibility: {
      socketType: 'LGA1700',
      formFactor: 'ATX',
      memoryType: 'DDR5',
      compatible: [
        {
          with: 'cpu',
          conditions: {
            socketType: 'LGA1700'
          }
        }
      ]
    },
    explanation: {
      what: 'The motherboard is the main circuit board that connects all components in your computer together.',
      purpose: 'It serves as the backbone of your PC, connecting your CPU, RAM, storage, and peripherals, allowing them to communicate with each other.',
      howToChoose: 'Make sure it has the correct socket for your CPU, enough expansion slots for your needs, and features like WiFi or USB ports that you require.'
    },
    performanceRating: {
      gaming: 9,
      productivity: 9,
      content: 9,
    }
  },
  {
    id: 'mb-msi-b550-tomahawk',
    name: 'MSI MAG B550 Tomahawk',
    type: 'motherboard',
    brand: 'MSI',
    price: 179.99,
    image: 'https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg',
    description: 'Mid-range B550 motherboard for AMD Ryzen 5000 series processors',
    specs: {
      socketType: 'AM4',
      chipset: 'B550',
      formFactor: 'ATX',
      memorySlots: 4,
      memoryType: 'DDR4',
      maxMemory: 128,
      pciSlots: 2,
      m2Slots: 2,
      wifi: false,
      bluetooth: false,
    },
    compatibility: {
      socketType: 'AM4',
      formFactor: 'ATX',
      memoryType: 'DDR4',
      compatible: [
        {
          with: 'cpu',
          conditions: {
            socketType: 'AM4'
          }
        }
      ]
    },
    explanation: {
      what: 'The motherboard is the main circuit board that connects all components in your computer together.',
      purpose: 'It serves as the backbone of your PC, connecting your CPU, RAM, storage, and peripherals, allowing them to communicate with each other.',
      howToChoose: 'Make sure it has the correct socket for your CPU, enough expansion slots for your needs, and features like WiFi or USB ports that you require.'
    },
    performanceRating: {
      gaming: 7,
      productivity: 7,
      content: 7,
    }
  },
  
  // RAM
  {
    id: 'ram-corsair-vengeance-ddr5',
    name: 'Corsair Vengeance DDR5 32GB (2x16GB) 5200MHz',
    type: 'ram',
    brand: 'Corsair',
    price: 179.99,
    image: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg',
    description: 'High-performance DDR5 memory for gaming and productivity',
    specs: {
      capacity: 32,
      speed: 5200,
      type: 'DDR5',
      modules: 2,
      casLatency: 38,
      rgb: true,
    },
    compatibility: {
      memoryType: 'DDR5',
      compatible: [
        {
          with: 'motherboard',
          conditions: {
            memoryType: 'DDR5'
          }
        }
      ]
    },
    explanation: {
      what: 'RAM (Random Access Memory) is your computer\'s short-term memory for running programs and tasks.',
      purpose: 'It stores data that your CPU needs to access quickly, affecting how many programs you can run simultaneously and how smoothly they operate.',
      howToChoose: 'Consider capacity (16GB minimum for modern use), speed (higher MHz is better), and ensure it matches your motherboard\'s type (DDR4/DDR5).'
    },
    performanceRating: {
      gaming: 9,
      productivity: 9,
      content: 9.5,
    }
  },
  {
    id: 'ram-gskill-ripjaws-ddr4',
    name: 'G.Skill Ripjaws V 16GB (2x8GB) 3600MHz DDR4',
    type: 'ram',
    brand: 'G.Skill',
    price: 72.99,
    image: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg',
    description: 'Reliable DDR4 memory with good performance at an affordable price',
    specs: {
      capacity: 16,
      speed: 3600,
      type: 'DDR4',
      modules: 2,
      casLatency: 16,
      rgb: false,
    },
    compatibility: {
      memoryType: 'DDR4',
      compatible: [
        {
          with: 'motherboard',
          conditions: {
            memoryType: 'DDR4'
          }
        }
      ]
    },
    explanation: {
      what: 'RAM (Random Access Memory) is your computer\'s short-term memory for running programs and tasks.',
      purpose: 'It stores data that your CPU needs to access quickly, affecting how many programs you can run simultaneously and how smoothly they operate.',
      howToChoose: 'Consider capacity (16GB minimum for modern use), speed (higher MHz is better), and ensure it matches your motherboard\'s type (DDR4/DDR5).'
    },
    performanceRating: {
      gaming: 7,
      productivity: 7,
      content: 6.5,
    }
  },
  
  // Graphics Cards
  {
    id: 'gpu-nvidia-rtx3070',
    name: 'NVIDIA GeForce RTX 3070 8GB',
    type: 'gpu',
    brand: 'NVIDIA',
    price: 599.99,
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg',
    description: 'Excellent 1440p and entry-level 4K gaming performance with ray tracing',
    specs: {
      vram: 8,
      coreClock: 1725,
      boostClock: 1905,
      tdp: 220,
      length: 284,
      ports: 'HDMI 2.1, 3x DisplayPort 1.4a',
      rayTracing: true,
      dlss: true,
    },
    compatibility: {
      tdp: 220,
    },
    explanation: {
      what: 'A graphics card (GPU) processes and renders images, videos, and animations to your display.',
      purpose: 'The GPU accelerates graphical tasks, essential for gaming, video editing, 3D rendering, and displays with high resolutions or refresh rates.',
      howToChoose: 'Consider the performance tier needed for your applications (gaming, professional work), VRAM capacity (8GB minimum for modern gaming), and ensure it fits in your case.'
    },
    performanceRating: {
      gaming: 8.5,
      productivity: 7,
      content: 8,
    }
  },
  {
    id: 'gpu-amd-rx6700xt',
    name: 'AMD Radeon RX 6700 XT 12GB',
    type: 'gpu',
    brand: 'AMD',
    price: 479.99,
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg',
    description: 'Great 1440p gaming performance with large VRAM buffer',
    specs: {
      vram: 12,
      coreClock: 2424,
      boostClock: 2581,
      tdp: 230,
      length: 267,
      ports: 'HDMI 2.1, 2x DisplayPort 1.4',
      rayTracing: true,
      fsr: true,
    },
    compatibility: {
      tdp: 230,
    },
    explanation: {
      what: 'A graphics card (GPU) processes and renders images, videos, and animations to your display.',
      purpose: 'The GPU accelerates graphical tasks, essential for gaming, video editing, 3D rendering, and displays with high resolutions or refresh rates.',
      howToChoose: 'Consider the performance tier needed for your applications (gaming, professional work), VRAM capacity (8GB minimum for modern gaming), and ensure it fits in your case.'
    },
    performanceRating: {
      gaming: 8,
      productivity: 6.5,
      content: 7.5,
    }
  },
  
  // Power Supplies
  {
    id: 'psu-corsair-rm850x',
    name: 'Corsair RM850x 850W 80+ Gold',
    type: 'psu',
    brand: 'Corsair',
    price: 139.99,
    image: 'https://images.pexels.com/photos/5490365/pexels-photo-5490365.jpeg',
    description: 'High-quality fully modular power supply with quiet operation',
    specs: {
      wattage: 850,
      efficiency: '80+ Gold',
      modular: 'Full',
      formFactor: 'ATX',
      fanSize: 135,
      warranty: 10,
    },
    compatibility: {
      wattage: 850,
    },
    explanation: {
      what: 'The power supply unit (PSU) converts AC power from your wall outlet into DC power that your computer components can use.',
      purpose: 'It provides stable and reliable power to all components in your system, ensuring they run safely and consistently.',
      howToChoose: 'Calculate your total system power needs, then add 30% headroom. Look for 80+ certification (Bronze, Gold, Platinum) for efficiency. Modular cables make installation cleaner.'
    },
    performanceRating: {
      gaming: 9,
      productivity: 9,
      content: 9,
    }
  },
  {
    id: 'psu-evga-650-bq',
    name: 'EVGA 650 BQ 650W 80+ Bronze',
    type: 'psu',
    brand: 'EVGA',
    price: 69.99,
    image: 'https://images.pexels.com/photos/5490365/pexels-photo-5490365.jpeg',
    description: 'Affordable semi-modular power supply for mid-range builds',
    specs: {
      wattage: 650,
      efficiency: '80+ Bronze',
      modular: 'Semi',
      formFactor: 'ATX',
      fanSize: 120,
      warranty: 5,
    },
    compatibility: {
      wattage: 650,
    },
    explanation: {
      what: 'The power supply unit (PSU) converts AC power from your wall outlet into DC power that your computer components can use.',
      purpose: 'It provides stable and reliable power to all components in your system, ensuring they run safely and consistently.',
      howToChoose: 'Calculate your total system power needs, then add 30% headroom. Look for 80+ certification (Bronze, Gold, Platinum) for efficiency. Modular cables make installation cleaner.'
    },
    performanceRating: {
      gaming: 7,
      productivity: 7,
      content: 7,
    }
  },
  
  // Storage
  {
    id: 'storage-samsung-970-evo',
    name: 'Samsung 970 EVO Plus 1TB NVMe SSD',
    type: 'storage',
    brand: 'Samsung',
    price: 119.99,
    image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg',
    description: 'Fast NVMe SSD for system boot and primary applications',
    specs: {
      capacity: 1000,
      type: 'NVMe SSD',
      interface: 'PCIe 3.0 x4',
      formFactor: 'M.2 2280',
      readSpeed: 3500,
      writeSpeed: 3300,
      tbw: 600,
      warranty: 5,
    },
    compatibility: {},
    explanation: {
      what: 'Storage devices hold all your data, from your operating system and applications to your personal files and documents.',
      purpose: 'They provide permanent data storage even when your computer is powered off, with varying speeds affecting how quickly programs load and files open.',
      howToChoose: 'For best performance, use an SSD (preferably NVMe) for your operating system and programs. Consider capacity needs based on your data (games, videos, etc.).'
    },
    performanceRating: {
      gaming: 8.5,
      productivity: 9,
      content: 9,
    }
  },
  {
    id: 'storage-wd-blue-hdd',
    name: 'Western Digital Blue 2TB 7200RPM HDD',
    type: 'storage',
    brand: 'Western Digital',
    price: 49.99,
    image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg',
    description: 'Reliable hard drive for mass storage of files and media',
    specs: {
      capacity: 2000,
      type: 'HDD',
      interface: 'SATA III',
      formFactor: '3.5 inch',
      rpm: 7200,
      cache: 64,
      warranty: 2,
    },
    compatibility: {},
    explanation: {
      what: 'Storage devices hold all your data, from your operating system and applications to your personal files and documents.',
      purpose: 'They provide permanent data storage even when your computer is powered off, with varying speeds affecting how quickly programs load and files open.',
      howToChoose: 'For best performance, use an SSD (preferably NVMe) for your operating system and programs. Consider capacity needs based on your data (games, videos, etc.).'
    },
    performanceRating: {
      gaming: 5,
      productivity: 5,
      content: 6,
    }
  },
  
  // Cases
  {
    id: 'case-fractal-meshify-2',
    name: 'Fractal Design Meshify 2 Compact',
    type: 'case',
    brand: 'Fractal Design',
    price: 139.99,
    image: 'https://images.pexels.com/photos/3800516/pexels-photo-3800516.jpeg',
    description: 'Compact mid-tower case with excellent airflow and cable management',
    specs: {
      formFactor: 'Mid Tower',
      motherboardSupport: 'ATX, Micro-ATX, Mini-ITX',
      dimensions: '424 x 210 x 475 mm',
      gpuClearance: 360,
      cpuCoolerHeight: 169,
      fanMounts: 7,
      includedFans: 3,
      usbPorts: '2x USB 3.0, 1x USB-C',
    },
    compatibility: {
      formFactor: 'ATX',
      maxGpuLength: 360,
    },
    explanation: {
      what: 'The case is the housing that contains and protects all your computer components, providing structure and airflow.',
      purpose: 'It protects your components, allows for proper cooling, and contributes to the overall aesthetics of your build.',
      howToChoose: 'Ensure it fits your motherboard size and has clearance for your components (CPU cooler height, GPU length). Consider cooling options, cable management, and accessibility.'
    },
    performanceRating: {
      gaming: 8.5,
      productivity: 8,
      content: 8,
    }
  },
  {
    id: 'case-nzxt-h510',
    name: 'NZXT H510',
    type: 'case',
    brand: 'NZXT',
    price: 69.99,
    image: 'https://images.pexels.com/photos/3800516/pexels-photo-3800516.jpeg',
    description: 'Sleek and minimal mid-tower case with good cable management',
    specs: {
      formFactor: 'Mid Tower',
      motherboardSupport: 'ATX, Micro-ATX, Mini-ITX',
      dimensions: '428 x 210 x 460 mm',
      gpuClearance: 381,
      cpuCoolerHeight: 165,
      fanMounts: 4,
      includedFans: 2,
      usbPorts: '1x USB 3.1 Gen 2 Type-C, 1x USB 3.1 Gen 1 Type-A',
    },
    compatibility: {
      formFactor: 'ATX',
      maxGpuLength: 381,
    },
    explanation: {
      what: 'The case is the housing that contains and protects all your computer components, providing structure and airflow.',
      purpose: 'It protects your components, allows for proper cooling, and contributes to the overall aesthetics of your build.',
      howToChoose: 'Ensure it fits your motherboard size and has clearance for your components (CPU cooler height, GPU length). Consider cooling options, cable management, and accessibility.'
    },
    performanceRating: {
      gaming: 7,
      productivity: 7,
      content: 7,
    }
  },
  
  // Cooling
  {
    id: 'cooling-noctua-nh-d15',
    name: 'Noctua NH-D15 CPU Cooler',
    type: 'cooling',
    brand: 'Noctua',
    price: 99.95,
    image: 'https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg',
    description: 'Premium dual-tower air cooler with excellent cooling performance and low noise',
    specs: {
      type: 'Air Cooler',
      dimensions: '165 x 150 x 161 mm',
      fanSize: '2x 140mm',
      rpm: '300-1500',
      noise: '24.6 dBA',
      tdp: 220,
    },
    compatibility: {
      tdp: 220,
    },
    explanation: {
      what: 'CPU coolers remove heat from your processor to prevent thermal throttling and ensure stable performance.',
      purpose: 'They keep your CPU running at safe temperatures, allowing for sustained performance under load and potentially extending component lifespan.',
      howToChoose: 'Consider the TDP rating (should exceed your CPU\'s TDP), size constraints in your case, noise levels, and whether you plan to overclock.'
    },
    performanceRating: {
      gaming: 9,
      productivity: 9,
      content: 9,
    }
  },
  {
    id: 'cooling-cooler-master-212',
    name: 'Cooler Master Hyper 212 RGB',
    type: 'cooling',
    brand: 'Cooler Master',
    price: 44.99,
    image: 'https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg',
    description: 'Popular budget air cooler with decent cooling performance',
    specs: {
      type: 'Air Cooler',
      dimensions: '120 x 79.6 x 158.8 mm',
      fanSize: '1x 120mm',
      rpm: '650-2000',
      noise: '8-30 dBA',
      tdp: 150,
    },
    compatibility: {
      tdp: 150,
    },
    explanation: {
      what: 'CPU coolers remove heat from your processor to prevent thermal throttling and ensure stable performance.',
      purpose: 'They keep your CPU running at safe temperatures, allowing for sustained performance under load and potentially extending component lifespan.',
      howToChoose: 'Consider the TDP rating (should exceed your CPU\'s TDP), size constraints in your case, noise levels, and whether you plan to overclock.'
    },
    performanceRating: {
      gaming: 7,
      productivity: 7,
      content: 7,
    }
  }
];

export default hardwareData;