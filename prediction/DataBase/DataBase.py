import pandas as pd 
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn import metrics
# read the DF
df = pd.read_csv('Data.csv')
df = df.sort_values('Location')

tempboy = df['PrimaryBoys'] + df['UpperBoys'] + df['SecondBoys']
tempgirl = df['PrimaryGirls'] + df['UpperGirls'] + df['SecondGirls']
tempoverall = df['PrimaryOverall'] + df['UpperOverall'] + df['SecondOverall']

# Final gender Data frame
final_gender = pd.DataFrame(zip(tempboy,tempgirl,tempoverall) , columns=['boys' ,'girls' , 'overall'])

# polynomial Rgression for the Male and Female
y = final_gender[['boys' , 'girls']]
x = final_gender[['overall']]

# train and Test the data
x_train,x_test,y_train,y_test = train_test_split(x,y,random_state=12, test_size=0.25)

# Object of the Polynomial regression
poly = PolynomialFeatures(degree=1)
poly.fit(x_train)
x_train_poly = poly.transform(x_train)
x_test_Poly = poly.transform(x_test)

lr = LinearRegression()
lr.fit(x_train_poly ,y_train)
prediction = lr.predict([[final_gender['boys'].mean() , final_gender['girls'].mean() ]]).tolist()
gender = {'male' : prediction[0][0] / sum(prediction[0]) * 100,'female' : prediction[0][1] / sum(prediction[0]) * 100 }

# School Category Wise Prediction Value

y = df[['PrimaryOverall',  'UpperOverall' , 'SecondOverall']]
x = df[['PrimaryBoys' ,'PrimaryGirls' ,'UpperBoys' ,'UpperGirls','SecondBoys' , 'SecondGirls']]

x_train,x_test,y_train,y_test = train_test_split(x,y,random_state=12, test_size=0.25)

poly = PolynomialFeatures(degree=1)
poly.fit(x_train)
x_train_poly = poly.transform(x_train)
x_test_poly = poly.transform(x_test)

lr = LinearRegression()
lr.fit(x_train_poly,y_train)
temp = lr.predict([[df['PrimaryBoys'].mean() ,df['PrimaryGirls'].mean() , df['UpperBoys'].mean(), df['UpperGirls'].mean() , df['SecondBoys'].mean() , df['SecondGirls'].mean() , ( df['PrimaryOverall'] + df['UpperOverall'] + df['SecondOverall']) .mean()  ]]).tolist()
school = {
    'Primary' : temp[0][0] / sum(temp[0]) * 100,
    'Secondary' : temp[0][1] / sum(temp[0] ) * 100,
    'higher Secondary' : temp[0][2] / sum(temp[0])* 100
}
# cast Wise Data

cast = df.sort_values('Social Category')
tempcast = cast['PrimaryBoys'] + cast['PrimaryGirls'] + cast['UpperBoys'] + cast['UpperGirls'] + cast['SecondBoys'] + cast['SecondGirls']
tempcastoverall = cast['PrimaryOverall'] + cast['UpperOverall'] + cast['SecondOverall']
Location = df['Location']
tempcat = df['Social Category']

cast = pd.DataFrame(zip(Location,tempcat,tempcast,tempcastoverall) , columns=['Loc' ,'Social Category','All Boys and Girls' , 'Overall'])

tempgeneral = cast[cast['Social Category']== 'General' ]['All Boys and Girls'].tolist()
tempgeneraloverall = cast[cast['Social Category'] == 'General' ]['Overall'].tolist()

tempobc = cast[cast['Social Category']== 'OBC' ]['All Boys and Girls'].tolist()
tempobcoverall = cast[cast['Social Category'] == 'OBC' ]['Overall'].tolist()

tempsc = cast[cast['Social Category']== 'SC' ]['All Boys and Girls'].tolist()
tempscoverall = cast[cast['Social Category'] == 'SC' ]['Overall'].tolist()

tempst = cast[cast['Social Category']== 'ST' ]['All Boys and Girls'].tolist()
tempstoverall = cast[cast['Social Category'] == 'ST' ]['Overall'].tolist()

cast = pd.DataFrame(zip(tempgeneral,tempgeneraloverall,tempobc,tempobcoverall,tempsc,tempscoverall,tempst,tempstoverall),columns=['general' , 'generaloverall' ,'obc' ,'obcoverall', 'sc' ,'scoverall','st','stoverall'])

x = cast[['general' , 'obc' ,'sc' , 'st']]
y = cast[['generaloverall' , 'obcoverall' ,'scoverall','stoverall']]

x_train,x_test,y_train,y_test = train_test_split(x,y,random_state=12, test_size=0.25)

poly = PolynomialFeatures(degree=1)
poly.fit(x_train)
x_train_poly = poly.transform(x_train)
x_test_poly = poly.transform(x_test)

lr = LinearRegression()
lr.fit(x_train_poly,y_train)

temp = lr.predict([[cast['general'].mean(),cast['obc'].mean(),cast['sc'].mean(),cast['st'].mean(), (cast['generaloverall'] + cast['obcoverall'] + cast['scoverall'] +cast['stoverall']).mean()  ]]).tolist()

socialcategory = {
    'general' : temp[0][0] / sum(temp[0]) * 100, 
    'obc' : temp[0][1] / sum(temp[0]) * 100,
    'sc' : temp[0][2] / sum(temp[0]) * 100,
    'st' : temp[0][3] / sum(temp[0]) * 100
}

print(gender)
print(school)
print(socialcategory)

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="Prince Malani",
  password="Hetu@0617",
  database = "ssip_prediction",
  port = "3306"
)
cur = mydb.cursor()

#query1 = ''' insert into Prediction_Data values ({},{},{},{},{},{},{},{},{}) '''.format(gender['male'] , gender['female'] , socialcategory['general'] , socialcategory['obc'], socialcategory['sc']  , socialcategory['st'], school['Primary'] , school['Secondary'] , school['higher Secondary'])
cur.execute(query1)
mydb.commit()
mydb.close()
print(mydb)

print("Comnnection Done")
