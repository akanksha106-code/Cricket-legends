# 🏏 Cricket Player Management System

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

A full-stack dockerized web application for managing cricket player information. Built with Node.js, Express.js, and MySQL, orchestrated using Docker Compose for easy deployment and scalability.

## 📸 Screenshots

<img width="1917" height="957" alt="image" src="https://github.com/user-attachments/assets/9bfa432f-1655-460b-b344-43d9494f4ac7" />


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



