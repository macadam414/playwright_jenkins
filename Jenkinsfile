pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    // Установка зависимостей
                    sh 'npm install'
                }
            }
        }

        stage('Run tests') {
            steps {
                script {
                    // Запуск тестов
                    sh 'npm run testCase'
                }
            }
        }
    }
}