# Full-Stack Web Application with Django & React

This repository contains the source code for a full-stack web application built using Django for the backend and React for the frontend. The project implements JWT-based authentication.

## ✨ Features

### Backend
- Developed with Django and Django REST Framework (DRF).
- Authentication and authorization using JWT tokens.
- Custom user models and API endpoints for user registration, login, and CRUD operations.

### Frontend
- Built with React and styled for a responsive user experience.
- Axios integration for API communication.
- Protected routes for secure user access.
- Generic form components for easy reuse.

## 🔧 Tech Stack
- **Backend:** Python, Django, Django REST Framework
- **Frontend:** React, Axios, JavaScript, CSS
- **Authentication:** JSON Web Tokens (JWT)

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Python 3.x
- Node.js and npm
- SQLite (for development)

### Installation

#### Clone the Repository
```bash
git clone https://github.com/yourusername/yourprojectname.git
cd yourprojectname
```
### Backend Setup
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


### Frontend Setup
cd frontend
npm install
npm run dev


## 🔐 Documentation
- [JWT Tokens: Learn about JWT](https://jwt.io/)
- [Django REST Framework: Official Docs](https://www.django-rest-framework.org/)
- [React: Official Docs](https://reactjs.org/)

