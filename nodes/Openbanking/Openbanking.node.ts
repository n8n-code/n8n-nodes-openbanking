import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { branchDescription } from './resources/branch';
import { atmDescription } from './resources/atm';
import { pcaDescription } from './resources/pca';
import { bcaDescription } from './resources/bca';
import { smeDescription } from './resources/sme';
import { cccDescription } from './resources/ccc';

export class Openbanking implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Openbanking',
                name: 'N8nDevOpenbanking',
                icon: { light: 'file:./openbanking.png', dark: 'file:./openbanking.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'OpenData Swagger specification',
                defaults: { name: 'Openbanking' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevOpenbankingApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Branch",
					"value": "Branch",
					"description": "Endpoint for getting Branch data"
				},
				{
					"name": "ATM",
					"value": "ATM",
					"description": "Endpoint for getting ATM data"
				},
				{
					"name": "PCA",
					"value": "PCA",
					"description": "Endpoint for getting Personal Current Account data"
				},
				{
					"name": "BCA",
					"value": "BCA",
					"description": "Endpoint for getting Business Current Account data"
				},
				{
					"name": "SME",
					"value": "SME",
					"description": "Endpoint for getting Unsecured SME Loan data"
				},
				{
					"name": "CCC",
					"value": "CCC",
					"description": "Endpoint for getting Commercial Credit Card data"
				}
			],
			"default": ""
		},
		...branchDescription,
		...atmDescription,
		...pcaDescription,
		...bcaDescription,
		...smeDescription,
		...cccDescription
                ],
        };
}
