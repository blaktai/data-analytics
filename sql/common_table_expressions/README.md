# Common Table Expressions
## A CTE for IT-positions

To practice writing CTEs, let's start with a simple example. You will use the employee table which is built up of fields such as ID, Name, and Position. The task for you is to create a CTE called ITjobs (keep in mind the syntax WITH CTE_Name As) that finds employees named Andrea whose job titles start with IT. Finally, a new query will retrieve all IT positions and names from the ITJobs CTE.

To search for a pattern, you have to use the LIKE statement and % representing the search direction. For example, using a WHERE statement with LIKE 'N%' will find patterns starting with N.


    Create the CTE ITjobs.
    Define the fields of the CTE as ID, Name, and Position.
    Find the positions starting with IT and the name starting with A.

```sql
-- Define the CTE ITjobs by the WITH operator
WITH ITjobs (ID, Name, Position) AS (
    SELECT 
  		ID, 
  		Name,
  		Position
    FROM employee
    -- Find IT jobs and names starting with A
  	WHERE Position LIKE 'IT%' AND Name LIKE 'A%')
    
SELECT * 
FROM ITjobs;
```

## A CTE for high-paid IT-positions

In the previous exercise, you created a CTE to find IT positions. Now, you will combine these results with another CTE on the salary table. You will use multiple CTE definitions in a single query. Notice that a comma is used to separate the CTE query definitions. The salary table contains some more information about the ID and salary of employees. Your task is to create a second CTE named ITsalary and JOIN both CTE tables on the employees ID. The JOIN should select only records having matching values in both tables. Finally, the task is to find only employees earning more than 3000.


    Define the second CTE, ITSalary, with the fields ID and Salary.
    Find salaries above 3000.
    Combine the two CTEs by using a JOIN of matching IDs and select the name, the salary, and the position of the selected employees.

```sql
WITH ITjobs (ID, Name, Position) AS (
    SELECT 
  		ID, 
  		Name,
  		Position
    FROM employee
    WHERE Position like 'IT%'),
    
-- Define the second CTE table ITSalary with the fields ID and Salary
ITSalary (ID, Salary) AS (
    SELECT
        ID,
        Salary
    FROM Salary
  	-- Find salaries above 3000
    WHERE Salary > 3000)
    
SELECT 
	ITjobs.NAME,
	ITjobs.POSITION,
    ITsalary.Salary
FROM ITjobs
    -- Combine the two CTE tables the correct join variant
    INNER JOIN ITsalary
    -- Execute the join on the ID of the tables
    ON ITjobs.ID = ITsalary.ID;
```

