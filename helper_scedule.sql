-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: helper
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `scedule`
--

DROP TABLE IF EXISTS `scedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scedule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cleanerId` int NOT NULL,
  `time` int NOT NULL,
  `sunday` varchar(45) NOT NULL,
  `monday` varchar(45) NOT NULL,
  `tuesday` varchar(45) NOT NULL,
  `wednesday` varchar(45) NOT NULL,
  `thursday` varchar(45) NOT NULL,
  `friday` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk228_idx` (`cleanerId`),
  CONSTRAINT `fk228` FOREIGN KEY (`cleanerId`) REFERENCES `cleaner` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scedule`
--

LOCK TABLES `scedule` WRITE;
/*!40000 ALTER TABLE `scedule` DISABLE KEYS */;
INSERT INTO `scedule` VALUES (1,35,1,'t','f','f','f','t','f'),(2,35,2,'t','f','t','t','t','t'),(3,35,3,'t','f','f','t','t','f'),(4,38,1,'t','t','t','t','t','t'),(5,38,2,'t','t','f','f','t','t'),(6,38,3,'f','f','t','t','f','t'),(7,39,1,'f','f','f','f','f','f'),(8,39,2,'f','f','f','f','f','f'),(9,39,3,'f','f','f','f','f','f'),(10,40,1,'f','f','f','f','f','f'),(11,40,2,'f','f','f','f','f','f'),(12,40,3,'f','f','f','f','f','f');
/*!40000 ALTER TABLE `scedule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-01 15:45:30
