import type { INodeProperties } from 'n8n-workflow';

export const smeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SME"
					]
				}
			},
			"options": [
				{
					"name": "GET Unsecured Sme Loans",
					"value": "GET Unsecured Sme Loans",
					"action": "GET Unsecured Sme Loans",
					"description": "Gets a list of all `Unsercured SME Lending` objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/unsecured-sme-loans"
						}
					}
				},
				{
					"name": "HEAD Unsecured Sme Loans",
					"value": "HEAD Unsecured Sme Loans",
					"action": "HEAD Unsecured Sme Loans",
					"description": "Gets header information on the current set of `Unsercured SME Lending` data",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/unsecured-sme-loans"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /unsecured-sme-loans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SME"
					],
					"operation": [
						"GET Unsecured Sme Loans"
					]
				}
			}
		},
		{
			"displayName": "If Modified Since",
			"name": "If-Modified-Since",
			"description": "Used for conditional request, to retrieve data only if modified since a given date",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Modified-Since": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SME"
					],
					"operation": [
						"GET Unsecured Sme Loans"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Used for conditional request, to retrieve data only if the given Etag value does not match",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SME"
					],
					"operation": [
						"GET Unsecured Sme Loans"
					]
				}
			}
		},
		{
			"displayName": "HEAD /unsecured-sme-loans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SME"
					],
					"operation": [
						"HEAD Unsecured Sme Loans"
					]
				}
			}
		},
		{
			"displayName": "If Modified Since",
			"name": "If-Modified-Since",
			"description": "Used for conditional request, to retrieve data only if modified since a given date",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Modified-Since": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SME"
					],
					"operation": [
						"HEAD Unsecured Sme Loans"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Used for conditional request, to retrieve data only if the given Etag value does not match",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SME"
					],
					"operation": [
						"HEAD Unsecured Sme Loans"
					]
				}
			}
		},
];
