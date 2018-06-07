
# Pre-requisites
Install AWS Mobile CLI
```npm install -g awsmobile-cli```

# Install
Does not support the profile settings within the CLI by default:
`awsmobile configure aws`

`awsmobile init` initialise backend resources.


## Install Steps
1. Execute the creation command:
```
aws cloudformation create-stack --stack-name ponyvote --template-body file://./pony-cloud.yml --capabilities CAPABILITY_NAMED_IAM CAPABILITY_IAM
```
2. Retrieve outputs from the stack
```
aws cloudformation describe-stacks --stack-name ponyvote
```

## Update Stack
If you need to modify the stack, execute the following:
```
aws cloudformation update-stack --stack-name ponyvote --template-body file://./pony-cloud.yml --capabilities CAPABILITY_NAMED_IAM CAPABILITY_NAMED_IAM
```

