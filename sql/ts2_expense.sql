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
-- Table structure for table `expense`
--

DROP TABLE IF EXISTS `expense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expense` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reason` varchar(255) NOT NULL,
  `amount` int NOT NULL,
  `user_id` int NOT NULL,
  `isValid` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `expense_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expense`
--

LOCK TABLES `expense` WRITE;
/*!40000 ALTER TABLE `expense` DISABLE KEYS */;
INSERT INTO `expense` VALUES (1,'not food',400,1,1,'2023-11-25 11:44:18','2023-11-25 11:44:18'),(2,'snacks',50,1,1,'2023-11-25 11:44:18','2023-12-09 20:38:52'),(3,'spend in party',50,6,1,'2023-11-30 16:11:30','2023-12-09 20:38:52'),(4,'By mistakely spend',100,6,1,'2023-11-30 16:12:45','2023-12-09 20:38:52'),(5,'Spend in market',50,6,1,'2023-12-09 12:18:08','2023-12-09 20:38:52'),(6,'Spend in market',50,6,1,'2023-12-09 12:18:54','2023-12-09 20:38:52'),(7,'Spend in market',50,6,1,'2023-12-09 12:19:09','2023-12-09 20:38:52'),(8,'Spend in market',50,6,1,'2023-12-09 12:21:12','2023-12-09 20:38:52'),(9,'Spend in market',50,6,1,'2023-12-09 12:21:34','2023-12-09 20:38:52'),(10,'Spend in market',50,6,1,'2023-12-09 12:23:07','2023-12-09 20:38:52'),(11,'Spend in market',50,6,1,'2023-12-09 12:24:06','2023-12-09 20:38:52'),(12,'Spend in market',50,6,1,'2023-12-09 12:27:08','2023-12-09 20:38:52'),(13,'Spend in market',50,6,1,'2023-12-09 14:19:26','2023-12-09 20:38:52'),(14,'Spend in market',50,6,1,'2023-12-09 14:20:18','2023-12-09 20:38:52'),(15,'Spend in market',50,6,1,'2023-12-09 14:20:37','2023-12-09 20:38:52'),(16,'dsfsdf',222,6,1,'2023-12-09 15:02:59','2023-12-09 20:38:52'),(17,'Spend in market',50,6,1,'2023-12-09 15:51:53','2023-12-09 20:38:52'),(18,'sdafds',222,6,1,'2023-12-09 16:00:27','2023-12-09 20:38:52'),(19,'fdsfsdf',33,6,1,'2023-12-09 16:01:16','2023-12-09 20:38:52'),(20,'sdght',22,6,1,'2023-12-09 16:02:28','2023-12-09 20:38:52'),(21,'afdgefg',1000,6,1,'2023-12-09 16:04:13','2023-12-09 20:38:52'),(22,'fdg',1000,6,1,'2023-12-09 16:04:43','2023-12-09 20:38:52'),(23,'agghe',2000,6,1,'2023-12-09 16:06:31','2023-12-09 20:38:52'),(24,'dsaflkdsjfd;ok',600,6,1,'2023-12-09 16:06:42','2023-12-09 20:38:52'),(25,'sadfa',33,9,1,'2023-12-10 06:22:50','2023-12-10 06:22:50'),(26,'Spend in market',20,6,0,'2023-12-10 08:10:26','2023-12-10 08:10:30'),(27,'purchased tv set',300,6,0,'2023-12-10 08:10:48','2023-12-10 08:10:53'),(28,'Spend in market',100,6,1,'2023-12-10 08:55:57','2023-12-10 08:55:57'),(29,'Dont like to spend money in market',30,6,1,'2023-12-10 08:56:08','2023-12-10 08:56:08'),(30,'Spend in hotel',500,11,1,'2023-12-10 10:37:23','2023-12-10 10:37:23'),(31,'given to my friend ramesh',100,11,1,'2023-12-10 10:48:17','2023-12-10 10:48:17');
/*!40000 ALTER TABLE `expense` ENABLE KEYS */;
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
