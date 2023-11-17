INSERT INTO cpu (name_cpu,core_count,base_clock,boost_clock,socket,price,link) VALUES (
  'Intel Core i5-14600K 3.5 GHz 14-Core Processor',
  14,
  '3.5 GHz',
  '5.3 GHz',
  'LGA1700',
  329.00,
  'https://www.amazon.com/dp/B0CGJ9STNF?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
  );

INSERT INTO cpu (name_cpu,core_count,base_clock,boost_clock,socket,price,link) VALUES (
  'Intel Core i7-14700K 3.4 GHz 20-Core Processor',
  20,
  '3.4 GHz',
  '5.6 GHz',
  'LGA1700',
  403.99,
  'https://www.amazon.com/dp/B0CGJ41C9W?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
  );

INSERT INTO cpu (name_cpu,core_count,base_clock,boost_clock,socket,price,link) VALUES (
  'Intel Core i9-14900K 3.2 GHz 24-Core Processor',
  24,
  '3.2 GHz',
  '6 GHz',
  'LGA1700',
  578.79,
  'https://www.amazon.com/dp/B0CGJDKLB8?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
  );

INSERT INTO cpu (name_cpu,core_count,base_clock,boost_clock,socket,price,link) VALUES (
  'AMD Ryzen 5 7600X 4.7 GHz 6-Core Processor',
  6,
  '4.7 GHz',
  '5.3 GHz',
  'AM5',
  245.00,
  'https://www.amazon.com/dp/B0BBJDS62N?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
  );

INSERT INTO cpu (name_cpu,core_count,base_clock,boost_clock,socket,price,link) VALUES (
  'AMD Ryzen 7 7700X 4.5 GHz 8-Core Processor',
  8,
  '4.5 GHz',
  '5.4 GHz',
  'AM5',
  326.39,
  'https://www.amazon.com/dp/B0BBHHT8LY?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
  );

INSERT INTO cpu (name_cpu,core_count,base_clock,boost_clock,socket,price,link) VALUES (
  'AMD Ryzen 9 7950XD 4.2 GHz 16-Core Processor',
  16,
  '4.2 GHz',
  '5.7 GHz',
  'AM5',
  639.99,
  'https://www.amazon.com/dp/B0BTRH9MNS?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
  );



INSERT INTO cpu_coolers (name_cooler,rpm,noise_level,height,price,link) VALUES (
  'ID-COOLING SE-214-XT 68.2 CFM CPU Cooler',
  '500-1500 RPM',
  '13.8-30.5 dB',
  '150 mm',
  18.98,
  'https://www.amazon.com/dp/B09FDWPCWZ?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO cpu_coolers (name_cooler,rpm,noise_level,height,price,link) VALUES (
  'Deepcool AK620 68.99 CFM CPU Cooler',
  '500-1850 RPM',
  '28 dB',
  '160 mm',
  69.98,
  'https://www.amazon.com/dp/B09NQ6BP1R?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO cpu_coolers (name_cooler,rpm,noise_level,height,price,link) VALUES (
  'Corsair iCUE LINK H150i LCD 63.1 CFM Liquid CPU Cooler',
  '480-2400 RPM' ,
  'Water Cooled',
  '360 mm',
  319.99,
  'https://pcpartpicker.com/mr/newegg/4TNYcf'
);



INSERT INTO motherboards(name_board,socket,memory_type,memory_slots,wifi,m2_slots,pcie16_slots,form_factor,price,link) VALUES (
  'ASRock H610M-HDV/M.2+ D5 Micro ATX LGA1700 Motherboard',
  'LGA1700',
  'DDR5',
  2,
  FALSE,
  1,
  1,
  'Micro ATX',
  96.71,
  'https://www.amazon.com/dp/B0CGQ4HRSM?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO motherboards(name_board,socket,memory_type,memory_slots,wifi,m2_slots,pcie16_slots,form_factor,price,link) VALUES (
  'MSI B760 GAMING PLLUS WIFI ATX LGA1700 Motherboard',
  'LGA1700',
  'DDR5',
  4,
  TRUE,
  3,
  5,
  'ATX',
  159.99,
  'https://www.amazon.com/dp/B0C15THTK7?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO motherboards(name_board,socket,memory_type,memory_slots,wifi,m2_slots,pcie16_slots,form_factor,price,link) VALUES (
  'ASRock B650M Pro RS WiFi Micro ATX AM5 Motherboard',
  'AM5',
  'DDR5',
  4,
  TRUE,
  4,
  2,
  'Micro ATX',
  124.99,
  'https://pcpartpicker.com/mr/newegg/qcbRsY'
);

