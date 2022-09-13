
Dataset UnitelmaSapienza - Version 1.0 (May 2021)


Description: 
This is the dataset from the article "Hidden Space Deep Sequential Risk Prediction on Student Trajectories" by Bardh Prenkaj, Damiano Distante, Stefano Faralli and Paola Velardi (under review)


Disclaimer: 
Due to privacy protection regulations, all data are aggregated and fully anonymized.


Dataset Description:

The zip contains 13 folders, each folder contains the timeseries (timeseries.csv) of a specific learning course from the University of Rome Unitelma Sapienza.

Each row of a timeseries.csv file corresponds to a student. 
Each column is a two dimensional numpy array, which corresponds to 365 days of interactions of the student with the e-learning platform.
The last column corresponds to the probability of drop-out (see the above indicated paper for more information on how this probability is thresholded to obtain a binary ground truth).

This dataset can be directly used as input for the code we released at http://iim.di.uniroma1.it/projects/hsdsrpst/

When using this dataset in your work please cite the paper it is associated to.


Authors:
Bardh Prenkaj - Sapienza University of Rome, Italy
Damiano Distante - University of Rome Unitelma Sapienza, Italy
Stefano Faralli - University of Rome Unitelma Sapienza, Italy
Paola Velardi - Sapienza University of Rome, Italy


License:
Attribution 4.0 International (CC BY 4.0)
https://creativecommons.org/licenses/by/4.0/deed.en

For any question regarding the dataset and the source code please contact:
Bardh Prenkaj prenkaj@di.uniroma1.it


Acknowledgements:
This dataset is a result of the research project funded by MIUR under the grant of “Dipartimenti di eccellenza 2018-2022” of the Department of Computer Science of Sapienza University.
Partly supported by University of Rome Unitelma Sapienza.
