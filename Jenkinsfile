pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run tests') {
            steps {
                script {
                    sh 'npm run testCase'
                }
            }
        }
    }
}