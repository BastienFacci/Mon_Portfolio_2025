CREATE TABLE project (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  year YEAR NOT NULL,
  description TEXT,
  technologies VARCHAR(255),
  image_url VARCHAR(255) NULL
);


INSERT INTO project (title, year, description, technologies, image_url) 
VALUES 
  (

    "LABS Society", 
    2024, 
   "Ce projet front-end a été réalisé en équipe de 4 personnes sur une période de 10 jours. Il s'agit d'un trombinoscope interactif, conçu pour présenter les membres d'une équipe de manière simple et intuitive. Le design, que nous avons voulu sobre et épuré, facilite la navigation et permet de mettre en valeur les profils de chaque membre.

Nous avons intégré un carrousel permettant de faire défiler les photos des membres du staff. Lorsqu'on clique sur une photo, une section détaillant des informations supplémentaires apparaît, comme la description du poste ou des fun facts. De plus, un effet dynamique a été ajouté : au survol de chaque photo, un message indiquant le rôle du membre s'affiche, et en cliquant sur la photo, une présentation plus complète apparaît ou disparaît.

J'ai principalement travaillé sur la gestion des événements en JavaScript, en manipulant le DOM pour rendre l'application interactive. Chaque membre du staff dispose de boutons permettant d'afficher des anecdotes aléatoires à propos d’eux. Nous avons utilisé des écouteurs d’événements pour gérer les interactions comme les clics et les survols, rendant l'expérience utilisateur fluide et agréable.

Côté CSS, nous avons appliqué un design réactif (responsive) afin que l'affichage soit optimisé sur tous les types d'écrans, que ce soit sur desktop, tablette ou mobile. Nous avons veillé à ce que les images, le carrousel et les sections d'information soient bien ajustés pour offrir une expérience agréable sur tous les formats. L'usage des media queries a été essentiel pour garantir que l'interface s'adapte sans perte de fonctionnalité ni de lisibilité.

Ce projet a été une excellente occasion pour nous de pratiquer JavaScript et CSS, notamment en ce qui concerne la gestion des événements et le design responsive, tout en appliquant des principes de design visant à offrir une expérience utilisateur optimale.", 
    "HTML, CSS, JavaScript", 
    "/assets/images/screen_LABS.png"
  ),
  (
    "Rotten Totomatoes", 
    2024, 
    "L'objectif de l'application Rotten Tomatoes est de permettre aux utilisateurs de découvrir et de gérer des séries TV en se basant sur les données fournies par l'API TV Maze. L'application permet de créer un compte, d'ajouter des séries à une liste de favoris et de rechercher des séries par titre grâce à une barre de recherche interactive.

Développé par une équipe de trois développeurs, ce projet a été réalisé dans le cadre de notre premier projet en React. Nous avons adopté une approche agile, avec des sprints d’une semaine pour organiser le développement.

Techniquement, nous avons utilisé React pour l'interface dynamique, avec une gestion de l’état via des hooks comme useState et useEffect. L’application interagit avec l'API TV Maze pour récupérer les informations sur les séries, comme les titres, les descriptions et les images. Ces données sont affichées en temps réel dans l'application, offrant une expérience fluide et rapide. Le projet a également été réalisé en TypeScript, apportant un typage statique pour renforcer la sécurité du code.

L’interface est sobre et intuitive, et le design est responsive, offrant une expérience fluide sur tous les appareils, du mobile au desktop. Chaque écran s’adapte à la taille de l'écran, permettant une navigation optimale, que ce soit sur smartphone ou ordinateur.

Ce projet a été une excellente occasion de mettre en pratique les bases de React et du responsive design, tout en renforçant nos compétences en méthodes agiles pour la gestion de projet.", 
    "React, TypeScript, Node.js, Express, Vite.js, JavaScript, HTML, CSS", 
    "/assets/images/screen_rottentotomatoes.png"
  ),
  (
    "Périlove aventures", 
    2024, 
    "L’application Périlove Aventures a été conçue lors d’un hackathon de 36h sur le thème du voyage. Réalisée par une équipe de quatre développeur·se·s, elle propose un concept original mêlant tourisme local et rencontres amoureuses. L’idée : mettre en relation des habitant·e·s du Périgord via des événements et des visites culturelles dans la région.

Techniquement, ce projet front-end a été l’occasion d’explorer les limites créatives du CSS à travers un design volontairement rétro et kitsch, inspiré des années 2000. Nous avons misé sur une esthétique too much avec des effets visuels tape-à-l’œil, des gifs animés et une palette flashy, afin de pousser à fond les expérimentations stylistiques. Cette direction graphique assumée nous a permis d'approfondir notre maîtrise du CSS, notamment la gestion des animations, des effets de texte et des dispositions flexibles.

Côté React et TypeScript, nous avons utilisé l’API Random User pour générer des profils fictifs, filtrés pour ne montrer que des utilisateurs de plus de 50 ans. Une interface simple permet de renseigner des critères de recherche et d'accéder à un formulaire d'authentification fictif. Ce projet a été l’occasion de renforcer nos bases techniques en React, TypeScript, gestion de l’état, rendu conditionnel et consommation d’API, tout en nous amusant avec un concept décalé et assumé.

Ce projet nous a valu le 2ᵉ prix du hackathon (sur 6 projets présentés), avec notamment les prix de la meilleure direction artistique et de la meilleure interface rétro.
Un projet aussi drôle que formateur, qui nous a permis de travailler sérieusement sans jamais se prendre au sérieux.", 
    "React, TypeScript, Node.js, Express, Vite.js, JavaScript, HTML, CSS", 
    "/assets/images/screen_perilove.png"
  ),
  (
    "Street art hunter", 
    2025, 
    "Street Art Hunter est une application web conçue en équipe dans le cadre d’une formation en développement. Elle transforme Lyon en terrain de jeu urbain, invitant les utilisateur·rice·s à référencer des œuvres de street art via une carte interactive enrichie par la géolocalisation et la photo, créant ainsi une cartographie participative de l’art urbain local.

Accessible sur mobile, tablette et desktop, elle adopte une esthétique rétro gaming inspirée des premiers jeux vidéo, renforçant l’aspect ludique tout en posant des défis d’intégration visuelle et de responsive design.

Techniquement, elle s’appuie sur React, TypeScript, Leaflet et OpenStreetMap, avec une API maison pour gérer comptes, authentification, rôles (utilisateur/admin) et validation des œuvres. Chaque œuvre validée rapporte des points, débloque des badges et alimente un classement.

La sécurité est un point clé : les mots de passe sont hachés avec Argon2, les sessions sécurisées via tokens persistants, et l’API est protégée par des filtres d’accès selon les rôles et des contrôles sur les données envoyées.

Un projet complet et ancré dans la réalité lyonnaise, qui mêle technique, design, accessibilité et passion pour l’art urbain.", 
    "React, TypeScript, Node.js, Express, Vite.js, MySQL, JavaScript, HTML, CSS", 
    "/assets/images/screen_streetarthunter.png"
  );



CREATE TABLE project_image (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  project_id INT UNSIGNED NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
);

INSERT INTO project_image (project_id, image_url) VALUES
(1, '/assets/images/projet01/image01projet01.png'),
(1, '/assets/images/projet01/image02projet01.png'),
(2, '/assets/images/projet02/image01projet02.png'),
(2, '/assets/images/projet02/image02projet02.png'),
(2, '/assets/images/projet02/image03projet02.png'),
(2, '/assets/images/projet02/image04projet02.png'),
(3, '/assets/images/projet03/image01projet03.png'),
(3, '/assets/images/projet03/image02projet03.png'),
(3, '/assets/images/projet03/image03projet03.png'),
(4, '/assets/images/projet04/image01projet04.png'),
(4, '/assets/images/projet04/image02projet04.png'),
(4, '/assets/images/projet04/image03projet04.png'),
(4, '/assets/images/projet04/image04projet04.png'),
(4, '/assets/images/projet04/image05projet04.png');