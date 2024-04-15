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

        stage('Update playwright libraries') {
            steps {
                script {
                    bat 'npx playwright install'
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