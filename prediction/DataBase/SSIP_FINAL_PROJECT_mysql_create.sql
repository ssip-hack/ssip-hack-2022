-- Database create 
CREATE DATABASE ssip_final_project;
-- database use
use ssip_final_project;


-- student table create 
CREATE TABLE `student` (
	`student_id` INT NOT NULL AUTO_INCREMENT,
	`school_id` INT NOT NULL,
	`first_name` TEXT(50) NOT NULL,
	`middle_name` TEXT(50) NOT NULL,
	`last_name` TEXT(50) NOT NULL,
	`dob` DATE NOT NULL,
	`year` INT NOT NULL,
	`age` INT NOT NULL,
	`gender` INT NOT NULL,
	`orphan` INT NOT NULL,
	`aadhar_number` varchar(12) NOT NULL,
	`contact_number` VARCHAR(10) NOT NULL,
	`email` TEXT(50) NOT NULL,
	`district` INT NOT NULL,
	`cwsn` INT NOT NULL,
	`social_category` INT NOT NULL,
	`minority` INT NOT NULL,
	PRIMARY KEY (`student_id`)
);
-- parent table create 
CREATE TABLE `parent_details` (
	`student_id` INT NOT NULL,
	`first_name` TEXT(50) NOT NULL,
	`middle_name` TEXT(50) NOT NULL,
	`guradian_name` TEXT(50) NOT NULL,
	`contact_number` INT NOT NULL,
	`aadhar_number` INT NOT NULL,
	`father_occupation` INT NOT NULL,
	`mother_occupation` INT NOT NULL,
	`father_qualification` INT NOT NULL,
	`mother_qualification` INT NOT NULL
);
-- financial table create
CREATE TABLE `financial_details` (
	`student_id` INT NOT NULL,
	`annual_income` INT NOT NULL,
	`debt` INT NOT NULL,
	`bpl_beneficiary` INT NOT NULL,
	`ews` INT NOT NULL
);
-- academic table create
CREATE TABLE `academic_details` (
	`student_id` INT NOT NULL,
	`academic_stream` INT NOT NULL,
	`status_in_previous_year` INT NOT NULL,
	`result_in_previous_year` INT NOT NULL,
	`out_of_school_child` INT NOT NULL,
	`appeared_in_last_year_exam` INT NOT NULL,
	`scholarship_holder` INT NOT NULL,
	`dropped` INT NOT NULL
);
-- school table create
CREATE TABLE `school_details` (
	`school_id` INT NOT NULL AUTO_INCREMENT,
	`school_name` TEXT(50) NOT NULL,
	`email` TEXT(50) NOT NULL,
    `type` INT NOT NULL,
	`district` INT NOT NULL,
	`password` TEXT(50) NOT NULL,
	PRIMARY KEY (`school_id`)
);
-- admin table create
CREATE TABLE `admin` (
	`admin_id` INT NOT NULL AUTO_INCREMENT,
	`password` TEXT(50) NOT NULL,
	PRIMARY KEY (`admin_id`)
);



