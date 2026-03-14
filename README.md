Full-Stack DevOps Student Management System with Automated CI/CD
Project Overview

This project demonstrates a complete DevOps workflow by developing and deploying a containerized full-stack web application for managing student records.

The system consists of a React frontend, Spring Boot backend, and MySQL database, all containerized using Docker and deployed automatically using a Jenkins CI/CD pipeline on AWS EC2.

Whenever new code is pushed to GitHub, a webhook triggers Jenkins to build Docker images, push them to DockerHub, and deploy updated containers to the cloud environment.

Architecture

The system follows a containerized microservices architecture with automated CI/CD.

Workflow:

Developer pushes code to GitHub

GitHub Webhook triggers Jenkins pipeline

Jenkins builds Docker images

Images are pushed to DockerHub

Updated containers are deployed to AWS EC2

Application becomes available via HTTP

Components involved:

React Frontend

Spring Boot Backend

MySQL Database

Jenkins CI/CD

Docker Containers

AWS EC2 Deployment

Technologies Used
Frontend

React

JavaScript

REST API integration

Backend

Spring Boot

Spring Data JPA

Hibernate

Database

MySQL

DevOps & Infrastructure

Docker

Jenkins

GitHub

DockerHub

AWS EC2

ngrok (for webhook tunneling)

Key Features

Full-stack web application for student record management

REST API communication between frontend and backend

Containerized services using Docker

Automated CI/CD pipeline with Jenkins

Automatic deployment to AWS EC2

GitHub webhook triggered pipeline

Multi-platform Docker image builds using Docker Buildx

CI/CD Pipeline Workflow

The Jenkins pipeline performs the following steps:

Pull latest code from GitHub

Build frontend and backend Docker images

Push images to DockerHub

Deploy containers to AWS EC2

Restart application services

This ensures continuous integration and automated deployment without manual intervention.

Deployment Architecture

Frontend → React container
Backend → Spring Boot container
Database → MySQL container

All services run as Docker containers on AWS EC2.

Cross-Architecture Compatibility

Since development was performed on Apple Silicon (ARM64) while the deployment server (AWS EC2) uses AMD64 architecture, Docker Buildx multi-platform builds were used to generate compatible images.

This ensured that Docker images run correctly in the production environment.

How to Run the Project Locally
1 Clone Repository
git clone https://github.com/yourusername/student-management-devops
cd student-management-devops
2 Build Docker Images
docker build -t frontend .
docker build -t backend .
3 Run Containers
docker compose up -d
4 Access Application

Open browser and visit:

http://localhost:3000
Future Improvements

Kubernetes deployment

Infrastructure as Code using Terraform

Monitoring using Prometheus & Grafana

HTTPS with SSL certificates

Blue-Green deployment automation

Author

Tushar Gupta
Cloud & DevOps Enthusiast
B.Tech Computer Science Engineering