INSERT INTO motherboards(name_board,socket,memory_type,memory_slots,wifi,m2_slots,pcie16_slots,form_factor,price,link) VALUES (
  'Gigabyte B650M DS3H Micro ATX AM5 Motherboard',
  'AM5',
  'DDR5',
  4,
  FALSE,
  2,
  1,
  'Micro ATX',
  119.99,
  'https://www.amazon.com/dp/B083R7MM59?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);



INSERT INTO ram (name_ram,speed,modules,cas_latency,ddr5,price,link) VALUES (
  'Kingston FURY Beast 16 GB (2 x 8GB) DDR5-5600 CL40 Memory',
  5600,
  '2 x 8GB',
  'CL40',
  TRUE,
  78.06,
  'https://www.amazon.com/dp/B09T8VWV2R?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO ram (name_ram,speed,modules,cas_latency,ddr5,price,link) VALUES (
  'TEAMGROUP T-Force Delta RGB 32 GB (2 x 16GB) DDR5-6000 CL30 Memory',
  6000,
  '2 x 16GB',
  'CL30',
  TRUE,
  92.99,
  'https://www.amazon.com/dp/B0B3HGJ4V7?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO ram (name_ram,speed,modules,cas_latency,ddr5,price,link) VALUES (
  'G.Skill Trident Neo 64GB (2 x 32GB) DDR5-6000 CL30 Memory',
  6000,
  '2 x 32GB',
  'CL30',
  TRUE,
  204.99,
  'https://www.amazon.com/dp/B0BJP3MRW1?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);



INSERT INTO storage (name_storage,capacity,interface,nvme,price,link) VALUES (
  'MSI SPATIUM M371 1 TB M.2-2280 pCIe 3.0 X4 NVME Solid State Drive',
  '1TB',
  'M.2 PCIe 3.0 X4',
  TRUE,
  39.99,
  'https://www.amazon.com/dp/B0BRQTMX1N?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO storage (name_storage,capacity,interface,nvme,price,link) VALUES (
  'Mushkin Tempest 2 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive',
  '2TB',
  'M.2 PCIe 3.0 X4',
  TRUE,
  74.98,
  'https://www.amazon.com/dp/B09M86W9RL?tag=pcpapi-20&linkCode=ogi&th=1'
);

INSERT INTO storage (name_storage,capacity,interface,nvme,price,link) VALUES (
  'Leven JP600 4 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive',
  '4TB',
  'M.2 PCIe 3.0 X4',
  TRUE,
  159.99,
  'https://www.amazon.com/dp/B0BN5WXP8R?tag=pcpapi-20&linkCode=ogi&th=1'
);

INSERT INTO storage (name_storage,capacity,interface,nvme,price,link) VALUES (
  'Inland Gaming Performance Plus 8 Tb M.2-2280 PCIe 4.0 X4 NVME Solid State Drive',
  '8TB',
  'M.2 PCIe 3.0 X4',
  TRUE,
  834.99,
  'https://www.amazon.com/dp/B0BG25JP68?tag=pcpapi-20&linkCode=ogi&th=1'
);



INSERT INTO video_cards (name_card,core_clock,boost_clock,display_ports,memory_size,hdmi_ports,memory_type,interface,price,link) VALUES (
  'Gigabyte WINDFORCE OC GeForce RTX 4060Ti 16 GB Video Card',
  '2310 MHz',
  '2565 MHz',
  2,
  '16GB VRAM',
  2,
  'GDDR6',
  'PCIe x16',
  449.99,
  'https://pcpartpicker.com/mr/newegg/F626Mp'
);

INSERT INTO video_cards (name_card,core_clock,boost_clock,display_ports,memory_size,hdmi_ports,memory_type,interface,price,link) VALUES (
  'GALAX EX Gamer 1-Click OC V2 GeForce RTX 4070Ti 12 GB Video Card',
  '2310 MHz',
  '2670 MHz',
  3,
  '12GB VRAM',
  1,
  'GDDR6X',
  'PCIe x16',
  769.99,
  'https://www.amazon.com/dp/B0CB34XLL7?tag=pcpapi-20&linkCode=ogi&th=1'
);

INSERT INTO video_cards (name_card,core_clock,boost_clock,display_ports,memory_size,hdmi_ports,memory_type,interface,price,link) VALUES (
  'MSI GAMING X TRIO GeForce RTX 4090 24 GB Video Card',
  '2235 MHz',
  'N/A',
  3,
  '24GB VRAM',
  1,
  'GDDR6X',
  'PCIe x16',
  1649.99,
  'https://pcpartpicker.com/mr/bestbuy/mVM48d'
);

INSERT INTO video_cards (name_card,core_clock,boost_clock,display_ports,memory_size,hdmi_ports,memory_type,interface,price,link) VALUES (
  'Gigabyte GAMING OC Radeon RX 7700 XT 12 GB Video Card',
  '1700 MHz',
  '2599 MHz',
  2,
  '12GB VRAM',
  2,
  'GDDR6',
  'PCIe x16',
  439.99,
  'https://www.amazon.com/dp/B0CGC5P7H3?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO video_cards (name_card,core_clock,boost_clock,display_ports,memory_size,hdmi_ports,memory_type,interface,price,link) VALUES (
  'ASRock Phantom Gaming OC Radeon RX 6950 XT 16 GB Video Card',
  '1958 MHz',
  '2324 MHz',
  3,
  '16GB VRAM',
  1,
  'GDDR6',
  'PCIe x16',
  599.99,
  'https://pcpartpicker.com/mr/newegg/gbXV3C'
);

INSERT INTO video_cards (name_card,core_clock,boost_clock,display_ports,memory_size,hdmi_ports,memory_type,interface,price,link) VALUES (
  'Sapphire PULSE Radeon RX 7900 XTX 24 GB Video Card',
  '2300 MHz',
  '2525 MHz',
  2,
  '24GB VRAM',
  2,
  'GDDR6',
  'PCIe x16',
  949.99,
  'https://www.amazon.com/dp/B0BR6HZZ6Z?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);



INSERT INTO cases (name_case,type_case,dimensions,price,link) VALUES (
  'Apevia Destiny Pro ATX Mid Tower Case (White) ',
  'ATX Mid Tower',
  '412.75mm x 209.55mm x 485.14mm',
  93.99,
  'https://www.amazon.com/dp/B0C1HKQ9CV?tag=pcpapi-20&linkCode=ogi&th=1'
);

INSERT INTO cases (name_case,type_case,dimensions,price,link) VALUES (
  'Apevia Destiny Pro ATX Mid Tower Case (Black) ',
  'ATX Mid Tower',
  '412.75mm x 209.55mm x 485.14mm',
  92.99,
  'https://www.amazon.com/dp/B0BWBMY5P9?tag=pcpapi-20&linkCode=ogi&th=1'
);

INSERT INTO cases (name_case,type_case,dimensions,price,link) VALUES (
  'DIYPC ARGB-Q3 MicroATX Mini Tower Case (White)',
  'MicroATX Mini Tower',
  '370.84mm x 279.4mm x 391.16mm',
  61.98,
  'https://pcpartpicker.com/mr/newegg/v8MMnQ'
);

INSERT INTO cases (name_case,type_case,dimensions,price,link) VALUES (
  'DIYPC ARGB-Q3 MicroATX Mini Tower Case (Black)',
  'MicroATX Mini Tower',
  '370.84mm x 279.4mm x 391.16mm',
  59.94,
  'https://pcpartpicker.com/mr/newegg/JzNYcf'
);

INSERT INTO cases (name_case,type_case,dimensions,price,link) VALUES (
  'Anidees AI Crystal XL AR 3 ATX Full Tower Case',
  'ATX Full Tower',
  '620mm x 235mm x 595mm',
  319.89,
  'https://www.amazon.com/dp/B07NW42KN9?tag=pcpapi-20&linkCode=ogi&th=1'
);



INSERT INTO power_supplies (name_supply,rating,wattage,type_supply,price,link) VALUES (
  'EVGA GE 800 W 80+ Gold Certified ATX Power Supply',
  '80+ Gold',
  '800 W',
  'ATX',
  94.99,
  'https://www.amazon.com/dp/B0C1ZXDZF2?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO power_supplies (name_supply,rating,wattage,type_supply,price,link) VALUES (
  'Thermaltake Toughpower GF1 Snow - TT Premium 850 W 80+ Gold Certified Fully Modular ATX Power Supply',
  '80+ Gold',
  '850 W',
  'ATX-Modular',
  109.99,
  'https://www.amazon.com/dp/B09SB4H3Y8?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO power_supplies (name_supply,rating,wattage,type_supply,price,link) VALUES (
  'Phanteks AMP v2 1000 W 80+ Gold Certified Fully Modular ATX Power Supply (White)',
  '80+ Gold',
  '1000 W',
  'ATX-Modular',
  160.47,
  'https://www.amazon.com/dp/B0BWQ5V6RR?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);

INSERT INTO power_supplies (name_supply,rating,wattage,type_supply,price,link) VALUES (
  'Phanteks AMP v2 1000 W 80+ Gold Certified Fully Modular ATX Power Supply (Black)',
  '80+ Gold',
  '1000 W',
  'ATX-Modular',
  147.59,
  'https://www.amazon.com/dp/B0BWPL4N3Q?tag=pcpapi-20&linkCode=ogi&th=1'
);

INSERT INTO power_supplies (name_supply,rating,wattage,type_supply,price,link) VALUES (
  'MSI MEG Ai1300P 1300 W 80+ Platinum Certified Fully Modular ATX Power Supply',
  '80+ Platinum',
  '1300 W',
  'ATX-Fully Modular',
  289.99,
  'https://www.amazon.com/dp/B0B433ZCRP?tag=pcpapi-20&linkCode=ogi&th=1&psc=1'
);