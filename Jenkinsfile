pipeline {
 agent any

 stages {

  stage('Install Automation'){
   steps {
    bat 'cd automation && npm install'
   }
  }

  stage('Run Playwright Test'){
   steps {
    bat 'cd automation && npx playwright test'
   }
  }

 }

}