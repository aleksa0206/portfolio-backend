# Portfolio Backend

REST API for a full-stack portfolio website — built with a layered architecture, centralized error handling, request validation, and a full test suite.

**Live API:** https://aleksao.me/api
**API Documentation:** https://portfolio-backend-production-fef1.up.railway.app/api-docs

## Tech Stack

- **Runtime:** Node.js 22, TypeScript
- **Framework:** Express
- **Database:** MySQL, managed with Prisma ORM
- **Authentication:** JWT with bcrypt password hashing
- **Validation:** Zod
- **Logging:** Pino (structured JSON logging)
- **Documentation:** Swagger / OpenAPI
- **Testing:** Vitest
- **Containerization:** Docker (multi-stage builds)
- **CI/CD:** GitHub Actions
- **Deployment:** Railway

## Architecture

The API follows a layered architecture with dependency injection:

Route → Controller → Service → Repository → Prisma → MySQL

- **Routes** define endpoints and apply middleware (auth, validation, rate limiting)
- **Controllers** handle HTTP request/response, no business logic
- **Services** contain business logic, receive their dependencies via constructor injection
- **Repositories** are the only layer that talks to Prisma directly
- A **DI Container** (Singleton) wires up all repositories and services in one place

### Error handling

All errors extend a shared `AppError` base class with a defined HTTP status code and an `ErrorCode`. Error codes are separated from their user-facing messages (`ErrorMessages` map), so wording can change in one place without touching business logic. A centralized `errorHandler` middleware converts any thrown error into a consistent JSON response.

### Security

- Helmet for HTTP security headers
- Rate limiting on login and contact form endpoints
- Zod schema validation on every write endpoint
- Passwords hashed with bcrypt
- JWT-based auth with a route guard middleware
- CORS restricted to the frontend origin

## Features

- **Auth** — JWT login for a single admin account
- **Education / Licenses / Projects** — full CRUD, public read access, protected write access
- **About** — single-record upsert (create or update in one endpoint)
- **Contact** — public message submission, protected inbox for the admin

## Project Structure

src/
├── config/ # Prisma client, logger setup
├── container/ # DI container
├── controllers/ # Request handlers
├── errors/ # AppError hierarchy
├── middleware/ # auth, validation, rate limiting, error handler
├── repositories/ # Prisma data access
├── routes/ # Express routers + Swagger annotations
├── services/ # Business logic
├── types/ # Enums, shared interfaces
├── validations/ # Zod schemas
└── index.ts # App entry point

## Getting Started

### Prerequisites

- Node.js 22+
- MySQL 8

### Setup

npm install
cp .env.example .env
npx prisma migrate dev
npm run seed
npm run dev

Server runs on `http://localhost:4000`. API docs available at `/api-docs`.

### Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start dev server with hot reload        |
| `npm run build` | Compile TypeScript to `dist/`           |
| `npm start`     | Run the compiled production build       |
| `npm test`      | Run the test suite                      |
| `npm run seed`  | Seed the database with an admin account |

## Docker

docker build -t portfolio-backend .

A `docker-compose.yml` is available separately to run this service alongside MySQL and the frontend.

## Related Repositories

- [portfolio-frontend](https://github.com/aleksa0206/portfolio-frontend) — Angular frontend