-- making foreign key for all table 
ALTER TABLE `student` ADD CONSTRAINT `student_fk0` FOREIGN KEY (`school_id`) REFERENCES `school_details`(`school_id`);
ALTER TABLE `parent_details` ADD CONSTRAINT `parent_details_fk0` FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`);
ALTER TABLE `financial_details` ADD CONSTRAINT `financial_details_fk0` FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`);
ALTER TABLE `academic_details` ADD CONSTRAINT `academic_details_fk0` FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`);


-- school data insert
insert into school_details (school_name, email, type, district, password)
values 
("Hiraba Vidhyalaya", "hirabav123@gmail.com", 0, 1, "Hiraba123"),
("Motherland international school", "mother@gmail.com", 1, 2, "mother12"),
("school of achiever","ssoa01@gmail.com", 1, 3, "achiever01"),
("sahajanand school", "sahajanand@gmail.com", 0, 4, "sahajanad17"), 
("uma international school", "uma221@gmail.com", 0, 5, "uma06")
;

-- student data insert
insert into student (school_id, first_name, middle_name, last_name, dob, year, age, gender, orphan, aadhar_number, contact_number, email, district, cwsn, social_category, minority)
 values 
(1, "Dhruv", "Rakeshbhai", "Patel", '2003-06-15', 2021, 18, 0, 0, 2345285, 9887765465, "dhruv@gmail.com", 1, 0, 1, 0),
(1, "Kovil", "Hasmukhbhai", "Savaj", '2010-01-17', 2019, 12, 0, 0, 3456498, 4657396675, "kovil@gmail.com", 1, 1, 1, 0),
(2, "Prince", "Hiteshbhai", "Malani", '2002-08-06', 2020, 12, 0, 0, 2385945, 9465732845, "prince@gmail.com", 2, 0, 1, 0),
(2, "Jay", "Ravindrabhai", "Patel", '2001-04-13', 2020, 6, 0, 1, 105647, 9786537685, "jay@gmail.com", 2, 0, 2, 0),
(2, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2019, 15, 1, 0, 1574839, 7685943543, "nancy@gmail.com", 2, 1, 1, 0),
(3, "Krutika", "Vijaybhai", "Patel", '2004-07-14', 2019, 11, 1, 0, 7860875, 8796546576, "krutika@gmail.com", 3, 0, 1, 0),
(3, "Aarya", "Rinkashbhai", "Patel", '2017-08-25', 2020, 5, 0, 0, 1234473, 0123435267, "aarya@gmail.com", 3, 0, 2, 0),
(5, "Romit", "Dhanjibhai", "Darji", '2020-09-27', 2019, 3, 0, 1, 3427687, 8796564375, "romit@gmail.com", 5, 0, 3, 1),
(4, "Dhwani", "Manjibhai", "Desai", '1970-01-17', 2019, 8, 1, 0, 2454578, 3456205768, "dhwani@gmail.com", 4, 1, 2, 0),
(4, "Himani", "Rudrabhai", "Agrawal", '1977-06-15', 2020, 4, 1, 1, 9786234, 5749345768, "himani@gmail.com", 4, 0, 4, 1),

(1, "Krunal", "Jaminbhai", "baji", '2015-06-15', 2020, 7, 0, 0, 1234354, 9870123574, "krunal@gmail.com", 1, 0, 1, 0),
(1, "Devang", "Ramnikbhai", "Bhat", '1978-01-17', 2019, 16, 0, 0, 123579, 5674327896, "devang@gmail.com", 1, 1, 3, 0),
(1, "Twincy", "Manojbhai", "patel", '2020-08-06', 2021, 12, 1, 1, 1234578, 9675893242, "twincy@gmail.com", 1, 0, 1, 1),
(1, "Mihir", "Bhavinbhai", "dobariya", '1997-04-13', 2020, 13, 0, 1, 123568, 7656786543, "mihir@gmail.com", 1, 0, 2, 0),
(1, "Kunj", "Chandubhai", "Mehata", '2000-09-21', 2020, 12, 1, 1, 1234667, 4567564897, "kunj@gmail.com", 1, 1, 1, 0),
(1, "Axit", "Kunjbhai", "Patel", '1993-07-14', 2019, 14, 0, 0, 123236, 4536787896, "axit@gmail.com", 1, 1, 4, 0),
(1, "Shreya", "Yogeshbhai", "Bhalodiya", '1981-08-25', 2019, 7, 1, 0, 123545, 4356789876, "shreya@gmail.com", 1, 0, 2, 1),
(1, "Shruti", "Hiteshbhai", "Gohil", '1990-09-27', 2021, 8, 1, 1, 1235434, 4537586945, "shruti@gmail.com", 1, 0, 3, 1),
(1, "Pinkal", "Dushiyantbhai", "Kapoor", '2007-01-17', 2020, 9, 1, 1, 96745, 5647583949, "pinkal@gmail.com", 1, 1, 2, 0),
(1, "Dhruvit", "Karanbhai", "Bhuj", '1988-06-15', 2020, 9, 1, 0, 9473658, 2934857675, "dhruvit@gmail.com", 1, 0, 4, 1),

(2, "Dhruv", "Rakeshbhai", "Patel", '2003-06-15', 2019, 4, 0, 0, 345297, 9886765465, "dhruv@gmail.com", 2, 0, 1, 0),
(2, "Devang", "Ramnikbhai", "Bhat", '1978-01-17', 2019, 3, 0, 0, 45456, 5678927896, "devang@gmail.com", 2, 1, 3, 0),
(2, "Prince", "Hiteshbhai", "Malani", '2002-08-06', 2019, 4, 1, 0, 2345734, 9685732845, "prince@gmail.com", 2, 0, 1, 0),
(2, "Jay", "Ravindrabhai", "Patel", '2001-04-13', 2020, 7, 1, 1, 1023537, 9767537685, "jay@gmail.com", 2, 0, 2, 0),
(2, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2019, 9, 0, 0, 126879, 7685233543, "nancy@gmail.com", 2, 0, 1, 0),
(2, "Axit", "Kunjbhai", "Patel", '1993-07-14', 2021, 5, 1, 1, 123234, 4536756896, "axit@gmail.com", 2, 0, 4, 0),
(2, "Shreya", "Yogeshbhai", "Bhalodiya", '1981-08-25', 2020, 12, 1, 0, 126545, 4456789876, "shreya@gmail.com", 2, 0, 3, 1),
(2, "Romit", "Dhanjibhai", "Darji", '2020-09-27', 2021, 3, 0, 1, 342558, 8796568975, "romit@gmail.com", 2, 0, 3, 1),
(2, "Pinkal", "Dushiyantbhai", "Kapoor", '2007-01-17', 2021, 4, 1, 1, 967364, 5677583949, "pinkal@gmail.com", 2, 1, 2, 0),
(2, "Himani", "Rudrabhai", "Agrawal", '1977-06-15', 2020, 17, 0, 0, 9786103, 5749235768, "himani@gmail.com", 2, 0, 4, 1),

(3, "Twincy", "Manojbhai", "patel", '2020-08-06', 2019, 14, 1, 0, 123765, 9675333242, "twincy@gmail.com", 3, 0, 1, 1),
(3, "Kovil", "Hasmukhbhai", "Savaj", '2010-01-17', 2021, 15, 0, 0, 3454595, 4654496675, "kovil@gmail.com", 3, 1, 2, 0),
(3, "Prince", "Hiteshbhai", "Malani", '2002-08-06', 2019, 11, 0, 0, 232434, 9477732845, "prince@gmail.com", 3, 0, 1, 0),
(3, "Jay", "Ravindrabhai", "Patel", '2001-04-13', 2021, 8, 0, 1, 102532, 9786557685, "jay@gmail.com", 3, 0, 2, 0),
(3, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2020, 9, 1, 0, 127394, 7685941143, "nancy@gmail.com", 3, 1, 1, 0),
(3, "Jay", "Ravindrabhai", "Patel", '2001-04-13', 2021, 14, 1, 0, 102382, 9767567685, "jay@gmail.com", 3, 0, 3, 0),
(3, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2019, 4, 0, 0, 1268564, 7685237643, "nancy@gmail.com", 3, 0, 3, 0),
(3, "Axit", "Kunjbhai", "Patel", '1993-07-14', 2020, 3, 1, 0, 123578, 4536754596, "axit@gmail.com", 3, 0, 4, 0),
(3, "Dhwani", "Manjibhai", "Desai", '1970-01-17', 2021, 6, 1, 0, 2456965, 3453005768, "dhwani@gmail.com", 3, 1, 2, 1),
(3, "Devang", "Ramnikbhai", "Bhat", '1978-01-17', 2019, 9, 0, 0, 1298765, 5674627896, "devang@gmail.com", 3, 1, 3, 0),

(4, "Dhruv", "Rakeshbhai", "Patel", '2003-06-15', 2019, 5, 0, 0, 2345232, 9887565465, "dhruv@gmail.com", 4, 0, 4, 0),
(4, "Prince", "Hiteshbhai", "Malani", '2002-08-06', 2020, 13, 1, 0, 2345654, 9678732845, "prince@gmail.com", 4, 0, 1, 0),
(4, "Jay", "Ravindrabhai", "Patel", '2001-04-13', 2021, 8, 1, 1, 102352, 9767347685, "jay@gmail.com", 4, 0, 2, 0),
(4, "Jay", "Ravindrabhai", "Patel", '2001-04-13', 2021, 7, 0, 0, 105382, 9786627685, "jay@gmail.com", 4, 0, 2, 0),
(4, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2020, 15, 1, 0, 1583864, 7685947443, "nancy@gmail.com", 4, 1, 1, 0),
(4, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2019, 8, 1, 0, 1268934, 7685949043, "nancy@gmail.com", 4, 1, 1, 0),
(4, "Jay", "Ravindrabhai", "Patel", '2001-04-13', 2020, 13, 1, 0, 1023382, 9767157685, "jay@gmail.com", 4, 0, 3, 0),
(4, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2019, 15, 1, 0, 126864, 7685235543, "nancy@gmail.com", 4, 0, 3, 0),
(4, "Shreya", "Yogeshbhai", "Bhalodiya", '1981-08-25', 2020, 12, 1, 0, 167690, 4676789876, "shreya@gmail.com", 4, 0, 2, 1),
(4, "Shruti", "Hiteshbhai", "Gohil", '1990-09-27', 2021, 18, 1, 1, 123549, 4537583645, "shruti@gmail.com", 4, 0, 3, 1),

(5, "Dhruv", "Rakeshbhai", "Patel", '2003-06-15', 2019, 18, 0, 0, 23432, 9787335465, "dhruv@gmail.com", 5, 0, 4, 0),
(5, "Prince", "Hiteshbhai", "Malani", '2002-08-06', 2020, 18, 1, 0, 478654, 9656732845, "prince@gmail.com", 5, 0, 1, 0),
(5, "Prince", "Hiteshbhai", "Malani", '2002-08-06', 2019, 10, 0, 0, 237634, 9423732845, "prince@gmail.com", 5, 0, 1, 1),
(5, "Jay", "Ravindrabhai", "Patel", '2001-04-13', 2020, 10, 0, 1, 102382, 9786787685, "jay@gmail.com", 5, 0, 2, 0),
(5, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2019, 16, 1, 0, 126564, 7685945843, "nancy@gmail.com", 5, 0, 1, 0),
(5, "Dhruv", "Rakeshbhai", "Patel", '2003-06-15', 2021, 11, 0, 0, 237732, 9887245465, "dhruv@gmail.com", 5, 0, 3, 0),
(5, "Kovil", "Hasmukhbhai", "Savaj", '2010-01-17', 2020, 9, 1, 0, 342965, 4654696675, "kovil@gmail.com", 5, 1, 1, 0),
(5, "Nancy", "Rajubhai", "Patel", '2004-09-21', 2021, 17, 0, 0, 126234, 7685232743, "nancy@gmail.com", 5, 0, 3, 0),
(5, "Mihir", "Bhavinbhai", "dobariya", '1997-04-13', 2019, 9, 0, 1, 128987, 7786786543, "mihir@gmail.com", 5, 0, 2, 0),
(5, "Kunj", "Chandubhai", "Mehata", '2000-09-21', 2019, 5, 1, 1, 123460, 4567794897, "kunj@gmail.com", 5, 1, 1, 0)
;
-- academic data insert
insert into academic_details (student_id, academic_stream, status_in_previous_year, result_in_previous_year, out_of_school_child, appeared_in_last_year_exam, scholarship_holder, dropped)
values 
(1, 1,1,1,1,1,1,1),
(2, 1,1,1,1,1,1,1),
(3, 1,1,1,1,1,1,1),
(4, 1,1,1,1,1,1,0),
(5, 1,1,1,1,1,1,1),
(6, 1,1,1,1,1,1,0),
(7, 1,1,1,1,1,1,1),
(8, 1,1,1,1,1,1,1),
(9, 1,1,1,1,1,1,0),
(10, 1,1,1,1,1,1,1),
(11, 1,1,1,1,1,1,0),
(12, 1,1,1,1,1,1,0),
(13, 1,1,1,1,1,1,1),
(14, 1,1,1,1,1,1,0),
(15, 1,1,1,1,1,1,0),
(16, 1,1,1,1,1,1,1),
(17, 1,1,1,1,1,1,1),
(18, 1,1,1,1,1,1,1),
(19, 1,1,1,1,1,1,0),
(20, 1,1,1,1,1,1,1),
(21, 1,1,1,1,1,1,1),
(22, 1,1,1,1,1,1,1),
(23, 1,1,1,1,1,1,0),
(24, 1,1,1,1,1,1,1),
(25, 1,1,1,1,1,1,0),
(26, 1,1,1,1,1,1,1),
(27, 1,1,1,1,1,1,1),
(28, 1,1,1,1,1,1,0),
(29, 1,1,1,1,1,1,1),
(30, 1,1,1,1,1,1,1),
(31, 1,1,1,1,1,1,1),
(32, 1,1,1,1,1,1,0),
(33, 1,1,1,1,1,1,1),
(34, 1,1,1,1,1,1,1),
(35, 1,1,1,1,1,1,1),
(36, 1,1,1,1,1,1,1),
(37, 1,1,1,1,1,1,1),
(38, 1,1,1,1,1,1,0),
(39, 1,1,1,1,1,1,1),
(40, 1,1,1,1,1,1,1),
(41, 1,1,1,1,1,1,1),
(42, 1,1,1,1,1,1,1),
(43, 1,1,1,1,1,1,1),
(44, 1,1,1,1,1,1,1),
(45, 1,1,1,1,1,1,0),
(46, 1,1,1,1,1,1,1),
(47, 1,1,1,1,1,1,1),
(48, 1,1,1,1,1,1,1),
(49, 1,1,1,1,1,1,1),
(50, 1,1,1,1,1,1,1),
(51, 1,1,1,1,1,1,1),
(52, 1,1,1,1,1,1,0),
(53, 1,1,1,1,1,1,1),
(54, 1,1,1,1,1,1,1),
(55, 1,1,1,1,1,1,1),
(56, 1,1,1,1,1,1,1),
(57, 1,1,1,1,1,1,1),
(58, 1,1,1,1,1,1,0),
(59, 1,1,1,1,1,1,1),
(60, 1,1,1,1,1,1,1)
;


-- verify the inserted data 
select * from school_details;
select * from student;
select * from academic_details;
-- select * from parent_details;
-- select * from financial_details;


--                                 REQUIRED QUERIES 

-- TOTAL STUDENT 
select count(*) as TOTAL_STUDENT from student;
-- Total DROPPED
select count(*) as TOTAL_DROPPED_STUDENT from student inner join academic_details on student.student_id=academic_details.student_id 
where academic_details.dropped=1;


-- Total number of male and female ENROLLED
select gender, count(*) as STUDENT_ENROLLED from student group by gender;
-- Total number of male and female DROPPED
select student.gender as GENDER,count(*) as DROPPED_STUDENT from student inner join academic_details on student.student_id=academic_details.student_id 
where academic_details.dropped=1 group by student.gender;


-- Particular age group wise mail and female ENROLLED(for all 4 age group)
		-- 3-6
select COUNT(student.student_id) as "3-6 AGE"  from (student inner join academic_details on student.student_id=academic_details.student_id) 
where student.age>=3 and student.age<=6 and academic_details.dropped=1;
		-- 6-8
select COUNT(student.student_id) as "6-8 AGE"  from (student inner join academic_details on student.student_id=academic_details.student_id) 
where student.age>6 and student.age<=8 and academic_details.dropped=1;
		-- 8-11
select COUNT(student.student_id) as "8-11 AGE"  from (student inner join academic_details on student.student_id=academic_details.student_id) 
where student.age>8 and student.age<=11 and academic_details.dropped=1;
		-- 11-14
select COUNT(student.student_id) as "11-14 AGE"  from (student inner join academic_details on student.student_id=academic_details.student_id) 
where student.age>11 and student.age<=14 and academic_details.dropped=1;
		-- 14-18
select COUNT(student.student_id) as "14-18 AGE"  from (student inner join academic_details on student.student_id=academic_details.student_id) 
where student.age>14 and student.age<=18 and academic_details.dropped=1;

-- YEAR WISE total student
select year, count(*) as TOTAL_STUDENT from student group by year;
-- YEAR WISE DROPED
select student.year, count(*) as TOTAL_STUDENT from (student inner join academic_details on student.student_id=academic_details.student_id) 
where academic_details.dropped=1 group by student.year;

-- Total no. of school REGISTER
select count(*) as TOTAL_SCHOOL from school_details; 


-- Total number of PRIVATE and GOVT SCHOOL:-
select type,count(*) as TOTAL_SCHOOL from school_details group by type;
-- SCHOOL wise TOTAL STUDENT
select school_id, count(*) as TOTAL_STUDENT from student group by school_id ;
-- SCHOOL WISE DROPPED 
select school_id, count(*) as DROPPED_STUDENT from (student inner join academic_details on student.student_id=academic_details.student_id) 
where academic_details.dropped=1 group by school_id;


-- district wise total student 
select school_details.district as DISTRICT, count(*) as TOTAL_STUDENT from (school_details inner join student 
on student.school_id=school_details.school_id)  
group by school_details.school_id ;

-- caste wise total student
select social_category,count(*) as TOTAL_STUDENT from student group by social_category;

describe student;