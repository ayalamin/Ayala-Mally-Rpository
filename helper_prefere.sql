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
-- Table structure for table `prefere`
--

DROP TABLE IF EXISTS `prefere`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prefere` (
  `userId` int NOT NULL,
  `expertise` int NOT NULL,
  `religion` int DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `find` int DEFAULT '0',
  `city` int DEFAULT NULL,
  KEY `fk10_idx` (`userId`),
  KEY `nk1_idx` (`city`),
  KEY `nk2_idx` (`expertise`),
  KEY `nk3_idx` (`gender`),
  KEY `nk4_idx` (`religion`),
  CONSTRAINT `fk10` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `nk1` FOREIGN KEY (`city`) REFERENCES `cities` (`id`),
  CONSTRAINT `nk2` FOREIGN KEY (`expertise`) REFERENCES `expertise` (`id`),
  CONSTRAINT `nk3` FOREIGN KEY (`gender`) REFERENCES `gender` (`id`),
  CONSTRAINT `nk4` FOREIGN KEY (`religion`) REFERENCES `religion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prefere`
--

LOCK TABLES `prefere` WRITE;
/*!40000 ALTER TABLE `prefere` DISABLE KEYS */;
INSERT INTO `prefere` VALUES (1,1,1,1,20,3,1),(18,1,1,1,87654,16,1),(8,1,1,1,34567,15,1),(5,1,0,0,3456,1,1),(7,1,1,1,15,2,1);
/*!40000 ALTER TABLE `prefere` ENABLE KEYS */;
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
