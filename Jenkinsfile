pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/mdibrahim-ux/valyrian-craft-studio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-demo:v1 .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker rm -f devops-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 80:8080 --name devops-container devops-demo:v1'
            }
        }
    }
}