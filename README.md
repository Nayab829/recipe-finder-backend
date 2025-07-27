## 🔧 Backend (Express + MongoDB)

🚧 **Note:** The backend is not deployed due to hosting limitations (most platforms now require credit cards). However, the backend is fully functional, tested locally, and connected to the frontend.

### 📂 Backend GitHub Repository
👉 [Click Here](https://github.com/Nayab829/recipe-finder-backend)

### 🧑‍💻 Technologies Used
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Body-Parser  
- CORS  

---

### 🌟 Features (Backend)

- ✅ Add recipes to favorites  
- ✅ Delete recipes from favorites  
- ✅ Fetch all favorite recipes  
- ✅ Fully connected with the frontend via REST API

---

### 🔁 API Routes Summary

| Method | Route                    | Description                         |
|--------|--------------------------|-------------------------------------|
| GET    | `/favorites`             | Get all favorite recipes            |
| POST   | `/favorites`             | Add a recipe to favorites           |
| DELETE | `/favorites/:id`         | Delete a recipe using its ID        |

---

### 📦 Sample JSON Response

```json
[
  {
    "_id": "6881dfedd20081d396ef15a4",
    "title": "Burger test",
    "image": "https://example.com/burgertest.jpg"
  },
  {
    "_id": "6881e05dea5bc5218903ba00",
    "title": "Burger test 2",
    "image": "https://example.com/burgertest2.jpg"
  }
]
