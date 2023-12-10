-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: ts2
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'vishwajeet','v@gmail.com','$2b$10$cO4a/jh7O.pySVZtPYb6MOB8U2yXwUSdgJiqJrKo6gVJOMHkqJoS.','2023-11-25 11:44:41','2023-11-25 11:44:41'),(2,'','v@gmail.com','$2b$10$bCff5nMxncasyFk4AjDAl.3VtRrS2nTng2mTKCHDmlti55vAyiRIa','2023-11-30 15:14:34','2023-11-30 15:14:34'),(3,'fdsf','v.com','$2b$10$AUBFacIijKzR0RoWrQtKEuNWHUMdCwPMYgQZxSmTdNHi8XD/VRxuK','2023-11-30 15:20:07','2023-11-30 15:20:07'),(4,'fdsf','vish@gmail.com','$2b$10$3sQcZL0YjG6yOJyCCBtPxOgr99v4Aun4HgoezMZ1v5TdYWFSd6.Da','2023-11-30 15:20:51','2023-11-30 15:20:51'),(5,'fdsf','vish@gmail.com','$2b$10$m5FFTg24DCLK/BMs9cg6TOuwqcwtODczqLj1xWs0DwCyXynxm5rU.','2023-11-30 15:22:06','2023-11-30 15:22:06'),(6,'dj','dj@gmail.com','$2b$10$BG1dKhSgrg5IhLoi0EHHSOf9vJ3u8BaGgOACrXZz4wciifG4XRjR.','2023-11-30 15:57:58','2023-11-30 15:57:58'),(7,'vishwajeet','vish@gmail.com','$2b$10$MC10dB.4IFScvNdT4.9YK.ZQTUm5E3Ge1gPCke9C.5bnqxIbmQNoq','2023-12-05 15:43:24','2023-12-05 15:43:24'),(8,'dj','dj@gmail.com','$2b$10$oUqLki4pv8aa0/8Oj8.ePOS/mVR7Ycsp6TvNp96ug9yhObOz5CPZK','2023-12-05 15:45:38','2023-12-05 15:45:38'),(9,'Vish','shiv@gmail.com','$2b$10$il8HszA8LVPoi6kKbgIiPueho/q5WbXu89jH2rvFoJ8paWWWRDA9O','2023-12-10 06:22:01','2023-12-10 06:22:01'),(10,'Ramesh','ramesh@gmail.com','$2b$10$P5v.6BjIeZzb6zYfqv4gheq1H9pTHQrUUThZO9ETZ83c2Iahnaukq','2023-12-10 10:30:31','2023-12-10 10:30:31'),(11,'Raju','raju@gmail.com','$2b$10$RPb8Zpsd2AgwpE32ITw8FOWHS2tqHJ1Gh8cy4ZHlMQmSSzLE5hZze','2023-12-10 10:30:52','2023-12-10 10:30:52');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-10 16:29:26
