# Backend Project - Customer and Card Management

This project provides a backend API for managing customers and their associated cards. It is built using Node.js with the following technologies: nodemon, express, UUID, moment, dotenv, and email-validator.

## Prerequisites

Before running this project, ensure that you have the following installed:

- Node.js (v12 or higher)

## Getting Started

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
cd JaiKisan_FunctionUp
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and provide the following variables:

```
PORT=3000
MONGODB_URI=<mongodb-connection-uri>
```

Feel free to modify the `PORT` value as per your preference.

4. Start the server:

```
npm start
```
The server will start listening on `http://localhost:3000` by default.



## Customer Model

| Field        | Type   | Description                  |
| ------------ | ------ | ---------------------------- |
| firstName    | string | First name of the customer   |
| lastName     | string | Last name of the customer    |
| mobileNumber | string | 10-digit mobile number       |
| DOB          | date   | Date of birth                |
| emailID      | string | Email address of the customer|
| address      | string | Customer's address           |
| customerID   | string | UUID                         |
| status       | string | Customer status (ACTIVE/INACTIVE) |

## Card Model

| Field        | Type   | Description                          |
| ------------ | ------ | ------------------------------------ |
| cardNumber   | string | Automatically generated card number  |
| cardType     | string | Card type (REGULAR/SPECIAL)           |
| customerName | string | Name of the customer associated      |
| status       | string | Card status (ACTIVE/INACTIVE)         |
| vision       | string | Vision description                    |
| customerID   | string | Reference to the associated customer  |


## API Endpoints

### Customers

- **Get all customers with status ACTIVE**

  - Method: GET
  - Endpoint: `/customers`
  - Response: Returns a list of all customers with status set to ACTIVE.

- **Delete customer**

  - Method: DELETE
  - Endpoint: `/customers/:customerId`
  - Request: Specify the `customerId` as a path parameter to delete the corresponding customer.
  - Response: Returns a success message if the customer is deleted successfully.

- **Create new customer**

  - Method: POST
  - Endpoint: `/customers`
  - Request Body: Provide the following fields in the request body to create a new customer:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "mobileNumber": "1234567890",
  "DOB": "1990-01-01",
  "emailID": "john.doe@example.com",
  "address": "123 Main St, City",
  "customerID": "UUID",
  "status": "ACTIVE"
}
```
  - Response: Returns the created customer object.



### Cards

- **Get all cards**

  - Method: GET
  - Endpoint: `/cards`
  - Response: Returns a list of all cards.

- **Create new card**

  - Method: POST
  - Endpoint: `/cards`
  - Request Body: Provide the following fields in the request body to create a new card:
```json
{
  "cardNumber": "C001",
  "cardType": "REGULAR",
  "customerName": "John Doe",
  "status": "ACTIVE",
  "vision": "Card Vision",
  "customerID": "UUID"
}
```
  - Response: Returns the created card object.


  
## Technologies Used

- Node.js
- Express.js
- MongoDB
- UUID
- Moment
- Dotenv
- Email-validator


## Conclusion

This project provides a basic API for managing customers and their associated cards. Feel free to explore the endpoints and modify the code to suit your specific requirements. For detailed information about each API endpoint, refer to the respective section in this README.

If you have any questions or need further assistance, please contact [saurabhsahofficial@gamil.com].

Happy coding!