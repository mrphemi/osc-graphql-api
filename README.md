# GraphQL API

### Technologies Used

- [Node.js](https://nodejs.org/en) - JavaScript runtime environment
- [Apollo Server](https://www.apollographql.com/docs/apollo-server) - GraphQL server
- [GraphQL](https://graphql.org/) - Query language for APIs
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/) - TypeScript ORM
- [SQLite](https://www.sqlite.org/) - SQL database engine
- [Sequelize TypeScript](https://github.com/sequelize/sequelize-typescript) - TypeScript decorators for Sequelize
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing
- [JWT](https://jwt.io/) - JSON Web Tokens for authentication
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
PORT=            # Port number for the server
DB_NAME=         # Database name
DB_USERNAME=     # Database username
DB_PASSWORD=     # Database password
DB_HOST=         # Database host
JWT_SECRET=      # Secret key for JWT token generation
```

### Migration and Seeding

Run the following commands to create all db tables and add dummy data to db:

#### Create Tables

```bash
npm run migrate
```

#### Add data to tables

```bash
npm run db:seed
```

### Start Development Server

Run the following command to spin a dev server:

```bash
npm run dev
```
