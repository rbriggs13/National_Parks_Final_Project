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

We selected this topic because we want to provide useful information to potential visitors what can be seen at a selected park, based on their interest. In addition, we want to highlight Nativeness and non-Nativeness of both flora and fauna at these parks.
 
Our data was sourced from Kaggle and the National Parks government websites:

### Data sources

Species found in various parks

![Species and park info]https://www.kaggle.com/nationalparkservice/park-biodiversity?select=species.csv)



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

## Dashboard
 - Javascript, html, and plotly will be used to make the final dashboard
 - Additional information will be provided when hovering over a data point in various graphs

## Final Project - Segment 2


