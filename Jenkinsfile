pipeline {
    agent any

    environment {
        HEROKU_APP_NAME = 'prithviraj-portfolio' // Replace with your Heroku app name
        HEROKU_API_KEY = credentials('HEROKU_API_KEY') // Use the credential ID created in Jenkins
    }

    stages {
        
        stage('Clone Repository') {
            steps {
                // Clone the repository and specify the main branch
                git branch: 'main', url: 'https://github.com/Prithviraj2003/portfolio-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        // Install frontend dependencies
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        // Run the build script
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Deploy to Heroku') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable: 'HEROKU_API_KEY')]) {
                        sh '''
                        # Initialize a new git repository for the built files
                        git init
                        git remote add heroku https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git
                        
                        # Move to the build directory and push to Heroku
                        cd build
                        git add .
                        git commit -m "Deploy frontend build to Heroku"
                        git push -f heroku master
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
