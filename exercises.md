# INTRO

```
[OK] Create a repository with a next js starter project.
Create a dashboard application to monitor your progress with exercises.
The dashboard should contain these components:

- Exercise List: show a card for each exercise in the data object

- Exercise card: show exercise info and status

- Graph: A graph of your choice that show a meaningful statistics about exercises (%completion, avg score, trends)

NOTE: List and cards should be done manually. For the 2 graph of your choice you can use a third party library.

For each exercise, create a details page to show the working demo of the solution (and link the page from the relative card)

Exercise object structure:
{
    slug: string,
    title: string,
    objective: string,
    score: number,
    status: string,
    completionDate: timestamp,
}

```

## ARRAY

```
Given an array of numbers return the number with the highest frequency
```

## ARRAY OF OBJECTS

```
Write a function that takes an array of objects and a property name as arguments and returns an array of the unique values for that property among the objects in the array. For example, if you pass the array of books and the property "author", the function should return an array of the unique author names.
```

```
Write a function that takes an array of objects and a property name as arguments and returns the total number of objects in the array that have a falsy value for that property. For example, if you pass the array of books and the property "available", the function should return the number of books that are currently not available.
```

```
Write a function that takes an array of objects and a property name as arguments and returns a new array of objects with the property and its value removed. For example, if you pass the array of books and the property "author", the function could return a new array of objects with the "author" property and its associated value removed from each object.
```

## REACT

> Note: You should come up with an original solution to each exercise.

- You are **NOT** allowed to search for the entire solution online but you **ARE** allowed to search for documentation. Ex: How to render a list in react.
- You **MUST** be able to explain every bit of each line of code you write.

```
Create a component that implements a simple pagination system, allowing the user to navigate through a large list of items by only displaying a small number of items per page.
The pagination component should be developed on his own, and then used on the page.
You can use fake data to test the system.
```

```
Create an application that allow user to:
1 - Click in any point of the screen adding a blue dot in that position.
2 - There should be a button to remove the last point added
3 - There should be a button to restore the last point removed
```

```
Create a react application that creates this:[IMAGE](https://ibb.co/FsLVzj3) component taking data from this
endpoint:http://staccah.fattureincloud.it/testfrontend/data.json
Create a timer that refreshes data every 10 seconds.
```

```
Create a todo-list application. The user should be able to:
1 - Add a new task that is shown in a list
2 - Remove a task from the list
3 - Edit a task present in the list
4 - Show deleted task
5 - Restore deleted task
6 - Refactor the application using context + useReducer
7 - Refactor the application using redux
```
