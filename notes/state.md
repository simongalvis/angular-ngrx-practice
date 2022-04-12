# Some Notes about State and Redux

## The state exists in an object in memory.

```javascript
{
  featureTrafficLights: {
    light: {
      color: "green";
    }
  }
}
```

## For the Todo List

```javascript
{
  featureTodoList: {

    items: {
      ids: ['1','2'],
      entities: {
        '1' : { id: '1', description: 'Thing 1', completed: false},
        '2' : { id: '2', description: 'Thing 2', cmpleted: true}
      }
    }

  }
}


```
