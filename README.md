```
🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄
🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄
______                   _   _       _       
| ___ \                 | | | |     | |      
| |_/ /__  _ __  _   _  | | | | ___ | |_ ___ 
|  __/ _ \| '_ \| | | | | | | |/ _ \| __/ _ \
| | | (_) | | | | |_| | \ \_/ / (_) | ||  __/
\_|  \___/|_| |_|\__, |  \___/ \___/ \__\___|
                  __/ |                      
                 |___/                       

🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄
🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄🐎🐴🎠🦄

```
Example project demonstrating how to use [AWS AppSync](https://aws.amazon.com/appsync/) & [AWS Amplify](https://aws.github.io/aws-amplify/). The project is built with React, with a goal of simplicity. The project is structured as follows:
```
.
├── src
│   ├── App.css <- All the styles. Don't do this at home.
│   ├── App.js <- Basic appp structure
│   ├── aws-exports.js <- Settings that you will need to modify are located here.
│   ├── components <- React Components
│   │   ├── Candidates.connected.jsx <- This is where the magic happens. Connect AWS Amplify to React.
│   │   ├── Candidates.jsx <- Display logic for list of Candidates.
│   │   ├── Loader.jsx <- Magical spinning horse.
│   │   └── Vote.jsx <- Individual vote.
│   ├── index.css <- Global styles.
│   ├── index.js <- React Entrypoint.
│   └── registerServiceWorker.js <- Servie worker for cash support.
```

Note: To ensure portability, the [AWS Mobile CLI](https://github.com/aws/awsmobile-cli) supporting code has been removed,
and replaced with a manually edited `aws-exports.js` file. When using AWS Amplify correctly, additional files will be
created to track resources provisioned in your environment. 

# Pre-requisites
1. Node 8.x+ installed and available.
2. Install AWS Mobile CLI
```npm install -g awsmobile-cli```

## Install Steps
1. Execute the creation command:
```
aws cloudformation create-stack --stack-name ponyvote --template-body file://./pony-cloud.yml --capabilities CAPABILITY_NAMED_IAM CAPABILITY_IAM
```
2. Retrieve outputs from the stack
```
aws cloudformation describe-stacks --stack-name ponyvote
```

3. Copy values into `src/aws-exports.js`

4. Run `yarn install`

## Update Stack
If you need to modify the stack, execute the following:
```
aws cloudformation update-stack --stack-name ponyvote --template-body file://./pony-cloud.yml --capabilities CAPABILITY_NAMED_IAM CAPABILITY_NAMED_IAM
```

