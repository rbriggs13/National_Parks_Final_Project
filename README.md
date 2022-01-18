# National_Parks_Final_Project

## Presentation

(Presentation Slides will be attached here)

## Biodiversities in National Park

We have decided on this topic because we want to p

We selected this topic because we want to provide useful information to potential visitors what can be seen at a selected park, based on their interest. In addition, we want to highlight Nativeness and non-Nativeness of both flora and fauna at these parks.
 
Our data was sourced from Kaggle and the National Parks government websites:


Species found in various parks

![Species and park info]https://www.kaggle.com/nationalparkservice/park-biodiversity?select=species.csv)



![Percentage visitors]https://irma.nps.gov/STATS/SSRSReports/National%20Reports/Annual%20Park%20Ranking%20Report%20(1979%20-%20Last%20Calendar%20Year)

For our project, we hope to answer the following questions:


- Is there a relation between biodiversity and park visitors
- What species tend to attract the most visitors?
- Is there a relation between the size of parks and No. of visitors?
- How native are these parks?

## GitHub

ReadMe - ongoning

### Description of communication Protocols

- We will check in daily at around 7pm, except on days of classes via text messaging.

- Text messaging for live communication
- Slack group for sharing links, ideas, etc.
- Zoom calling, if the need arise

### GitHib branches

- Main: https://github.com/rbriggs13/National_Parks_Final_Project

- Each member has a branch


## Machine Learning Model

We need to pull data directly, e.g. using SQL Alchemy

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

