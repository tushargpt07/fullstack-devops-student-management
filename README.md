FULL-STACK DEVOPS STUDENT MANAGEMENT SYSTEM WITH AUTOMATED CI/CD
Project Overview:

This project demonstrates a complete DevOps workflow by developing and deploying a containerized full-stack web application for managing student records.

The system consists of a React frontend, Spring Boot backend, and MySQL database, all containerized using Docker and deployed automatically using a Jenkins CI/CD pipeline on AWS EC2.

Whenever new code is pushed to GitHub, a webhook triggers Jenkins to build Docker images, push them to DockerHub, and deploy updated containers to the cloud environment.

ARCHITECTURE:

The system follows a containerized microservices architecture with automated CI/CD.

Workflow:

1.Developer pushes code to GitHub

2.GitHub Webhook triggers Jenkins pipeline

3.Jenkins builds Docker images

4.Images are pushed to DockerHub

5.Updated containers are deployed to AWS EC2

6.Application becomes available via HTTP

COMPONENTS INVOLVED:

-React Frontend

-Spring Boot Backend

-MySQL Database

-Jenkins CI/CD

-Docker Containers

-AWS EC2 Deployment

CI/CD PIPELINE WORKFLOW:

The Jenkins pipeline performs the following steps:

1.Pull latest code from GitHub

2.Build frontend and backend Docker images

3.Push images to DockerHub

4.Deploy containers to AWS EC2

5.Restart application services

This ensures continuous integration and automated deployment without manual intervention.

How to Run the Project Locally:
1 -Clone Repository
git clone https://github.com/yourusername/student-management-devops
cd student-management-devops
2 -Build Docker Images
docker build -t frontend .
docker build -t backend .
3 -Run Containers
docker compose up -d
4 -Access Application

Open browser and visit:

http://localhost:3000

FUTURE IMPROVEMENTS:

-Kubernetes deployment

-Infrastructure as Code using Terraform

-Monitoring using Prometheus & Grafana

-HTTPS with SSL certificates

-Blue-Green deployment automation

Author

Tushar Gupta
Cloud & DevOps Enthusiast
B.Tech Computer Science Engineering
