pipeline{
    agent{
        label "slave"
    }
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
                script{
                     sh "echo 'hola'"
            }
        }
    }
}    
