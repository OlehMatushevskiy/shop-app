# shop-app
# 🛒 Shop App (CRUD with Express)

## 🚀 Overview

**Shop App** is a simple backend application built with Express.js that demonstrates CRUD operations for managing orders.

The application allows you to create, read, update, delete, and filter orders using query parameters.

---

## 📦 Order Model

Each order has the following structure:

- `id` — unique identifier  
- `date` — order creation date  
- `category` — product/category type  
- `cost` — order cost  

Example:

```json
{
  "id": "1",
  "date": "2026-03-30",
  "category": "electronics",
  "cost": 250
}
```

## 🔧 Features

- Create Order
   Add a new order

- Get Orders
   Get all orders
   Filter orders using query parameters

- Update Order
   Update an existing order by id

- Delete Order
   Remove an order by id


## 🔍 Filtering

You can filter orders using query parameters:

category — filter by category
dateFrom — start date
dateTo — end date

Example request:

GET /orders?category=electronics&dateFrom=2026-01-01&dateTo=2026-12-31
