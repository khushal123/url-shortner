# NestJS URL Shortener API

## Description

The NestJS URL Shortener API allows you to create short URLs for long URLs and retrieve them when needed. It provides endpoints for creating short URLs, fetching all short URLs, and retrieving a short URL by its hash.

## Installation

To run the API, make sure you have Node.js and npm installed on your system. Then, follow these steps:

1. Clone the repository:

```bash
git clone <repository_url>
cd <repository_folder>
```

2. Install the required dependencies:

```bash
npm install
```

## Usage

To start the API in development mode, use the following command:

```bash
npm run start:dev
```

The API will be running at `http://localhost:3600`.

## Swagger Documentation

The API comes with built-in Swagger documentation, which provides an interactive user interface to explore the available endpoints and their descriptions.

You can access the Swagger documentation by navigating to the following URL in your web browser:

```
http://localhost:3600/docs/
```

## API Endpoints

### Create Short URL

#### POST /links

Create a short URL for a long URL.

**Request Body**

- `url` (string) - The long URL to shorten. (Required)

**Responses**

- `201` - Short URL successfully created.
  - `application/json`:
    - Schema: [ShortUrlEntity](#shorturlentity)

### Fetch All Short URLs

#### GET /links

Get all the short URLs available.

**Responses**

- `201` - Successfully retrieved all short URLs.
  - `application/json`:
    - Schema: Array of [ShortUrlEntity](#shorturlentity)

### Fetch Short URL by Hash

#### GET /links/{urlHash}

Get a short URL by its hash.

**Parameters**

- `urlHash` (string) - The hash of the short URL. (Required, in path)

**Responses**

- `201` - Successfully retrieved the short URL.
  - `application/json`:
    - Schema: [ShortUrlEntity](#shorturlentity)

## API Components

### Schemas

#### CreateShortUrlDto

The data required to create a short URL.

- `url` (string) - The long URL to shorten. (Required)

#### ShortUrlEntity

Represents a short URL entity.

- `id` (number) - The unique identifier of the short URL. (Required)
- `url` (string) - The original long URL. (Required)
- `urlHash` (string) - The hash of the short URL. (Required)

---

Now you have all the information to run and use the NestJS URL Shortener API. Enjoy using the API to create and manage your short URLs! If you encounter any issues or have any questions, feel free to contact us. Happy shortening! 🚀
