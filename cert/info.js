
// A certificate signing request (CSR) is an encoded file containing information about your website, service, organization, and domain name. This information is used by a Certificate Authority (CA) to create an SSL/TLS certificate for your website to encrypt traffic to your site. A certificate CSR also contains your public key and signature, which helps to verify your identity and secure communications to your site.

// Generating Private Key  => STARTS HERE
// openssl genrsa -out devuser.key 2048

// Generating CSR with associated private key 
// openssl req -new -key devuser.key -out devuser.csr -subj "/CN=devuser/O=dev"

// CN stands for like username
// O stands for like group name

// Create the CertificateSigningRequest yaml file
// populate the request field with the RESULT of the command below:

// base64 encoded value of the CSR file content
// cat myuser.csr | base64 | tr -d "\n"

// kubectl get csr

// kubectl certificate approve myuser

// kubectl get csr/myuser -o yaml

// kubectl get csr myuser -o jsonpath='{.status.certificate}'| base64 -d > myuser.crt

// COMMAND TO SET CLIENT CERIFICATE USER ON THE CLUSTER
// kubectl config set-credentials devuser --client-certificate=${HOME}/Projects/software/cert/devuser.crt --client-key=${HOME}/Projects/software/cert/devuser.key

// COMMAND TO SET USER CONTEXT ON THE CLUSTER
// kubectl config set-context devteam-context --cluster=docker-desktop --namespace=developers-namespace --user=devteam


// service-node-port-range which defines a range of ports to use for NodePort allocation and usually defaults to 30000-32767.

// openssl x509 -req -in comm.csr -CA ca.crt -CAkey ca.key -out comm.crt
