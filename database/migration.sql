CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name_user VARCHAR(255) NOT NULL,
  password_user TEXT NOT NULL
);

CREATE TABLE cpu (
  id SERIAL PRIMARY KEY,
  name_cpu TEXT,
  core_count INT,
  base_clock TEXT,
  boost_clock TEXT,
  socket TEXT,
  price NUMERIC(10,2),
  link TEXT
);

CREATE TABLE cpu_coolers (
  id SERIAL PRIMARY KEY,
  name_cooler TEXT,
  rpm TEXT,
  noise_level TEXT,
  height TEXT,
  price NUMERIC(10,2),
  link TEXT
);

CREATE TABLE motherboards (
  id SERIAL PRIMARY KEY,
  name_board TEXT,
  socket TEXT,
  memory_type TEXT,
  memory_slots INT,
  wifi BOOLEAN,
  m2_slots INT,
  pcie16_slots INT,
  form_factor TEXT,
  price NUMERIC(10,2),
  link TEXT
);

CREATE TABLE ram (
  id SERIAL PRIMARY KEY,
  name_ram TEXT,
  speed INT,
  modules TEXT,
  cas_latency TEXT,
  ddr5 BOOLEAN,
  price NUMERIC(10,2),
  link TEXT
);

CREATE TABLE storage (
  id SERIAL PRIMARY KEY,
  name_storage TEXT,
  capacity TEXT,
  interface TEXT,
  nvme BOOLEAN,
  price NUMERIC(10,2),
  link TEXT
);

CREATE TABLE video_cards (
  id SERIAL PRIMARY KEY,
  name_card TEXT,
  core_clock TEXT,
  boost_clock TEXT,
  display_ports INT,
  memory_size TEXT,
  hdmi_ports INT,
  memory_type TEXT,
  interface TEXT,
  price NUMERIC(10,2),
  link TEXT
);

CREATE TABLE cases (
  id SERIAL PRIMARY KEY,
  name_case TEXT,
  type_case TEXT,
  dimensions TEXT,
  price NUMERIC(10,2),
  link TEXT
);

CREATE TABLE power_supplies (
  id SERIAL PRIMARY KEY,
  name_supply TEXT,
  rating TEXT,
  wattage TEXT,
  type_supply TEXT,
  price NUMERIC(10,2),
  link TEXT
);

CREATE TABLE build_lists (
  id SERIAL PRIMARY KEY,
  id_user INT NOT NULL REFERENCES users(id),
  list_name VARCHAR(255),
  cpu INT REFERENCES cpu(id),
  cpu_cooler INT REFERENCES cpu_coolers(id),
  motherboard INT REFERENCES motherboards(id),
  ram INT REFERENCES ram(id),
  storage INT REFERENCES storage(id),
  video_card INT REFERENCES video_cards(id),
  case_id INT REFERENCES cases(id),
  power_supply INT REFERENCES power_supplies(id)
);