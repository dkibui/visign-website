-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: demo
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.10.1

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
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `bio_detail` text NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Amy','Inda','Amy is a creative lifestyle blogger based in Nairobi East Africa.','amy.inda@gmail.com'),(2,'Jamie','Goldstein','Jamie is a coder based in San Fransisco. She loves to writer tutorial blogs during her free time.','jamie.g@gmail.com');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `blogs_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,3,2,'What is \"this\" in Javascript','CodeWall has many articles on topics as such as.....','Created by British web developer Dan English by, CodeWall is a website providing useful, in-depth tutorials for both front-end and back-end developers.','2021-02-22 12:49:59'),(2,5,1,'MySQL\'s Primary Key.','Learn how to use MySQL primary key constraint to create the primary key for a table.','A primary key is a column or a set of columns that uniquely identifies each row in the table. The primary key follows these rules.','2021-02-22 12:49:59'),(4,4,2,'Expressjs Tutorial.','Express is a fast, assertive, essential and moderate web framework of Node.js.','You can assume express as a layer built on the top of the Nodejs that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications. We will see some of the core features of Express framework later.','2021-02-23 10:45:46'),(5,1,1,'HTML Beginner Tutorial.','The HTML Beginner Tutorial assumes that you have absolutely no previous knowledge of HTML or CSS.','The primary thing to keep in mind, the supermagic key, is that HTML is used for meaning and CSS is used for presentation. HTML is nothing more than fancy structured content and the visual formatting of that content will come later when we tackle CSS. You might find different approaches elsewhere on the web but HTML Dog focuses on best practice from the outset and getting into the frame of mind of doing things the right way from the start will lead to much better results in the end.','2021-02-24 07:43:32'),(7,5,1,'Connect to MySQL using the command line','Summary: in this tutorial, you will learn how to connect to MySQL Server using mysql command line client and MySQL Workbench.','mysql is a command line client program that allows you to interact with MySQL in the interactive and non interactive mode.\n\nThe mysql command line client is typically located in the bin directory of the MySQL’s installation folder.\n\nTo invoke the mysql program, you just simply navigate to the bin directory of the MySQL’s installation folder and type:','2021-02-25 17:11:55'),(9,1,1,'Create a Blog Layout in HTML','In this post, we will create a full-page blog layout. ','This is the fifth post and video in a series on learning web development. You may need to check out the first post to learn how to get set up to begin coding:','2021-02-28 07:07:55'),(19,1,1,'Qwerty','Holly hell. That just worked','This update works!','2021-03-04 11:10:37'),(21,1,1,'Last check','You gotta do a final check to confirm everything works!','Time of truce. Will this upload?','2021-03-07 16:21:35');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'HTML'),(2,'CSS'),(3,'JavaScript'),(4,'Nodejs'),(5,'SQL'),(6,'Svelte');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `job_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `job_location` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `salary` varchar(255) NOT NULL,
  `details` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,'Head of procurement','Procurement','Nairobi','Safaricom','120,000','Creative procurement employee','2021-02-19 15:32:47'),(2,'h','b',' j','n ','22','fhv b','2021-02-19 15:36:13'),(3,'Digital Sales and Marketing Lead at The RED Petal Florists','Marketing & Communications','Nairobi','The RED Petal Florist','120000','Maintaining the digital marketing calendar and schedule and pushing out all approved digital marketing communication to the intended audience within the agreed timelines and on all approved channels.','2021-02-21 10:46:46');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-07 19:25:50
