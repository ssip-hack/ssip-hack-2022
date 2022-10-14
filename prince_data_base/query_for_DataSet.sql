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

select * from final_data_set

select avg(bpl_beneficiary) 
from final_data_set 
where orphan = 0 
group by district 
order by district ;
