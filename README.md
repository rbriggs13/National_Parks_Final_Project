# National_Parks_Final_Project



Group Members:
![Harry Mohabir]https://github.com/hmohabir)
![Lydia Ramirez ]https://github.com/LydiaRamirez1)
![Ryan Briggs]https://github.com/rbriggs13)

## Final Project - Segment 1

### Selected Topic

Biodiversities in U.S. National Parks

## Presentation

Presentation Google Slides:

(https://docs.google.com/presentation/d/1OvQoqeVeVCoBJMrIVUxwvsc1T2G-Y4KHwDu30AmQtIk/edit?usp=sharing)


### Reason for selected topic

We want to answer questions like:

Is there a relation between biodiversity and park visitors
What species tend to attract the most visitors?
Is there a relation between the size of parks and visitors?

### Data sources


### Description of our data source

![Specie and park info]https://www.kaggle.com/nationalparkservice/park-biodiversity?select=species.csv)


![Percentage visitors]https://irma.nps.gov/STATS/SSRSReports/National%20Reports/Annual%20Park%20Ranking%20Report%20(1979%20-%20Last%20Calendar%20Year)




### Questions we hope to answer


- What makes a park popular?
- Are certain species common among the populus parks?
- Is there a relation between biodiversity and park visitors
- What species tend to attract the most visitors?
- Is there a relation between the size of parks and No. of visitors?
- How native are these parks?


## GitHub

ReadMe - ongoning

- We will check in daily at around 7pm, except on days of classes via text messaging.

- Text messaging for live communication
- Slack group for sharing links, ideas, etc.
- Zoom calling, if the need arise

### GitHib branches

- Main: https://github.com/rbriggs13/National_Parks_Final_Project

- Each member has a branch


###  Machine Learning Model

We pulled our data from a PostgreSQL database for our machine learning model

We chose the Random Forest Deep_Learning model.

Pros:
- It can be used for both classification and regression tasks.
- It works well with both categorical and numerical data. Scaling or transformation of variables are not needed.
- It implicitly perform feature selection and generate uncorrelated decision trees. 
- It is not influenced by outliers to a fair degree. It does this by binning the variables.
- Random Forests can handle linear and non-linear relationships well.
- Random Forests generally provide high accuracy and balance the bias-variance trade-off well. Since the model’s principle is to average the results across the multiple decision trees it builds, it averages the variance as well.

Cons:
- May be biased while dealing with categorical variables.
- Can be slow to train.
- It is not beleficial for linear methods with a lot of sparse features.

### Database

Priliminary work done in PostgreSQL:

CREATE TABLE nationalparks ( park_code VARCHAR(100), park_name VARCHAR(100), states VARCHAR(100), acres DECIMAL, latitude DECIMAL, longitude DECIMAL, ranks INT, visitors INT, percentage DECIMAL)

CREATE TABLE learningspecies (genus VARCHAR(100), category VARCHAR(100), park_name VARCHAR(100), conservation_status VARCHAR(100), nativeness VARCHAR(100))

CREATE TABLE cleanspecies (park_name VARCHAR(100), category VARCHAR(100), orders VARCHAR(100), familys VARCHAR(100), scientific_name VARCHAR(100), common_names VARCHAR(100), occurrence VARCHAR(100), nativeness VARCHAR(100), conservation_status VARCHAR(100))

DROP TABLE nationalparks 

SELECT * FROM nationalparks

SELECT * FROM learningspecies

SELECT * FROM cleanspecies


## Final Project - Segment 2

### Presentation

Our Google Slides (see above) contains:

Selected topic

- Reason why they selected their topic
- Description of their source of data
- Questions they hope to answer with
the data
- Description of the data exploration
phase of the project
- Description of the analysis phase of
the project

### Github

Exploratory analysis codes in Main branch
Machine Learning model codes in Main branch
We utalized the same method od communication and updates to Github as presented in Segment 1

### Machine Learning Model

### Database
ERD 

Codes for the merge can be found in the file 



### Dashboard

Our dashboard slides: https://docs.google.com/presentation/d/1HaS1kugqZTM1JURjWFIsn39IMSLgBZnD-xBZiUcNL0M/edit?usp=sharing

 - Javascript, html, and plotly will be used to make the final dashboard
 - Additional information will be provided when hovering over a data point in various graphs



## Final Project - Segment 3



