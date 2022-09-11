---
marp: true
---

# Dataset modules

Contains the details of each column in the different dataset. (For the reference use)

---

# 1. Student Dataset

| Column Name         | Type   | Description                                                         |
| ------------------- | ------ | ------------------------------------------------------------------- |
| Student_Name        | string |                                                                     |
| Gender              | int    | 1-Male, 2-Female, 3-Other                                           |
| Date_of_birth       | date   |                                                                     |
| Mother's_name       | string |                                                                     |
| Father's_name       | string |                                                                     |
| Guardian's_name     | string |                                                                     |
| Orphan              | int    | 1-yes, 0-no                                                         |
| no_of_siblings      | int    |                                                                     |
| Adhaar_No.          | int    | Works as an unique key                                              |
| Address             | string |                                                                     |
| PinCode             | int    |                                                                     |
| Mobile_Number       | int    |                                                                     |
| Contact_email_id    | string |                                                                     |
| mother_tongue       | string |                                                                     |
| social_category     | int    | (SC-1, ST-2, OBC-3, General-4)                                      |
| minority_group      | int    | (Muslim -1, Christian-2, Sikh-3, Buddhist-4, Parsi-5, Jain-6, NA-7) |
| bpl_beneficiary     | int    | Yes -1, No-0                                                        |
| ews_group           | int    | Yes-1,no-0                                                          |
| cwsn                | int    | yes-1, no-0                                                         |
| indian_nationality  | int    | yes-1, no-0                                                         |
| out_of_school_child | int    | yes-1, no-0                                                         |

---

# 2. Parent Dataset

| Column Name            | Type   | Description                                                                |
| ---------------------- | ------ | -------------------------------------------------------------------------- |
| mother's_name          | string |                                                                            |
| father's_name          | string |                                                                            |
| contact_no             | int    |                                                                            |
| aadhar_no              | int    |                                                                            |
| mother's_qualification | int    | 0-primary, 1-secondary, 2-higher secondary, 3-bachelor's, 4-masters, 5-phd |
| father's_qualification | int    | 0-primary, 1-secondary, 2-higher secondary, 3-bachelor's, 4-masters, 5-phd |
| mother's_occupation    | int    | 0-working women, 1-house wife                                              |
| father's_occupation    | int    | 0-working, 1-unemployed                                                    |
| debt                   | int    | 0-no, 1-yes                                                                |
| annual_income          | int    | 0-(10000,250000), 1-(250000, 600000), 2-(>600000)                          |
| no_of_children         | int    |                                                                            |

---

# 3. School Dataset

| Column Name                     | Type | Description                                                                                                              |
| ------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------ |
| Admission_number                | int  |                                                                                                                          |
| admission_date                  | date |                                                                                                                          |
| academic_stream                 | int  | (for Art-1, Science-2, Commerce-3, Vocational-4, Other Streams-5)                                                        |
| status_in_previous_year         | int  | (1- Studied at Current/Same School, 2-Studied at Other School, 3-Anganwadi/ ECCE Centre, 4-not studied                   |
| grade_in_previous_year          | int  |                                                                                                                          |
| admitted_under                  | int  | (0- None, 1-Section 12 of the RTE, 2-EWS, 3-Persons with Disabilities (PwD), 4-Disadvantaged Group, 5-Others)            |
| appeared_in_exams_previous_year | int  | 1-appeared, 2-not appeared                                                                                               |
| results_in_previous_year_type   | int  | (1-Promoted/Passed, 2-Promoted/Passed with grace, 3-Detained/Repeater/Not Passed, 4-Promoted/Passed without Examination) |
| no_of_suspension_days           | int  |                                                                                                                          |
| scholarship_holder              | int  | 0-no, 1-yes                                                                                                              |
| mental_health_issues            | int  | 0-no,1-yes                                                                                                               |
| drug_addiction                  | int  | 0-no, 1-yes                                                                                                              |
| amount_of_fees                  | int  |                                                                                                                          |

---

# 4. Facilities Dataset

| Column name                       | Type | Description                                                                                                                                     |
| --------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| status_of_building                | int  | (1-Private, 2-Rented, 3-Government, 4-Government School in a Rent free building, 5-NO Building, 6- School Running in other Department Building) |
| no_of_classes_in_primary          | int  |                                                                                                                                                 |
| no_of_classes_in_secondary        | int  |                                                                                                                                                 |
| no_of_classes_in_higher_secondary | int  |                                                                                                                                                 |
| transportation                    | int  | 0-no, 1-yes                                                                                                                                     |
| area(ZIP-CODE)                    | int  |                                                                                                                                                 |

---

# 5. Data Scrapped from sample dataset

[Drop Out Rate State-wise](../Drop%20out%20rate%20india/DOR.csv)
[Academic Success and dropout](../student%20academic%20success%20and%20drop%20out/dataset.csv)
[Student Dropout India 2015-16](../student%20dropout%202016/studentDropIndia_20161215.csv)
