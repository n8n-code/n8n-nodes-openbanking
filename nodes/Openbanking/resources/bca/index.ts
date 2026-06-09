import type { INodeProperties } from 'n8n-workflow';

export const bcaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"BCA"
					]
				}
			},
			"options": [
				{
					"name": "GET Business Current Accounts",
					"value": "GET Business Current Accounts",
					"action": "GET Business Current Accounts",
					"description": "Gets a list of all `Branch Current Account` objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/business-current-accounts"
						}
					}
				},
				{
					"name": "HEAD Business Current Accounts",
					"value": "HEAD Business Current Accounts",
					"action": "HEAD Business Current Accounts",
					"description": "Gets header information on the current set of `Business Current Account` data",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/business-current-accounts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /business-current-accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"BCA"
					],
					"operation": [
						"GET Business Current Accounts"
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
						"BCA"
					],
					"operation": [
						"GET Business Current Accounts"
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
						"BCA"
					],
					"operation": [
						"GET Business Current Accounts"
					]
				}
			}
		},
		{
			"displayName": "HEAD /business-current-accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"BCA"
					],
					"operation": [
						"HEAD Business Current Accounts"
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
						"BCA"
					],
					"operation": [
						"HEAD Business Current Accounts"
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
						"BCA"
					],
					"operation": [
						"HEAD Business Current Accounts"
					]
				}
			}
		},
];
