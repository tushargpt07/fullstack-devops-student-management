pipeline {
    agent any

    stages {

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t tushargpt07/student-backend:1.0 ./backend'
                sh 'docker build -t tushargpt07/student-frontend:1.0 ./frontend'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push tushargpt07/student-backend:1.0'
                    sh 'docker push tushargpt07/student-frontend:1.0'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ec2-user@3.6.94.247 "
                        docker pull tushargpt07/student-backend:1.0 &&
                        docker pull tushargpt07/student-frontend:1.0 &&
                        docker stop backend || true &&
                        docker stop frontend || true &&
                        docker rm backend || true &&
                        docker rm frontend || true &&
                        docker run -d --name backend --link mysql:mysql -p 8080:8080 \
                          -e SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/studentdb \
                          -e SPRING_DATASOURCE_USERNAME=root \
                          -e SPRING_DATASOURCE_PASSWORD=root \
                          tushargpt07/student-backend:1.0 &&
                        docker run -d --name frontend -p 80:80 \
                          tushargpt07/student-frontend:1.0
                    "
                    '''
                }
            }
        }
    }
}
