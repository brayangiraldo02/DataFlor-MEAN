-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 02-11-2023 a las 12:46:59
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dataflor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flowershops`
--

DROP TABLE IF EXISTS `flowershops`;
CREATE TABLE IF NOT EXISTS `flowershops` (
  `idflowershops` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(15) NOT NULL,
  `state` enum('Activate','Inactive') NOT NULL DEFAULT 'Activate',
  PRIMARY KEY (`idflowershops`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `flowershops`
--

INSERT INTO `flowershops` (`idflowershops`, `fullname`, `address`, `phone`, `state`) VALUES
(1, 'D Juanis Floristeria', 'Cra 6 # 30 - 23', '3046743798', 'Activate'),
(2, 'Floristería Mil Bendiciones', 'Cra 6 #30-13', '3104467504', 'Activate'),
(3, 'Amapolis', 'Cra 6 # 30 - 02', '3108243480', 'Activate');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `imageid` int NOT NULL AUTO_INCREMENT,
  `productid` int NOT NULL,
  `imageurl` varchar(500) NOT NULL,
  PRIMARY KEY (`imageid`),
  KEY `fk_productid` (`productid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventory`
--

DROP TABLE IF EXISTS `inventory`;
CREATE TABLE IF NOT EXISTS `inventory` (
  `inventoryid` int NOT NULL AUTO_INCREMENT,
  `idflowershops` int NOT NULL,
  `productid` int NOT NULL,
  `quantity` int NOT NULL,
  `providerid` int NOT NULL,
  `state` enum('Activate','Inactive') NOT NULL DEFAULT 'Activate',
  PRIMARY KEY (`inventoryid`),
  KEY `fk_idflowershops` (`idflowershops`),
  KEY `fk_productid` (`productid`),
  KEY `fk_providerid` (`providerid`)
) ;

--
-- Volcado de datos para la tabla `inventory`
--

INSERT INTO `inventory` (`inventoryid`, `idflowershops`, `productid`, `quantity`, `providerid`, `state`) VALUES
(1, 1, 1, 3, 2, 'Activate'),
(2, 1, 2, 1, 3, 'Inactive'),
(3, 1, 3, 10, 3, 'Activate'),
(4, 1, 2, 5, 1, 'Activate'),
(5, 1, 4, 8, 3, 'Activate');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `productid` int NOT NULL AUTO_INCREMENT,
  `productname` varchar(255) NOT NULL,
  `description` text,
  `price` float NOT NULL,
  `state` enum('Available','Unavailable') NOT NULL DEFAULT 'Available',
  PRIMARY KEY (`productid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`productid`, `productname`, `description`, `price`, `state`) VALUES
(1, 'Margaritas', NULL, 5000, 'Available'),
(2, 'Rosas', 'Rojas', 24000, 'Available'),
(3, 'Eliconia', NULL, 10000, 'Available'),
(4, 'Girasoles', NULL, 50000, 'Available');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `providers`
--

DROP TABLE IF EXISTS `providers`;
CREATE TABLE IF NOT EXISTS `providers` (
  `providerid` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `state` enum('Activate','Inactive') NOT NULL DEFAULT 'Activate',
  PRIMARY KEY (`providerid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `providers`
--

INSERT INTO `providers` (`providerid`, `fullname`, `phone`, `address`, `state`) VALUES
(1, 'Rosas Bogotanas', '3216549878', 'Bogotá', 'Activate'),
(2, 'Rosas Ecuatorianas', '9876543216', 'Ecuador', 'Activate'),
(3, 'Girasoles cali', '3057896352', 'Cali', 'Activate');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

DROP TABLE IF EXISTS `sales`;
CREATE TABLE IF NOT EXISTS `sales` (
  `saleid` int NOT NULL AUTO_INCREMENT,
  `clientname` varchar(255) NOT NULL,
  `userid` int NOT NULL,
  `productid` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`saleid`),
  KEY `fk_userid` (`userid`),
  KEY `fk_productid` (`productid`)
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `role` enum('Admin','Dueño','Empleado') NOT NULL,
  `idflowershops` int DEFAULT NULL,
  `state` enum('Activate','Inactive') NOT NULL DEFAULT 'Activate',
  PRIMARY KEY (`userid`),
  KEY `fk_idflowershops` (`idflowershops`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userid`, `username`, `password`, `fullname`, `phone`, `role`, `idflowershops`, `state`) VALUES
(1, 'ADMIN', '123', 'Brayan Giraldo', '3215884968', 'Admin', NULL, 'Activate'),
(2, 'dgiraldo', '123', 'Dayana Giraldo', '3046743798', 'Dueño', 1, 'Activate'),
(3, 'gsepulvedag', '123', 'Geiner Sepulveda', '3104467504', 'Dueño', 2, 'Activate'),
(4, 'brayancg1', '123', 'Brayan Giraldo', '3215884968', 'Empleado', 1, 'Activate'),
(5, 'bgiraldo', '123', 'Brayan Giraldo', '3215884968', 'Dueño', 1, 'Activate');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
