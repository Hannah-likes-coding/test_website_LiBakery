pipeline {
  agent any

  tools {
    nodejs 'NodeJS_18'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright install --with-deps'
        sh 'npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npx allure generate allure-results --clean -o allure-report'
      }
    }

    stage('Publish Allure Report') {
      steps {
        allure includeProperties: false, jdk: '', reportBuildPolicy: 'ALWAYS', results: [[path: 'allure-results']]
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/allure-report/**', allowEmptyArchive: true
    }
  }
}
