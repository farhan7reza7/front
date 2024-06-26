/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-northeast-3",
    "aws_cognito_identity_pool_id": "ap-northeast-3:5477635a-ae8e-45f2-b401-d693d75c4494",
    "aws_cognito_region": "ap-northeast-3",
    "aws_user_pools_id": "ap-northeast-3_goAbBh6cf",
    "aws_user_pools_web_client_id": "10dnge08bolqlr98of78n3b953",
    "oauth": {
        "domain": "frontnewe2a889dd-e2a889dd-dev.auth.ap-northeast-3.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://main.d2b65wp3mxn1jy.amplifyapp.com/,http://localhost:3000/,http://localhost:3000/,https://social.d2b65wp3mxn1jy.amplifyapp.com/",
        "redirectSignOut": "https://main.d2b65wp3mxn1jy.amplifyapp.com/logout/,http://localhost:3000/logout/,https://social.d2b65wp3mxn1jy.amplifyapp.com/logout/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL",
        "PHONE_NUMBER"
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
