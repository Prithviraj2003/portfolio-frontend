pipeline {
    agent any

    environment {
        CI = 'false'
        HEROKU_APP_NAME = 'prithviraj-portfolio'
        HEROKU_API_KEY = credentials('HEROKU_API_KEY')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Prithviraj2003/portfolio-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        sh 'npm install --force'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Deploy to Heroku') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'heroku-api-key', variable: 'HEROKU_API_KEY')]) {
                        sh '''
                            git init
                            git config user.email "rindulkar2003@gmail.com"
                            git config user.name "prithviraj"
                            git remote remove heroku || true  # Remove existing remote if it exists
                            git remote add heroku https://heroku:$HEROKU_API_KEY@git.heroku.com/prithviraj-portfolio.git
                            git add .
                            git commit -m "Deploying to Heroku"
                            git push -f heroku main
                        '''
                    }
                }
            }
        }

    }

    post {
        success {
            echo 'Deployment to Heroku succeeded!'
        }
        failure {
            echo 'Deployment to Heroku failed.'
        }
    }
}
