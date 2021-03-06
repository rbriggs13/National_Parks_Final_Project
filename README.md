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

Description of our data source:
We pulled species information fron kaggle. This gave us informatio that included species common name, scientific name, latitude/longitude, etc.

![Specie and park info]https://www.kaggle.com/nationalparkservice/park-biodiversity?select=species.csv)

We also wanted information on parks' percentage visitors. We got this fron the U.S. National Parks Services.

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

For Machine Learning, we wanted to show the nativeness of species in parks.

We cleaned our data to reflect what we wanted to portray - Nativeness and non-nativeness of species in these parks.

Our codes for Data cleaning. See the relavant Jupyter Notebook file below for actual cleaning steps.

Cleaning of the Parks.csv:

https://github.com/rbriggs13/National_Parks_Final_Project/blob/main/parks_cleaning.ipynb

Cleaning of species.csv:

https://github.com/rbriggs13/National_Parks_Final_Project/blob/main/species_cleaning.ipynb


After our data was cleaned, we imported our data into PostgreSQL We connected our Jupyter notebook file to the PostgreSQL database before we continued our Machine Learning model.

We chose the Random Forest Deep_Learning model.

Pros:
- It can be used for both classification and regression tasks.
- It works well with both categorical and numerical data. Scaling or transformation of variables are not needed.
- It implicitly perform feature selection and generate uncorrelated decision trees. 
- It is not influenced by outliers to a fair degree. It does this by binning the variables.
- Random Forests can handle linear and non-linear relationships well.
- Random Forests generally provide high accuracy and balance the bias-variance trade-off well. Since the model???s principle is to average the results across the multiple decision trees it builds, it averages the variance as well.

Cons:
- May be biased while dealing with categorical variables.
- Can be slow to train.
- It is not beleficial for linear methods with a lot of sparse features.

### Database

Priliminary work done in PostgreSQL:

Database contains three different tables: clean_species, national_parks, and learning_species

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

Tables were first cleaned in Jupyter Notebook, then merged in PostgreSQL. 

(https://github.com/rbriggs13/National_Parks_Final_Project/blob/National_Park_Final_Project_Harry/National_Parks_Machine_Learning_Model.ipynb)

Using imported libraries, we created a connection to PostgreSQL using psycopg2 library and a connection engine.
We wanted to know about the nativeness of species in the national parks. Hence, we utalized OneHotEncoder to diffrentiate native and non-native species.
Our training and testing was based on nativeness of species.
We used Random Forest Classifier. (See 'Final Project Segment 1' above for reasons why we chose this model and its pros and cons).
We got a predictive accuracy of 91.6%. We felt that this was workable and built a Deep Neural Network.
We fit and train our model and used 50 Epoch.
We obtained a 28.1% loss and a accuracy of 91.2%.


### Database

ERD for our database

![ERD](https://github.com/rbriggs13/National_Parks_Final_Project/blob/main/QuickDBD-export.png)

Merging our tables

![PostgreSQLMerge](https://github.com/rbriggs13/National_Parks_Final_Project/blob/main/PostGresSQLmerge.sql)


### Dashboard

Our dashboard slides: https://docs.google.com/presentation/d/1HaS1kugqZTM1JURjWFIsn39IMSLgBZnD-xBZiUcNL0M/edit?usp=sharing

 - Javascript, html, and plotly will be used to make the final dashboard
 - Additional information will be provided when hovering over a data point in various graphs



## Final Project - Segment 3

### Presentation

Presentation slides are being updated. Resulta of Machine Learning and results are added to the slides.

### Github

Updates in Github are made and are built upon from previous segments.

### Machine Learning Model

The model is finalized and the relevant descryption are added to the jypyter notebook file. This was built upon from previous segments.

### Database

n/a

### Dashboard

The link to the Biodiversity is: https://rbriggs13.github.io/National_Parks_Final_Project/
Data about individual park: https://rbriggs13.github.io/National_Parks_Final_Project/Resources/explore.html
Machine Learning information: https://rbriggs13.github.io/National_Parks_Final_Project/Resources/model.html

It contains interactive information of what we wanted to visualise. This was built upon from previous segments.

## Final Project - Segment 4

We have completed all of our previous segments and have our final data.

Presentation Google Slides: https://docs.google.com/presentation/d/1OvQoqeVeVCoBJMrIVUxwvsc1T2G-Y4KHwDu30AmQtIk/edit?usp=sharing

