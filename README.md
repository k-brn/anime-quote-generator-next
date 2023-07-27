# Anime Quote Generator

Anime Quote Generator is an interactive web application that allows users to get random quotes from various anime series. Users can input the name of their favorite anime, and the app will fetch and display a random quote from that anime.

![Alt text](https://64.media.tumblr.com/0d8ceaf59599c8f9704894454522f019/tumblr_o6hbp8Qub81udhkqho1_1280.gif)

## How It's Made:

**Tech used:** GraphQL, Apollo Server, Node.js, JavaScript

## To install and run the project, follow these steps:

1. Ensure that you have Node.js installed on your machine. [https://nodejs.org/en](https://nodejs.org/en)

2. Clone the project repository from GitHub to your local machine using the following command:

```
git clone <clone-link>
```

3. Navigate to the project directory using the command line interface.

4. Install the project dependencies by running the following command:

```
npm init
```

5. Once the dependencies are installed, you can start the server by running the following command:

```
npm start
```

6. The server will start running, and you will see a message indicating that the server is listening on a specific port (e.g., 4000).

7. You can now access the GraphQL API and interact with it using a GraphQL client, such as GraphQL Playground or GraphQL IDE. Open a web browser and navigate to http://localhost:4000 (replace 4000 with the actual port number if it's different).

8. In the GraphQL client, you can execute queries, mutations, and subscriptions to interact with the vendor data and perform various operations.

## Get All Vendors:

1. Open your preferred GraphQL client (such as GraphQL Playground) and navigate to http://localhost:4000 (replace 4000 with the actual port number if it's different).

2. In the query editor, enter the following GraphQL query:

```
query {
  vendors {
    id
    name
    email
    phone
    address {
      street
      city
      state
      country
    }
    vendorType
    totalOrders
  }
}
```

This query fetches all vendors along with their ID, name, email, phone number, address details (street, city, state, country), and vendor type.

3. Click the "Play" button to execute the query.

4. The GraphQL server will respond with a JSON object containing an array of vendor objects. Each vendor object will include all the requested information.
   For example:

```
{
  "data": {
    "vendors": [
      {
        "id": "1",
        "name": "ABC Supplies",
        "email": "abc@supplies.com",
        "phone": "1234567890",
        "address": {
          "street": "123 Main Street",
          "city": "Cityville",
          "state": "CALIFORNIA",
          "country": "Countryland"
        },
        "vendorType": "SUPPLIER"
      },
      ...
    ]
  }
}
```

## Update Vendor Email and Phone:

1. Open your preferred GraphQL client (such as GraphQL Playground) and navigate to http://localhost:4000 (replace 4000 with the actual port number if it's different).
2. In the query editor, enter the following GraphQL mutation:

```
mutation {
  updateVendorContact(input: {
    id: <vendorId>,
    newEmail: "<newEmail>",
    newPhone: "<newPhone>"
  }) {
    id
    name
    email
    phone
  }
}
```

Replace <vendorId> with the ID of the vendor you want to update. <newEmail> should be replaced with the new email address, and <newPhone> with the new phone number. For example:

```
mutation {
  updateVendorContact(input: {
    id: 1,
    newEmail: "newemail@example.com",
    newPhone: "9876543210"
  }) {
    id
    name
    email
    phone
  }
}
```

3. Click the "Play" button to execute the mutation.

4. The GraphQL server will respond with a JSON object containing the updated vendor's ID, name, email, and phone number.
   For example:

```
{
  "data": {
    "updateVendorContact": {
      "id": "1",
      "name": "ABC Supplies",
      "email": "newemail@example.com",
      "phone": "9876543210"
    }
  }
}
```

## Delete Vendor:

1. Open your preferred GraphQL client (such as GraphQL Playground) and navigate to http://localhost:4000 (replace 4000 with the actual port number if it's different).
2. In the query editor, enter the following GraphQL mutation:

```
mutation {
  deleteVendor(id: <vendorId) {
    id
  }
}
```

Replace <vendorId> with the ID of the vendor you want to delete. For example:

```
mutation {
  deleteVendor(id: "2") {
    id
  }
}
```

3. Click the "Play" button to execute the mutation.

Executing this mutation will delete the vendor with the specified ID from the Vendor Management project.
