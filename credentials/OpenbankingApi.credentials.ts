import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class OpenbankingApi implements ICredentialType {
        name = 'N8nDevOpenbankingApi';

        displayName = 'Openbanking API';

        icon: Icon = { light: 'file:../nodes/Openbanking/openbanking.png', dark: 'file:../nodes/Openbanking/openbanking.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3',
                        required: true,
                        placeholder: 'https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3',
                        description: 'The base URL of your Openbanking API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
