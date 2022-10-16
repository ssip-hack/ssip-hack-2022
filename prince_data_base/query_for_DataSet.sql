create database final_data;
use final_data
create table final_data_set( 
	orphan int ,
    social_category int ,
    minority_group int ,
    bpl_beneficiary int,final_data_set
    ews_group int ,
    cwsn int ,
    mothers_occupation int,
    fathers_occupation int,
    mothers_qualification int ,
    fathers_qualification int ,
    family_annual_income int ,
    debt int , 
    mental_issues int ,
    results_in_previous_year_type int ,
    status_in_previous_year int ,
    dropout_student int , 
    age_group int,
    district int ,
    gender int ,
    label int ,
    dropout int 
);

insert into final_data_set( orphan , social_category , minority_group , bpl_beneficiary , ews_group ,
cwsn , mothers_occupation , fathers_occupation , mothers_qualification , fathers_qualification , family_annual_income ,
debt , mental_issues , results_in_previous_year_type , status_in_previous_year , dropout_student , age_group ,
district , gender , label , dropout ) values (1,4,7,1,0,1,0,0,0,0,0,0,0,3,4,1,3,23,0,0,0);

select * from students;

select age, count(if(age = 19, age, 0) ) as totalStudents  from students group by age;

select SUM(bpl)
from students 
where orphan = 0 
group by district 
order by district;

select  count(orphan) , count(social_category) , count(minority_group) ,
 count(bpl_beneficiary) , count(ews_group) ,
count(cwsn) , count(mothers_occupation) , count(fathers_occupation) , 
count(mothers_qualification) , count(fathers_qualification) , count(family_annual_income) ,
count(debt) , count(mental_issues) , count(results_in_previous_year_type) , 
count(status_in_previous_year) , 
count(dropout_student) , count(age_group) ,
count(district) , count(gender) , count(label) , count(dropout)
from final_data_set
group by district 
order by district;

select  AVG(orphan) , AVG(social_category) , AVG(minority_group) ,
 AVG(bpl_beneficiary) , AVG(ews_group) ,
AVG(cwsn) , AVG(mothers_occupation) , AVG(fathers_occupation) , 
AVG(mothers_qualification) , AVG(fathers_qualification) , AVG(family_annual_income) ,
AVG(debt) , AVG(mental_issues) , AVG(results_in_previous_year_type) , 
AVG(status_in_previous_year) , 
AVG(dropout_student) , AVG(age_group) ,
AVG(district) , AVG(gender) , AVG(label) , AVG(dropout)
from final_data_set
group by district 
order by district;

select  SUM(orphan) , SUM(social_category) , SUM(minority_group) ,
 SUM(bpl_beneficiary) , SUM(ews_group) ,
SUM(cwsn) , SUM(mothers_occupation) , SUM(fathers_occupation) , 
SUM(mothers_qualification) , SUM(fathers_qualification) , SUM(family_annual_income) ,
SUM(debt) , SUM(mental_issues) , SUM(results_in_previous_year_type) , 
SUM(status_in_previous_year) , 
SUM(dropout_student) , SUM(age_group) ,
SUM(district) , SUM(gender) , SUM(label) , SUM(dropout)
from final_data_set
group by district 
order by district;


