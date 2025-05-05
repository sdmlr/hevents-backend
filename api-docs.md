# 📘 Hevents API Documentation

This document describes all available backend API endpoints for the Hevents platform.

---

## 📂 Events

### `GET /events`

Fetch all events.

**Response**

```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "date": "YYYY-MM-DD",
    "time": "HH:MM",
    "location": "string",
    "image_url": "string",
    "category": "string"
  }
]
```

### `GET /events/:id`

Fetch a single event by ID.

**Response**

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "location": "string",
  "image_url": "string",
  "category": "string"
}
```

### `POST /events`

Create a new event.

**Request Body**

```json
{
  "title": "string",
  "description": "string",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "location": "string",
  "image_url": "string",
  "category": "string"
}
```

**Response**

```json
{
  "message": "Event created",
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "date": "YYYY-MM-DD",
    "time": "HH:MM",
    "location": "string",
    "image_url": "string",
    "category": "string"
  }
}
```

### `PUT /events/:id`

Update an existing event.

**Request Body**: same as POST

**Response**

```json
{
  "message": "Event updated",
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "date": "YYYY-MM-DD",
    "time": "HH:MM",
    "location": "string",
    "image_url": "string",
    "category": "string"
  }
}
```

### `DELETE /events/:id`

Delete an event.

**Response**

```json
{
  "message": "Event deleted"
}
```

### `POST /signups`

Sign up a user for an event.

**Request Body**

```json
{
  "event_id": "string",
  "user_email": "string"
}
```

**Response**

```json
{
  "message": "Signed up successfully",
  "data": {
    "id": "string",
    "event_id": "string",
    "user_email": "string"
  }
}
```

### `GET /signups?email={user_email}`

Get all events a user has signed up for.

**Response**

```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "date": "YYYY-MM-DD",
    "time": "HH:MM",
    "location": "string",
    "image_url": "string",
    "category": "string"
  }
]
```
