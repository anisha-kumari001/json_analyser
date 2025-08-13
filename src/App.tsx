import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  FileJson, 
  Search, 
  Tags, 
  Target, 
  Calendar,
  Menu,
  X,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  User,
  Users,
  AlertTriangle,
  Clock,
  RefreshCw,
  Shield,
  TrendingUp
} from 'lucide-react';

// Import components
import GroupIssueDetails from './components/GroupIssueDetails';

// Filter types
interface DateFilter {
  startDate: string;
  endDate: string;
  relative: 'all' | 'last7days' | 'last30days' | 'last90days' | 'custom';
}

interface GlobalFilters {
  createdDateRange: DateFilter;
  activeDateRange: DateFilter;
  selectedTags: string[];
  selectedPriorities: string[];
  selectedProjects: string[];
  selectedAssignees: string[];
  selectedReporters: string[];
  selectedStatuses: string[];
}

// Sample data for initial display
const SAMPLE_DATA = 
 
 
{
  "summaryType": "system_jira_retrospective_v0",
  "dailySummaries": [
    {
      "id": 3755,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-13T00:48:50Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "95120bd0-43c0-41dc-a71a-a55836ad5a99",
      "contentJSON": {
        "Items": [
          {
            "id": 152439,
            "tags": [
              {
                "id": 23327,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23368,
                "name": "Documentation_Gap",
                "teamID": 6,
                "isGroup": false,
                "description": "Missing or incorrect internal/external docs"
              }
            ],
            "title": "Grid team should define/document the intended partition for all the grid templates.",
            "content": {
              "labels": "[SEV4, incident-6447, rootly-incident]",
              "comments": [],
              "priority": "Critical",
              "issue_key": "ACTIONITEM-8325",
              "created_ts": "2025-07-31T08:36:33.146+05:30",
              "issue_title": "Grid team should define/document the intended partition for all the grid templates.",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "Action Items",
              "assignee_name": "Gurpreet Singh",
              "reporter_name": "svc rootly-prod",
              "assignee_email": "gursingh@linkedin.com",
              "reporter_email": "svc-rootly-prod@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-07-31 08:37:40.521000 UTC",
                  "to_assignee": "Siddhi Tripathi",
                  "from_assignee": ""
                },
                {
                  "timestamp": "2025-08-04 09:41:40.403000 UTC",
                  "to_assignee": "Gurpreet Singh",
                  "from_assignee": "Siddhi Tripathi"
                }
              ],
              "issue_description": "Action Item for  https://rootly.com/account/incidents/6447  :",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-07-31 08:36:33.996000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-31T03:06:33Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:48:48Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 152440,
            "tags": [
              {
                "id": 23327,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23336,
                "name": "Automation_Missing",
                "teamID": 6,
                "isGroup": false,
                "description": "Manual step that could be scripted or systematized"
              },
              {
                "id": 23369,
                "name": "Runbook_Outdated",
                "teamID": 6,
                "isGroup": false,
                "description": "Incident response or operational docs not up to date"
              }
            ],
            "title": "Create a standard process for bulk recovery for Machines failing during Reimage .",
            "content": {
              "labels": "[SEV4, incident-6447, rootly-incident]",
              "comments": [],
              "priority": "Critical",
              "issue_key": "ACTIONITEM-8323",
              "created_ts": "2025-07-31T07:29:05.789+05:30",
              "issue_title": "Create a standard process for bulk recovery for Machines failing during Reimage .",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "Action Items",
              "assignee_name": "Sandeep Venugopalan",
              "reporter_name": "svc rootly-prod",
              "assignee_email": "svenugopalan@linkedin.com",
              "reporter_email": "svc-rootly-prod@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-07-31 07:30:10.634000 UTC",
                  "to_assignee": "Siddhi Tripathi",
                  "from_assignee": ""
                },
                {
                  "timestamp": "2025-08-07 15:39:13.970000 UTC",
                  "to_assignee": "Sandeep Venugopalan",
                  "from_assignee": "Siddhi Tripathi"
                }
              ],
              "issue_description": "Action Item for  https://rootly.com/account/incidents/6447  :",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-07-31 07:29:06.852000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-31T01:59:06Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:48:48Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152439
            ],
            "GroupMetaData": {
              "Actions": "Define grid partitions, update documentation collaboratively, and establish periodic reviews to ensure clarity and accuracy.",
              "GroupID": 23370,
              "Insight": "Documentation gaps stem from undefined intended partitions and absence of regular updates or reviews.",
              "Summary": "Grid partitioning lacks clear documentation, risking misinterpretation and inefficiencies in grid template usage.",
              "GroupName": "Tag: Documentation_Gap",
              "GroupDescription": "Issues tagged with 'Documentation_Gap', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152440
            ],
            "GroupMetaData": {
              "Actions": "Develop a bulk recovery automation system to minimize manual steps, ensuring quicker machine restoration and reducing downtime by an estimated 30%.",
              "GroupID": 23337,
              "Insight": "Recurrent manual interventions for machine recovery indicate a gap in automation, causing inefficiency and inconsistency in handling failures during reimaging.",
              "Summary": "Machines failing during reimage face delays due to the lack of a bulk recovery process, increasing downtime and operational risk.",
              "GroupName": "Tag: Automation_Missing",
              "GroupDescription": "Issues tagged with 'Automation_Missing', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152440
            ],
            "GroupMetaData": {
              "Actions": "Establish a standardized runbook for bulk recovery, conduct quarterly reviews, and validate it through simulated recovery scenarios.",
              "GroupID": 23372,
              "Insight": "Missing runbook caused delays in resolving machine failures, increasing downtime and operational inefficiencies during recovery processes.",
              "Summary": "Critical gap identified: no standardized runbook for bulk machine recovery during reimage failures led to operational inconsistencies.",
              "GroupName": "Tag: Runbook_Outdated",
              "GroupDescription": "Issues tagged with 'Runbook_Outdated', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152439,
              152440
            ],
            "GroupMetaData": {
              "Actions": "Implement ownership clarity, enforce resolution timelines, and introduce standardized processes with clear documentation to prevent delays.",
              "GroupID": 23338,
              "Insight": "Prolonged resolution stems from lack of standardized processes and inadequate documentation responsibilities, exacerbating delays in high-priority tasks.",
              "Summary": "Two critical issues remain unresolved since July 31, likely due to unclear ownership and undefined timelines for resolution.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 2 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1753968600,
      "startTimestamp": 1753925400
    },
    {
      "id": 3759,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-13T00:52:14Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "a14c6705-648c-4661-8b05-fd8a2b98c938",
      "contentJSON": {
        "Items": [
          {
            "id": 152458,
            "tags": [
              {
                "id": 23331,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Create Hadoop headless account - svc_pr_espcap",
            "content": {
              "labels": "",
              "comments": [
                {
                  "created": "2025-08-01T16:36:03.590-0700",
                  "updated": "2025-08-01T16:36:03.590-0700",
                  "comment_body": "@Jeff Leung i couldn’t find you on grid portal ( maybe you missed this in the onboarding to create grid account https://www.grid.linkedin.com/self_service#/account .",
                  "commented_by": "Aniket Dhuri"
                },
                {
                  "created": "2025-08-04T21:10:41.560-0700",
                  "updated": "2025-08-04T21:10:41.560-0700",
                  "comment_body": "Asked in #ask_grid-sre and will bump the priority on this since it’s been more than 48 hours. https://linkedin-randd.slack.com/archives/CEMV913HN/p1754351464342769",
                  "commented_by": "Aniket Dhuri"
                },
                {
                  "created": "2025-08-05T00:40:10.798-0700",
                  "updated": "2025-08-05T00:40:10.798-0700",
                  "comment_body": "Request is automatically processed.",
                  "commented_by": ""
                }
              ],
              "priority": "Major",
              "issue_key": "GRID-289799",
              "created_ts": "2025-08-01T23:34:58.501+05:30",
              "issue_title": "Create Hadoop headless account - svc_pr_espcap",
              "resolved_ts": "2025-08-05T07:40:11.791Z",
              "project_name": "GRID",
              "assignee_name": "Anupchandra Rao",
              "reporter_name": "Aniket Dhuri",
              "assignee_email": "anchandrakanth@linkedin.com",
              "reporter_email": "adhuri@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-08-05 06:38:19.565000 UTC",
                  "to_assignee": "Anupchandra Rao",
                  "from_assignee": ""
                }
              ],
              "issue_description": "Please allow up to 48 hours for this request to be processed. Self Service headless account creation request for  svc_pr_espcap : Description of Hadoop use case This account is used to fetch the data related to espresso's cluster capacity. The data is stored in holdem under openhouse.u_capengdev.resource_attribution Initial /jobs Quotas 3TB space / 20000 namespace Options Enable Voldemort Usage? False Copy ACLs from account None Admins: ['adhuri', 'amao', 'andasgup'] DMA Purpose: System_Operations Owning Crew ID: 1110",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-08-05 07:40:11.832000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-01T18:04:59Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:52:13Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 152459,
            "tags": [
              {
                "id": 23327,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              }
            ],
            "title": "Crossport PRs from li-2.10.0 to li-leapfrog-3.3 authored by you",
            "content": {
              "labels": "[leapfrog]",
              "comments": [],
              "priority": "Critical",
              "issue_key": "LIHADOOP-83187",
              "created_ts": "2025-08-01T21:55:20.956+05:30",
              "issue_title": "Crossport PRs from li-2.10.0 to li-leapfrog-3.3 authored by you",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "HADOOP",
              "assignee_name": "Aswin M Prabhu",
              "reporter_name": "Janki Akhani",
              "assignee_email": "asprabhu@linkedin.com",
              "reporter_email": "jakhani@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Please crossport PRs authored by you in this sheet (https://docs.google.com/spreadsheets/d/1zf-oXM3l5LUjSQNeuAQGQtUOWpB0I6S3R_mPnBTcevk/edit?gid=1912644446#gid=1912644446) by following this guide (https://docs.google.com/document/d/1X5k1uzwvSbYlJKXL344Ogc1mQtpFCsg_1yEj6aWF7HA/edit?tab=t.0)\n\nStep 1: Verify if the PR is still valid for Hadoop 3.3\nStep 2: Follow the guide and cherry-pick the PR\nStep 3: Resolve necessary conflicts\nStep 4: Run the build locally and verify unit tests are passing\nStep 5: Raise the PR, get it reviewed and Merge it.\nStep 6: Mark the Crossport Applied to True in the sheet for the PR\n\nPlease follow these steps for all the PRs you have authored in the sheet.",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-01T16:25:21Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:52:13Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 152460,
            "tags": [
              {
                "id": 23331,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23334,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              }
            ],
            "title": "Grid - Change Directory Owner and/or Permissions in HDFS - 2025-08-01",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1406]",
              "comments": [
                {
                  "created": "2025-08-04T12:56:59.414-0700",
                  "updated": "2025-08-04T12:56:59.414-0700",
                  "comment_body": "Both essproei and espproei are Espresso owned headless accounts used to access HDFS. Our workflows essproei to access /jobs/essproei/espresso-snapshotshc/ path and espproei to access / job s/espproei/espresso-hc I had manually created /jobs/essproei/espresso-snapshotshc/ in Faro and by mistake I used espproei to create this directory. I need to modify the owner to avoid running into any permission issues when I run my workflow.",
                  "commented_by": "Gaurav Mishra"
                },
                {
                  "created": "2025-08-05T09:08:00.766-0700",
                  "updated": "2025-08-05T09:08:00.766-0700",
                  "comment_body": "Thanks @Anupchandra Rao ! I had tried updating the owner after logging in as espprod/essprod but saw this exception: AccessControlException with unrecognized pattern has been encountered Can you please share details on why this exception was thrown?",
                  "commented_by": "Gaurav Mishra"
                },
                {
                  "created": "2025-08-04T23:55:59.514-0700",
                  "updated": "2025-08-04T23:55:59.514-0700",
                  "comment_body": "Its done. Kindly impersonate as the headless account next time and do it. It ideally should work. hdfs@ltx1-hcl6577 [ /export/home/anchandr ]$ hdfs dfs -ls /jobs/essproei/espresso-snapshotshc/\nFound 1 items\ndrwxr-xr-x   - espproei essproei          0 2025-07-17 00:35 /jobs/essproei/espresso-snapshotshc/lumos",
                  "commented_by": "Anupchandra Rao"
                },
                {
                  "created": "2025-08-01T20:07:34.054-0700",
                  "updated": "2025-08-01T20:07:34.054-0700",
                  "comment_body": "@Anupchandra Rao I am from Espresso team which owns these accounts. I tried changing the path but saw the following error: https://paste.corp.linkedin.com/show/71730631/ Can you please check why am I getting this error?",
                  "commented_by": "Gaurav Mishra"
                },
                {
                  "created": "2025-08-05T15:53:04.113-0700",
                  "updated": "2025-08-05T15:53:04.113-0700",
                  "comment_body": "Looks like thats the expected behavior and the other option you have to get write access is to use setFacl on this path",
                  "commented_by": "Anupchandra Rao"
                },
                {
                  "created": "2025-08-04T12:53:01.349-0700",
                  "updated": "2025-08-04T12:53:01.349-0700",
                  "comment_body": "@Gaurav Mishra Can you give a description of both accounts plus why you want to change it from one to another please?",
                  "commented_by": "Anupchandra Rao"
                },
                {
                  "created": "2025-08-01T18:48:29.861-0700",
                  "updated": "2025-08-01T18:48:29.861-0700",
                  "comment_body": "@Gaurav Mishra We do not modify paths owned by users unless its an incident causing issue. Please work with the admins of the headless account to change the permissions for that path. Thank you.",
                  "commented_by": "Anupchandra Rao"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-132066",
              "created_ts": "2025-08-01T21:40:38.635+05:30",
              "issue_title": "Grid - Change Directory Owner and/or Permissions in HDFS - 2025-08-01",
              "resolved_ts": "2025-08-05T22:53:12.935Z",
              "project_name": "APA Support Project",
              "assignee_name": "Anupchandra Rao",
              "reporter_name": "Gaurav Mishra",
              "assignee_email": "anchandrakanth@linkedin.com",
              "reporter_email": "gmishra@linkedin.com",
              "assignee_changes": [],
              "issue_description": "HDFS Path: /jobs/essproei/espresso-snapshotshc/ Need to change the owner for the above path and all the directories/files within this path Error Message: Cluster Name: faro in EI HDFS User or Headless Account Name that launches the Job: Change the owner from espproei to essproei Nested Titles: Grid / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-08-05 22:53:12.982000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Closed",
                  "timestamp": "2025-08-02 01:48:38.155000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Open",
                  "timestamp": "2025-08-02 03:06:01.346000 UTC",
                  "from_state": "Closed"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-01T16:10:39Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:52:13Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152459
            ],
            "GroupMetaData": {
              "Actions": "Implement strict SLA monitoring, enforce frequent status updates, and assign clear ownership for all critical issues to expedite resolutions.",
              "GroupID": 23333,
              "Insight": "Lack of active tracking and ownership clarity contributed significantly to prolonged resolution times for high-priority tasks within the team.",
              "Summary": "Critical issue LIHADOOP-83187 experienced delays due to unclear resolution ownership and lack of status updates since creation on 2025-08-01.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152460
            ],
            "GroupMetaData": {
              "Actions": "Implement strict change validation, automate permission checks, and ensure rollback readiness before committing configuration updates.",
              "GroupID": 23335,
              "Insight": "Weak validation and oversight in permission changes contributed to the misconfiguration, highlighting gaps in change control and testing processes.",
              "Summary": "Misconfiguration in HDFS directory ownership and permissions caused delays, requiring over 102 hours to resolve.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152458,
              152460
            ],
            "GroupMetaData": {
              "Actions": "Automate routine tasks, enforce clear priorities, and implement pre-approved access policies to minimize dependency on manual approvals.",
              "GroupID": 23349,
              "Insight": "Lack of documented status, unclear priorities, and manual approval workflows caused recurring inefficiencies and prolonged access resolution times.",
              "Summary": "Two 'Access_Request' issues faced delays: 85+ and 102+ hours for account creation and permission changes, both assigned to the same engineer.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 2 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1754098200,
      "startTimestamp": 1754055000
    },
    {
      "id": 3760,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-13T00:55:21Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "fb1e72c4-254a-4db6-8bcc-615a5e1baf5c",
      "contentJSON": {
        "Items": [
          {
            "id": 152469,
            "tags": [
              {
                "id": 23327,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23331,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Grid - Not Able to Access Data - 2025-08-04",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/not-able-to-access-data, supportal-v1-version:0.0.1406]",
              "comments": [],
              "priority": "Unspecified",
              "issue_key": "APA-132091",
              "created_ts": "2025-08-04T10:13:40.012+05:30",
              "issue_title": "Grid - Not Able to Access Data - 2025-08-04",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Gurpreet Singh",
              "reporter_name": "Joel Van Veluwen",
              "assignee_email": "gursingh@linkedin.com",
              "reporter_email": "jvanveluwen@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Cluster Name: Holdem Error Message: Need access to several hundred tables for several headless accounts User or Headless Account name that launches the job: Need access to several hundred tables for several headless accounts HDFS Path: Need access to several hundred tables for several headless accounts Nested Titles: Grid / Not Able to Access Data",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-04T04:43:40Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:55:20Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152469
            ],
            "GroupMetaData": {
              "Actions": "Establish clear SLAs for resolution timelines, mandate priority tagging for all tickets, and introduce periodic reminders for assignees to update issue statuses.",
              "GroupID": 23333,
              "Insight": "Root causes include undefined priority, absence of status progression, and insufficient ownership accountability by assignee Gurpreet Singh.",
              "Summary": "Issue APA-132091 involved unresolved delays due to unclear ownership, unspecified priorities, and lack of updates following the issue's creation on 2025-08-04.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152469
            ],
            "GroupMetaData": {
              "Actions": "Automate priority assignment, enforce status tracking, and establish proactive access provisioning workflows to reduce repetitive bottlenecks and approval inefficiencies.",
              "GroupID": 23332,
              "Insight": "Unspecified priority/status and unclear approval workflows contribute to delays, with no visible escalation or tracking mechanisms in place.",
              "Summary": "The issue highlights an unresolved access request since 2025-08-04 with no specified priority or status, delaying user data access.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1754314200,
      "startTimestamp": 1754271000
    },
    {
      "id": 3761,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-13T00:56:35Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "4bb4f6b2-ccd2-4edf-a7a5-0339d9e36d3a",
      "contentJSON": {
        "Items": [
          {
            "id": 152470,
            "tags": [
              {
                "id": 23327,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23351,
                "name": "Quota_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "User hit an internal quota or service limit"
              }
            ],
            "title": "Grid - Other Grid Issue - 2025-08-04",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1406]",
              "comments": [
                {
                  "created": "2025-08-04T14:50:51.998-0700",
                  "updated": "2025-08-04T14:50:51.998-0700",
                  "comment_body": "Our headless account jssflagship HDFS path",
                  "commented_by": "Patrick Stetz"
                },
                {
                  "created": "2025-08-05T16:03:53.397-0700",
                  "updated": "2025-08-05T16:03:53.397-0700",
                  "comment_body": "@Patrick Stetz I would recommend using go/myhdfsusage to check usage https://observe.prod.linkedin.com/g/d/ee9znfnxdgrggd/cdmp?orgId=1&var-cluster=ltx1-holdem&var-space=oh-u_jssflagship",
                  "commented_by": "Anupchandra Rao"
                },
                {
                  "created": "2025-08-05T16:10:43.089-0700",
                  "updated": "2025-08-05T16:10:43.089-0700",
                  "comment_body": "Thank you for the short-term fix",
                  "commented_by": "Patrick Stetz"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-132129",
              "created_ts": "2025-08-04T21:48:16.242+05:30",
              "issue_title": "Grid - Other Grid Issue - 2025-08-04",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Anupchandra Rao",
              "reporter_name": "Patrick Stetz",
              "assignee_email": "anchandrakanth@linkedin.com",
              "reporter_email": "pstetz@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Browser: Chrome Hadoop Job Link: N/A Cluster name: N/A Error Message: go/selfserve incorrectly shows no space quota Nested Titles: Grid / Other Grid Issue",
              "status_transitions": [
                {
                  "to_state": "On Hold",
                  "timestamp": "2025-08-05 23:03:58.033000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-04T16:18:16Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:56:34Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152470
            ],
            "GroupMetaData": {
              "Actions": "Establish clear status transitions, enforce priority tagging, and conduct regular ownership reviews to ensure faster resolution of flagged issues.",
              "GroupID": 23333,
              "Insight": "Prolonged delays likely stem from lack of priority setting, undefined status workflows, and unclear ownership leading to response bottlenecks.",
              "Summary": "A single long-pending issue with unclear status, unspecified priority, and inactive resolution progress was flagged for extended delays.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152470
            ],
            "GroupMetaData": {
              "Actions": "Standardize quota request logging, enforce metadata completeness, and improve monitoring of quota limits to enhance resolution efficiency and user satisfaction.",
              "GroupID": 23362,
              "Insight": "The issue data lacks clarity on status and priority, indicating a need for tighter workflow and better metadata for effective issue tracking.",
              "Summary": "A single quota-related issue was identified, with missing details on status and priority, assigned to Anupchandra Rao, potentially impacting service resolution timelines.",
              "GroupName": "Tag: Quota_Request",
              "GroupDescription": "Issues tagged with 'Quota_Request', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1754357400,
      "startTimestamp": 1754314200
    },
    {
      "id": 3766,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-13T00:58:09Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "c6464082-0aca-4977-984e-f2bcd0f03b18",
      "contentJSON": {
        "Items": [
          {
            "id": 152492,
            "tags": [],
            "title": "Testing the support follow.",
            "content": {
              "labels": "[Grid-Autonomous-Fleet, decision-grid, from-supportal, supportal-onboarding, supportal-v1, supportal-v1-problem-type:askgridsre/gfuel-issues, supportal-v1-version:0.0.1407]",
              "comments": [],
              "priority": "Minor",
              "issue_key": "GRID-290384",
              "created_ts": "2025-08-05T21:58:31.576+05:30",
              "issue_title": "Testing the support follow.",
              "resolved_ts": "2025-08-05T21:59:49.607Z",
              "project_name": "GRID",
              "assignee_name": "Adeoluwa Akinwa",
              "reporter_name": "Charles Li",
              "assignee_email": "aakinwa@linkedin.com",
              "reporter_email": "charlli@linkedin.com",
              "assignee_changes": [],
              "issue_description": "This is for testing purpose. Default Priority Select Form Element: Minor Affected Multiproduct(s): gridops-user-manager Stack trace or error output: Is this Issue Transient or Consistent?: Transient Which Gfuel Service is this for?: User-Manager-Api Curl/Call made: N/A Nested Titles: Grid / G-Fuel Issues",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-08-05 21:59:49.637000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-05T16:28:32Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:58:07Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 152493,
            "tags": [
              {
                "id": 23327,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23334,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              },
              {
                "id": 23356,
                "name": "Integration_Failure",
                "teamID": 6,
                "isGroup": false,
                "description": "Dependency between systems or services failed"
              }
            ],
            "title": "Grid - Change Directory Owner and/or Permissions in HDFS - 2025-08-05",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1407]",
              "comments": [
                {
                  "created": "2025-08-07T07:49:14.231-0700",
                  "updated": "2025-08-07T07:49:14.231-0700",
                  "comment_body": "@Simin Wang works now",
                  "commented_by": "Harry Guan"
                },
                {
                  "created": "2025-08-06T16:20:24.982-0700",
                  "updated": "2025-08-06T16:20:24.982-0700",
                  "comment_body": "please retry",
                  "commented_by": "Simin Wang"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-132179",
              "created_ts": "2025-08-05T20:10:38.78+05:30",
              "issue_title": "Grid - Change Directory Owner and/or Permissions in HDFS - 2025-08-05",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Simin Wang",
              "reporter_name": "Harry Guan",
              "assignee_email": "simwang@linkedin.com",
              "reporter_email": "harguan@linkedin.com",
              "assignee_changes": [],
              "issue_description": "HDFS Path: ltx1-holdemgw01.grid.linkedin.com Error Message: Connection to ltx1-holdemgw01.grid.linkedin.com closed. Cluster Name: holdem01 HDFS User or Headless Account Name that launches the Job: harguan Nested Titles: Grid / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": [
                {
                  "to_state": "On Hold",
                  "timestamp": "2025-08-06 23:22:08.804000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-05T14:40:39Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:58:07Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 152494,
            "tags": [
              {
                "id": 23327,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23373,
                "name": "Infra_Maintenance_Impact",
                "teamID": 6,
                "isGroup": false,
                "description": "Service degradation linked to planned or emergency maintenance"
              }
            ],
            "title": "Check if Pokedex has history on the Decomm and Maintenance request that were made for the DN holding last block. (Note: increase the retention on pokedex data)",
            "content": {
              "labels": "[SEV4, incident-5164, rootly-incident]",
              "comments": [],
              "priority": "Major",
              "issue_key": "ACTIONITEM-8439",
              "created_ts": "2025-08-05T20:09:20.484+05:30",
              "issue_title": "Check if Pokedex has history on the Decomm and Maintenance request that were made for the DN holding last block. (Note: increase the retention on pokedex data)",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "Action Items",
              "assignee_name": "Naren Bhosle",
              "reporter_name": "svc rootly-prod",
              "assignee_email": "nbhosle@linkedin.com",
              "reporter_email": "svc-rootly-prod@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Action Item for  https://rootly.com/account/incidents/5164  : Check if Pokedex has history on the Decomm and Maintenance request that were made for the DN holding last block. (Note: increase the retention on pokedex data)",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-08-05 20:09:21.492000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-05T14:39:20Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:58:07Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152493,
              152494
            ],
            "GroupMetaData": {
              "Actions": "Define priorities, establish clear ownership, and implement automated escalation workflows to ensure timely resolution of critical tasks.",
              "GroupID": 23338,
              "Insight": "Delayed resolution stems from unspecified priorities, inadequate tracking of ownership, and absent escalation mechanisms for time-sensitive issues.",
              "Summary": "Two Grid-related issues remain unresolved due to unclear priority, ownership, and lack of follow-through since creation on 2025-08-05.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              152493
            ],
            "GroupMetaData": {
              "Actions": "Implement multi-tier validation for HDFS changes, enforce clear ownership rules, and automate pre-deployment checks with rollback mechanisms.",
              "GroupID": 23335,
              "Insight": "Lack of validation, unclear ownership guidelines, or insufficient change control processes contributed to recurring configuration errors.",
              "Summary": "Misconfiguration in HDFS directory ownership/permissions caused operational disruptions, detailing insufficient controls during configuration modifications.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152493
            ],
            "GroupMetaData": {
              "Actions": "Recommend enhanced integration tests for permission changes and ensuring standardized permission handling protocols across HDFS environments.",
              "GroupID": 23358,
              "Insight": "Possible cause includes configuration mismatch or improper permission propagation across HDFS nodes, affecting interoperability between systems.",
              "Summary": "Integration issue detected in HDFS directory owner/permissions change, potentially impacting file system accessibility and dependent operations.",
              "GroupName": "Tag: Integration_Failure",
              "GroupDescription": "Issues tagged with 'Integration_Failure', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152494
            ],
            "GroupMetaData": {
              "Actions": "Establish comprehensive data retention policies, ensure pre-maintenance communication, and develop robust rollback procedures to mitigate user impact during decommissioning.",
              "GroupID": 23374,
              "Insight": "Pokedex data retention policies were insufficient for rollback or historical traceability, indicating gaps in maintenance documentation and planning protocols.",
              "Summary": "DN maintenance affecting last block raised concerns about Pokedex history retention, highlighting potential data inconsistency risks during decommissioning.",
              "GroupName": "Tag: Infra_Maintenance_Impact",
              "GroupDescription": "Issues tagged with 'Infra_Maintenance_Impact', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1754443800,
      "startTimestamp": 1754400600
    },
    {
      "id": 3767,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-13T00:58:43Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "8d07ddc8-ab86-4004-bfb4-adf48770d09d",
      "contentJSON": {
        "Items": [
          {
            "id": 152500,
            "tags": [
              {
                "id": 23331,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Request to add ltsins to svc_pr_cdmp headless account",
            "content": {
              "labels": "[grid_self_service]",
              "comments": [
                {
                  "created": "2025-08-06T01:54:07.717-0700",
                  "updated": "2025-08-06T01:54:07.717-0700",
                  "comment_body": "Hello team Would you pls approve soon? We are trying to find the impact at our end on the new retention. Thanks.",
                  "commented_by": "Mohseen M Kolhar"
                },
                {
                  "created": "2025-08-06T01:53:08.727-0700",
                  "updated": "2025-08-06T01:53:08.727-0700",
                  "comment_body": "Added group admin(s) as watchers for approval. This request requires one of the following people to approve it in self service: @Naren Bhosle @Anupchandra Rao @Hao Fu @Chris Trezzo Please log in and visit https://www.grid.linkedin.com/self_service/#/account/svc_pr_cdmp to review this request.",
                  "commented_by": ""
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-290516",
              "created_ts": "2025-08-06T08:52:55.156+05:30",
              "issue_title": "Request to add ltsins to svc_pr_cdmp headless account",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Naren Bhosle",
              "reporter_name": "Mohseen M Kolhar",
              "assignee_email": "nbhosle@linkedin.com",
              "reporter_email": "mkolhar@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-08-06 08:52:56.725000 UTC",
                  "to_assignee": "Naren Bhosle",
                  "from_assignee": ""
                }
              ],
              "issue_description": "  Glean profile  has requested to add the  ltsins          headless account to the  svc_pr_cdmp  headless account. This would allow  ltsins : Access to all files on HDFS owned by  svc_pr_cdmp Permission to create and delete files on HDFS owned by  svc_pr_cdmp",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-06T03:22:55Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T00:58:42Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152500
            ],
            "GroupMetaData": {
              "Actions": "Automate priority setting, enforce status updates, and proactively provision recurring access to minimize delays.",
              "GroupID": 23332,
              "Insight": "Lack of status updates, unclear priorities, and undefined approval steps hinder timely resolution of access requests.",
              "Summary": "Access request GRID-290516 remains unresolved since 2025-08-06, with no status updates and unspecified priority, leading to potential delays in provisioning.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1754487000,
      "startTimestamp": 1754443800
    },
    {
      "id": 3770,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-13T01:00:17Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "222b4595-46c6-4be6-9e2b-84b54acac6a6",
      "contentJSON": {
        "Items": [
          {
            "id": 152509,
            "tags": [
              {
                "id": 23366,
                "name": "Deployment_Lag",
                "teamID": 6,
                "isGroup": false,
                "description": "Fix merged but not yet rolled out"
              }
            ],
            "title": "Evaluate and move to obhc_based ucm check instead of relying on ucm-reporting-api",
            "content": {
              "labels": "[SEV4, rootly-incident, incident-6079]",
              "comments": [
                {
                  "created": "2025-08-11T21:53:15.402-0700",
                  "updated": "2025-08-11T21:53:15.402-0700",
                  "comment_body": "Changes has been merged and waiting for the deployment of obhc-agent from obhc-team They will follow a specific deployment cadence and this might take like 2 weeks to reach production",
                  "commented_by": "Hariharan S"
                },
                {
                  "created": "2025-08-10T21:20:30.697-0700",
                  "updated": "2025-08-10T21:20:30.697-0700",
                  "comment_body": "This is being worked upon and currently under testing Will be merged today and might need to wait for OBHC rollout",
                  "commented_by": "Hariharan S"
                },
                {
                  "created": "2025-08-07T05:59:35.370-0700",
                  "updated": "2025-08-07T05:59:35.370-0700",
                  "comment_body": "Being worked upon as part of this ticket: GRID-285071",
                  "commented_by": "Hariharan S"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "ACTIONITEM-8515",
              "created_ts": "2025-08-07T12:59:01.715+05:30",
              "issue_title": "Evaluate and move to obhc_based ucm check instead of relying on ucm-reporting-api",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "Action Items",
              "assignee_name": "Hariharan S",
              "reporter_name": "svc rootly-prod",
              "assignee_email": "hsivaprakash@linkedin.com",
              "reporter_email": "svc-rootly-prod@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Evaluate and move to obhc_based ucm check instead of relying on ucm-reporting-api",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-08-11 04:17:28.044000 UTC",
                  "from_state": "Accepted"
                },
                {
                  "to_state": "Accepted",
                  "timestamp": "2025-08-11 04:17:25.200000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-07T07:29:02Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T01:00:16Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152509
            ],
            "GroupMetaData": {
              "Actions": "Automate dependency checks and enforce centralized task ownership to accelerate deployment pipelines and minimize delays.",
              "GroupID": 23367,
              "Insight": "Lack of prioritization on automating critical dependencies and unclear task ownership hinders deployment speed and efficiency.",
              "Summary": "Deployment lag linked to outdated dependency on ucm-reporting-api, delaying fixes and impacting system reliability and feature rollout timelines.",
              "GroupName": "Tag: Deployment_Lag",
              "GroupDescription": "Issues tagged with 'Deployment_Lag', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1754573400,
      "startTimestamp": 1754530200
    },
    {
      "id": 3771,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-13T01:00:11Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "bf972486-608a-4c63-b458-656d7ca849b9",
      "contentJSON": {
        "Items": [
          {
            "id": 152502,
            "tags": [
              {
                "id": 23331,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23351,
                "name": "Quota_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "User hit an internal quota or service limit"
              }
            ],
            "title": "Grid - Other Grid Issue - 2025-08-06",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1407]",
              "comments": [],
              "priority": "Unspecified",
              "issue_key": "APA-132248",
              "created_ts": "2025-08-06T23:04:25.255+05:30",
              "issue_title": "Grid - Other Grid Issue - 2025-08-06",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Jonathan Tan",
              "reporter_name": "Aslan (Mu) Bai",
              "assignee_email": "jontan@linkedin.com",
              "reporter_email": "abai@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-08-06 23:09:03.262000 UTC",
                  "to_assignee": "Jonathan Tan",
                  "from_assignee": "Simin Wang"
                }
              ],
              "issue_description": "Browser: n/a Hadoop Job Link: n/a Cluster name: n/a Error Message: Nested Titles: Grid / Other Grid Issue accounts requested dataluxusrs, orphan Why do you need an exemption for this headless account?   Because we share this account between CPF, CDF, Catalyst and multiple customer team. 3 admins is not enough, especially when coordinating projects of this size, when somebody goes on DTO, or when another admin requests permission on something and requires another admin to approve it. What is this headless account used for? datalux for improving  data integrity  and  consistency Which team/org is responsible for this headless account? cp-catalyst Who would you like to designate as your 3 exemption PoCs?       What kind of capacity planning do you do for this headless account to inform your quota requests, if any? Yearly",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-06T17:34:25Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T01:00:10Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 152503,
            "tags": [
              {
                "id": 23331,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Promote the headless account `autoeval` to WAR",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1393]",
              "comments": [
                {
                  "created": "2025-08-06T16:12:00.167-0700",
                  "updated": "2025-08-06T16:12:00.167-0700",
                  "comment_body": "please follow",
                  "commented_by": "Simin Wang"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-132238",
              "created_ts": "2025-08-06T21:08:30.806+05:30",
              "issue_title": "Promote the headless account `autoeval` to WAR",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Simin Wang",
              "reporter_name": "Hannah Han",
              "assignee_email": "simwang@linkedin.com",
              "reporter_email": "huhan@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-08-06 21:09:46.144000 UTC",
                  "to_assignee": "Simin Wang",
                  "from_assignee": "Heagan Ahmed"
                }
              ],
              "issue_description": "HDFS Path: N/A Error Message: Promote the headless account  autoeval  to WAR Cluster Name: WAR HDFS User or Headless Account Name that launches the Job: autoeval Nested Titles: Grid / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": [
                {
                  "to_state": "On Hold",
                  "timestamp": "2025-08-06 23:22:17.868000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-08-06T15:38:31Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-13T01:00:10Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152502,
              152503
            ],
            "GroupMetaData": {
              "Actions": "Implement SLA for 'Access_Request', automate low-priority approvals, and establish clear accountability mechanisms for managing unresolved access requests.",
              "GroupID": 23349,
              "Insight": "No defined workflows or SLA adherence for 'Access_Request' issues. Lack of urgency signals delays in resolution for internal permissions.",
              "Summary": "Two 'Access_Request' issues, both created on 2025-08-06, remain unaddressed with no specified status or priority, indicating delays in processing and approvals.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              152502
            ],
            "GroupMetaData": {
              "Actions": "Improve issue documentation, enforce status updates, and enhance quota monitoring to proactively address user quota-related concerns.",
              "GroupID": 23362,
              "Insight": "No clear patterns or bottlenecks found; incomplete issue data suggests potential gaps in tracking or documentation practices.",
              "Summary": "Single quota request issue identified with no status or resolution details, making impact analysis unclear.",
              "GroupName": "Tag: Quota_Request",
              "GroupDescription": "Issues tagged with 'Quota_Request', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1754530200,
      "startTimestamp": 1754487000
    }
  ],
  "insightMetrics": {
    "ecdf": [
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5135,
      6162
    ],
    "count": 24,
    "totalTimeSpent": 17890,
    "timeSpentBucket": {
      "0": 20,
      "4": 4
    },
    "averageTimeSpent": 745
  }
}
 
 

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [jsonData, setJsonData] = useState<any>(SAMPLE_DATA);
  const [jsonInput, setJsonInput] = useState('');
  const [parseError, setParseError] = useState<string | null>(null);
  
  // State for tag filter navigation
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [previousTab, setPreviousTab] = useState<string>('overview');
  const [groupFilteredItems, setGroupFilteredItems] = useState<any[]>([]);
  const [groupFilterName, setGroupFilterName] = useState<string>('');
  const [sourceGroupId, setSourceGroupId] = useState<string>('');

  // Global filters state - applied filters that affect the data
  const [appliedFilters, setAppliedFilters] = useState<GlobalFilters>({
    createdDateRange: {
      startDate: '',
      endDate: '',
      relative: 'all'
    },
    activeDateRange: {
      startDate: '',
      endDate: '',
      relative: 'all'
    },
    selectedTags: [],
    selectedPriorities: [],
    selectedProjects: [],
    selectedAssignees: [],
    selectedReporters: [],
    selectedStatuses: []
  });

  // Local filters state - pending changes in the filter sidebar
  const [localFilters, setLocalFilters] = useState<GlobalFilters>({
    createdDateRange: {
      startDate: '',
      endDate: '',
      relative: 'all'
    },
    activeDateRange: {
      startDate: '',
      endDate: '',
      relative: 'all'
    },
    selectedTags: [],
    selectedPriorities: [],
    selectedProjects: [],
    selectedAssignees: [],
    selectedReporters: [],
    selectedStatuses: []
  });

  // Extract all items from various JSON structures and apply filters
  const { items: allItems, availableOptions } = useMemo(() => {
    if (!jsonData) {
      return {
        items: [],
        availableOptions: {
          tags: [],
          priorities: [],
          projects: [],
          assignees: [],
          reporters: [],
          statuses: []
        }
      };
    }

    console.log('Processing JSON data:', jsonData);
    let items: any[] = [];

    // Handle different JSON structures
    if (jsonData.Items && Array.isArray(jsonData.Items)) {
      items = jsonData.Items;
      console.log('Found Items array:', items.length);
    } else if (jsonData.dailySummaries && Array.isArray(jsonData.dailySummaries)) {
      // Extract items from daily summaries
      jsonData.dailySummaries.forEach((summary: any) => {
        if (summary.contentJSON?.Items && Array.isArray(summary.contentJSON.Items)) {
          items = [...items, ...summary.contentJSON.Items];
        }
      });
      console.log('Found dailySummaries structure, extracted items:', items.length);
    } else if (Array.isArray(jsonData)) {
      items = jsonData;
      console.log('Found direct array:', items.length);
    } else {
      console.log('Unknown JSON structure, keys:', Object.keys(jsonData));
    }

    console.log('Total extracted items:', items.length);

    // Extract unique values for filter options
    const tags = new Set<string>();
    const priorities = new Set<string>();
    const projects = new Set<string>();
    const assignees = new Set<string>();
    const reporters = new Set<string>();
    const statuses = new Set<string>();

    items.forEach((item: any) => {
      // Extract tags - they're in the item.tags array, each with a name property
      const itemTags = item.tags || [];
      if (Array.isArray(itemTags)) {
        itemTags.forEach((tag: any) => {
          if (tag.name) tags.add(tag.name);
        });
      }

      // Extract priority from item.content
      const priority = item.content?.priority;
      if (priority && priority !== 'Unspecified') priorities.add(String(priority));

      // Extract project/team from item.content.project_name or top-level teamName
      const project = item.content?.project_name || item.teamName;
      if (project) projects.add(String(project));

      // Extract assignee from item.content.assignee_name
      const assignee = item.content?.assignee_name;
      if (assignee) assignees.add(String(assignee));

      // Extract reporter from item.content.reporter_name
      const reporter = item.content?.reporter_name;
      if (reporter) reporters.add(String(reporter));

      // Extract status from latest status_transitions or default
      const statusTransitions = item.content?.status_transitions || [];
      let status = 'Unknown';
      if (statusTransitions.length > 0) {
        // Get the latest status transition
        const latestTransition = statusTransitions[statusTransitions.length - 1];
        status = latestTransition.to_state || 'Unknown';
      }
      if (status !== 'Unknown') statuses.add(String(status));
    });

    return {
      items,
      availableOptions: {
        tags: Array.from(tags).sort(),
        priorities: Array.from(priorities).sort(),
        projects: Array.from(projects).sort(),
        assignees: Array.from(assignees).sort(),
        reporters: Array.from(reporters).sort(),
        statuses: Array.from(statuses).sort()
      }
    };
  }, [jsonData]);

  // Filter items based on current filters
  const filteredItems = useMemo(() => {
    console.log('Filtering items. All items:', allItems.length, 'Filters:', appliedFilters);
    
    if (!allItems.length) {
      console.log('No items to filter');
      return [];
    }

    try {
      const result = allItems.filter((item: any) => {
        // Created Date Range Filter - Issues created within time range (uses only created_ts)
        if (appliedFilters.selectedTags.length > 0) {
          const itemTags = item.tags || [];
          const itemTagNames = itemTags.map((tag: any) => tag.name || tag).filter(Boolean);
          if (!appliedFilters.selectedTags.some(filterTag => itemTagNames.includes(filterTag))) {
            return false;
          }
        }

        // Priority filter
        if (appliedFilters.selectedPriorities.length > 0) {
          const itemPriority = item.content?.priority;
          if (!itemPriority || !appliedFilters.selectedPriorities.includes(itemPriority)) {
            return false;
          }
        }

        // Project filter
        if (appliedFilters.selectedProjects.length > 0) {
          const itemProject = item.content?.project_name;
          if (!itemProject || !appliedFilters.selectedProjects.includes(itemProject)) {
            return false;
          }
        }

        // Assignee filter
        if (appliedFilters.selectedAssignees.length > 0) {
          const itemAssignee = item.content?.assignee_name;
          if (!itemAssignee || !appliedFilters.selectedAssignees.includes(itemAssignee)) {
            return false;
          }
        }

        // Reporter filter
        if (appliedFilters.selectedReporters.length > 0) {
          const itemReporter = item.content?.reporter_name;
          if (!itemReporter || !appliedFilters.selectedReporters.includes(itemReporter)) {
            return false;
          }
        }

        // Status filter
        if (appliedFilters.selectedStatuses.length > 0) {
          const statusTransitions = item.content?.status_transitions || [];
          const currentStatus = statusTransitions.length > 0 
            ? statusTransitions[statusTransitions.length - 1].to_state 
            : 'Open';
          if (!appliedFilters.selectedStatuses.includes(currentStatus)) {
            return false;
          }
        }

        // Created Date Range Filter - Issues created within time range (uses only created_ts)
        if (appliedFilters.createdDateRange.relative !== 'all' || appliedFilters.createdDateRange.startDate || appliedFilters.createdDateRange.endDate) {
          const itemCreatedDate = new Date(item.content?.created_ts);
          if (isNaN(itemCreatedDate.getTime())) {
            if (appliedFilters.createdDateRange.relative !== 'all') return false;
          } else {
            let startDate: Date | null = null;
            let endDate: Date | null = null;

            if (appliedFilters.createdDateRange.relative === 'last7days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 7);
            } else if (appliedFilters.createdDateRange.relative === 'last30days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 30);
            } else if (appliedFilters.createdDateRange.relative === 'last90days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 90);
            } else if (appliedFilters.createdDateRange.relative === 'custom') {
              if (appliedFilters.createdDateRange.startDate) {
                startDate = new Date(appliedFilters.createdDateRange.startDate);
              }
              if (appliedFilters.createdDateRange.endDate) {
                endDate = new Date(appliedFilters.createdDateRange.endDate);
              }
            }

            if (startDate && itemCreatedDate < startDate) return false;
            if (endDate && itemCreatedDate > endDate) return false;
          }
        }

        // Active Issues Filter - Issues active during time range (uses both created_ts and resolved_ts)
        if (appliedFilters.activeDateRange.relative !== 'all' || appliedFilters.activeDateRange.startDate || appliedFilters.activeDateRange.endDate) {
          const itemCreatedDate = new Date(item.content?.created_ts);
          const itemResolvedDate = item.content?.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z" 
            ? new Date(item.content.resolved_ts) 
            : null; // null means still active

          if (isNaN(itemCreatedDate.getTime())) {
            if (appliedFilters.activeDateRange.relative !== 'all') return false;
          } else {
            let startDate: Date | null = null;
            let endDate: Date | null = null;

            if (appliedFilters.activeDateRange.relative === 'last7days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 7);
            } else if (appliedFilters.activeDateRange.relative === 'last30days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 30);
            } else if (appliedFilters.activeDateRange.relative === 'last90days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 90);
            } else if (appliedFilters.activeDateRange.relative === 'custom') {
              if (appliedFilters.activeDateRange.startDate) {
                startDate = new Date(appliedFilters.activeDateRange.startDate);
              }
              if (appliedFilters.activeDateRange.endDate) {
                endDate = new Date(appliedFilters.activeDateRange.endDate);
                endDate.setHours(23, 59, 59, 999);
              }
            }

            // Issue is active during the range if:
            // 1. It was created before or during the range AND
            // 2. It was resolved after the range started OR is still unresolved
            if (startDate) {
              // Issue must be created before the end of the range
              if (endDate && itemCreatedDate > endDate) return false;
              
              // Issue must be active during the range (not resolved before range starts)
              if (itemResolvedDate && itemResolvedDate < startDate) return false;
            }

            if (endDate) {
              // Issue must be created before the end of the range
              if (itemCreatedDate > endDate) return false;
            }
          }
        }

        return true;
      });
      
      console.log('Filtered items result:', result.length, 'from', allItems.length);
      return result;
    } catch (error) {
      console.error('Error in filtering:', error);
      return allItems; // Return all items if filtering fails
    }
  }, [allItems, appliedFilters]);

  // Parse and analyze the JSON data using filtered items
  const dataStats = useMemo(() => {
    if (!jsonData) {
      return {
        totalIssues: 0,
        earliestDate: null,
        latestDate: null,
        dateRange: null
      };
    }

    // If no filtered items, show that 0 are being displayed but data exists
    if (filteredItems.length === 0 && allItems.length > 0) {
      return {
        totalIssues: 0,
        earliestDate: null,
        latestDate: null,
        dateRange: `0 of ${allItems.length} items shown (filtered)`
      };
    }

    if (filteredItems.length === 0) {
      return {
        totalIssues: 0,
        earliestDate: null,
        latestDate: null,
        dateRange: null
      };
    }

    // Extract timestamps from filtered items - only use created_ts
    let earliestDate: Date | null = null;
    let latestDate: Date | null = null;

    filteredItems.forEach((item: any) => {
      // Only check created_ts timestamp
      const createdTs = item.content?.created_ts;

      if (createdTs && createdTs !== "0001-01-01T00:00:00Z") {
        const date = new Date(createdTs);
        if (!isNaN(date.getTime())) {
          if (!earliestDate || date < earliestDate) {
            earliestDate = date;
          }
          if (!latestDate || date > latestDate) {
            latestDate = date;
          }
        }
      }
    });

    const dateRange = earliestDate && latestDate 
      ? `${(earliestDate as Date).toLocaleDateString()} - ${(latestDate as Date).toLocaleDateString()}`
      : null;

    return {
      totalIssues: filteredItems.length,
      earliestDate,
      latestDate,
      dateRange
    };
  }, [jsonData, filteredItems, allItems.length]);

  // Advanced analytics calculations (simplified)
  const advancedAnalytics = useMemo(() => {
    console.log('Calculating advanced analytics. Filtered items:', filteredItems.length);
    
    if (!jsonData || filteredItems.length === 0) {
      console.log('No data for analytics');
      return {
        resolutionTimes: { median: 0, p90: 0, max: 0 },
        assigneeDistribution: [],
        assigneeChurn: 0,
        backAndForthAssignments: 0,
        blockedIssues: { percentage: 0, avgDuration: 0 },
        topTags: [],
        previousPeriodComparison: null
      };
    }

    try {
      // Calculate resolution times from actual data
      const resolutionTimes = filteredItems
        .map((item: any) => {
          const created = new Date(item.content?.created_ts);
          const resolved = item.content?.resolved_ts;
          
          if (resolved && resolved !== "0001-01-01T00:00:00Z" && !isNaN(created.getTime())) {
            const resolvedDate = new Date(resolved);
            if (!isNaN(resolvedDate.getTime())) {
              return Math.round((resolvedDate.getTime() - created.getTime()) / (1000 * 60 * 60)); // hours
            }
          }
          return null;
        })
        .filter((time): time is number => time !== null)
        .sort((a, b) => a - b);

      const median = resolutionTimes.length > 0 
        ? resolutionTimes[Math.floor(resolutionTimes.length / 2)] 
        : 0;
      const p90 = resolutionTimes.length > 0 
        ? resolutionTimes[Math.floor(resolutionTimes.length * 0.9)] 
        : 0;
      const max = resolutionTimes.length > 0 
        ? resolutionTimes[resolutionTimes.length - 1] 
        : 0;

      // Calculate metrics from tags instead of complex logic
      const assigneeIssueCounts: { [key: string]: number } = {};
      const tagCounts: { [key: string]: number } = {};
      
      // Count issues by tag names for special metrics
      let churnCount = 0;
      let backAndForthCount = 0;
      let blockedCount = 0;
      
      filteredItems.forEach((item: any) => {
        // Count assignee distribution using assignee_name
        const assigneeName = item.content?.assignee_name || 'Unassigned';
        assigneeIssueCounts[assigneeName] = (assigneeIssueCounts[assigneeName] || 0) + 1;

        // Count tags and look for special metrics
        const itemTags = item.tags || [];
        if (Array.isArray(itemTags)) {
          itemTags.forEach((tag: any) => {
            const tagName = tag.name?.toLowerCase();
            if (tagName) {
              tagCounts[tag.name] = (tagCounts[tag.name] || 0) + 1;
              
              // Look for specific metric tags
              if (tagName.includes('churn') || tagName.includes('assignee_churn') || tagName.includes('high_churn')) {
                churnCount++;
              }
              if (tagName.includes('back_and_forth') || tagName.includes('reassign') || tagName.includes('bounced')) {
                backAndForthCount++;
              }
              if (tagName.includes('blocked') || tagName.includes('blocker') || tagName.includes('impediment')) {
                blockedCount++;
              }
            }
          });
        }
      });

      const blockedPercentage = filteredItems.length > 0 
        ? Math.round((blockedCount / filteredItems.length) * 100) 
        : 0;

      // Get top tags
      const topTags = Object.entries(tagCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 20) // Show more tags
        .map(([tag, count]) => ({ tag, count, percentage: (count / filteredItems.length) * 100 }));

      // Convert assignee distribution to array
      const assigneeDistribution = Object.entries(assigneeIssueCounts)
        .sort(([, a], [, b]) => b - a)
        .map(([assignee, count]) => ({ 
          assignee, 
          count, 
          percentage: (count / filteredItems.length) * 100 
        }));

      const result = {
        resolutionTimes: { median, p90, max },
        assigneeDistribution,
        assigneeChurn: churnCount,
        backAndForthAssignments: backAndForthCount,
        blockedIssues: { percentage: blockedPercentage, avgDuration: 0 },
        topTags,
        previousPeriodComparison: null
      };
      
      console.log('Advanced analytics result:', result);
      return result;
    } catch (error) {
      console.error('Error in advanced analytics:', error);
      return {
        resolutionTimes: { median: 0, p90: 0, max: 0 },
        assigneeDistribution: [],
        assigneeChurn: 0,
        backAndForthAssignments: 0,
        blockedIssues: { percentage: 0, avgDuration: 0 },
        topTags: [],
        previousPeriodComparison: null
      };
    }
  }, [jsonData, filteredItems]);

  const handleJsonInput = (input: string) => {
    setJsonInput(input);
    setParseError(null);
  };

  const handleSubmitJson = () => {
    if (!jsonInput.trim()) {
      setParseError('Please enter JSON data to analyze');
      setJsonData(null);
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      console.log('Parsed JSON data:', parsed);
      setJsonData(parsed);
      setParseError(null);
      // Redirect to dashboard after successful parsing
      setActiveTab('dashboard');
    } catch (error) {
      setParseError(`Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setJsonData(null);
    }
  };

  const JsonInputComponent = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">JSON Data Input</h3>
        <p className="text-sm text-gray-600 mb-6">
          Paste your JIRA retrospective JSON data below, then click the "Analyze JSON Data" button to process it.
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JSON Data
            </label>
            <textarea
              value={jsonInput}
              onChange={(e) => handleJsonInput(e.target.value)}
              className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder={`Paste your JSON data here, for example:
{
  "summaryType": "system_jira_retrospective_v0",
  "dailySummaries": [
    {
      "contentJSON": {
        "Items": [
          {
            "id": 123,
            "title": "Sample Issue",
            "content": {
              "created_ts": "2025-01-01T00:00:00Z",
              "resolved_ts": "2025-01-02T00:00:00Z"
            }
          }
        ]
      }
    }
  ]
}`}
            />
            
            <button
              onClick={() => {
                console.log('Button clicked!');
                handleSubmitJson();
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            >
              ANALYZE DATA NOW
            </button>
          </div>
          
          {parseError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">JSON Parse Error</h3>
                  <div className="mt-1 text-sm text-red-700">
                    {parseError}
                  </div>
                </div>
              </div>
            </div>
          )}

          {jsonData && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Data Loaded Successfully</h3>
                  <div className="mt-1 text-sm text-green-700">
                    <p>Total Issues: <strong>{allItems.length}</strong></p>
                    {jsonData.summaryType && (
                      <p>Data Type: <strong>{jsonData.summaryType}</strong></p>
                    )}
                    {jsonData.dailySummaries && Array.isArray(jsonData.dailySummaries) && (
                      <p>Summaries: <strong>{jsonData.dailySummaries.length}</strong></p>
                    )}
                    {(() => {
                      // Calculate date range from all items (not filtered)
                      let earliestDate: Date | null = null;
                      let latestDate: Date | null = null;

                      allItems.forEach((item: any) => {
                        const createdTs = item.content?.created_ts;
                        if (createdTs && createdTs !== "0001-01-01T00:00:00Z") {
                          const date = new Date(createdTs);
                          if (!isNaN(date.getTime())) {
                            if (!earliestDate || date < earliestDate) {
                              earliestDate = date;
                            }
                            if (!latestDate || date > latestDate) {
                              latestDate = date;
                            }
                          }
                        }
                      });

                      return (
                        <>
                          {earliestDate && latestDate && (
                            <p>Date Range: <strong>{(earliestDate as Date).toLocaleDateString()} - {(latestDate as Date).toLocaleDateString()}</strong></p>
                          )}
                          {earliestDate && (
                            <p>Earliest: <strong>{(earliestDate as Date).toLocaleString()}</strong></p>
                          )}
                          {latestDate && (
                            <p>Latest: <strong>{(latestDate as Date).toLocaleString()}</strong></p>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {jsonData && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Preview</h3>
          <div className="bg-gray-50 rounded-md p-4 max-h-96 overflow-auto scrollbar-hide">
            <pre className="text-xs text-gray-800">
              {JSON.stringify(jsonData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'issues', name: 'Issues', icon: Search },

    { id: 'tags', name: 'Tags', icon: Tags },
    { id: 'summaries', name: 'Analysis and Insights', icon: Calendar },
    { id: 'input', name: 'Input', icon: FileJson },
  ];

  // LinkedIn-style Filter Section Component - moved outside to prevent re-renders
  const LinkedInFilterSection = React.useMemo(() => ({ title, isExpanded, onToggle, children, count }: {
    title: string;
    isExpanded: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    count?: string;
  }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
      >
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-800">{title}</span>
          {count && (
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
              {count}
            </span>
          )}
        </div>
        <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </button>
      <div className={`transition-all duration-200 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  ), []);

  const FilterSidebar = () => {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
      createdDate: true,
      activeDate: false,
      status: true,
      priority: true,
      tags: false,
      project: false,
      assignee: false,
      reporter: false
    });

    const toggleSection = React.useCallback((section: string) => {
      setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    }, []);

    const updateLocalFilter = React.useCallback((key: keyof GlobalFilters, value: any) => {
      setLocalFilters(prev => ({ ...prev, [key]: value }));
    }, []);

    const applyFilters = React.useCallback(() => {
      setAppliedFilters(localFilters);
    }, [localFilters]);

    const resetFilters = React.useCallback(() => {
      const resetState: GlobalFilters = activeTab === 'summaries' ? {
        // For summary tab, only reset the created date range
        createdDateRange: {
          startDate: '',
          endDate: '',
          relative: 'all' as const
        },
        activeDateRange: localFilters.activeDateRange,
        selectedTags: localFilters.selectedTags,
        selectedPriorities: localFilters.selectedPriorities,
        selectedProjects: localFilters.selectedProjects,
        selectedAssignees: localFilters.selectedAssignees,
        selectedReporters: localFilters.selectedReporters,
        selectedStatuses: localFilters.selectedStatuses
      } : {
        // For other tabs, reset all filters
        createdDateRange: {
          startDate: '',
          endDate: '',
          relative: 'all' as const
        },
        activeDateRange: {
          startDate: '',
          endDate: '',
          relative: 'all' as const
        },
        selectedTags: [],
        selectedPriorities: [],
        selectedProjects: [],
        selectedAssignees: [],
        selectedReporters: [],
        selectedStatuses: []
      };

      setLocalFilters(resetState);
      setAppliedFilters(resetState);
    }, [activeTab, localFilters]);

    const toggleArrayFilter = React.useCallback((filterKey: keyof GlobalFilters, value: string) => {
      setLocalFilters(prev => {
        const currentArray = prev[filterKey] as string[];
        const newArray = currentArray.includes(value)
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value];
        return { ...prev, [filterKey]: newArray };
      });
    }, []);

    // LinkedIn-style Multi-Select Component - moved to useMemo to prevent re-renders
    const MultiSelectOption = React.useMemo(() => ({ label, isSelected, onChange, tooltip }: {
      label: string | React.ReactNode;
      isSelected: boolean;
      onChange: () => void;
      tooltip?: string;
    }) => (
      <label 
        className="flex items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer group transition-colors"
        title={tooltip}
      >
        <div className="relative">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={onChange}
            className="sr-only"
          />
          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            isSelected 
              ? 'bg-blue-600 border-blue-600' 
              : 'border-gray-300 group-hover:border-blue-400'
          }`}>
            {isSelected && <div className="w-2 h-2 bg-white rounded-sm"></div>}
          </div>
        </div>
        <span className={`ml-3 text-sm font-medium transition-colors ${
          isSelected ? 'text-blue-600' : 'text-gray-700 group-hover:text-gray-800'
        }`}>
          {label}
        </span>
      </label>
    ), []);

    // LinkedIn-style Date Range Component
    const DateRangeSelector = ({ 
      value, 
      onChange, 
      label 
    }: { 
      value: DateFilter; 
      onChange: (value: DateFilter) => void;
      label: string;
    }) => (
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <select
          value={value.relative}
          onChange={(e) => onChange({ ...value, relative: e.target.value as any })}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:border-gray-400 transition-colors"
        >
          <option value="all">All time</option>
          <option value="last7days">Last 7 days</option>
          <option value="last30days">Last 30 days</option>
          <option value="last90days">Last 90 days</option>
          <option value="custom">Custom range</option>
        </select>
        {value.relative === 'custom' && (
          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">From</label>
              <input
                type="date"
                value={value.startDate}
                onChange={(e) => onChange({ ...value, startDate: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">To</label>
              <input
                type="date"
                value={value.endDate}
                onChange={(e) => onChange({ ...value, endDate: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div className={`${sidebarOpen ? 'w-[300px]' : 'w-0'} transition-all duration-300 bg-gray-100 border-r border-gray-300 overflow-hidden flex-shrink-0 flex flex-col`}>
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {activeTab === 'summaries' ? 'Date Filter' : 'Filters'}
              </h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Content */}
        <div 
          className="overflow-y-auto p-6 space-y-4 scrollbar-hide flex-1"
          style={{
            minHeight: 'fit-content',
            maxHeight: 'calc(100vh - 200px)'
          }}
        >

          {/* For Summary tab, only show Created Date Range filter */}
          {activeTab === 'summaries' ? (
            <>
              {/* Summary Tab Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <h3 className="font-medium text-blue-800">Analysis & Insights Mode</h3>
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  Only date range filtering is available for summary analysis. Other filters are disabled to show comprehensive insights.
                </p>
              </div>

              {/* Date Range Filter - Created Date Only */}
              <LinkedInFilterSection
                title="Date Range"
                isExpanded={expandedSections.createdDate}
                onToggle={React.useCallback(() => toggleSection('createdDate'), [toggleSection])}
              >
                <div className="space-y-4">
                  <DateRangeSelector
                    label="Created Date Range"
                    value={localFilters.createdDateRange}
                    onChange={(value) => updateLocalFilter('createdDateRange', value)}
                  />
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <p className="text-xs text-gray-600">
                      📊 Summaries will be filtered based on when they were created within this date range.
                    </p>
                  </div>
                </div>
              </LinkedInFilterSection>
            </>
          ) : (
            <>
              {/* Date Range Filters for other tabs */}
              <LinkedInFilterSection
                title="Date Ranges"
                isExpanded={expandedSections.createdDate}
                onToggle={React.useCallback(() => toggleSection('createdDate'), [toggleSection])}
              >
                <div className="space-y-6">
                  <DateRangeSelector
                    label="Created Date"
                    value={localFilters.createdDateRange}
                    onChange={(value) => setLocalFilters(prev => ({
                      ...prev,
                      createdDateRange: value
                    }))}
                  />
                </div>
              </LinkedInFilterSection>

              {/* Status Filter */}
              {jsonData && availableOptions.statuses.length > 0 && (
                <LinkedInFilterSection
                  title="Status"
                  isExpanded={expandedSections.status}
                  onToggle={() => toggleSection('status')}
                  count={localFilters.selectedStatuses.length > 0 ? `${localFilters.selectedStatuses.length}` : undefined}
                >
                  <div className="space-y-1 max-h-60 overflow-y-auto scrollbar-hide">
                    {availableOptions.statuses.map((status) => (
                      <MultiSelectOption
                        key={status}
                        label={status}
                        isSelected={localFilters.selectedStatuses.includes(status)}
                        onChange={() => toggleArrayFilter('selectedStatuses', status)}
                      />
                    ))}
                  </div>
                </LinkedInFilterSection>
              )}

              {/* Priority Filter */}
              {jsonData && availableOptions.priorities.length > 0 && (
                <LinkedInFilterSection
                  title="Priority"
                  isExpanded={expandedSections.priority}
                  onToggle={() => toggleSection('priority')}
                  count={localFilters.selectedPriorities.length > 0 ? `${localFilters.selectedPriorities.length}` : undefined}
                >
                  <div className="space-y-1 max-h-60 overflow-y-auto scrollbar-hide">
                    {availableOptions.priorities.map((priority) => (
                      <MultiSelectOption
                        key={priority}
                        label={priority}
                        isSelected={localFilters.selectedPriorities.includes(priority)}
                        onChange={() => toggleArrayFilter('selectedPriorities', priority)}
                      />
                    ))}
                  </div>
                </LinkedInFilterSection>
              )}

              {/* Tags Filter */}
              {jsonData && availableOptions.tags.length > 0 && (
                <LinkedInFilterSection
                  title="Tags"
                  isExpanded={expandedSections.tags}
                  onToggle={() => toggleSection('tags')}
                  count={localFilters.selectedTags.length > 0 ? `${localFilters.selectedTags.length}` : undefined}
                >
                  <div className="space-y-1 max-h-60 overflow-y-auto scrollbar-hide">
                    {availableOptions.tags.map((tag) => (
                      <MultiSelectOption
                        key={tag}
                        label={tag.length > 25 ? `${tag.substring(0, 25)}...` : tag}
                        isSelected={localFilters.selectedTags.includes(tag)}
                        onChange={() => toggleArrayFilter('selectedTags', tag)}
                        tooltip={tag.length > 25 ? tag : undefined}
                      />
                    ))}
                  </div>
                </LinkedInFilterSection>
              )}

              {/* Projects Filter */}
              {jsonData && availableOptions.projects.length > 0 && (
                <LinkedInFilterSection
                  title="Projects"
                  isExpanded={expandedSections.project}
                  onToggle={() => toggleSection('project')}
                  count={localFilters.selectedProjects.length > 0 ? `${localFilters.selectedProjects.length}` : undefined}
                >
                  <div className="space-y-1 max-h-60 overflow-y-auto scrollbar-hide">
                    {availableOptions.projects.map((project) => (
                      <MultiSelectOption
                        key={project}
                        label={project}
                        isSelected={localFilters.selectedProjects.includes(project)}
                        onChange={() => toggleArrayFilter('selectedProjects', project)}
                      />
                    ))}
                  </div>
                </LinkedInFilterSection>
              )}

              {/* Assignees Filter */}
              {jsonData && availableOptions.assignees.length > 0 && (
                <LinkedInFilterSection
                  title="Assignees"
                  isExpanded={expandedSections.assignee}
                  onToggle={() => toggleSection('assignee')}
                  count={localFilters.selectedAssignees.length > 0 ? `${localFilters.selectedAssignees.length}` : undefined}
                >
                  <div className="space-y-1 max-h-60 overflow-y-auto scrollbar-hide">
                    {availableOptions.assignees.map((assignee) => (
                      <MultiSelectOption
                        key={assignee}
                        label={assignee}
                        isSelected={localFilters.selectedAssignees.includes(assignee)}
                        onChange={() => toggleArrayFilter('selectedAssignees', assignee)}
                      />
                    ))}
                  </div>
                </LinkedInFilterSection>
              )}

              {/* Reporters Filter */}
              {jsonData && availableOptions.reporters.length > 0 && (
                <LinkedInFilterSection
                  title="Reporters"
                  isExpanded={expandedSections.reporter || false}
                  onToggle={() => toggleSection('reporter')}
                  count={localFilters.selectedReporters.length > 0 ? `${localFilters.selectedReporters.length}` : undefined}
                >
                  <div className="space-y-1 max-h-60 overflow-y-auto scrollbar-hide">
                    {availableOptions.reporters.map((reporter) => (
                      <MultiSelectOption
                        key={reporter}
                        label={reporter}
                        isSelected={localFilters.selectedReporters.includes(reporter)}
                        onChange={() => toggleArrayFilter('selectedReporters', reporter)}
                      />
                    ))}
                  </div>
                </LinkedInFilterSection>
              )}
            </>
          )}
          
          {/* Reset Filters and Apply Filters Buttons */}
          <div className="mt-auto pt-4 border-t border-gray-200 space-y-3">
            <button
              onClick={resetFilters}
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 px-4 py-2 rounded-md font-medium transition-colors text-sm"
            >
              {activeTab === 'summaries' ? 'Reset date filter' : 'Reset all filters'}
            </button>
            
            <button
              onClick={applyFilters}
              className="w-full bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors text-sm"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    );
  };

  const TopBar = () => (
    <div className="bg-white shadow-sm border-b border-gray-300">
      <div className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-4">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-blue-600 rounded-lg shadow-sm">
              <FileJson className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">Jira Summariser</h1>
              <p className="text-sm text-gray-600 font-medium">JIRA Activity Data Intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TabNavigation = () => (
    <div className="bg-white border-b border-gray-300 shadow-sm">
      <div className="px-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                // Clear group filter when switching tabs unless staying on issues tab
                if (tab.id !== 'issues') {
                  setGroupFilteredItems([]);
                  setGroupFilterName('');
                }
              }}
              className={`flex items-center gap-2 py-4 px-2 border-b-3 font-medium text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-300 hover:bg-blue-50/30'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  const KPICard = ({ title, value, subtitle, change, icon: IconComponent }: {
    title: string;
    value: string | number;
    subtitle?: string;
    change?: number;
    icon?: React.ComponentType<any>;
  }) => {
    const Icon = IconComponent || BarChart3;
    const getChangeColor = (change: number) => {
      if (change > 0) return 'text-green-600';
      if (change < 0) return 'text-red-600';
      return 'text-gray-500';
    };

    const getChangeIcon = (change: number) => {
      if (change > 0) return '↗';
      if (change < 0) return '↘';
      return '→';
    };

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-blue-100">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-semibold text-gray-800">{value}</p>
              {typeof change === 'number' && (
                <span className={`text-sm font-medium ${getChangeColor(change)}`}>
                  {getChangeIcon(change)}{Math.abs(change)}%
                </span>
              )}
            </div>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          </div>
        </div>
      </div>
    );
  };

  // Chart components - removed unused charts

  const DataTable = ({ items = filteredItems }: { items?: any[] } = {}) => {
    const [selectedIssue, setSelectedIssue] = useState<any>(null);
    const [showComments, setShowComments] = useState<boolean>(false);
    const [sortColumn, setSortColumn] = useState<string>('created');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(15);

    // Sorting function
    const handleSort = (column: string) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortColumn(column);
        setSortDirection('desc');
      }
      setCurrentPage(1); // Reset to first page when sorting
    };

    // Sort items
    const sortedItems = [...items].sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortColumn) {
        case 'id':
          aValue = a.content?.issue_key || a.id || '';
          bValue = b.content?.issue_key || b.id || '';
          break;
        case 'title':
          aValue = a.title || '';
          bValue = b.title || '';
          break;
        case 'status':
          const statusOrder: Record<string, number> = { 
            'Open': 0, 
            'In Progress': 1, 
            'InProgress': 1, 
            'Closed': 2,
            'Resolved': 2,
            'Done': 2
          };
          const aStatus = (a.content?.status_transitions || []).slice(-1)[0]?.to_state || '';
          const bStatus = (b.content?.status_transitions || []).slice(-1)[0]?.to_state || '';
          aValue = statusOrder[aStatus] !== undefined ? statusOrder[aStatus] : 999;
          bValue = statusOrder[bStatus] !== undefined ? statusOrder[bStatus] : 999;
          break;
        case 'priority':
          const priorityOrder: Record<string, number> = {
            'Blocker': 0,
            'Critical': 1,
            'Major': 2,
            'Minor': 3,
            'Trivial': 4,
            'Pending': 5,
            'Unspecified': 6,
            'Highest': 7,
            'High': 8,
            'Medium': 9,
            'Low': 10,
            'Lowest': 11
          };
          const aPriority = a.content?.priority || '';
          const bPriority = b.content?.priority || '';
          aValue = priorityOrder[aPriority] !== undefined ? priorityOrder[aPriority] : 999;
          bValue = priorityOrder[bPriority] !== undefined ? priorityOrder[bPriority] : 999;
          break;
        case 'assignee':
          aValue = a.content?.assignee_name || '';
          bValue = b.content?.assignee_name || '';
          break;
        case 'reporter':
          aValue = a.content?.reporter_name || '';
          bValue = b.content?.reporter_name || '';
          break;
        case 'created':
          aValue = a.content?.created_ts ? new Date(a.content.created_ts).getTime() : 0;
          bValue = b.content?.created_ts ? new Date(b.content.created_ts).getTime() : 0;
          break;
        case 'duration':
          const aDuration = a.content?.created_ts && a.content?.resolved_ts && a.content.resolved_ts !== "0001-01-01T00:00:00Z"
            ? new Date(a.content.resolved_ts).getTime() - new Date(a.content.created_ts).getTime()
            : a.content?.created_ts ? Date.now() - new Date(a.content.created_ts).getTime() : 0;
          const bDuration = b.content?.created_ts && b.content?.resolved_ts && b.content.resolved_ts !== "0001-01-01T00:00:00Z"
            ? new Date(b.content.resolved_ts).getTime() - new Date(b.content.created_ts).getTime()
            : b.content?.created_ts ? Date.now() - new Date(b.content.created_ts).getTime() : 0;
          aValue = aDuration;
          bValue = bDuration;
          break;
        default:
          return 0;
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    // Pagination
    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);

    if (!jsonData || filteredItems.length === 0) {
      return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Issues Table</h3>
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              {!jsonData ? 'No data loaded' : 'No issues match the current filters'}
            </p>
            {!jsonData && (
              <button
                onClick={() => setActiveTab('input')}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
              >
                Load Data
              </button>
            )}
          </div>
        </div>
      );
    }

    const getStatusColor = (status: string) => {
      const s = status.toLowerCase();
      if (s.includes('resolved') || s.includes('done') || s.includes('closed')) return 'bg-green-100 text-green-800';
      if (s.includes('progress') || s.includes('review')) return 'bg-yellow-100 text-yellow-800';
      if (s.includes('open') || s.includes('new') || s.includes('todo')) return 'bg-blue-100 text-blue-800';
      return 'bg-gray-100 text-gray-800';
    };

    const getPriorityColor = (priority: string) => {
      const p = priority.toLowerCase();
      if (p === 'critical') return 'bg-red-100 text-red-800';
      if (p === 'high') return 'bg-orange-100 text-orange-800';
      if (p === 'medium') return 'bg-yellow-100 text-yellow-800';
      if (p === 'low') return 'bg-green-100 text-green-800';
      return 'bg-gray-100 text-gray-800';
    };

    const formatDate = (timestamp: string) => {
      if (!timestamp || timestamp === "0001-01-01T00:00:00Z") return 'N/A';
      return new Date(timestamp).toLocaleDateString();
    };

    const calculateDuration = (created: string, resolved: string) => {
      if (!resolved || resolved === "0001-01-01T00:00:00Z") return 'Ongoing';
      const createdDate = new Date(created);
      const resolvedDate = new Date(resolved);
      const diffTime = resolvedDate.getTime() - createdDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays} days`;
    };

    const getSortIcon = (column: string) => {
      if (sortColumn !== column) {
        return <ArrowUpDown className="w-3 h-3 text-gray-400 ml-1" />;
      }
      return sortDirection === 'asc' 
        ? <ArrowUp className="w-3 h-3 text-blue-600 ml-1" />
        : <ArrowDown className="w-3 h-3 text-blue-600 ml-1" />;
    };

    const SortableHeader = ({ column, children }: { column: string, children: React.ReactNode }) => (
      <th 
        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
        onClick={() => handleSort(column)}
      >
        <div className="flex items-center">
          {children}
          {getSortIcon(column)}
        </div>
      </th>
    );

    return (
      <>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Issues Table</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">Items per page:</label>
                <select 
                  value={itemsPerPage} 
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <p className="text-sm text-gray-500">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedItems.length)} of {sortedItems.length} issues
              </p>
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <SortableHeader column="id">ID/Key</SortableHeader>
                  <SortableHeader column="title">Title</SortableHeader>
                  <SortableHeader column="status">Status</SortableHeader>
                  <SortableHeader column="priority">Priority</SortableHeader>
                  <SortableHeader column="assignee">Assignee</SortableHeader>
                  <SortableHeader column="reporter">Reporter</SortableHeader>
                  <SortableHeader column="created">Created</SortableHeader>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayItems.map((item, index) => {
                  const key = item.content?.issue_key || item.id || index;
                  const title = item.title || 'Untitled';
                  
                  // Get status from latest status transition
                  const statusTransitions = item.content?.status_transitions || [];
                  let statusName = 'Unknown';
                  if (statusTransitions.length > 0) {
                    const latestTransition = statusTransitions[statusTransitions.length - 1];
                    statusName = latestTransition.to_state || 'Unknown';
                  }
                  
                  const priority = item.content?.priority || 'N/A';
                  const assigneeName = item.content?.assignee_name || 'Unassigned';
                  const reporterName = item.content?.reporter_name || 'N/A';
                  const createdTs = item.content?.created_ts;

                  return (
                    <tr key={`${key}-${index}`} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600">
                        {String(key).substring(0, 15)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        <div className="max-w-48 truncate" title={String(title)}>
                          {String(title)}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(statusName)}`}>
                          {statusName}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)}`}>
                          {String(priority)}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        <div className="max-w-32 truncate" title={String(assigneeName)}>
                          {String(assigneeName)}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        <div className="max-w-32 truncate" title={String(reporterName)}>
                          {String(reporterName)}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(createdTs)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <button
                          onClick={() => {
                            setSelectedIssue(item);
                            setShowComments(false);
                          }}
                          className="text-blue-600 hover:text-blue-800 font-medium text-xs"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </button>
                
                <div className="flex items-center space-x-1">
                  {/* Show page numbers */}
                  {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 7) {
                      pageNum = i + 1;
                    } else if (currentPage <= 4) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 3) {
                      pageNum = totalPages - 6 + i;
                    } else {
                      pageNum = currentPage - 3 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 text-sm border rounded ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          )}
        </div>

        {/* Detailed Issue Modal */}
        {selectedIssue && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Issue Details</h2>
                  <button
                    onClick={() => {
                      setSelectedIssue(null);
                      setShowComments(false);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Basic Information</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">ID:</span> {selectedIssue.content?.issue_key || selectedIssue.id}</div>
                        <div><span className="font-medium">Title:</span> {selectedIssue.title}</div>
                        <div><span className="font-medium">Priority:</span> {selectedIssue.content?.priority || 'N/A'}</div>
                        <div><span className="font-medium">Project:</span> {selectedIssue.content?.project_name || 'N/A'}</div>
                        <div><span className="font-medium">Created:</span> {formatDate(selectedIssue.content?.created_ts)}</div>
                        <div><span className="font-medium">Resolved:</span> {formatDate(selectedIssue.content?.resolved_ts)}</div>
                        <div><span className="font-medium">Duration:</span> {calculateDuration(selectedIssue.content?.created_ts, selectedIssue.content?.resolved_ts)}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">People</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Assignee:</span> {selectedIssue.content?.assignee_name || 'Unassigned'}</div>
                        <div><span className="font-medium">Reporter:</span> {selectedIssue.content?.reporter_name || 'N/A'}</div>
                        <div><span className="font-medium">Assignee Email:</span> {selectedIssue.content?.assignee_email || 'N/A'}</div>
                        <div><span className="font-medium">Reporter Email:</span> {selectedIssue.content?.reporter_email || 'N/A'}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedIssue.tags?.map((tag: any, index: number) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                            {tag.name}
                          </span>
                        )) || <span className="text-sm text-gray-500">No tags</span>}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Status Transitions</h3>
                      <div className="space-y-2 text-sm max-h-32 overflow-y-auto scrollbar-hide">
                        {selectedIssue.content?.status_transitions?.map((transition: any, index: number) => (
                          <div key={index} className="flex items-center justify-between py-1 px-2 bg-gray-50 rounded">
                            <span>{transition.from_state} → {transition.to_state}</span>
                            <span className="text-gray-500">{formatDate(transition.timestamp)}</span>
                          </div>
                        )) || <span className="text-gray-500">No status transitions</span>}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <div className="bg-gray-50 rounded-md p-3 text-sm text-gray-700 max-h-32 overflow-y-auto scrollbar-hide">
                    {selectedIssue.content?.issue_description || 'No description available'}
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Comments</h3>
                    <button
                      onClick={() => {
                        setShowComments(!showComments);
                        if (!showComments) {
                          // Scroll up by 150px when showing comments
                          window.scrollBy({
                            top: -150,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {showComments ? 'Hide Comments' : 'Show Comments'}
                      {(() => {
                        // Parse comments from different possible locations
                        const comments = selectedIssue.content?.comments || 
                                       selectedIssue.comments || 
                                       selectedIssue.content?.issue_comments ||
                                       [];
                        return comments.length > 0 && (
                          <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                            {comments.length}
                          </span>
                        );
                      })()}
                    </button>
                  </div>

                  {showComments && (
                    <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto scrollbar-hide">
                      {(() => {
                        // Enhanced comments parsing from multiple possible locations
                        const comments = selectedIssue.content?.comments || 
                                       selectedIssue.comments || 
                                       selectedIssue.content?.issue_comments ||
                                       [];
                        
                        console.log('Comments found for issue:', comments);
                        
                        return comments && comments.length > 0 ? (
                          <div className="space-y-4">
                            {comments.map((comment: any, index: number) => (
                              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-sm">
                                      <span className="text-white text-sm font-semibold">
                                        {(comment.commented_by || comment.author_name || comment.author || comment.user || comment.creator || 'U')[0].toUpperCase()}
                                      </span>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-sm text-gray-900">
                                        {comment.commented_by || comment.author_name || comment.author || comment.user || comment.creator || 'Unknown User'}
                                      </p>
                                      {(comment.author_email || comment.email) && (
                                        <p className="text-xs text-gray-500">
                                          {comment.author_email || comment.email}
                                        </p>
                                      )}
                                      <p className="text-xs text-gray-500 flex items-center space-x-2">
                                        <span>
                                          {formatDate(comment.created || comment.created_ts || comment.timestamp || comment.createdAt)}
                                        </span>
                                        {comment.id && (
                                          <span className="text-gray-400">•</span>
                                        )}
                                        {comment.id && (
                                          <span className="text-gray-400">#{comment.id}</span>
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                  {(comment.updated || comment.updated_ts || comment.updatedAt) && 
                                   (comment.updated !== comment.created) && (
                                    <div className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                                      Edited
                                    </div>
                                  )}
                                </div>
                                
                                <div className="text-sm text-gray-700 leading-relaxed pl-13">
                                  <div className="prose prose-sm max-w-none">
                                    {(() => {
                                      const content = comment.comment_body || comment.body || comment.content || comment.text || comment.message || 'No comment content';
                                      // Handle line breaks and basic formatting
                                      return content.split('\n').map((line: string, i: number) => (
                                        <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                          {line || '\u00A0'}
                                        </p>
                                      ));
                                    })()}
                                  </div>
                                </div>

                                {/* Comment metadata */}
                                <div className="mt-3 pt-3 border-t border-gray-100">
                                  <div className="flex items-center justify-between text-xs text-gray-400">
                                    <div className="flex items-center space-x-4">
                                      {comment.visibility && (
                                        <span className="flex items-center space-x-1">
                                          <Shield className="w-3 h-3" />
                                          <span>{comment.visibility}</span>
                                        </span>
                                      )}
                                      {(comment.updated_ts || comment.updatedAt) && 
                                       (comment.updated_ts !== (comment.created_ts || comment.created)) && (
                                        <span>
                                          Last edited: {formatDate(comment.updated_ts || comment.updatedAt)}
                                        </span>
                                      )}
                                    </div>
                                    {comment.jira_id && (
                                      <span className="font-mono text-gray-400">
                                        JIRA: {comment.jira_id}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <p className="text-gray-500 text-base font-medium">No comments available</p>
                            <p className="text-gray-400 text-sm mt-1">This issue doesn't have any comments yet</p>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  // GroupsList Component - Display Actions, Summary, and Insights from all Groups
  const GroupsListComponent = () => {
    const summariesWithGroups = useMemo(() => {
      if (!jsonData?.dailySummaries) return [];
      
      // First filter daily summaries based on date filters
      const filteredSummaries = jsonData.dailySummaries.filter((summary: any) => {
        // Check if summary has a valid created date
        const summaryCreatedDate = new Date(summary.createdAt);
        if (isNaN(summaryCreatedDate.getTime())) return true; // Include if no valid date
        
        // Apply Created Date Range Filter (when the summary was created)
        if (appliedFilters.createdDateRange.relative !== 'all' || appliedFilters.createdDateRange.startDate || appliedFilters.createdDateRange.endDate) {
          let startDate: Date | null = null;
          let endDate: Date | null = null;

          if (appliedFilters.createdDateRange.relative === 'last7days') {
            startDate = new Date();
            startDate.setDate(startDate.getDate() - 7);
          } else if (appliedFilters.createdDateRange.relative === 'last30days') {
            startDate = new Date();
            startDate.setDate(startDate.getDate() - 30);
          } else if (appliedFilters.createdDateRange.relative === 'last90days') {
            startDate = new Date();
            startDate.setDate(startDate.getDate() - 90);
          } else if (appliedFilters.createdDateRange.relative === 'custom') {
            if (appliedFilters.createdDateRange.startDate) {
              startDate = new Date(appliedFilters.createdDateRange.startDate);
            }
            if (appliedFilters.createdDateRange.endDate) {
              endDate = new Date(appliedFilters.createdDateRange.endDate);
              endDate.setHours(23, 59, 59, 999); // Include the entire end date
            }
          }

          if (startDate && summaryCreatedDate < startDate) return false;
          if (endDate && summaryCreatedDate > endDate) return false;
        }

        // Apply Active Items Period Filter (summaries should be relevant to the active period)
        // This checks if the summary's time range overlaps with the active items period
        if (appliedFilters.activeDateRange.relative !== 'all' || appliedFilters.activeDateRange.startDate || appliedFilters.activeDateRange.endDate) {
          let activeStartDate: Date | null = null;
          let activeEndDate: Date | null = null;

          if (appliedFilters.activeDateRange.relative === 'last7days') {
            activeStartDate = new Date();
            activeStartDate.setDate(activeStartDate.getDate() - 7);
            activeEndDate = new Date();
          } else if (appliedFilters.activeDateRange.relative === 'last30days') {
            activeStartDate = new Date();
            activeStartDate.setDate(activeStartDate.getDate() - 30);
            activeEndDate = new Date();
          } else if (appliedFilters.activeDateRange.relative === 'last90days') {
            activeStartDate = new Date();
            activeStartDate.setDate(activeStartDate.getDate() - 90);
            activeEndDate = new Date();
          } else if (appliedFilters.activeDateRange.relative === 'custom') {
            if (appliedFilters.activeDateRange.startDate) {
              activeStartDate = new Date(appliedFilters.activeDateRange.startDate);
            }
            if (appliedFilters.activeDateRange.endDate) {
              activeEndDate = new Date(appliedFilters.activeDateRange.endDate);
              activeEndDate.setHours(23, 59, 59, 999);
            }
          }

          // Check if the summary's time period overlaps with the active items period
          if (activeStartDate || activeEndDate) {
            // Summary should be relevant to the active period
            // Use the summary's start and end timestamps if available
            const summaryStartDate = summary.startTimestamp ? new Date(summary.startTimestamp * 1000) : summaryCreatedDate;
            const summaryEndDate = summary.endTimestamp ? new Date(summary.endTimestamp * 1000) : summaryCreatedDate;

            // Check for overlap: summary period overlaps with active period
            if (activeEndDate && summaryStartDate > activeEndDate) return false; // Summary starts after active period ends
            if (activeStartDate && summaryEndDate < activeStartDate) return false; // Summary ends before active period starts
          }
        }
        
        return true;
      });
      
      // Process each filtered summary with its groups
      const processedSummaries = filteredSummaries.map((summary: any) => {
        const groups: any[] = [];
        
        if (summary.contentJSON?.Groups && Array.isArray(summary.contentJSON.Groups)) {
          summary.contentJSON.Groups.forEach((group: any) => {
            if (group.GroupMetaData) {
              groups.push({
                groupId: group.GroupMetaData.GroupID,
                groupName: group.GroupMetaData.GroupName,
                groupDescription: group.GroupMetaData.GroupDescription,
                summary: group.GroupMetaData.Summary,
                insights: group.GroupMetaData.Insight,
                actions: group.GroupMetaData.Actions,
                itemsCount: group.ItemsList?.length || 0,
                ItemsList: group.ItemsList || [], // Keep original capitalization for compatibility
                itemsList: group.ItemsList || []  // Also add lowercase version
              });
            }
          });
        }
        
        return {
          id: summary.id,
          teamID: summary.teamID,
          teamName: summary.teamName,
          createdAt: summary.createdAt,
          groups: groups,
          totalGroups: groups.length
        };
      });
      
      // Sort by creation date (newest first)
      return processedSummaries.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [jsonData, appliedFilters.createdDateRange, appliedFilters.activeDateRange]);

    if (!jsonData || summariesWithGroups.length === 0) {
      return (
        <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl shadow-sm border border-gray-200 p-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Analysis & Insights Overview</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
              {!jsonData ? 
                'No data loaded yet. Load your Jira data to see comprehensive analysis and insights.' : 
                'No summaries match the current date filters. Try adjusting your filter settings.'
              }
            </p>
            {!jsonData && (
              <button
                onClick={() => setActiveTab('input')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Load Data Now
              </button>
            )}
          </div>
        </div>
      );
    }

    const formatDate = (timestamp: string) => {
      return new Date(timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    const totalGroups = summariesWithGroups.reduce((total: number, summary: any) => total + summary.totalGroups, 0);

    return (
      <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-3">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            Analysis & Insights Overview
          </h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium border border-blue-200">
              {summariesWithGroups.length} summaries
            </span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium border border-indigo-200">
              {totalGroups} groups
            </span>
          </div>
        </div>
        
        <div className="space-y-6 max-h-[600px] overflow-y-auto scrollbar-hide pr-2">
          {summariesWithGroups.map((summary: any, summaryIndex: number) => (
            <div key={`summary-${summary.id}-${summaryIndex}`} 
                 className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              
              {/* Enhanced Summary Header with consistent Analysis colors */}
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                      <div className="bg-white/20 rounded-lg p-2 mr-3">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      Summary #{summary.id}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-blue-100 text-xs font-medium mb-1">Team ID</div>
                        <div className="text-white font-semibold">{summary.teamID}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-blue-100 text-xs font-medium mb-1">Team Name</div>
                        <div className="text-white font-semibold">{summary.teamName}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-blue-100 text-xs font-medium mb-1">Created</div>
                        <div className="text-white font-semibold text-sm">{formatDate(summary.createdAt)}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-full px-4 py-2">
                    <span className="text-white font-bold text-lg">{summary.groups.length}</span>
                    <div className="text-blue-100 text-xs">groups</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Groups List */}
              <div className="p-6">
                {summary.groups.length > 0 ? (
                  <div className="grid gap-6">
                    {summary.groups.map((group: any, groupIndex: number) => (
                      <div key={`group-${group.groupId}-${groupIndex}`} 
                           id={`group-${group.groupId}`}
                           className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                        
                        {/* Group Header */}
                        <div className="mb-5 pb-4 border-b border-gray-200">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="text-lg font-bold text-gray-800 mb-2">{group.groupName}</h5>
                              <p className="text-sm text-gray-600 mb-2">{group.groupDescription}</p>
                              <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                                {group.itemsCount} items
                              </div>
                            </div>
                            
                            {/* View Issues Button */}
                            <div className="ml-4">
                              <button
                                onClick={() => {
                                  console.log('🔍 Button clicked for group:', group.groupName, 'ID:', group.groupId);
                                  console.log('🔍 Group ItemsList:', group.ItemsList);
                                  
                                  // Find the daily summary that contains this group
                                  const dailySummary = jsonData.dailySummaries.find((ds: any) => 
                                    ds.contentJSON?.Groups?.some((g: any) => g.GroupMetaData?.GroupID === group.groupId)
                                  );
                                  
                                  console.log('🔍 Found daily summary:', dailySummary?.id);
                                  console.log('🔍 Daily summary has items:', !!dailySummary?.contentJSON?.Items);
                                  
                                  if (dailySummary?.contentJSON?.Items && group.ItemsList && group.ItemsList.length > 0) {
                                    // Get the items that match the ItemsList
                                    const groupItems = group.ItemsList.map((itemId: number) => {
                                      const item = dailySummary.contentJSON.Items.find((item: any) => item.id === itemId);
                                      console.log('🔍 Looking for item ID:', itemId, 'Found:', !!item);
                                      return item;
                                    }).filter(Boolean);
                                    
                                    console.log('🔍 Group items found:', groupItems.length);
                                    
                                    if (groupItems.length > 0) {
                                      // Store the filtered items for the issue table
                                      setGroupFilteredItems(groupItems);
                                      setGroupFilterName(group.groupName);
                                      setSourceGroupId(group.groupId);
                                      
                                      // Navigate to issues tab
                                      setActiveTab('issues');
                                    } else {
                                      console.warn('⚠️ No matching items found for group:', group.groupName);
                                    }
                                  } else {
                                    console.warn('⚠️ No daily summary or items found for group:', group.groupName);
                                  }
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                View Issues ({group.ItemsList?.length || 0})
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced Content Grid with consistent lighter colors */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Enhanced Summary Section - Light Blue Theme */}
                          {group.summary && (
                            <div className="group">
                              <div className="flex items-center mb-3">
                                <div className="bg-blue-100 border border-blue-200 p-2 rounded-lg mr-3">
                                  <FileJson className="w-4 h-4 text-blue-600" />
                                </div>
                                <h6 className="font-semibold text-blue-700 text-sm">Summary</h6>
                              </div>
                              <div className="bg-blue-25 bg-gradient-to-br from-blue-25 to-blue-50 rounded-lg p-4 border border-blue-150 hover:border-blue-200 transition-colors duration-200">
                                <div className="text-sm text-gray-700 leading-relaxed">
                                  {group.summary}
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Enhanced Insights Section - Light Purple Theme */}
                          {group.insights && (
                            <div className="group">
                              <div className="flex items-center mb-3">
                                <div className="bg-purple-100 border border-purple-200 p-2 rounded-lg mr-3">
                                  <TrendingUp className="w-4 h-4 text-purple-600" />
                                </div>
                                <h6 className="font-semibold text-purple-700 text-sm">Insights</h6>
                              </div>
                              <div className="bg-gradient-to-br from-purple-25 to-purple-50 rounded-lg p-4 border border-purple-150 hover:border-purple-200 transition-colors duration-200">
                                <div className="text-sm text-gray-700 leading-relaxed">
                                  {group.insights}
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Enhanced Actions Section - Light Green Theme */}
                          {group.actions && (
                            <div className="group">
                              <div className="flex items-center mb-3">
                                <div className="bg-green-100 border border-green-200 p-2 rounded-lg mr-3">
                                  <AlertTriangle className="w-4 h-4 text-green-600" />
                                </div>
                                <h6 className="font-semibold text-green-700 text-sm">Actions</h6>
                              </div>
                              <div className="bg-gradient-to-br from-green-25 to-green-50 rounded-lg p-4 border border-green-150 hover:border-green-200 transition-colors duration-200">
                                <div className="text-sm text-gray-700 leading-relaxed">
                                  {group.actions}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 font-medium">No groups found in this summary</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const MainContent = () => {
    if (activeTab === 'input') {
      return (
        <div className="flex-1 p-6 scrollbar-hide overflow-y-auto">
          <JsonInputComponent />
        </div>
      );
    }



    // Common data summary banner for all data views
    const DataSummaryBanner = () => {
      // Build filter summary text
      const getFilterSummary = () => {
        const activeSummaries = [];
        
        // Created Date Range
        if (appliedFilters.createdDateRange.relative !== 'all') {
          if (appliedFilters.createdDateRange.relative === 'custom') {
            const start = appliedFilters.createdDateRange.startDate ? new Date(appliedFilters.createdDateRange.startDate).toLocaleDateString() : '';
            const end = appliedFilters.createdDateRange.endDate ? new Date(appliedFilters.createdDateRange.endDate).toLocaleDateString() : '';
            if (start || end) {
              activeSummaries.push(`Created: ${start || 'any'} - ${end || 'any'}`);
            }
          } else {
            const labels = {
              'last7days': 'Created: Last 7 days',
              'last30days': 'Created: Last 30 days', 
              'last90days': 'Created: Last 90 days'
            };
            activeSummaries.push(labels[appliedFilters.createdDateRange.relative as keyof typeof labels] || 'Created date filter');
          }
        }

        // Active Issues Range
        if (appliedFilters.activeDateRange.relative !== 'all') {
          if (appliedFilters.activeDateRange.relative === 'custom') {
            const start = appliedFilters.activeDateRange.startDate ? new Date(appliedFilters.activeDateRange.startDate).toLocaleDateString() : '';
            const end = appliedFilters.activeDateRange.endDate ? new Date(appliedFilters.activeDateRange.endDate).toLocaleDateString() : '';
            if (start || end) {
              activeSummaries.push(`Active: ${start || 'any'} - ${end || 'any'}`);
            }
          } else {
            const labels = {
              'last7days': 'Active: Last 7 days',
              'last30days': 'Active: Last 30 days', 
              'last90days': 'Active: Last 90 days'
            };
            activeSummaries.push(labels[appliedFilters.activeDateRange.relative as keyof typeof labels] || 'Active date filter');
          }
        }

        // Other filters
        if (appliedFilters.selectedTags.length > 0) {
          activeSummaries.push(`${appliedFilters.selectedTags.length} tag${appliedFilters.selectedTags.length > 1 ? 's' : ''}`);
        }
        if (appliedFilters.selectedPriorities.length > 0) {
          activeSummaries.push(`${appliedFilters.selectedPriorities.length} priorit${appliedFilters.selectedPriorities.length > 1 ? 'ies' : 'y'}`);
        }
        if (appliedFilters.selectedProjects.length > 0) {
          activeSummaries.push(`${appliedFilters.selectedProjects.length} project${appliedFilters.selectedProjects.length > 1 ? 's' : ''}`);
        }
        if (appliedFilters.selectedAssignees.length > 0) {
          activeSummaries.push(`${appliedFilters.selectedAssignees.length} assignee${appliedFilters.selectedAssignees.length > 1 ? 's' : ''}`);
        }
        if (appliedFilters.selectedStatuses.length > 0) {
          activeSummaries.push(`${appliedFilters.selectedStatuses.length} status${appliedFilters.selectedStatuses.length > 1 ? 'es' : ''}`);
        }

        return activeSummaries.join(' • ');
      };

      return (
        <>
          {jsonData && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Data Overview</h3>
                  <p className="text-sm text-gray-600">
                    Showing {dataStats.totalIssues} of {allItems.length} issues
                    {getFilterSummary() && ` • ${getFilterSummary()}`}
                  </p>
                  {dataStats.totalIssues !== allItems.length && (
                    <p className="text-xs text-gray-500 mt-2 bg-blue-50 px-3 py-1 rounded-lg inline-block">
                      Filters applied - {Math.round((dataStats.totalIssues / allItems.length) * 100)}% of total issues shown
                    </p>
                  )}
                </div>
                <div className="flex space-x-3">
                  {!sidebarOpen && activeTab !== 'input' && (
                    <button
                      onClick={() => setSidebarOpen(true)}
                      className="linkedin-button linkedin-button-secondary text-sm"
                    >
                      Show filters
                    </button>
                  )}
                  <button
                    onClick={() => setActiveTab('input')}
                    className="linkedin-button linkedin-button-primary text-sm"
                  >
                    Load different data
                  </button>
                </div>
              </div>
            </div>
          )}

          {!jsonData && (
            <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">No Data Loaded</h3>
                  <p className="text-sm text-gray-600">
                    Please load your JIRA retrospective data to view analytics and insights.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('input')}
                  className="linkedin-button linkedin-button-primary"
                >
                  Load Data
                </button>
              </div>
            </div>
          )}
        </>
      );
    };

    // Dashboard Tab - Comprehensive overview with key metrics and analytics
    if (activeTab === 'dashboard') {
      return (
        <div className="flex-1 p-8 space-y-8 bg-gray-100 scrollbar-hide overflow-y-auto">
          <DataSummaryBanner />
          
          {/* Basic KPI Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <KPICard 
              title="Total Issues" 
              value={jsonData ? dataStats.totalIssues : "0"} 
              subtitle={jsonData ? "Currently filtered" : "No data loaded"} 
              icon={Target}
            />
            <KPICard 
              title="Median Resolution" 
              value={jsonData && advancedAnalytics.resolutionTimes.median > 0
                ? `${advancedAnalytics.resolutionTimes.median}h`
                : "N/A"
              } 
              subtitle={jsonData ? "Time to resolve" : "No data loaded"} 
              icon={Clock}
            />
          </div>

          {/* Advanced Analytics KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <KPICard 
              title="High Assignee Churn" 
              value={jsonData ? advancedAnalytics.assigneeChurn : "0"} 
              subtitle="Issues with 2+ assignees" 
              icon={RefreshCw}
            />
            <KPICard 
              title="Back & Forth Assignments" 
              value={jsonData ? advancedAnalytics.backAndForthAssignments : "0"} 
              subtitle="Issues reassigned to previous assignee" 
              icon={RefreshCw}
            />
          </div>

          {/* Text-based Analytics - No Charts */}
          {jsonData && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Assignee Distribution */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Issues per Assignee
                </h3>
                <div className="space-y-3">
                  {advancedAnalytics.assigneeDistribution.slice(0, 8).map((assignee, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center min-w-0 flex-1">
                        <User className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        <span className="text-sm text-blue-700 truncate" title={assignee.assignee}>
                          {assignee.assignee}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <div className="w-16 bg-blue-100 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${Math.min(assignee.percentage, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-blue-900 w-8 text-right">
                          {assignee.count}
                        </span>
                      </div>
                    </div>
                  ))}
                  {advancedAnalytics.assigneeDistribution.length === 0 && (
                    <p className="text-gray-500 text-sm">No assignee data available</p>
                  )}
                </div>
              </div>

              {/* Issues per Priority (Priority Distribution) */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Issues per Priority
                </h3>
                <div className="space-y-3">
                  {(() => {
                    // Calculate priority distribution
                    const priorities = filteredItems.map(item => item.content?.priority).filter(Boolean);
                    if (priorities.length === 0) {
                      return (
                        <p className="text-gray-500 text-sm">No priority data available</p>
                      );
                    }
                    
                    const priorityCount = priorities.reduce((acc, priority) => {
                      acc[priority!] = (acc[priority!] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>);
                    
                    const priorityOrder: Record<string, number> = {
                      'Blocker': 0,
                      'Critical': 1,
                      'Major': 2,
                      'Minor': 3,
                      'Trivial': 4,
                      'Pending': 5,
                      'Unspecified': 6,
                      'Highest': 7,
                      'High': 8,
                      'Medium': 9,
                      'Low': 10,
                      'Lowest': 11
                    };
                    
                    const sortedPriorities = Object.entries(priorityCount)
                      .sort(([a], [b]) => {
                        const orderA = priorityOrder[a] !== undefined ? priorityOrder[a] : 999;
                        const orderB = priorityOrder[b] !== undefined ? priorityOrder[b] : 999;
                        return orderA - orderB;
                      })
                      .map(([priority, count]) => ({
                        priority,
                        count: count as number,
                        percentage: Math.round(((count as number) / priorities.length) * 100)
                      }));
                    
                    const priorityColors = {
                      'Blocker': 'bg-red-800',
                      'Critical': 'bg-red-600',
                      'Major': 'bg-orange-600',
                      'Minor': 'bg-yellow-600',
                      'Trivial': 'bg-green-600',
                      'Pending': 'bg-purple-600',
                      'Unspecified': 'bg-gray-600',
                      'Highest': 'bg-red-700',
                      'High': 'bg-orange-700',
                      'Medium': 'bg-yellow-700',
                      'Low': 'bg-green-700',
                      'Lowest': 'bg-blue-600'
                    } as Record<string, string>;
                    
                    return sortedPriorities.map(({ priority, count, percentage }, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center min-w-0 flex-1">
                          <div 
                            className={`w-4 h-4 rounded mr-3 flex-shrink-0 ${
                              priorityColors[priority] || 'bg-gray-600'
                            }`}
                          ></div>
                          <span className="text-sm text-gray-700 truncate" title={priority}>
                            {priority}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                priorityColors[priority] || 'bg-gray-600'
                              }`}
                              style={{ width: `${Math.min(percentage, 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 w-8 text-right">
                            {count}
                          </span>
                          <span className="text-xs text-gray-500 w-8 text-right">
                            {percentage}%
                          </span>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    Total: {filteredItems.length} issues across {
                      new Set(filteredItems.map(item => item.content?.priority).filter(Boolean)).size
                    } priority levels
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Top Tags - Text Only */}
          {jsonData && advancedAnalytics.topTags.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Tags className="w-5 h-5 mr-2 text-green-600" />
                Most Common Tags
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {advancedAnalytics.topTags.slice(0, 5).map((tag, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700 truncate" title={tag.tag}>
                      {tag.tag}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      {tag.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    // Issues Tab - Detailed issue list and analysis
    if (activeTab === 'issues') {
      // Use group-filtered items if available, otherwise use all filtered items
      const displayItems = groupFilteredItems.length > 0 ? groupFilteredItems : filteredItems;
      const isGroupFiltered = groupFilteredItems.length > 0;
      
      return (
        <div className="flex-1 p-6 space-y-6 scrollbar-hide overflow-y-auto">
          <DataSummaryBanner />
          
          {/* Group Filter Banner */}
          {isGroupFiltered && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-600 rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-900">Filtered by Group: {groupFilterName}</h3>
                    <p className="text-sm text-indigo-700">Showing {displayItems.length} issues from this group</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    // Clear the group filter
                    setGroupFilteredItems([]);
                    setGroupFilterName('');
                    
                    // Navigate back to groups view
                    setActiveTab('summaries');
                    
                    // Scroll to the specific group after a short delay to allow the tab to load
                    if (sourceGroupId) {
                      setTimeout(() => {
                        const groupElement = document.getElementById(`group-${sourceGroupId}`);
                        if (groupElement) {
                          groupElement.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center'
                          });
                          // Add a highlight effect
                          groupElement.style.transform = 'scale(1.02)';
                          groupElement.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.3)';
                          setTimeout(() => {
                            groupElement.style.transform = '';
                            groupElement.style.boxShadow = '';
                          }, 2000);
                        }
                      }, 100);
                      setSourceGroupId(''); // Clear after use
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to {groupFilterName}
                </button>
              </div>
            </div>
          )}
          
          {/* Issue Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Open Issues</p>
                  <p className="text-2xl font-bold text-red-600">
                    {jsonData ? displayItems.filter(item => {
                      const resolved = item.content?.resolved_ts;
                      return !resolved || resolved === "0001-01-01T00:00:00Z";
                    }).length : 0}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Resolved Issues</p>
                  <p className="text-2xl font-bold text-green-600">
                    {jsonData ? displayItems.filter(item => {
                      const resolved = item.content?.resolved_ts;
                      return resolved && resolved !== "0001-01-01T00:00:00Z";
                    }).length : 0}
                  </p>
                </div>
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Critical Issues</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {jsonData ? displayItems.filter(item => 
                      item.content?.priority?.toLowerCase() === 'critical'
                    ).length : 0}
                  </p>
                </div>
                <Target className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Back to Tags button when filtering by tag */}
          {tagFilter && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 transform transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Tags className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-800">
                    Showing issues with tag: <span className="font-semibold">"{tagFilter}"</span>
                  </span>
                </div>
                <button
                  onClick={() => {
                    setActiveTab(previousTab || 'tags');
                    setTagFilter(null);
                    setAppliedFilters(prev => ({
                      ...prev,
                      selectedTags: []
                    }));
                  }}
                  className="px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 flex items-center gap-2 transform hover:scale-105"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Tags
                </button>
              </div>
            </div>
          )}

          {/* Issue Data Table */}
          <DataTable items={displayItems} />
        </div>
      );
    }

    // Tags Tab - Tag analysis and insights
    if (activeTab === 'tags') {
      return (
        <div className="flex-1 p-6 space-y-6 scrollbar-hide overflow-y-auto">
          <DataSummaryBanner />
          
          {/* Tag Distribution Chart */}
          {jsonData && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                Tag Distribution
              </h3>
              
              {advancedAnalytics.topTags.length > 0 ? (
                <div className="flex justify-center">
                  <div className="flex items-end space-x-4 max-w-4xl">
                    {(() => {
                      // Use only real data from advancedAnalytics.topTags (no mock data)
                      const maxCount = Math.max(...advancedAnalytics.topTags.map(tag => tag.count));
                      const sortedTags = [...advancedAnalytics.topTags]
                        .sort((a, b) => b.count - a.count)
                        .slice(0, 10); // Show top 10 tags vertically
                      
                      return sortedTags.map((tag, index) => {
                        // Calculate opacity based on count (0.4 to 1.0 for better visibility)
                        const opacity = 0.4 + ((tag.count / maxCount) * 0.6);
                        // Calculate height based on count (20px to 200px)
                        const height = Math.max((tag.count / maxCount) * 200, 20);
                        
                        return (
                          <div 
                            key={index} 
                            className="group relative flex flex-col items-center cursor-pointer"
                            title={`${tag.tag}: ${tag.count} issues (${tag.percentage.toFixed(1)}%) - Click to view in Issues tab`}
                            onClick={() => {
                              // Set the tag filter
                              setTagFilter(tag.tag);
                              setPreviousTab(activeTab);
                              
                              // Apply the filter to the global filters
                              setAppliedFilters(prev => ({
                                ...prev,
                                selectedTags: [tag.tag]
                              }));
                              
                              // Switch to issues tab
                              setActiveTab('issues');
                            }}
                          >
                            {/* Vertical bar */}
                            <div 
                              className="w-12 bg-gray-200 rounded-t-lg mb-2 flex items-end justify-center pb-1 transition-all duration-300 ease-out hover:shadow-lg transform hover:scale-105"
                              style={{ height: `${height}px` }}
                            >
                              <div 
                                className="w-full rounded-t-lg flex items-end justify-center pb-1 transition-all duration-300"
                                style={{ 
                                  backgroundColor: `rgba(10, 102, 194, ${opacity})`,
                                  height: '100%'
                                }}
                              >
                                <span className="text-xs font-bold text-white">
                                  {tag.count}
                                </span>
                              </div>
                            </div>
                            
                            {/* Tag name */}
                            <div className="text-center">
                              <div className="text-xs font-medium text-gray-700 mb-1 max-w-16 truncate" title={tag.tag}>
                                {tag.tag}
                              </div>
                              <div className="text-xs text-gray-500">
                                {tag.percentage.toFixed(1)}%
                              </div>
                            </div>
                            
                            {/* Hover tooltip */}
                            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                              {tag.tag}: {tag.count} issues ({tag.percentage.toFixed(1)}%) - Click to view
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Tags className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">No tags available in filtered data</p>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    // Daily Summaries Tab - View summaries with groups
    if (activeTab === 'summaries') {
      return (
        <div className="flex-1 p-6 space-y-6 scrollbar-hide overflow-y-auto">
          <GroupsListComponent />
        </div>
      );
    }

    // Default fallback (shouldn't happen)
    return (
      <div className="flex-1 p-6 scrollbar-hide overflow-y-auto">
        <div className="text-center py-12">
          <p className="text-gray-500">Unknown tab: {activeTab}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased scrollbar-hide">
      <TopBar />
      <TabNavigation />
      <div className="flex overflow-hidden">
        {activeTab !== 'input' && <FilterSidebar />}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
