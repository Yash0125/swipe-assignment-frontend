# swipe-assignment-frontend

## Table of contents

* [How to run locally](#run-local)
* [Edit bulk feature details](#bulk-edit)
* [Demo](#demo)

  <a name="run-local"/>

  ## How to run locally and Set-up

  Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sohan2410/swipe-assignment-frontend
2. Navigate to the project directory:
    ```bash
    cd swipe-assignment-frontend
3. Navigate to the project directory:
    ```bash
    npm install
3. Start the development server:
    ```bash
    npm start
The application should now be running locally, and you can access it in your web browser at http://localhost:3000.

<a name="bulk-edit"/>

## Edit bulk feature details

Folder Structure Conventions
============================

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout
    .
    ├── public/          # Public assets and HTML template
    ├── src/             # Source code
    │   ├── components/  # React components
    │   ├── redux/       # Redux-related files
    │   ├── styles/      # Stylesheets
    │   └── App.js       # Main application component
    └── README.md        # Project documentation


### How to Use

1. Navigate to the main page of the application.

2. Select the invoices you want to edit by clicking on the checkboxes next to each invoice.

3. After selecting the invoices, a button labeled "Edit" will appear. Click on this button to open the bulk edit modal.

4. In the bulk edit modal, you will see a checkbox next to each invoice. Check the invoices you want to update.

5. Once you have selected the invoices, a button labeled "Update Multiple" will appear. Click on this button to proceed.

6. You will be redirected to the Invoice Edit page, where you can modify the details of the selected invoices.

7. The Invoice Edit page allows you to update various details such as invoice number, date of issue, bill-to, bill-from, tax, discount, and items.

8. After making the necessary changes, click the "Update" button to save the modifications.

9. A success message will be displayed, and you will be redirected to the main page.

### Code Explanation

The bulk edit feature involves two main components:

#### `InvoiceEdit` Component

- This component is responsible for rendering the Invoice Edit page.
- It receives selected invoices from the main page and fetches their details.
- The `handleUpdate` function dispatches the `updateEditInvoices` action to update the selected invoices.

#### `InvoiceEditableLine` Component

- This component represents a row in the table on the Invoice Edit page.
- It displays the details of each invoice and provides an interface for editing.
- The "Items" button opens a modal for adding/editing invoice items.

<a name="demo"/>

## Demo

TO see live demo : [click for live demo](https://swipe-payment.netlify.app/).

  
