## InveeSync Backend Project (https://inveesync-backend.onrender.com)

### Authentication Routes

1. **Register a User**
   - **Route:** `POST /authapi/register`
   - **Description:** Register a new user with a unique username, email, and password.
   - **Request Body (Form Data):**
     - `username` (String): User's username
     - `email` (String): User's email address
     - `password` (String): User's password
   - **Example Usage (Postman):**
     - Set request type to POST
     - Set URL to `https://inveesync-backend.onrender.com/authapi/register`
     - Go to Body tab, select form-data, and add the required fields
     - Click Send

2. **Login a User**
   - **Route:** `POST /authapi/login`
   - **Description:** Login an existing user with their email and password.
   - **Request Body (Form Data):**
     - `email` (String): User's registered email address
     - `password` (String): User's password
   - **Example Usage (Postman):**
     - Set request type to POST
     - Set URL to `https://inveesync-backend.onrender.com/authapi/login`
     - Go to Body tab, select form-data, and add the required fields
     - Click Send

---

### Product Routes 

1. **Create a Product**
   - **Route:** `POST /productapi/products`
   - **Description:** Create a new product with a name, description, price, and image.
   - **Authentication:** Pass the token generated during login in the header.
   - **Request Body (Form Data):**
     - `name` (String): Product name
     - `description` (String): Product description
     - `price` (Number): Product price
     - `ProductImage` (File): Image file of the product
   - **Example Usage (Postman):**
     - Set request type to POST
     - Set URL to `https://inveesync-backend.onrender.com/productapi/products`
     - Go to Body tab, select form-data, and add the required fields
     - Click Send

2. **Get a Product**
   - **Route:** `GET /productapi/products`
   - **Description:** Get the list of all products.
   - **Authentication:** Pass the token generated during login in the header.
   - **Example Usage (Postman):**
     - Set request type to GET
     - Set URL to `https://inveesync-backend.onrender.com/productapi/products`
     - Click Send

3. **Update a Product**
   - **Route:** `PUT /productapi/products/:id`
   - **Description:** Update a product with the specified ID.
   - **Authentication:** Pass the token generated during login in the header.
   - **Request Body (Form Data):**
     - `name` (String): Product name
     - `description` (String): Product description
     - `price` (Number): Product price
   - **Example Usage (Postman):**
     - Set request type to PUT
     - Set URL to `https://inveesync-backend.onrender.com/productapi/products/663cf72a1d6dea8ba8432246`
     - Go to Body tab, select form-data, and add the required fields
     - Click Send

4. **Get a Product By Id**
   - **Route:** `GET /productapi/products/:id`
   - **Description:** Get a product by its ID.
   - **Authentication:** Pass the token generated during login in the header.
   - **Example Usage (Postman):**
     - Set request type to GET
     - Set URL to `https://inveesync-backend.onrender.com/productapi/products/663cf72a1d6dea8ba8432246`
     - Click Send
    
5. **Delete a Product By Id**
   - **Route:** `DELETE /productapi/products/:id`
   - **Description:** Delete a product by its ID.
   - **Authentication:** Pass the token generated during login in the header.
   - **Example Usage (Postman):**
     - Set request type to DELETE
     - Set URL to `https://inveesync-backend.onrender.com/productapi/products/663cf72a1d6dea8ba8432246`
     - Click Send

