# Commerce Backend (Flask + MongoDB)

## Features
- User authentication (register, login, JWT)
- Product management (CRUD)
- Cart management
- Order management
- Admin endpoints
- MongoDB integration
- CORS enabled

## Setup
1. Create and activate a virtual environment:
   ```
   python -m venv venv
   venv\Scripts\activate  # On Windows
   source venv/bin/activate  # On Mac/Linux
   ```
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Ensure MongoDB is running locally (default URI: `mongodb://localhost:27017/commerce_db`).
4. Run the backend:
   ```
   python app.py
   ```

## API Endpoints
- Auth: `/api/auth/register`, `/api/auth/login`, `/api/auth/me`
- Products: `/api/products` (CRUD)
- Cart: `/api/cart` (CRUD)
- Orders: `/api/orders` (place/view)
- Admin: `/api/admin/users`, `/api/admin/products`, `/api/admin/orders`, `/api/admin/users/<user_id>/make_admin`

## Notes
- Update `JWT_SECRET_KEY` in `app.py` for production.
- Admin users have an `is_admin` field in the users collection.
