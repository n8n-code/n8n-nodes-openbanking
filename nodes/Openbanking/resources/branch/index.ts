import type { INodeProperties } from 'n8n-workflow';

export const branchDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Branch"
					]
				}
			},
			"options": [
				{
					"name": "GET Branches",
					"value": "GET Branches",
					"action": "GET Branches",
					"description": "Gets a list of all `Branch` objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branches"
						}
					}
				},
				{
					"name": "HEAD Branches",
					"value": "HEAD Branches",
					"action": "HEAD Branches",
					"description": "Gets header information on the current set of `Branch` data",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/branches"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /branches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branch"
					],
					"operation": [
						"GET Branches"
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
						"Branch"
					],
					"operation": [
						"GET Branches"
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
						"Branch"
					],
					"operation": [
						"GET Branches"
					]
				}
			}
		},
		{
			"displayName": "HEAD /branches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branch"
					],
					"operation": [
						"HEAD Branches"
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
						"Branch"
					],
					"operation": [
						"HEAD Branches"
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
						"Branch"
					],
					"operation": [
						"HEAD Branches"
					]
				}
			}
		},
];
