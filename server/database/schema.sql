CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL, 
  email VARCHAR(255) NOT NULL UNIQUE, 
  password VARCHAR(255) NOT NULL
);

CREATE TABLE project (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(100) NOT NULL, 
  year YEAR NOT NULL, 
  description TEXT, 
  technologies VARCHAR(255), 
  user_id INT UNSIGNED NULL, 
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE job (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
  society VARCHAR(100) NOT NULL, 
  job_title VARCHAR(50) NOT NULL, 
  start_date DATE NOT NULL, 
  end_date DATE, 
  description TEXT, 
  user_id INT UNSIGNED NOT NULL, 
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);


INSERT INTO user (firstname, lastname, email, password) 
VALUES 
  ("Bastien", "Faccinetto", "bastien.faccinetto@gmail.com", "toto");

INSERT INTO project (title, year, description, technologies, user_id) 
VALUES 
  ("LABS Society", 2024, "Trombinoscope d’une société fictive, conçu avec un design sobre et épuré pour faciliter la visualisation des équipes et des collaborateurs.", "HTML, CSS, Javascript", 1),
("Rotten Totomatoes", 2024, "Application web de référencement de séries américaines, inspirée de sites comme Rotten Tomatoes et Allociné. Elle permet de découvrir, évaluer et consulter des informations détaillées sur diverses séries.", "React, TypeScript, Node.js,  Express, Vite.js, JavaScript, HTML, CSS ", 1),
 ("Périlove aventures", 2024, "Application créée lors d’un hackathon sur le thème du voyage. Nous avons imaginé un concept original mêlant tourisme dans le Périgord et site de rencontre, le tout avec un design rétro inspiré des années 2000.", "React, TypeScript, Node.js,  Express, Vite.js, JavaScript, HTML, CSS ", 1),
 ("Charentaise 2000", 2025, "Site e-commerce de revente de charentaises top qualité.", "React, TypeScript, Node.js,  Express, Vite.js, JavaScript, HTML, CSS ", 1);
