CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS tasks(
    id int not null auto_increment,
    title varchar(100),
    desciption text,
    primary key (id)

)

insert into tasks(title, description)VALUES
('task 1 ','description 1'),
('task 2 ','description 2'),
('task 3 ','description 3')