pipeline {
    agent any

    stages {

        stage('Install Backend') {
            steps {
                bat 'cd backend && npm install'
            }
        }

        stage('Install Frontend') {
            steps {
                bat 'cd frontend && npm install'
            }
        }

        stage('Install Automation') {
            steps {
                bat 'cd automation && npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'cd automation && npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'cd automation && npx playwright test'
            }
        }

    }
}