/*

  Header
    - logo
    - nav items
       - home
       - about
       - service
  Body
    - serach
    - RestaurentContainer
       - RestaurentCards
         - img
         - name of food, star rating, name of res, cuisine
  Footer
    - links
    - Address
    - Contact
 *
 */


Virtual DOM is a lightweight JavaScript representation of the actual DOM (Document Object Model). React uses it to improve performance by updating only the necessary parts of the UI instead of re-rendering everything.

How It Works:
When the state of a React component changes, a new Virtual DOM is created.
React compares the new Virtual DOM with the previous version using a process called Reconciliation.
Only the changed elements are updated in the real DOM, instead of re-rendering the entire UI.
🔹 Why is it faster?

The actual DOM updates are slow because they cause layout recalculations.
The Virtual DOM minimizes these updates, making React applications highly efficient.
