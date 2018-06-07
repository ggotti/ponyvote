```
______                   _   _       _       
| ___ \                 | | | |     | |      
| |_/ /__  _ __  _   _  | | | | ___ | |_ ___ 
|  __/ _ \| '_ \| | | | | | | |/ _ \| __/ _ \
| | | (_) | | | | |_| | \ \_/ / (_) | ||  __/
\_|  \___/|_| |_|\__, |  \___/ \___/ \__\___|
                  __/ |                      
                 |___/                       

```
Example project demonstrating how to use AWS AppSync & AWS Amplify.

Note: To ensure portability, the [AWS Mobile CLI](https://github.com/aws/awsmobile-cli) supporting code has been removed,
and replaced with a manually edited `aws-exports.js` file. When using AWS Amplify correctly, additional files will be
created to track resources provisioned in your environment. 

# Pre-requisites
Install AWS Mobile CLI
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

