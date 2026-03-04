pipeline {
 agent any

 stages {

  stage('Install'){
   steps {
    bat 'cd automation && npm install'
   }
  }

  stage('Run Test'){
   steps {
    bat 'cd automation && npx playwright test'
   }
  }

 }

}