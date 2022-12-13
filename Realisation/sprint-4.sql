-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 13 déc. 2022 à 16:27
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sprint-4`
--

-- --------------------------------------------------------

--
-- Structure de la table `annee_formation`
--

CREATE TABLE `annee_formation` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Annee_scolaire` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `annee_formation`
--

INSERT INTO `annee_formation` (`id`, `Annee_scolaire`) VALUES
(1, '2020-2008'),
(2, '1976-2008'),
(3, '1988-1995'),
(4, '1982-2010'),
(5, '2022-2015'),
(6, '1997-2011');

-- --------------------------------------------------------

--
-- Structure de la table `apprenant`
--

CREATE TABLE `apprenant` (
  `id` int(10) UNSIGNED NOT NULL,
  `Nom` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Prenom` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Adress` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CIN` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Date_naissance` date DEFAULT NULL,
  `Image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `apprenant`
--

INSERT INTO `apprenant` (`id`, `Nom`, `Prenom`, `Email`, `Phone`, `Adress`, `CIN`, `Date_naissance`, `Image`) VALUES
(1, 'Tristian', 'Deckow', 'tess08@huels.com', '936-592-7606', '385 Gleason Trail Suite 273\nPort Dimitriton, DE 04311', 'Suite 772', '1983-10-10', 'https://via.placeholder.com/1x0.png/0000cc?text=1+voluptas'),
(2, 'Rebecca', 'Kris', 'tlarkin@langosh.net', '831-551-3726', '51323 Lockman Oval Apt. 682\nMuellerport, NM 64502', 'Suite 521', '2005-10-18', 'https://via.placeholder.com/1x0.png/000055?text=1+dolores'),
(3, 'Pinkie', 'Kuphal', 'emmalee37@gmail.com', '+1 (743) 513-0010', '814 Manuela Ford\nDanniefort, MN 82241', 'Suite 316', '1994-06-22', 'https://via.placeholder.com/1x0.png/0033bb?text=1+occaecati'),
(4, 'Ivory', 'Walsh', 'vladimir35@abernathy.net', '+1-430-418-3637', '819 Marquardt Forest Suite 701\nGoldnerfort, NM 20356', 'Suite 441', '1970-02-21', 'https://via.placeholder.com/1x0.png/00ffcc?text=1+eum'),
(5, 'Santino', 'Hermann', 'watsica.rubye@gmail.com', '+12392251893', '7306 Hazle Squares\nSouth Elroyton, HI 57502-2624', 'Apt. 189', '2006-09-05', 'https://via.placeholder.com/1x0.png/0088dd?text=1+eum'),
(6, 'Augustine', 'Schuppe', 'conn.shaun@miller.com', '1-843-420-4402', '25471 Virginie Valleys\nEast Nicoleland, NE 22488', 'Suite 806', '1986-08-21', 'https://via.placeholder.com/1x0.png/0055ee?text=1+aut'),
(7, 'Carlos', 'Orn', 'morgan.gibson@wehner.com', '424-768-3114', '76626 Simonis Terrace Suite 531\nPort Grayce, UT 96422', 'Suite 203', '2022-05-18', 'https://via.placeholder.com/1x0.png/00ccaa?text=1+dolore'),
(8, 'Ines', 'Schumm', 'hansen.judah@gmail.com', '+1.443.540.6899', '782 Oberbrunner Dam Apt. 851\nBruenburgh, SD 11972-5294', 'Suite 019', '1979-08-18', 'https://via.placeholder.com/1x0.png/004422?text=1+commodi'),
(9, 'Edwin', 'Dare', 'franecki.aurelio@wilderman.net', '(513) 557-8364', '863 Maggio Course Apt. 363\nBernierfort, NM 24011-1872', 'Apt. 309', '1992-11-29', 'https://via.placeholder.com/1x0.png/00dd33?text=1+et'),
(10, 'Maryam', 'Bode', 'chaya79@gmail.com', '+1 (540) 383-4332', '252 Albertha Circles Suite 459\nSouth Julietland, MN 46134-5900', 'Apt. 206', '1979-02-22', 'https://via.placeholder.com/1x0.png/007711?text=1+autem');

-- --------------------------------------------------------

--
-- Structure de la table `apprenant_preparation_brief`
--

CREATE TABLE `apprenant_preparation_brief` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Date_affectation` date DEFAULT NULL,
  `Preparation_brief_id` int(10) UNSIGNED DEFAULT NULL,
  `Apprenant_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `apprenant_preparation_brief`
--

INSERT INTO `apprenant_preparation_brief` (`id`, `Date_affectation`, `Preparation_brief_id`, `Apprenant_id`) VALUES
(1, '2001-04-26', 1, 1),
(2, '1992-09-02', 2, 7),
(3, '1995-11-19', 3, 9);

-- --------------------------------------------------------

--
-- Structure de la table `apprenant_preparation_tache`
--

CREATE TABLE `apprenant_preparation_tache` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Preparation_tache_id` int(10) UNSIGNED NOT NULL,
  `Apprenant_id` int(10) UNSIGNED NOT NULL,
  `Apprenant_P_Brief_id` int(10) UNSIGNED NOT NULL,
  `Etat` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en pouse',
  `date_debut` timestamp NULL DEFAULT NULL,
  `date_fin` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `apprenant_preparation_tache`
--

INSERT INTO `apprenant_preparation_tache` (`id`, `Preparation_tache_id`, `Apprenant_id`, `Apprenant_P_Brief_id`, `Etat`, `date_debut`, `date_fin`) VALUES
(1, 1, 4, 2, 'en cours', '2021-12-18 23:00:00', '1999-05-23 23:00:00'),
(2, 2, 6, 1, 'terminer', '1974-10-18 23:00:00', '2013-11-22 23:00:00'),
(3, 2, 3, 2, 'en cours', '2011-08-07 23:00:00', '1997-09-08 23:00:00'),
(4, 1, 9, 3, 'en pause', '2016-04-28 00:00:00', '1972-01-05 23:00:00'),
(5, 6, 7, 1, 'en pause', '2007-09-22 23:00:00', '1989-04-04 00:00:00'),
(6, 6, 5, 1, 'en pause', '2013-12-28 23:00:00', '2007-02-28 23:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `formateur`
--

CREATE TABLE `formateur` (
  `id` int(10) UNSIGNED NOT NULL,
  `Nom_formateur` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Prenom_formateur` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Email_formateur` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Adress` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CIN` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `formateur`
--

INSERT INTO `formateur` (`id`, `Nom_formateur`, `Prenom_formateur`, `Email_formateur`, `Phone`, `Adress`, `CIN`, `Image`) VALUES
(1, 'Lorenza', 'Will', 'donald88@hotmail.com', '+1-828-586-6933', '8788 Deondre Island\nAlexaside, KY 40568-7804', 'Suite 208', 'https://via.placeholder.com/1x0.png/000088?text=1+ipsam'),
(2, 'Davon', 'Fay', 'eusebio17@kuhn.com', '667-467-2779', '25917 Powlowski Canyon Apt. 841\nSouth Camron, LA 13416', 'Apt. 611', 'https://via.placeholder.com/1x0.png/006600?text=1+velit'),
(3, 'Lilian', 'Schaden', 'fshanahan@hotmail.com', '470.319.3857', '8513 Ephraim Springs\nEast Aaliyah, RI 08473', 'Apt. 033', 'https://via.placeholder.com/1x0.png/006699?text=1+cum'),
(4, 'Joelle', 'Lehner', 'eliza76@olson.org', '+1-956-918-5870', '98455 Rodriguez Stream Suite 267\nLake Letha, WV 54648-5323', 'Apt. 675', 'https://via.placeholder.com/1x0.png/0055ee?text=1+cumque'),
(5, 'Beau', 'Rice', 'schowalter.wade@harris.com', '1-762-989-8400', '4984 Twila Street Suite 785\nGutkowskiburgh, OK 83443', 'Apt. 197', 'https://via.placeholder.com/1x0.png/003344?text=1+eveniet'),
(6, 'Price', 'Gibson', 'gina.glover@yahoo.com', '(318) 834-5196', '73066 Kurtis Mountain\nEast Vince, WY 53930-7804', 'Suite 348', 'https://via.placeholder.com/1x0.png/00aabb?text=1+molestiae');

-- --------------------------------------------------------

--
-- Structure de la table `groupes`
--

CREATE TABLE `groupes` (
  `id` int(10) UNSIGNED NOT NULL,
  `Nom_groupe` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Annee_formation_id` int(10) UNSIGNED DEFAULT NULL,
  `Formateur_id` int(10) UNSIGNED DEFAULT NULL,
  `Logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `groupes`
--

INSERT INTO `groupes` (`id`, `Nom_groupe`, `Annee_formation_id`, `Formateur_id`, `Logo`) VALUES
(1, 'Daron Bednar', 3, 2, 'https://via.placeholder.com/1x0.png/00ddbb?text=1+iure'),
(2, 'Monserrat Luettgen', 3, 2, 'https://via.placeholder.com/1x0.png/00ee66?text=1+ad'),
(3, 'Clint Boyle', 2, 1, 'https://via.placeholder.com/1x0.png/0099dd?text=1+dolores'),
(4, 'Anne Langosh', 3, 2, 'https://via.placeholder.com/1x0.png/000022?text=1+rem'),
(5, 'Van Smitham', 2, 1, 'https://via.placeholder.com/1x0.png/0044aa?text=1+excepturi'),
(6, 'Glenda Okuneva', 2, 5, 'https://via.placeholder.com/1x0.png/00dd11?text=1+et'),
(7, 'Raleigh Crist Sr.', 5, 3, 'https://via.placeholder.com/1x0.png/004455?text=1+non'),
(8, 'Berry Heaney', 2, 3, 'https://via.placeholder.com/1x0.png/004466?text=1+corporis');

-- --------------------------------------------------------

--
-- Structure de la table `groupes_apprenant`
--

CREATE TABLE `groupes_apprenant` (
  `id` int(10) UNSIGNED NOT NULL,
  `Groupe_id` int(10) UNSIGNED DEFAULT NULL,
  `Apprenant_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `groupes_apprenant`
--

INSERT INTO `groupes_apprenant` (`id`, `Groupe_id`, `Apprenant_id`) VALUES
(1, 3, 5),
(2, 2, 1),
(3, 3, 5),
(4, 3, 5),
(5, 2, 6),
(6, 7, 10),
(7, 4, 6),
(8, 8, 8);

-- --------------------------------------------------------

--
-- Structure de la table `groupes_preparation_brief`
--

CREATE TABLE `groupes_preparation_brief` (
  `id` int(10) UNSIGNED NOT NULL,
  `Apprenant_preparation_brief_id` int(10) UNSIGNED DEFAULT NULL,
  `Groupe_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `groupes_preparation_brief`
--

INSERT INTO `groupes_preparation_brief` (`id`, `Apprenant_preparation_brief_id`, `Groupe_id`) VALUES
(1, 3, 1),
(2, 1, 4),
(3, 2, 5),
(4, 3, 8),
(5, 3, 5),
(6, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `preparation_brief`
--

CREATE TABLE `preparation_brief` (
  `id` int(10) UNSIGNED NOT NULL,
  `Nom_du_brief` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Duree` date DEFAULT NULL,
  `Formateur_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `preparation_brief`
--

INSERT INTO `preparation_brief` (`id`, `Nom_du_brief`, `Description`, `Duree`, `Formateur_id`) VALUES
(1, 'Rey Wisoky', 'tenetur', '1998-06-22', 4),
(2, 'Muhammad Conroy', 'enim', '2017-07-16', 5),
(3, 'Dr. Tremaine Kshlerin II', 'provident', '1999-04-24', 6),
(4, 'Brian Eichmann', 'ratione', '1989-05-17', 2);

-- --------------------------------------------------------

--
-- Structure de la table `preparation_tache`
--

CREATE TABLE `preparation_tache` (
  `id` int(10) UNSIGNED NOT NULL,
  `Nom_tache` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Duree` date DEFAULT NULL,
  `Preparation_brief_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `preparation_tache`
--

INSERT INTO `preparation_tache` (`id`, `Nom_tache`, `Description`, `Duree`, `Preparation_brief_id`) VALUES
(1, 'Ulises Kihn', 'officia', '1994-04-17', 3),
(2, 'Dina Morar DVM', 'sapiente', '2016-11-02', 4),
(3, 'Lisandro Ernser', 'odio', '1989-12-21', 1),
(4, 'Aimee Predovic', 'non', '2013-08-14', 2),
(5, 'Hassan Okuneva V', 'quam', '1995-06-02', 4),
(6, 'Devonte Franecki', 'autem', '2012-07-15', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annee_formation`
--
ALTER TABLE `annee_formation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `apprenant`
--
ALTER TABLE `apprenant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `apprenant_preparation_brief`
--
ALTER TABLE `apprenant_preparation_brief`
  ADD PRIMARY KEY (`id`),
  ADD KEY `apprenant_preparation_brief_apprenant_id_foreign` (`Apprenant_id`),
  ADD KEY `apprenant_preparation_brief_preparation_brief_id_foreign` (`Preparation_brief_id`);

--
-- Index pour la table `apprenant_preparation_tache`
--
ALTER TABLE `apprenant_preparation_tache`
  ADD PRIMARY KEY (`id`),
  ADD KEY `apprenant_preparation_tache_preparation_tache_id_foreign` (`Preparation_tache_id`),
  ADD KEY `apprenant_preparation_tache_apprenant_p_brief_id_foreign` (`Apprenant_P_Brief_id`),
  ADD KEY `apprenant_preparation_tache_apprenant_id_foreign` (`Apprenant_id`);

--
-- Index pour la table `formateur`
--
ALTER TABLE `formateur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `groupes`
--
ALTER TABLE `groupes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groupes_annee_formation_id_foreign` (`Annee_formation_id`),
  ADD KEY `groupes_formateur_id_foreign` (`Formateur_id`);

--
-- Index pour la table `groupes_apprenant`
--
ALTER TABLE `groupes_apprenant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groupes_apprenant_groupe_id_foreign` (`Groupe_id`),
  ADD KEY `groupes_apprenant_apprenant_id_foreign` (`Apprenant_id`);

--
-- Index pour la table `groupes_preparation_brief`
--
ALTER TABLE `groupes_preparation_brief`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groupes_preparation_brief_apprenant_preparation_brief_id_foreign` (`Apprenant_preparation_brief_id`),
  ADD KEY `groupes_preparation_brief_groupe_id_foreign` (`Groupe_id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `preparation_brief`
--
ALTER TABLE `preparation_brief`
  ADD PRIMARY KEY (`id`),
  ADD KEY `preparation_brief_formateur_id_foreign` (`Formateur_id`);

--
-- Index pour la table `preparation_tache`
--
ALTER TABLE `preparation_tache`
  ADD PRIMARY KEY (`id`),
  ADD KEY `preparation_tache_preparation_brief_id_foreign` (`Preparation_brief_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annee_formation`
--
ALTER TABLE `annee_formation`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `apprenant`
--
ALTER TABLE `apprenant`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `apprenant_preparation_brief`
--
ALTER TABLE `apprenant_preparation_brief`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `apprenant_preparation_tache`
--
ALTER TABLE `apprenant_preparation_tache`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `formateur`
--
ALTER TABLE `formateur`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `groupes`
--
ALTER TABLE `groupes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `groupes_apprenant`
--
ALTER TABLE `groupes_apprenant`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `groupes_preparation_brief`
--
ALTER TABLE `groupes_preparation_brief`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `preparation_brief`
--
ALTER TABLE `preparation_brief`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `preparation_tache`
--
ALTER TABLE `preparation_tache`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
