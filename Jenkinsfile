pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/tushargpt07/fullstack-devops-student-management.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t tushargpt07/student-backend:1.0 ./backend'
                sh 'docker build -t tushargpt07/student-frontend:1.0 ./frontend'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push tushargpt07/student-backend:1.0'
                    sh 'docker push tushargpt07/student-frontend:1.0'
                }
            }
        }
    }
}


