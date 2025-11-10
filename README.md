# 🏏 Cricket Player Management System

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

A full-stack dockerized web application for managing cricket player information. Built with Node.js, Express.js, and MySQL, orchestrated using Docker Compose for easy deployment and scalability.

## 📸 Screenshots

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Application+Interface" alt="Application Interface">
</p>

## ✨ Features

- 🚀 **Fully Dockerized** - Easy setup with Docker Compose
- 💾 **Persistent Storage** - Data persists across container restarts
- 🎨 **Modern UI** - Clean and responsive web interface
- 🔄 **RESTful API** - Well-structured backend architecture
- 📊 **MySQL Database** - Reliable relational database
- 🔧 **Hot Reload** - Development-friendly setup

## 📋 Table of Contents

- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Database Schema](#-database-schema)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## 🏗 Architecture

```
┌─────────────────┐
│   Web Browser   │
└────────┬────────┘
         │ HTTP (Port 3000)
         ▼
┌─────────────────┐
│   Node.js App   │
│   (Express.js)  │
└────────┬────────┘
         │ TCP (Port 3306)
         ▼
┌─────────────────┐
│  MySQL Database │
│   (Version 5.7) │
└─────────────────┘
```

### Services

| Service | Technology | Port | Description |
|---------|-----------|------|-------------|
| **app** | Node.js 14 | 3000 | Express.js web server |
| **db** | MySQL 5.7 | 3306 | Database server |

## 🔧 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker** >= 20.10.x
- **Docker Compose** >= 2.10.x
- **Git** (for cloning the repository)
- **Port 3000** available on your system

### System Requirements

- **OS**: Linux (Amazon Linux, Ubuntu, CentOS), macOS, or Windows with WSL2
- **RAM**: Minimum 2GB
- **Disk Space**: Minimum 2GB free space

## 📦 Installation

### Step 1: Install Docker

#### For Amazon Linux / CentOS / RHEL:
```bash
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

#### For Ubuntu / Debian:
```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

### Step 2: Install Docker Compose

```bash
# Download Docker Compose binary
sudo curl -L "https://github.com/docker/compose/releases/download/v2.10.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Apply executable permissions
sudo chmod +x /usr/local/bin/docker-compose

# Create symbolic link (optional)
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# Verify installation
docker-compose --version
```

### Step 3: Clone the Repository

```bash
git clone https://github.com/yourusername/cricket-app.git
cd cricket-app
```

### Step 4: Build and Run

```bash
# Build and start containers in detached mode
docker-compose up --build -d

# Check if containers are running
docker ps
```

## 🚀 Usage

### Starting the Application

```bash
# Start all services
docker-compose up -d

# Start with logs visible
docker-compose up
```

### Accessing the Application

Open your web browser and navigate to:

```
http://localhost:3000
```

For remote servers:
```
http://<server-ip>:3000
```

**Note**: Ensure port 3000 is open in your firewall settings.

### Stopping the Application

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (WARNING: This deletes all data)
docker-compose down -v
```

## 🔌 API Endpoints

### POST `/submit`

Submit a new cricketer to the database.

**Request Body:**
```json
{
  "cricketerName": "Virat Kohli",
  "countryName": "India"
}
```

**Response:**
```
Congratulations, you have successfully deployed
```

**cURL Example:**
```bash
curl -X POST http://localhost:3000/submit \
  -H "Content-Type: application/json" \
  -d '{"cricketerName":"Virat Kohli","countryName":"India"}'
```

## 📁 Project Structure

```
cricket-app/
├── .dockerignore           # Docker ignore file
├── .gitignore             # Git ignore file
├── Dockerfile             # Node.js app Docker configuration
├── docker-compose.yml     # Multi-container orchestration
├── package.json           # Node.js dependencies
├── app.js                 # Express server & application logic
├── public/                # Static files
│   └── index.html         # Frontend interface
└── README.md              # Project documentation
```

### File Descriptions

| File | Purpose |
|------|---------|
| `Dockerfile` | Defines the Node.js application container image |
| `docker-compose.yml` | Orchestrates multi-container setup |
| `app.js` | Express server with MySQL integration |
| `package.json` | Node.js project dependencies |
| `public/index.html` | Frontend user interface |

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# MySQL Configuration
MYSQL_ROOT_PASSWORD=your_secure_password
MYSQL_DATABASE=cricket_db

# Application Configuration
APP_PORT=3000
DB_HOST=db
DB_USER=root
```

### docker-compose.yml

Key configuration options:

```yaml
version: '3.8'

services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: kastro
      MYSQL_DATABASE: cricket_db
    volumes:
      - db_data:/var/lib/mysql
    
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db

volumes:
  db_data:
```

### package.json

Dependencies:

```json
{
  "dependencies": {
    "express": "^4.17.1",
    "mysql": "^2.18.1",
    "body-parser": "^1.19.0"
  }
}
```

## 🗄️ Database Schema

### Database: `cricket_db`

### Table: `cricketers`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique identifier |
| `name` | VARCHAR(255) | NOT NULL | Cricketer's name |
| `country` | VARCHAR(255) | NOT NULL | Country name |

### Creating the Table

After starting the containers, initialize the database:

```bash
# Access MySQL container
docker exec -it cricket-app-db-1 mysql -u root -p
# Password: kastro
```

Inside MySQL shell:

```sql
-- Show available databases
SHOW DATABASES;

-- Select the database
USE cricket_db;

-- Create the cricketers table
CREATE TABLE cricketers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL
);

-- Verify table creation
SHOW TABLES;
DESCRIBE cricketers;

-- Exit MySQL
EXIT;
```

### Viewing Data

```sql
-- Access MySQL
docker exec -it cricket-app-db-1 mysql -u root -p

-- Query data
USE cricket_db;
SELECT * FROM cricketers;
SELECT * FROM cricketers WHERE country = 'India';

-- Exit
EXIT;
```

## 💻 Development

### Local Development Setup

```bash
# Install dependencies locally (optional)
npm install

# Run in development mode
npm start
```

### Viewing Logs

```bash
# View all logs
docker-compose logs

# Follow logs in real-time
docker-compose logs -f

# View specific service logs
docker-compose logs app
docker-compose logs db

# View last 100 lines
docker-compose logs --tail=100
```

### Rebuilding Containers

```bash
# Rebuild and restart
docker-compose up --build -d

# Force recreate containers
docker-compose up --force-recreate -d
```

### Accessing Container Shell

```bash
# Access app container
docker exec -it cricket-app-app-1 /bin/bash

# Access database container
docker exec -it cricket-app-db-1 /bin/bash
```

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Port 3000 Already in Use

**Error:**
```
Error starting userland proxy: listen tcp 0.0.0.0:3000: bind: address already in use
```

**Solution:**
```bash
# Find process using port 3000
sudo lsof -i :3000
# or
sudo netstat -tulpn | grep :3000

# Kill the process
sudo kill -9 <PID>

# Or change port in docker-compose.yml
ports:
  - "3001:3000"
```

#### 2. Cannot Connect to Database

**Error:**
```
Database connection failed: Error: connect ECONNREFUSED
```

**Solution:**
```bash
# Check if db container is running
docker ps

# Check database logs
docker-compose logs db

# Verify credentials in app.js match docker-compose.yml
# Wait for MySQL to fully initialize (may take 30-60 seconds)
```

#### 3. Table Does Not Exist

**Error:**
```
Error: ER_NO_SUCH_TABLE: Table 'cricket_db.cricketers' doesn't exist
```

**Solution:**
```bash
# Create the table as described in Database Schema section
docker exec -it cricket-app-db-1 mysql -u root -p
# Then create the table using SQL commands
```

#### 4. Permission Denied

**Error:**
```
Got permission denied while trying to connect to the Docker daemon socket
```

**Solution:**
```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Log out and log back in, or run:
newgrp docker
```

#### 5. Container Exits Immediately

**Solution:**
```bash
# Check container logs
docker-compose logs app

# Rebuild without cache
docker-compose build --no-cache
docker-compose up -d
```

### Useful Debugging Commands

```bash
# Check container status
docker ps -a

# Inspect container
docker inspect cricket-app-app-1

# View container resources
docker stats

# Check network connectivity
docker network ls
docker network inspect cricket-app_default

# Clean up unused resources
docker system prune -a
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Follow JavaScript ES6+ standards
- Use meaningful variable and function names
- Add comments for complex logic
- Test thoroughly before submitting PR

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024




<p align="center">
  <a href="#-cricket-player-management-system">Back to top ⬆️</a>
</p>
