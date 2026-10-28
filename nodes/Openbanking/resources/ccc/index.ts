import type { INodeProperties } from 'n8n-workflow';

export const cccDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"CCC"
					]
				}
			},
			"options": [
				{
					"name": "GET Commercial Credit Cards",
					"value": "GET Commercial Credit Cards",
					"action": "GET Commercial Credit Cards",
					"description": "Gets a list of all `Commerical Credit Card` objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commercial-credit-cards"
						}
					}
				},
				{
					"name": "HEAD Commercial Credit Cards",
					"value": "HEAD Commercial Credit Cards",
					"action": "HEAD Commercial Credit Cards",
					"description": "Gets header information on the current set of `Commerical Credit Card` data",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/commercial-credit-cards"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /commercial-credit-cards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"CCC"
					],
					"operation": [
						"GET Commercial Credit Cards"
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
						"CCC"
					],
					"operation": [
						"GET Commercial Credit Cards"
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
						"CCC"
					],
					"operation": [
						"GET Commercial Credit Cards"
					]
				}
			}
		},
		{
			"displayName": "HEAD /commercial-credit-cards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"CCC"
					],
					"operation": [
						"HEAD Commercial Credit Cards"
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
						"CCC"
					],
					"operation": [
						"HEAD Commercial Credit Cards"
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
						"CCC"
					],
					"operation": [
						"HEAD Commercial Credit Cards"
					]
				}
			}
		},
];
