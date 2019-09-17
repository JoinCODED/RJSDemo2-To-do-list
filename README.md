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

4. Show the warnings in the console - Change `className`

   ```jsx
   return (
     <div className="rectangle">
       <p className="title">TO DO LIST</p>
       <table>...</table>
     </div>
   );
   ```

5. Import from `data.js` - `console.log(tasks)` to show what importing does.

   This is what's known as **dummy** data. It's mimicking the expected structure of data from the backend.  
    The goal is to replace this data with actual data from the backend eventually.

   ```javascript
   import items from "./data";
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
             <td>{items[0].task}</td>
             <td className={items[0].priority}>
               {items[0].priority.toUpperCase()}
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
                 <i className={statusIcon(items[0].done)} />
               </td>
               <td>{items[0].task}</td>
               <td className={items[0].priority}>
                 {items[0].priority.toUpperCase()}
               </td>
             </tr>
             ...
           </tbody>
         </table>
       </div>
     );
   }
   ```
