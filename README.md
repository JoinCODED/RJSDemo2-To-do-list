1. Put this styling in `App.css`

   ```javascript
   body,
   html {
     height: 100%;
   }

   body {
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 30px;
   }

   table {
     text-align: center;
     width: 100%;
     font-size: 20px;
     align-items: center;
   }

   thead > tr {
     height: 50px;
     font-weight: bold;
   }

   tr {
     height: 40px;
     align-items: center;
   }

   td.low {
     color: green;
   }

   td.middle {
     color: orange;
   }

   td.high {
     color: red;
   }

   .rectangle {
     position: relative;
     width: 370px;
     height: 700px;
     border: 2px solid;
     text-align: center;
     color: black;
   }

   .title {
     color: white;
     font-family: menlo;
     background-color: black;
     height: 80px;
     width: 370px;
     margin: 0px;
     padding-top: 40px;
     font-size: 40px;
     margin-bottom: 10px;
   }

   .fa-check-circle {
     color: green;
   }

   .fa-times-circle {
     color: red;
   }
   ```

2. Start with pure HTML

   ```javascript
   return (
       <p class="title">TO DO LIST</p>
       <table>...</table>
   );
   ```

3. ERROR - explain the sibling rule!

   ```javascript
   return (
     <div class="rectangle">
       <p class="title">TO DO LIST</p>
       <table>...</table>
     </div>
   );
   ```

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
     const statusIcon = (done) => {
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
