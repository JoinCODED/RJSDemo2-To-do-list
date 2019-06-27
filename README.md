1. Start with pure HTML
2. Copy `div.rectangle` into `render`

```javascript
  return (
    <div class="rectangle">
      <p class="title">TO DO LIST</p>
      <table>
        ...
      </table>
    </div>
  );
```

3. Change `className`

```javascript
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <table>
        ...
      </table>
    </div>
  );
```

4. Import from `data.js`

```javascript
import tasks from "./data";
```

5. Fill in rows manually using indexed data

```javascript
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <table>
        <thead>...</thead>
        <tbody>
          <tr>
            <td>
              <i className="fa fa-check-circle" />
            </td>
            <td>{tasks[0].task}</td>
            <td className={task[0].priority}>{task[0].priority.toUpperCase()}</td>
          </tr>
          ...
        </tbody>
      </table>
    </div>
  );
```

6. Function for calculating className

```javascript
 {

  const statusIcon = (done) => {
    if(done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  }

  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <table>
        <thead>...</thead>
        <tbody>
          <tr>
            <td>
              <i className={statusIcon(task[0].done)} />
            </td>
            <td>{tasks[0].task}</td>
            <td className={task[0].priority}>{task[0].priority.toUpperCase()}</td>
          </tr>
          ...
        </tbody>
      </table>
    </div>
  );
}
```
