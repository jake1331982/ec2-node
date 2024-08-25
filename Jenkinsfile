pipeline{
    agent any
    
    stages{
        stage("Workspace Preparing"){
            steps{
                script{
                    sh "rm -rf ./*"
                }
            }
            
        }
        stage("clon-repo"){
            steps{
                withCredentials([usernamePassword(credentialsId:'GITHUB_CREDENTIAL',usernameVariable:'CUSTOM_USER',passwordVariable:'CUSTOM_PASSWORD')]){
                    script{
                        sh 'git clone https://@CUSTOM_USER:$CUSTOM_PASSWORD@github.com/jake1331982/ec2-node.git'
                    }
                }
            }
        }
    }
}    
