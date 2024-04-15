pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Run tests') {
            steps {
                script {
                    bat 'npm run testCase'
                }
            }
        }
    }
}