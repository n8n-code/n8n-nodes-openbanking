import type { INodeProperties } from 'n8n-workflow';

export const pcaDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"PCA"
					]
				}
			},
			"options": [
				{
					"name": "GET Personal Current Accounts",
					"value": "GET Personal Current Accounts",
					"action": "GET Personal Current Accounts",
					"description": "Gets a list of all `Personal Current Account` objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/personal-current-accounts"
						}
					}
				},
				{
					"name": "HEAD Personal Current Accounts",
					"value": "HEAD Personal Current Accounts",
					"action": "HEAD Personal Current Accounts",
					"description": "Gets header information on the current set of `Personal Current Account` data",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/personal-current-accounts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /personal-current-accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PCA"
					],
					"operation": [
						"GET Personal Current Accounts"
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
						"PCA"
					],
					"operation": [
						"GET Personal Current Accounts"
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
						"PCA"
					],
					"operation": [
						"GET Personal Current Accounts"
					]
				}
			}
		},
		{
			"displayName": "HEAD /personal-current-accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PCA"
					],
					"operation": [
						"HEAD Personal Current Accounts"
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
						"PCA"
					],
					"operation": [
						"HEAD Personal Current Accounts"
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
						"PCA"
					],
					"operation": [
						"HEAD Personal Current Accounts"
					]
				}
			}
		},
];
