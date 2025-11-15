# 🚀 Full-Stack REST API Server

A comprehensive and production-ready RESTful API backend built with Node.js, Express.js, and MongoDB. This project demonstrates advanced backend development skills including nested routes, authentication, middleware implementation, and best practices for scalable API architecture.

---

## ✨ Key Features

### Core Functionality
- 🔐 **JWT Authentication & Authorization** - Secure user authentication with token-based system
- 📝 **Complete CRUD Operations** - Full Create, Read, Update, Delete functionality
- 🔗 **Nested API Routes** - Complex routing structure with parent-child relationships
- 🗄️ **MongoDB Integration** - NoSQL database with Mongoose ODM
- ✅ **Data Validation** - Input validation using Joi/express-validator
- 🛡️ **Error Handling** - Centralized error handling middleware
- 🔒 **Password Encryption** - Secure password hashing with bcrypt
- 📊 **Request Logging** - Morgan middleware for API monitoring

### Advanced Features
- 🎯 **Custom Middleware** - Authentication, validation, and error handling
- 📄 **Pagination & Filtering** - Efficient data retrieval with query parameters
- 🔍 **Search Functionality** - Advanced search across multiple fields
- 🚫 **Rate Limiting** - API request throttling for security
- 🌐 **CORS Configuration** - Cross-Origin Resource Sharing setup
- 📝 **API Documentation** - Clear endpoint documentation
- 🔄 **RESTful Standards** - Following REST API best practices
- ⚡ **Async/Await** - Modern asynchronous JavaScript patterns

---

## 🛠️ Technologies & Tools

### Backend Stack
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Security & Validation
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcrypt** - Password hashing
- **express-validator / Joi** - Input validation
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting

### Utilities
- **dotenv** - Environment variables management
- **morgan** - HTTP request logger
- **cors** - Cross-origin resource sharing
- **nodemon** - Development auto-restart

---

## 📁 Project Structure
```
fullstack-api-server/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── userController.js    # User operations
│   │   └── productController.js # Product operations
│   ├── models/
│   │   ├── User.js              # User schema
│   │   └── Product.js           # Product schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   ├── userRoutes.js        # User endpoints
│   │   └── productRoutes.js     # Product endpoints
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT verification
│   │   ├── errorHandler.js      # Error handling
│   │   └── validation.js        # Input validation
│   ├── utils/
│   │   └── helpers.js           # Helper functions
│   └── app.js                   # Express app setup
├── .env                         # Environment variables
├── .gitignore
├── package.json
├── server.js                    # Entry point
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/fullstack-api-server.git

# Navigate to project directory
cd fullstack-api-server

# Install dependencies
npm install

# Create .env file and add your configuration
cp .env.example .env

# Start MongoDB (if running locally)
mongod

# Run the server in development mode
npm run dev

# Or run in production mode
npm start
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/your-database
# Or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# API Configuration
API_VERSION=v1
RATE_LIMIT_MAX=100
```

---

## 📚 API Endpoints

### Authentication Routes
```
POST   /api/v1/auth/register      - Register new user
POST   /api/v1/auth/login         - User login
GET    /api/v1/auth/profile       - Get user profile (Protected)
PUT    /api/v1/auth/update        - Update profile (Protected)
```

### User Routes (Protected)
```
GET    /api/v1/users              - Get all users (Admin)
GET    /api/v1/users/:id          - Get user by ID
PUT    /api/v1/users/:id          - Update user
DELETE /api/v1/users/:id          - Delete user
```

### Product Routes
```
GET    /api/v1/products           - Get all products (with pagination)
GET    /api/v1/products/:id       - Get single product
POST   /api/v1/products           - Create product (Protected)
PUT    /api/v1/products/:id       - Update product (Protected)
DELETE /api/v1/products/:id       - Delete product (Protected)
```

### Nested Routes Example
```
GET    /api/v1/users/:userId/orders        - Get user's orders
POST   /api/v1/users/:userId/orders        - Create order for user
GET    /api/v1/users/:userId/orders/:id    - Get specific order
```

---

## 🔧 API Usage Examples

### Register User
```bash
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### Login
```bash
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Get Products (with filters)
```bash
GET /api/v1/products?page=1&limit=10&search=laptop&sort=-createdAt

Response:
{
  "success": true,
  "count": 45,
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 45
  },
  "data": [...]
}
```

### Protected Route
```bash
GET /api/v1/auth/profile
Authorization: Bearer YOUR_JWT_TOKEN

Response:
{
  "success": true,
  "data": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## 🔐 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ Protected routes with middleware
- ✅ Input sanitization and validation
- ✅ Rate limiting to prevent abuse
- ✅ CORS configuration
- ✅ Security headers with Helmet
- ✅ Environment variables for sensitive data
- ✅ MongoDB injection prevention
- ✅ XSS protection

---

## 🧪 Testing
```bash
# Run tests (if implemented)
npm test

# Run tests in watch mode
npm run test:watch

# Check code coverage
npm run test:coverage
```

---

## 📊 Available Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

---

## 🎯 Key Learnings & Skills Demonstrated

### Backend Development
- RESTful API design and implementation
- Database modeling and relationships
- Authentication and authorization flows
- Middleware architecture
- Error handling strategies

### Best Practices
- Clean code organization
- MVC architecture pattern
- Async/await error handling
- Environment-based configuration
- Security best practices
- API versioning

### Advanced Concepts
- Nested routing structures
- Query parameter handling
- Pagination implementation
- Data validation layers
- Custom middleware creation

---

## 🌟 Future Enhancements

- [ ] Role-based access control (RBAC)
- [ ] File upload functionality with Multer
- [ ] Email verification system
- [ ] Password reset functionality
- [ ] Refresh token implementation
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline setup
- [ ] Redis caching layer
- [ ] WebSocket integration
- [ ] GraphQL endpoint
- [ ] Microservices architecture

---

## 📖 Documentation
Using : 
PostMan - For testing

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Sylar**
- Email: apdoismail550@gmail.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Express.js documentation and community
- MongoDB documentation
- Node.js best practices guides
- Stack Overflow community
- Open source contributors

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue
- Contact me via email
- Connect on LinkedIn

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

**Made with ❤️ and ☕ using Node.js & Express.js**

</div>
