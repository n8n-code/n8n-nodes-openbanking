import type { INodeProperties } from 'n8n-workflow';

export const atmDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"ATM"
					]
				}
			},
			"options": [
				{
					"name": "GET Atms",
					"value": "GET Atms",
					"action": "GET Atms",
					"description": "Gets a list of all `ATM` objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/atms"
						}
					}
				},
				{
					"name": "HEAD Atms",
					"value": "HEAD Atms",
					"action": "HEAD Atms",
					"description": "Gets header information on the current set of `ATM` data",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/atms"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /atms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"ATM"
					],
					"operation": [
						"GET Atms"
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
						"ATM"
					],
					"operation": [
						"GET Atms"
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
						"ATM"
					],
					"operation": [
						"GET Atms"
					]
				}
			}
		},
		{
			"displayName": "HEAD /atms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"ATM"
					],
					"operation": [
						"HEAD Atms"
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
						"ATM"
					],
					"operation": [
						"HEAD Atms"
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
						"ATM"
					],
					"operation": [
						"HEAD Atms"
					]
				}
			}
		},
];
