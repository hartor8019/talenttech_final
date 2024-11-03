-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-11-2024 a las 21:42:04
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `talenttech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills`
--

CREATE TABLE `skills` (
  `id` int(3) NOT NULL,
  `skill_name` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla de Skills';

--
-- Volcado de datos para la tabla `skills`
--

INSERT INTO `skills` (`id`, `skill_name`, `category`, `description`) VALUES
(1, 'HTML', 'Desarrollo Web', 'Mi experiencia incluye la creación de diseños responsivos y accesibles, garantizando que las aplicaciones no solo sean visualmente atractivas, sino también funcionales en diferentes dispositivos y navegadores.'),
(2, 'JavaScript', 'Desarrollo Web', 'Mi experiencia incluye la implementación de funcionalidades interactivas mediante el uso de eventos, manipulaciones del DOM y técnicas de AJAX para mejorar la experiencia del usuario. Además, he trabajado con frameworks y bibliotecas como React y jQuery, lo que me ha permitido construir interfaces de usuario eficientes y escalables.'),
(3, 'Python', 'Programación', 'Como ingeniero de sistemas, tengo experiencia intermedia en Python, especialmente en el ámbito de la inteligencia artificial. He trabajado en proyectos donde he entrenado y evaluado modelos de aprendizaje automático, utilizando bibliotecas como TensorFlow y scikit-learn. Mi trabajo incluye la preparación y limpieza de datos, así como la implementación de algoritmos de aprendizaje supervisado y no supervisado para resolver problemas complejos. '),
(4, 'React', 'Desarrollo Web', 'Como ingeniero de sistemas, aunque tengo poca experiencia en React, recientemente he completado un proyecto significativo utilizando esta tecnología. Durante el desarrollo, he aprendido a construir interfaces de usuario dinámicas y reactivas, aplicando componentes funcionales y gestionando el estado de la aplicación con hooks. Este proyecto me ha permitido entender la importancia de la estructura del componente y la reutilización del código, así como el manejo de eventos y la interacción con APIs.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Harold Torres León', 'harold.torres425@gmail.com', '54321'),
(2, 'Diana Carolina', 'dicaropo@gmail.com', '54321');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
