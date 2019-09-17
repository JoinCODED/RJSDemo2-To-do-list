1. Start with pure HTML
2. Copy `div.rectangle` into `render` - "forget" to delete it from `index.html` - show duplication - delete it

   ```javascript
   return (
     <div class="rectangle">
       <p class="title">TO DO LIST</p>
       <table>...</table>
     </div>
   );
   ```

3. Duplicate - explain the sibling rule!

4. Change `className`

   ```jsx
   return (
     <div className="rectangle">
       <p className="title">TO DO LIST</p>
       <table>...</table>
     </div>
   );
   ```

5. Import from `data.js` - `console.log(tasks)` to show what importing does

   ```javascript
   import tasks from "./data";
   ```

6. Explain `{}` in JSX - Fill in rows manually using indexed data

   ```jsx
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
             <td className={task[0].priority}>
               {task[0].priority.toUpperCase()}
             </td>
           </tr>
           ...
         </tbody>
       </table>
     </div>
   );
   ```

7. Explain that you can use `{}` ANYWHERE in JSX - Function for calculating className

   ```jsx
   {
     const statusIcon = done => {
       if (done) {
         return "fa fa-check-circle";
       } else {
         return "fa fa-times-circle";
       }
     };

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
               <td className={task[0].priority}>
                 {task[0].priority.toUpperCase()}
               </td>
             </tr>
             ...
           </tbody>
         </table>
       </div>
     );
   }
   ```
