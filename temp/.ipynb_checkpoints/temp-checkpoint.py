# -*- coding: utf-8 -*-
"""
Created on Tue Sep 13 11:58:55 2022

@author: DELL 5584
"""

import pandas as pd

data = pd.read_csv('D:/dhruv/hackathon/temp/master.csv')


data.head()

temp1 = data.drop(['Student_Name', 'Date_of_birth', 'Mother\'s_name', 'Father\'s_name', 
                   'Guardian\'s_name', 'Address', 'Contact_email_id', 'Mobile_Number', 'contact_no', 'Adhaar_No', 'aadhar_no'], axis=1)

temp1.head()

temp1.describe();
temp1.corr()

