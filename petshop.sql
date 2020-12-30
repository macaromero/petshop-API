-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-12-2020 a las 17:26:43
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `petshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 1,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Alimentos', 1, 0, '2020-11-19 18:38:10', '2020-11-19 18:38:10'),
(2, 'Cuchas', 1, 0, '2020-11-19 18:38:32', '2020-11-19 18:38:32'),
(3, 'Juguetes', 1, 0, '2020-11-19 18:38:56', '2020-11-19 18:38:56'),
(4, 'Otros', 1, 0, '2020-11-19 18:39:44', '2020-11-19 18:39:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `tel` int(255) NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 0,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `nombre`, `apellido`, `correo`, `tel`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'macarena', 'romero', 'macareno@gmail.com', 12345678, 1, 0, '2020-11-26 20:18:31', '2020-12-01 18:22:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `precioUnitario` int(11) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 1,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precioUnitario`, `idCategoria`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Cat Chow adult', 'Alimento para gatos adultos, marca Cat Chow.', 150, 1, 1, 0, '2020-11-19 19:47:47', '2020-11-19 20:18:01'),
(2, 'Cat Chow gatitos', 'Alimento para gatos de 1 a 12 meses, marca Cat Chow.', 170, 1, 1, 0, '2020-11-19 19:48:51', '2020-11-19 20:18:03'),
(3, 'Eukanuba adult large', 'Alimento para perros adultos de raza grande, marca Eukanuba.', 170, 1, 1, 0, '2020-11-19 19:49:31', '2020-11-19 20:18:06'),
(4, 'Eukanuba adult medium', 'Alimento para perros adultos de raza mediana, marca Eukanuba.', 170, 1, 1, 0, '2020-11-19 19:50:01', '2020-11-19 20:18:09'),
(5, 'Eukanuba adult small', 'Alimento para perros adultos de raza pequeña, marca Eukanuba.', 180, 1, 1, 0, '2020-11-19 19:50:28', '2020-11-19 20:18:15'),
(6, 'Eukanuba puppy medium', 'Alimento para perros cachorros de raza mediana, marca Eukanuba.', 180, 1, 1, 0, '2020-11-19 19:51:09', '2020-11-19 20:18:24'),
(7, 'Excellent cat adult', 'Alimento para gatos adultos, marca Excellent.', 200, 1, 1, 0, '2020-11-19 19:52:09', '2020-11-19 20:18:31'),
(8, 'Excellent dog adult', 'Alimento para perros adultos, marca Excellent.', 160, 1, 1, 0, '2020-11-19 19:52:42', '2020-11-19 20:18:34'),
(9, 'Iams cat adult', 'Alimento para gatos adultos, marca Iams.', 240, 1, 1, 0, '2020-11-19 19:53:11', '2020-11-19 20:18:36'),
(10, 'Pro Plan cat urinary', 'Alimento para gatos con problemas urinarios, marca Pro Plan.', 320, 1, 1, 0, '2020-11-19 19:54:05', '2020-11-19 20:18:39'),
(11, 'Pro Plan cat adult', 'Alimento para gatos adultos, marca Pro Plan.', 300, 1, 1, 0, '2020-11-19 19:54:32', '2020-11-19 20:18:41'),
(12, 'Pro Plan kitten', 'Alimento para gatos de hasta 12 meses, marca Pro Plan.', 320, 1, 1, 0, '2020-11-19 19:55:52', '2020-11-19 20:18:43'),
(13, 'Pro Plan puppy', 'Alimento para perros adultos cachorros de hasta 24 meses, marca Pro Plan.', 220, 1, 1, 0, '2020-11-19 19:56:47', '2020-11-19 20:18:46'),
(14, 'Royal Canin fit', 'Alimento para gatos adultos en fase de mantenimiento, marca Royal Canin.', 280, 1, 1, 0, '2020-11-19 19:57:53', '2020-11-19 20:18:52'),
(15, 'Royal Canin indoor', 'Alimento para gatos adultos de interior, marca Royal Canin.', 300, 1, 1, 0, '2020-11-19 19:58:41', '2020-11-19 20:18:59'),
(16, 'Royal Canin light', 'Alimento para controlar el peso de gatos adultos, marca Royal Canin.', 320, 1, 1, 0, '2020-11-19 20:00:14', '2020-11-19 20:19:02'),
(17, 'Royal Canin medium adult', 'Alimento para perros adultos de raza mediana, marca Royal Canin.', 180, 1, 1, 0, '2020-11-19 20:03:04', '2020-11-19 20:19:05'),
(18, 'Royal Canin mini adult', 'Alimento para perros adultos de raza pequeña, marca Royal Canin.', 230, 1, 1, 0, '2020-11-19 20:04:19', '2020-11-19 20:19:07'),
(19, 'Royal Canin medium junior', 'Alimento para perros cachorros de hasta 12 meses, de raza mediana, marca Royal Canin.', 190, 1, 1, 0, '2020-11-19 20:05:51', '2020-11-19 20:19:10'),
(20, 'Royal Canin mini junior', 'Alimento para perros cachorros de hasta 10 meses, de raza pequeña, marca Royal Canin.', 250, 1, 1, 0, '2020-11-19 20:07:12', '2020-11-19 20:19:12'),
(21, 'Camita almohadón', 'Camita para gatos o perros medianos, de forma rectangular. Color gris.', 700, 2, 1, 0, '2020-11-19 20:08:57', '2020-11-19 20:19:15'),
(22, 'Cucha donut', 'Cucha para perro mediano, con forma de dona y almohadón desmontable. Color negro.', 1000, 2, 1, 0, '2020-11-19 20:10:04', '2020-11-19 20:10:04'),
(23, 'Pelota tennis', 'Pelota de tennis para jugar.', 100, 3, 1, 0, '2020-11-19 20:10:41', '2020-11-19 20:10:41'),
(24, 'Rascador gris', 'Rascador para gatos de tres pisos, color gris.', 2100, 3, 1, 0, '2020-11-19 20:12:07', '2020-11-19 20:12:07'),
(25, 'Rascador leopardo', 'Rascador para gatos de un piso con pelotita para jugar, estampado de animal print.', 1600, 3, 1, 0, '2020-11-19 20:14:49', '2020-11-19 20:14:49'),
(26, 'Piedras sanitarias Poopy Pets x5kg', 'Piedras sanitarias para gatos x5kg, marca Poopy Pets.', 100, 4, 1, 0, '2020-11-19 20:16:15', '2020-11-19 20:16:15'),
(27, 'Shampoo Osspret', 'Shampoo con glicerina pulguicida, garrapaticida, marca Osspret.', 190, 4, 1, 0, '2020-11-19 20:17:38', '2020-11-19 20:17:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `idPersona` int(11) NOT NULL,
  `usuario` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `confirmacionCorreo` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 0,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `idPersona`, `usuario`, `password`, `confirmacionCorreo`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 1, 'mac', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', '06afbdf5-c10b-41d8-a426-1fd5828cd68b', 1, 0, '2020-11-25 19:29:59', '2020-12-30 16:25:23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `idCategoria` (`idCategoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `idPersona` (`idPersona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `personas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
