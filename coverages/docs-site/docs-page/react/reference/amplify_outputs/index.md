[<- Back to index](../../../../docs-pages.md)

#  Snippets

Page: https://docs.amplify.aws/react/reference/amplify_outputs/

Coverage: 100.0%

#### `amplify/backend.ts`

~~~
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const backend = defineBackend({
  auth,
  data,
});

backend.addOutput({
  storage: {
aws_region: "us-east-1",
bucket_name: "my-externally-managed-bucket",
  },
});

~~~

| | |
| -- | -- |
| Hash | `e4c107cd31dcc7b7` |
| Covered | ✅ |

##### Covering Regions

- [../../packages/integration-tests/\_\_tests\_\_/defined-behavior/4-uncovered/reference/amplify-outputs.ts](../../../../../../packages/integration-tests/__tests__/defined-behavior/4-uncovered/reference/amplify-outputs.ts#L9)

---

#### `src/index.ts`

~~~
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

~~~

| | |
| -- | -- |
| Hash | `96184488681b162e` |
| Covered | ✅ |

##### Covering Regions

- [../../packages/integration-tests/\_\_tests\_\_/defined-behavior/4-uncovered/reference/amplify-outputs.ts](../../../../../../packages/integration-tests/__tests__/defined-behavior/4-uncovered/reference/amplify-outputs.ts#L9)

---

#### `amplify/backend.ts`

~~~
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const backend = defineBackend({
  auth,
  data,
});

backend.addOutput({
  custom: {
api_id: "restAPIId",
api_endpoint: "https://api.example.com",
api_name: "restApiName",
  },
});

~~~

| | |
| -- | -- |
| Hash | `ecab0f33dfa4d382` |
| Covered | ✅ |

##### Covering Regions

- [../../packages/integration-tests/\_\_tests\_\_/defined-behavior/4-uncovered/reference/amplify-outputs.ts](../../../../../../packages/integration-tests/__tests__/defined-behavior/4-uncovered/reference/amplify-outputs.ts#L9)

---

#### `src/index.ts`

~~~
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);
const currentConfig = Amplify.getConfig();
Amplify.configure({
  ...currentConfig,
  API: {
REST: {
  [outputs.custom.api_name]: {
    endpoint: outputs.custom.api_endpoint,
    region: "us-east-1",
  },
},
  },
});

~~~

| | |
| -- | -- |
| Hash | `e294b9ce19c1ac38` |
| Covered | ✅ |

##### Covering Regions

- [../../packages/integration-tests/\_\_tests\_\_/defined-behavior/4-uncovered/reference/amplify-outputs.ts](../../../../../../packages/integration-tests/__tests__/defined-behavior/4-uncovered/reference/amplify-outputs.ts#L9)

---

#### `Unnamed Snippet`

~~~
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://amplify.aws/2024-02/outputs-schema.json",
  "title": "AWS Amplify Backend Outputs",
  "description": "Config format for Amplify Gen 2 client libraries to communicate with backend services.",
  "type": "object",
  "additionalProperties": false,
  "properties": {
"$schema": {
  "description": "JSON schema",
  "type": "string"
},
"version": {
  "description": "Version of this schema",
  "const": "1"
},
"analytics": {
  "description": "Outputs manually specified by developers for use with frontend library",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "amazon_pinpoint": {
"type": "object",
"additionalProperties": false,
"properties": {
  "aws_region": {
    "description": "AWS Region of Amazon Pinpoint resources",
    "$ref": "#/$defs/aws_region"
  },
  "app_id": {
    "type": "string"
  }
},
"required": [
  "aws_region",
  "app_id"
]
    }
  }
},
"auth": {
  "description": "Outputs generated from defineAuth",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "aws_region": {
"description": "AWS Region of Amazon Cognito resources",
"$ref": "#/$defs/aws_region"
    },
    "user_pool_id": {
"description": "Cognito User Pool ID",
"type": "string"
    },
    "user_pool_client_id": {
"description": "Cognito User Pool Client ID",
"type": "string"
    },
    "identity_pool_id": {
"description": "Cognito Identity Pool ID",
"type": "string"
    },
    "password_policy": {
"description": "Cognito User Pool password policy",
"type": "object",
"additionalProperties": false,
"properties": {
  "min_length": {
    "type": "integer",
    "minimum": 6,
    "maximum": 99
  },
  "require_numbers": {
    "type": "boolean"
  },
  "require_lowercase": {
    "type": "boolean"
  },
  "require_uppercase": {
    "type": "boolean"
  },
  "require_symbols": {
    "type": "boolean"
  }
}
    },
    "oauth": {
"type": "object",
"additionalProperties": false,
"properties": {
  "identity_providers": {
    "description": "Identity providers set on Cognito User Pool",
    "type": "array",
    "items": {
      "type": "string",
      "enum": [
        "GOOGLE",
        "FACEBOOK",
        "LOGIN_WITH_AMAZON",
        "SIGN_IN_WITH_APPLE"
      ]
    },
    "minItems": 0,
    "uniqueItems": true
  },
  "domain": {
    "description": "Domain used for identity providers",
    "type": "string"
  },
  "scopes": {
    "type": "array",
    "items": {
      "type": "string"
    },
    "minItems": 0,
    "uniqueItems": true
  },
  "redirect_sign_in_uri": {
    "description": "URIs used to redirect after signing in using an identity provider",
    "type": "array",
    "items": {
      "type": "string"
    },
    "minItems": 1,
    "uniqueItems": true
  },
  "redirect_sign_out_uri": {
    "description": "URIs used to redirect after signing out",
    "type": "array",
    "items": {
      "type": "string"
    },
    "minItems": 1,
    "uniqueItems": true
  },
  "response_type": {
    "type": "string",
    "enum": [
      "code",
      "token"
    ]
  }
},
"required": [
  "identity_providers",
  "domain",
  "scopes",
  "redirect_sign_in_uri",
  "redirect_sign_out_uri",
  "response_type"
]
    },
    "standard_required_attributes": {
"description": "Cognito User Pool standard attributes required for signup",
"type": "array",
"items": {
  "$ref": "#/$defs/amazon_cognito_standard_attributes"
},
"minItems": 0,
"uniqueItems": true
    },
    "username_attributes": {
"description": "Cognito User Pool username attributes",
"type": "array",
"items": {
  "type": "string",
  "enum": [
    "email",
    "phone_number",
    "username"
  ]
},
"minItems": 1,
"uniqueItems": true
    },
    "user_verification_types": {
"type": "array",
"items": {
  "type": "string",
  "enum": [
    "email",
    "phone_number"
  ]
}
    },
    "unauthenticated_identities_enabled": {
"type": "boolean",
"default": true
    },
    "mfa_configuration": {
"type": "string",
"enum": [
  "NONE",
  "OPTIONAL",
  "REQUIRED"
]
    },
    "mfa_methods": {
"type": "array",
"items": {
  "enum": [
    "SMS",
    "TOTP"
  ]
}
    }
  },
  "required": [
    "aws_region",
    "user_pool_id",
    "user_pool_client_id"
  ]
},
"data": {
  "description": "Outputs generated from defineData",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "aws_region": {
"$ref": "#/$defs/aws_region"
    },
    "url": {
"description": "AppSync endpoint URL",
"type": "string"
    },
    "model_introspection": {
"description": "generated model introspection schema for use with generateClient",
"type": "object"
    },
    "api_key": {
"type": "string"
    },
    "default_authorization_type": {
"$ref": "#/$defs/aws_appsync_authorization_type"
    },
    "authorization_types": {
"type": "array",
"items": {
  "$ref": "#/$defs/aws_appsync_authorization_type"
}
    }
  },
  "required": [
    "aws_region",
    "url",
    "default_authorization_type",
    "authorization_types"
  ]
},
"geo": {
  "description": "Outputs manually specified by developers for use with frontend library",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "aws_region": {
"description": "AWS Region of Amazon Location Service resources",
"$ref": "#/$defs/aws_region"
    },
    "maps": {
"description": "Maps from Amazon Location Service",
"type": "object",
"additionalProperties": false,
"properties": {
  "items": {
    "type": "object",
    "additionalProperties": false,
    "propertyNames": {
      "description": "Amazon Location Service Map name",
      "type": "string"
    },
    "patternProperties": {
      ".*": {
        "$ref": "#/$defs/amazon_location_service_config"
      }
    }
  },
  "default": {
    "type": "string"
  }
},
"required": [
  "items",
  "default"
]
    },
    "search_indices": {
"description": "Location search (search by places, addresses, coordinates)",
"type": "object",
"additionalProperties": false,
"properties": {
  "items": {
    "type": "array",
    "uniqueItems": true,
    "minItems": 1,
    "items": {
      "description": "Actual search name",
      "type": "string"
    }
  },
  "default": {
    "type": "string"
  }
},
"required": [
  "items",
  "default"
]
    },
    "geofence_collections": {
"description": "Geofencing (visualize virtual perimeters)",
"type": "object",
"additionalProperties": false,
"properties": {
  "items": {
    "type": "array",
    "uniqueItems": true,
    "minItems": 1,
    "items": {
      "description": "Geofence name",
      "type": "string"
    }
  },
  "default": {
    "type": "string"
  }
},
"required": [
  "items",
  "default"
]
    }
  },
  "required": [
    "aws_region"
  ]
},
"notifications": {
  "type": "object",
  "description": "Outputs manually specified by developers for use with frontend library",
  "additionalProperties": false,
  "properties": {
    "aws_region": {
"$ref": "#/$defs/aws_region"
    },
    "amazon_pinpoint_app_id": {
"type": "string"
    },
    "channels": {
"type": "array",
"items": {
  "$ref": "#/$defs/amazon_pinpoint_channels"
},
"minItems": 1,
"uniqueItems": true
    }
  },
  "required": [
    "aws_region",
    "amazon_pinpoint_app_id",
    "channels"
  ]
},
"storage": {
  "type": "object",
  "description": "Outputs generated from defineStorage",
  "additionalProperties": false,
  "properties": {
    "aws_region": {
"$ref": "#/$defs/aws_region"
    },
    "bucket_name": {
"type": "string"
    }
  },
  "required": [
    "aws_region",
    "bucket_name"
  ]
},
"custom": {
  "description": "Outputs generated from backend.addOutput({ custom: <config> })",
  "type": "object"
}
  },
  "required": [
"version"
  ],
  "$defs": {
"aws_region": {
  "type": "string"
},
"amazon_cognito_standard_attributes": {
  "description": "Amazon Cognito standard attributes for users -- https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html",
  "type": "string",
  "enum": [
    "address",
    "birthdate",
    "email",
    "family_name",
    "gender",
    "given_name",
    "locale",
    "middle_name",
    "name",
    "nickname",
    "phone_number",
    "picture",
    "preferred_username",
    "profile",
    "sub",
    "updated_at",
    "website",
    "zoneinfo"
  ]
},
"aws_appsync_authorization_type": {
  "description": "List of supported auth types for AWS AppSync",
  "type": "string",
  "enum": [
    "AMAZON_COGNITO_USER_POOLS",
    "API_KEY",
    "AWS_IAM",
    "AWS_LAMBDA",
    "OPENID_CONNECT"
  ]
},
"amazon_location_service_config": {
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "style": {
"description": "Map style",
"type": "string"
    }
  }
},
"amazon_pinpoint_channels": {
  "description": "supported channels for Amazon Pinpoint",
  "type": "string",
  "enum": [
    "IN_APP_MESSAGING",
    "FCM",
    "APNS",
    "EMAIL",
    "SMS"
  ]
}
  }
}
~~~

| | |
| -- | -- |
| Hash | `f26dc9ec37d0cfd2` |
| Covered | ✅ |

##### Covering Regions

- [../../packages/integration-tests/\_\_tests\_\_/defined-behavior/4-uncovered/reference/amplify-outputs.ts](../../../../../../packages/integration-tests/__tests__/defined-behavior/4-uncovered/reference/amplify-outputs.ts#L9)

---

[<- Back to index](../../../../docs-pages.md)
