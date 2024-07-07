/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_identity_pool_id": "ap-south-1:68d22e02-0281-4bbf-9457-1aceecaa01aa",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_tYd9VM2Iu",
    "aws_user_pools_web_client_id": "3ccta4k6t2tn3e78mqf3mled9f",
    "oauth": {
        "domain": "front55d8f75a-55d8f75a-dev.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/,https://main.d2b65wp3mxn1jy.amplifyapp.com/",
        "redirectSignOut": "http://localhost:3000/,https://main.d2b65wp3mxn1jy.amplifyapp.com/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "FACEBOOK",
        "GOOGLE",
        "AMAZON"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
