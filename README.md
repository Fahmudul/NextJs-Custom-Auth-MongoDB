

#This project is designed to be minimal and showcase essential authentication features without additional page content.

# Custom Authentication System

This project is a fully functional custom authentication system built with Next.js, TypeScript, and MongoDB. It supports user login, signup, password reset, and email verification. JWT-based authentication is used to ensure secure access to protected routes.

## Features

- **User Signup:** Users can sign up with their email and password.
- **Email Verification:** After signing up, users will receive a verification email to confirm their account.
- **User Login:** Users can log in with their verified email and password.
- **Password Reset:** Users can reset their password via email.
- **JWT Authentication:** JSON Web Tokens are used for secure authentication of logged-in users.
- **Protected Routes:** Secure routes that require user authentication.
- **Session Management:** Ensures persistent sessions using JWT tokens stored in cookies.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (with TypeScript)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** JSON Web Tokens (JWT)
- **Email Service:** [Your chosen email service provider] (e.g., SendGrid, Nodemailer)

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Your email service provider's API key

### Installation

1. Clone the repository:
```markdown

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   EMAIL_API_KEY=your-email-service-api-key
   EMAIL_SENDER=your-email-sender-address
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app should be running on [http://localhost:3000](http://localhost:3000).

### Usage

1. **Signup:**
   - Navigate to `/signup` and create a new account.
   - Check your email for a verification link and verify your account.

2. **Login:**
   - Once your account is verified, log in at `/login`.

3. **Password Reset:**
   - If you've forgotten your password, request a reset via `/reset-password`.

4. **Protected Routes:**
   - Access protected routes once logged in.

### Folder Structure

```plaintext
src/
├── app
│   ├── (Layout)
│   │   ├── Dashboard
│   │   ├── default-layout
│   │   ├── login-sign-up
│   │   ├── reset-password
│   │   └── verify-email
│   ├── api
│   │   └── auth
│   │       ├── Login
│   │       ├── logout
│   │       ├── profile
│   │       ├── reset-password
│   │       ├── SignUp
│   │       └── verify-email
│   ├── favicon.ico
│   ├── global-error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components
├── Database
│   └── dbConfig.ts
├── Helper
│   ├── GetUserDetails.ts
│   └── SendMail.ts
├── hooks
├── Models
└── middleware.ts


```

### API Endpoints

- **POST** `/api/auth/Login`: Log in the user and generate a JWT.
- **POST** `/api/auth/logout`: Log out the user by invalidating the JWT.
- **POST** `/api/auth/SignUp`: Create a new user account.
- **POST** `/api/auth/verify-email`: Verify the user's email address.
- **POST** `/api/auth/reset-password`: Send a password reset email.
- **PUT** `/api/auth/reset-password`: Update the user's password.
- **GET** `/api/auth/profile`: Retrieve the user's profile information.


### Additional Information

The homepage (`/`) is intentionally left empty as this project is focused on demonstrating a simple authentication system. No extra configurations have been made for the homepage.

For direct access to the authentication functionalities:

- Visit the live link: [https://spark-waree.vercel.app](https://spark-waree.vercel.app)
- To go directly to the login page: [https://spark-waree.vercel.app/login-sign-up](https://spark-waree.vercel.app/login-sign-up)
