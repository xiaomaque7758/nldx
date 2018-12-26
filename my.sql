SET NAMES UTF8;
DROP DATABASE IF EXISTS nl;
CREATE DATABASE nl CHARSET=UTF8;
USE nl;

--轮播数据库 
CREATE TABLE banner(
    cid INT,
    title VARCHAR(48),
    src VARCHAR(100),
);
INSERT INTO banner VALUES
(1,'无','images/banner1.jpg'),
(2,'无','images/banner2.jpg'),
(3,'无','images/banner3.jpg'),
(4,'无','images/banner4.jpg'),








