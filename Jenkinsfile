pipeline {
    agent any

    stages {
        stage('Deploy') {
    steps {
        sh 'sudo cp -r * /var/www/html/'
    }
}
        stage('Build') {
            steps {
                sh 'echo "Build started..."'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Testing..."'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying project..."'
            }
        }
    }
}