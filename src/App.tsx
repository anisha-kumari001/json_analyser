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
  AlertTriangle,
  Clock,
  Users,
  RefreshCw,
  Shield,
  TrendingUp
} from 'lucide-react';

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
      "id": 3510,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-11T13:31:56Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "9d42d4bf-972e-4928-a0a4-71cafe8bdba9",
      "contentJSON": {
        "Items": [
          {
            "id": 151061,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23096,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              },
              {
                "id": 23114,
                "name": "Infra_Maintenance_Impact",
                "teamID": 6,
                "isGroup": false,
                "description": "Service degradation linked to planned or emergency maintenance"
              }
            ],
            "title": "Grid - Other Grid Issue - 2025-06-09",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1367]",
              "comments": [
                {
                  "created": "2025-07-23T02:02:03.240-0700",
                  "updated": "2025-07-23T02:02:27.273-0700",
                  "comment_body": "Task completed. Issue was occurring due to Jira migration.",
                  "commented_by": "Anupchandra Rao"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-129695",
              "created_ts": "2025-06-09T22:58:04.693+05:30",
              "issue_title": "Grid - Other Grid Issue - 2025-06-09",
              "resolved_ts": "2025-07-23T09:02:08.948Z",
              "project_name": "APA Support Project",
              "assignee_name": "Anupchandra Rao",
              "reporter_name": "Amitha Nazeer",
              "assignee_email": "anchandrakanth@linkedin.com",
              "reporter_email": "anazeer@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Browser: Requesting membership access on headless account is erroring out Hadoop Job Link: NA Cluster name: NA Error Message: Error creating request to add Imshealth to headless account gr013154 Nested Titles: Grid / Other Grid Issue",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-10 05:47:56.794000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-23 09:02:08.980000 UTC",
                  "from_state": "In Progress"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-09T17:28:05Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:31:54Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151062,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23120,
                "name": "Product_Bug",
                "teamID": 6,
                "isGroup": false,
                "description": "Functional issue in shipped product affecting users"
              }
            ],
            "title": "Users request getting redirected to OpenHouse membership",
            "content": {
              "labels": "[Grid-Autonomous-Fleet, decision-grid, from-supportal, supportal-onboarding, supportal-v1, supportal-v1-problem-type:askgridsre/gfuel-issues, supportal-v1-version:0.0.1367]",
              "comments": [
                {
                  "created": "2025-07-15T08:03:44.068-0700",
                  "updated": "2025-07-15T08:03:44.068-0700",
                  "comment_body": "there was a bug that has been fixed back in June",
                  "commented_by": "Heagan Ahmed"
                }
              ],
              "priority": "Minor",
              "issue_key": "GRID-280692",
              "created_ts": "2025-06-09T21:02:45.285+05:30",
              "issue_title": "Users request getting redirected to OpenHouse membership",
              "resolved_ts": "2025-07-15T15:03:51.859Z",
              "project_name": "GRID",
              "assignee_name": "Heagan Ahmed",
              "reporter_name": "Malini Mahalakshmi Venkatachari",
              "assignee_email": "heahmed@linkedin.com",
              "reporter_email": "malvenkatachari@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Context in  https://linkedin-randd.slack.com/archives/C0421DBV9NE/p1749087430272669?thread_ts=1749082048.863199&cid=C0421DBV9NE .  I see some tickets being created with request to add headless accounts to Openhouse headless. I think there might be some cases where exceptions are not handled and by default it goes to headless membership request instead of dataset groups membership. Can ypu PTAL? Default Priority Select Form Element: Minor Affected Multiproduct(s): Stack trace or error output: Is this Issue Transient or Consistent?: Transient Which Gfuel Service is this for?: User-Manager-Api Curl/Call made: self-service API Nested Titles: Grid / G-Fuel Issues",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-15 15:03:51.916000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-09T15:32:45Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:31:54Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151063,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23108,
                "name": "Monitoring_Gap",
                "teamID": 6,
                "isGroup": false,
                "description": "Alerting was absent, delayed, or misleading"
              }
            ],
            "title": "Alerting for subsequent NN shutdowns in short periods/individual NN crash",
            "content": {
              "labels": "[SEV2, incident-5393, rootly-incident]",
              "comments": [
                {
                  "created": "2025-06-23T11:27:47.995-0700",
                  "updated": "2025-06-23T11:29:12.828-0700",
                  "comment_body": "@Sri Harsha Vipparti You’re currently assigned as the incident owner for incident-5393.  This related action item is expected to be completed today but it remains unassigned.  Can you please assist in finding the appropriate owner to see it gets closed soon",
                  "commented_by": "Justin Kominar"
                },
                {
                  "created": "2025-07-10T18:11:39.865-0700",
                  "updated": "2025-07-10T18:11:39.865-0700",
                  "comment_body": "This ticket is a duplicate of . Closing this.",
                  "commented_by": "Sri Harsha Vipparti"
                }
              ],
              "priority": "Critical",
              "issue_key": "ACTIONITEM-7270",
              "created_ts": "2025-06-09T20:05:17.717+05:30",
              "issue_title": "Alerting for subsequent NN shutdowns in short periods/individual NN crash",
              "resolved_ts": "2025-07-11T01:11:54.226Z",
              "project_name": "Action Items",
              "assignee_name": "Sri Harsha Vipparti",
              "reporter_name": "svc rootly-prod",
              "assignee_email": "svipparti@linkedin.com",
              "reporter_email": "svc-rootly-prod@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-06-24 17:47:27.306000 UTC",
                  "to_assignee": "Sri Harsha Vipparti",
                  "from_assignee": ""
                }
              ],
              "issue_description": "Action Item for  https://rootly.com/account/incidents/5393  :",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-11 01:11:54.235000 UTC",
                  "from_state": "In Progress"
                },
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-09 20:05:18.617000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-09T14:35:18Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:31:54Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              151061,
              151062,
              151063
            ],
            "GroupMetaData": {
              "Actions": "Process optimization should focus on enhancing triage speed by implementing robust monitoring and alerting systems to improve issue detectability and preventability. Introducing automated workflows for status transitions can streamline issue progression and resolution. Enhancing collaboration through scheduled off-hours support and improved escalation protocols can reduce delays. Additionally, refining JIRA configurations to enforce more detailed assignment priority and status tracking could mitigate recurring inefficiencies.",
              "GroupID": 23112,
              "Insight": "Triage and assignment processes reveal inefficiencies, as all issues faced extended investigation periods despite their varying priorities. Status transitions are minimal, suggesting workflow bottlenecks in progressing issues through resolutions, particularly for critical and infrastructure-related problems. The recurring root causes include insufficient monitoring, configuration errors, and product bugs. The limited communication during issue resolution suggests inadequate escalation or collaboration practices, which further amplifies inefficiencies.",
              "Summary": "The analyzed JIRA issues reflect prolonged resolution times across all cases, pointing to inefficiencies in investigation and resolution workflows. Minimal communication and a low number of status transitions indicate limited collaboration or insufficient escalation processes. Overall, the team's workflow demonstrates gaps in triage effectiveness and issue prioritization, especially during off-hours when these issues were created.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 3 times"
            }
          },
          {
            "ItemsList": [
              151061
            ],
            "GroupMetaData": {
              "Actions": "To improve workflow efficiency and reduce resolution times, implement automated monitoring systems to preemptively detect and address issues tagged under 'Infra_Maintenance_Impact'. Revise status transitions to enforce more granular tracking of progress and better define resolution criteria. Strengthen team collaboration by requiring more detailed initial issue descriptions and encouraging stakeholder participation to foster ownership, reduce miscommunication, and ensure thorough problem resolution.",
              "GroupID": 23101,
              "Insight": "The issue highlights inefficiencies in triage and prioritization, as reflected in the significant delay in resolution and absence of explicit prioritization status. Minimal communication and participant involvement suggest potential gaps in collaboration or unclear ownership. Recurring tags such as 'LongResolution' and 'Infra_Maintenance_Impact' point toward broader systemic challenges, emphasizing the need for proactive monitoring and better system-wide practices to prevent similar occurrences.",
              "Summary": "The analysis of the JIRA issue in this group reveals prolonged resolution times due to extensive investigations. Team coordination appears minimal, with low communication overhead and limited activity during the issue's life cycle. Workflow friction is evident with only two status transitions, indicating potential bottlenecks or unclear progress paths during resolution.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              151061
            ],
            "GroupMetaData": {
              "Actions": "To mitigate delays, introduce stricter SLA-driven prioritization and automated assignment processes to expedite triage. Enhance the workflow configuration by adding more granular and iterative states that encourage periodic assessments and checkpoints. Facilitate better collaboration by enabling automatic notifications for team input during critical resolution phases and by instituting regular knowledge-sharing sessions to address root causes like configuration errors and improve system monitoring practices.",
              "GroupID": 23115,
              "Insight": "The triage process lacked clear prioritization, as evidenced by its unspecified priority and delayed resolution. Hand-offs were minimal, with a single assignee managing the issue throughout, reducing opportunities for fresh perspectives. The extended resolution time and tags like 'Config_Error' suggest recurring system misconfigurations as a root cause. Bottlenecks emerged from insufficient transitions, which likely reflect rigid or underutilized workflow states, and minimal collaborative input, highlighting potential gaps in team engagement or expertise sharing.",
              "Summary": "The issue under analysis exhibits significant inefficiencies in resolution time, marked by an excessively prolonged investigation phase of over 1047 hours. Minimal communication, reflected by a single comment from one participant, suggests limited cross-collaboration. The workflow, characterized by only two status transitions, appears linear and lacks iterative problem-solving checkpoints, resulting in process stagnation and resolution delays.",
              "GroupName": "Tag: Infra_Maintenance_Impact",
              "GroupDescription": "Issues tagged with 'Infra_Maintenance_Impact', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              151062
            ],
            "GroupMetaData": {
              "Actions": "To optimize the JIRA workflow, implement automated tagging and prioritization for off-hours issue creation, ensuring proper triage initiation within defined SLAs. Introduce mandatory periodic updates for long-resolution tasks to increase visibility and engagement among the team. Configure workflow rules to require multiple status transitions, such as a handoff for validation and resolution review, to break down investigative silos. Finally, emphasize collaboration through comment requirements and automated reminders for better tracking and coordination.",
              "GroupID": 23121,
              "Insight": "The triage process for this issue appears to be ineffective as it was created during non-working hours and did not benefit from immediate prioritization or follow-up action steps. With only one recorded status transition, the workflow lacked iteration and refinement, suggesting bottlenecks in the resolution process. The low communication volume indicates underused collaboration, which contributed to the delayed resolution. The recurring theme highlighted here is an extended investigation period attributed to gaps in efficient troubleshooting and streamlined workflows.",
              "Summary": "The issue 'Users request getting redirected to OpenHouse membership' was handled with minimal coordination but experienced significant delays in resolution, totaling 863 hours. The workflow exhibited a lack of status transitions indicating potential assignment or prioritization gaps, with minimal communication recorded on the ticket. The overall efficiency was hindered by extended resolution timelines and the absence of collaborative engagement or proactive resolutions.",
              "GroupName": "Tag: Product_Bug",
              "GroupDescription": "Issues tagged with 'Product_Bug', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              151063
            ],
            "GroupMetaData": {
              "Actions": "To enhance JIRA workflows, consider automating monitoring alerts for critical issues to ensure immediate triage regardless of working hours. Implement automatic status reminders and updates to ensure consistent tracking throughout the issue lifecycle. Increase team collaboration by mandating follow-up comments or a communication protocol for high-priority issues. Proactively address monitoring gaps by deploying more robust alerting systems and documentation, enabling preventative resolutions for similar problems.",
              "GroupID": 23109,
              "Insight": "The triage process appears delayed, likely due to the creation of the issue outside typical working hours, potentially impacting its initial prioritization. Workflow transitions, with only two status changes, point to bottlenecks or inadequate issue follow-up, contributing to the excessive resolution time. Minimal communication indicates insufficient cross-collaboration or knowledge sharing, while the recurring 'LongResolution' tag highlights systemic challenges in addressing similar high-priority issues effectively. Furthermore, the issue's root cause, linked to monitoring gaps, signifies a preventability factor that should be addressed for future operational stability.",
              "Summary": "The analyzed issue demonstrates significant inefficiencies in resolution workflow, marked by an extended resolution time of over 754 hours despite being a critical priority. The minimal communication involvement (only two comments from two participants) indicates a lack of collaboration that could have expedited resolution. Workflow transitions were sparse, suggesting limited status tracking updates during the issue lifecycle, which further exacerbated delays in resolution efficiency and oversight.",
              "GroupName": "Tag: Monitoring_Gap",
              "GroupDescription": "Issues tagged with 'Monitoring_Gap', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1749519000,
      "startTimestamp": 1749475800
    },
    {
      "id": 3513,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-11T13:33:05Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "58f466d9-5b30-452f-a040-3d83093d1a3d",
      "contentJSON": {
        "Items": [
          {
            "id": 151079,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23114,
                "name": "Infra_Maintenance_Impact",
                "teamID": 6,
                "isGroup": false,
                "description": "Service degradation linked to planned or emergency maintenance"
              }
            ],
            "title": "Migrate Admin nodes from DLR to LVAx / QTS",
            "content": {
              "labels": "[LVAx]",
              "comments": [
                {
                  "created": "2025-07-23T02:06:10.897-0700",
                  "updated": "2025-07-23T02:06:10.897-0700",
                  "comment_body": "Effort tracked under GRID-273241",
                  "commented_by": "Anupchandra Rao"
                }
              ],
              "priority": "Critical",
              "issue_key": "GRID-280818",
              "created_ts": "2025-06-10T08:20:50.296+05:30",
              "issue_title": "Migrate Admin nodes from DLR to LVAx / QTS",
              "resolved_ts": "2025-07-23T09:06:18.415Z",
              "project_name": "GRID",
              "assignee_name": "Anupchandra Rao",
              "reporter_name": "Sheela Gonji",
              "assignee_email": "anchandrakanth@linkedin.com",
              "reporter_email": "sgonji@linkedin.com",
              "assignee_changes": [],
              "issue_description": "",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-23 09:06:18.461000 UTC",
                  "from_state": "In Progress"
                },
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-10 20:51:22.619000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T02:50:50Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:04Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151080,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23114,
                "name": "Infra_Maintenance_Impact",
                "teamID": 6,
                "isGroup": false,
                "description": "Service degradation linked to planned or emergency maintenance"
              },
              {
                "id": 23122,
                "name": "Region_Specific",
                "teamID": 6,
                "isGroup": false,
                "description": "Outage limited to a particular region or zone"
              }
            ],
            "title": "Migrate K8s nodes from DLR to LVAx / QTS",
            "content": {
              "labels": "[LVAx]",
              "comments": [],
              "priority": "Critical",
              "issue_key": "GRID-280817",
              "created_ts": "2025-06-10T08:20:01.319+05:30",
              "issue_title": "Migrate K8s nodes from DLR to LVAx / QTS",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Simin Wang",
              "reporter_name": "Sheela Gonji",
              "assignee_email": "simwang@linkedin.com",
              "reporter_email": "sgonji@linkedin.com",
              "assignee_changes": [],
              "issue_description": "",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T02:50:01Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:04Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151081,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23114,
                "name": "Infra_Maintenance_Impact",
                "teamID": 6,
                "isGroup": false,
                "description": "Service degradation linked to planned or emergency maintenance"
              },
              {
                "id": 23122,
                "name": "Region_Specific",
                "teamID": 6,
                "isGroup": false,
                "description": "Outage limited to a particular region or zone"
              }
            ],
            "title": "Migrate Yarn nodes from DLR to LVAx / QTS",
            "content": {
              "labels": "[LVAx]",
              "comments": [
                {
                  "created": "2025-07-02T00:30:34.684-0700",
                  "updated": "2025-07-02T00:30:34.684-0700",
                  "comment_body": "DLR eviction for HDFS will be starting post october FY26 Q2 YARN will follow similar schedule since if we are decomm’ing the YARN nodes To have fair utilisation Once HDFS starts evicting So changing the due data accordingly to mid of november @Sheela Gonji FYI cc @Somnath Pal",
                  "commented_by": "Hariharan S"
                }
              ],
              "priority": "Critical",
              "issue_key": "GRID-280816",
              "created_ts": "2025-06-10T08:17:02.794+05:30",
              "issue_title": "Migrate Yarn nodes from DLR to LVAx / QTS",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Hariharan S",
              "reporter_name": "Sheela Gonji",
              "assignee_email": "hsivaprakash@linkedin.com",
              "reporter_email": "sgonji@linkedin.com",
              "assignee_changes": [],
              "issue_description": "",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-10 20:51:25.326000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Open",
                  "timestamp": "2025-07-02 07:30:40.522000 UTC",
                  "from_state": "In Progress"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T02:47:03Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:04Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151082,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23102,
                "name": "Infra_Deployment_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Deployment failures causing infrastructure instability or downtime"
              }
            ],
            "title": "Migrate Admin nodes from STACK to LVAx",
            "content": {
              "labels": "[LVAx]",
              "comments": [
                {
                  "created": "2025-07-23T02:05:06.099-0700",
                  "updated": "2025-07-23T02:05:30.791-0700",
                  "comment_body": "Effort tracked under GRID-273241",
                  "commented_by": "Anupchandra Rao"
                }
              ],
              "priority": "Critical",
              "issue_key": "GRID-280814",
              "created_ts": "2025-06-10T08:14:48.873+05:30",
              "issue_title": "Migrate Admin nodes from STACK to LVAx",
              "resolved_ts": "2025-07-23T09:05:42.727Z",
              "project_name": "GRID",
              "assignee_name": "Anupchandra Rao",
              "reporter_name": "Sheela Gonji",
              "assignee_email": "anchandrakanth@linkedin.com",
              "reporter_email": "sgonji@linkedin.com",
              "assignee_changes": [],
              "issue_description": "",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-10 20:51:25.309000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-23 09:05:42.776000 UTC",
                  "from_state": "In Progress"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T02:44:49Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:04Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151083,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23114,
                "name": "Infra_Maintenance_Impact",
                "teamID": 6,
                "isGroup": false,
                "description": "Service degradation linked to planned or emergency maintenance"
              }
            ],
            "title": "Migrate K8 nodes from STACK to LVAx",
            "content": {
              "labels": "[LVAx]",
              "comments": [],
              "priority": "Critical",
              "issue_key": "GRID-280813",
              "created_ts": "2025-06-10T08:13:14.363+05:30",
              "issue_title": "Migrate K8 nodes from STACK to LVAx",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Simin Wang",
              "reporter_name": "Sheela Gonji",
              "assignee_email": "simwang@linkedin.com",
              "reporter_email": "sgonji@linkedin.com",
              "assignee_changes": [],
              "issue_description": "",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-10 20:51:25.309000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T02:43:14Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:04Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151084,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23114,
                "name": "Infra_Maintenance_Impact",
                "teamID": 6,
                "isGroup": false,
                "description": "Service degradation linked to planned or emergency maintenance"
              }
            ],
            "title": "Migrate Yarn nodes from STACK to LVAx",
            "content": {
              "labels": "[LVAx]",
              "comments": [
                {
                  "created": "2025-07-02T00:28:31.978-0700",
                  "updated": "2025-07-02T00:28:31.978-0700",
                  "comment_body": "All pods [except PODS being retained in STACK PC39,PC48,PC49] have been evicted successfully",
                  "commented_by": "Hariharan S"
                },
                {
                  "created": "2025-06-10T01:20:09.821-0700",
                  "updated": "2025-06-10T01:20:09.821-0700",
                  "comment_body": "Hi @Sheela Gonji Is this ticket about the eviction ? We already provisioned required amount of capacity in the LVAx clusters and only eviction pending from the suites",
                  "commented_by": "Hariharan S"
                },
                {
                  "created": "2025-06-10T01:22:30.454-0700",
                  "updated": "2025-06-10T01:22:30.454-0700",
                  "comment_body": "Yes @Hariharan S",
                  "commented_by": "Sheela Gonji"
                }
              ],
              "priority": "Critical",
              "issue_key": "GRID-280810",
              "created_ts": "2025-06-10T08:07:51.441+05:30",
              "issue_title": "Migrate Yarn nodes from STACK to LVAx",
              "resolved_ts": "2025-07-02T07:28:41.751Z",
              "project_name": "GRID",
              "assignee_name": "Hariharan S",
              "reporter_name": "Sheela Gonji",
              "assignee_email": "hsivaprakash@linkedin.com",
              "reporter_email": "sgonji@linkedin.com",
              "assignee_changes": [],
              "issue_description": "",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-02 07:28:41.778000 UTC",
                  "from_state": "In Progress"
                },
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-10 20:51:24.482000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T02:37:51Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:04Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151097,
            "tags": [],
            "title": "Offline Data Processing - Requests:  Quotas, Accounts, Permissions, etc. - Change Directory Owner and/or Permissions in HDFS - 2025-06-10",
            "content": {
              "labels": "[from-supportal, supportal-grid, supportal-grid-change-ownership, supportal-v1, supportal-v1-problem-type:activityflow/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1370]",
              "comments": [],
              "priority": "Unspecified",
              "issue_key": "APA-129755",
              "created_ts": "2025-06-10T18:56:51.337+05:30",
              "issue_title": "Offline Data Processing - Requests:  Quotas, Accounts, Permissions, etc. - Change Directory Owner and/or Permissions in HDFS - 2025-06-10",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Adeoluwa Akinwa",
              "reporter_name": "Abhinav Patil",
              "assignee_email": "aakinwa@linkedin.com",
              "reporter_email": "apatil@linkedin.com",
              "assignee_changes": [],
              "issue_description": "hi team, I see below table is locked when it was just created just yesterday. I see the compliance policy is  Auto Limited Retention With Locking  . Below table was created just yesterday, unsure why it's getting locked? I can't edit to compliance setting either. Would like to know why it’s getting locked? Also, I see discrepancy around table: `u_offtrack.crm_unattributed_ad_conversion` having  ALR w/o locking  and  /jobs/crmsecure/sponsoredAccount=502998747/tableName=u_offtrack.crm_unattributed_ad_conversion  having  ALR w/ locking , shouldn’t only one policy be applied to both?  We would like to understand the root cause for this and also if this is a holdem specific issue or could happen on war as well? What steps we need to take to avoid these.  Error message: com.linkedin.mufn.common.exception.GridGatewayUserException: Application application_1747633880250_2950337 finished with failed status. Reason: User class threw exception: java.io.UncheckedIOException: Error listing files for directory: hdfs://ltx1-holdemnn01.grid.linkedin.com:9000/jobs/crmsecure/sponsoredAccount=506317003/tableName=u_offtrack.crm_unattributed_ad_conversion Hdfs Path: /jobs/crmsecure/sponsoredAccount= /tableName=u_offtrack. Cluster Name: holdem Error Message: Error message: com.linkedin.mufn.common.exception.GridGatewayUserException: Application application_1747633880250_2950337 finished with failed status. Reason: User class threw exception: java.io.UncheckedIOException: Error listing files for directory: hdfs://ltx1-holdemnn01.grid.linkedin.com:9000/jobs/crmsecure/sponsoredAccount=506317003/tableName=u_offtrack.crm_unattributed_ad_conversion user or Headless Account Name That Launches the Job: offtrack Nested Titles: Offline Data Processing / Requests:  Quotas, Accounts, Permissions, etc. / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T13:26:51Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-06-10T13:26:51Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151098,
            "tags": [],
            "title": "Migrate K8s nodes from DLR to LVAx / QTS",
            "content": {
              "labels": "[LVAx]",
              "comments": [],
              "priority": "Critical",
              "issue_key": "GRID-280817",
              "created_ts": "2025-06-10T08:20:01.319+05:30",
              "issue_title": "Migrate K8s nodes from DLR to LVAx / QTS",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Simin Wang",
              "reporter_name": "Sheela Gonji",
              "assignee_email": "simwang@linkedin.com",
              "reporter_email": "sgonji@linkedin.com",
              "assignee_changes": [],
              "issue_description": "",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T02:50:01Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-06-10T02:50:01Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151099,
            "tags": [],
            "title": "Migrate K8 nodes from STACK to LVAx",
            "content": {
              "labels": "[LVAx]",
              "comments": [],
              "priority": "Critical",
              "issue_key": "GRID-280813",
              "created_ts": "2025-06-10T08:13:14.363+05:30",
              "issue_title": "Migrate K8 nodes from STACK to LVAx",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Simin Wang",
              "reporter_name": "Sheela Gonji",
              "assignee_email": "simwang@linkedin.com",
              "reporter_email": "sgonji@linkedin.com",
              "assignee_changes": [],
              "issue_description": "",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-10 20:51:25.309000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T02:43:14Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-06-10T02:43:14Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              151080,
              151081
            ],
            "GroupMetaData": {
              "Actions": "To optimize workflows, establish clear ownership early by automating assignee selection for off-hour created issues using JIRA automation rules. Incorporate dynamic SLA alerts to track unresolved tasks, ensuring escalations occur at predefined intervals to combat resolution delays. Facilitate more structured team collaboration by defining handoff protocols and providing issue-specific context visibility in JIRA comments. Enhance preventability through better monitoring configurations and pre-migration testing to reduce the recurrence of similar long-resolution scenarios.",
              "GroupID": 23123,
              "Insight": "The triage process for these issues appears suboptimal, as evidenced by their prolonged open status and undefined assignment outcomes. Minimal communication and limited status transitions constrain progress, hinting at bottlenecks in workflow continuity and team engagement. Recurring tags like 'LongResolution' and 'Infra_Maintenance_Impact' reflect systemic challenges in timely infrastructure management, exacerbated by inefficient handoffs and lack of automation. These inefficiencies could delay critical operations and impact overall system reliability.",
              "Summary": "The analyzed JIRA issues highlight critical infrastructure migrations with long resolution times, marked by minimal communication and limited status transitions. Both issues remain open with unresolved handoff considerations, indicating inefficiencies in prioritization and early-stage task delegation. The team's workflow shows a lack of streamlined coordination patterns and potential opportunities to enhance process efficiency in handling high-priority tasks.",
              "GroupName": "Tag: Region_Specific",
              "GroupDescription": "Issues tagged with 'Region_Specific', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              151082
            ],
            "GroupMetaData": {
              "Actions": "To streamline future workflows, it is recommended to implement stricter SLAs for high-priority issues to ensure faster triage and resolution. Increase collaborative visibility by requiring more frequent updates and progress logging via comments or workflows. Introduce automated reminders or escalation mechanisms for stagnant issues to promptly address delays. Enhance overall workflow efficiency by refining status transition designs and providing detailed documentation to support clear assignment and ownership practices.",
              "GroupID": 23103,
              "Insight": "The extended resolution time of over 1038 hours indicates potential delays in investigation or resource allocation inefficiencies. Minimal communication (only one comment from one participant) points to either inadequate cross-team collaboration or limited visibility into the issue's progress. The low number of status transitions reflects a linear or stagnant workflow, possibly due to insufficient task breakdown or dependency resolution. The root cause appears to involve a lack of workflow refinement and unclear ownership responsibilities, exacerbated by the criticality of the issue.",
              "Summary": "The handling of the JIRA issue 'Migrate Admin nodes from STACK to LVAx' reveals areas for improvement in efficiency and process clarity. Despite the high priority of the issue, resolution time was significantly prolonged with minimal communication overhead, indicating possible gaps in coordination and documentation. The issue's workflow experienced limited transitions, suggesting either a lack of active progress tracking or infrequent updates to its status within the system.",
              "GroupName": "Tag: Infra_Deployment_Error",
              "GroupDescription": "Issues tagged with 'Infra_Deployment_Error', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              151079,
              151080,
              151081,
              151082,
              151083,
              151084
            ],
            "GroupMetaData": {
              "Actions": "Implement workflow automation for off-hour issue assignments to improve triage speed and resolution cycles. Enhance JIRA configurations to enforce stricter handoff accountability, requiring assignees to actively confirm transitions. Introduce better monitoring tools and automated alerts for migration and deployment issues to detect and address delays effectively. Strengthen team collaboration by mandating periodic status updates and fostering multi-stakeholder discussions on complex tasks to reduce operational silos and increase resolution efficiency.",
              "GroupID": 23125,
              "Insight": "Triage speed across the issues is delayed, with critical issues failing to reach full resolution promptly. Workflow transitions are inefficient, as evident from minimal status changes, indicating stagnation in workflows and potential mismanaged handoffs. Team collaboration is limited, with low participant involvement and commentary, highlighting insufficient collective problem-solving efforts and isolated task management. Recurrent themes of infra migration and deployment errors dominate, with overlapping tag patterns and unclear prioritization, alongside root causes tied to systemic monitoring and coordination inefficiencies.",
              "Summary": "The analyzed JIRA issues exhibit slow resolution times with extended investigations, minimal coordination reflected by low communication activity, and bottlenecks in status transitions with only one or two changes for most issues. The group predominantly shares critical priority, infra maintenance, and migration tasks, but open issues suggest suboptimal handoff processes, holding up progress in several cases. Workflow bugs appear in managing issue delegation and monitoring efficiency during off hours, impacting resolution velocity and operational load balance.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 6 times"
            }
          },
          {
            "ItemsList": [
              151079,
              151080,
              151081,
              151083,
              151084
            ],
            "GroupMetaData": {
              "Actions": "Implement automated triage and assignment workflows that prioritize critical and region-specific issues based on predefined parameters to reduce triage delays. Enhance JIRA status configuration by incorporating granular status options to better track and mitigate workflow friction points. Introduce collaborative review checkpoints for long-running issues to identify blockers and expedite resolutions. Develop documentation or knowledge repositories for region-specific migration tasks to prevent recurring resolution delays and reduce investigative toil for similar future issues.",
              "GroupID": 23126,
              "Insight": "Triage effectiveness is hampered by delayed assignments, as evident in multiple issues requiring off-hours prioritization with handoff considerations. Status transitions are minimal, highlighting bottlenecks in workflow progression, particularly for critical tasks. Team coordination is consistent, though limited communication in most cases suggests either streamlined collaboration or underdocumented discussions. Recurring themes include region-specific migration challenges and protracted investigative timelines, with two issues exceeding 500-1000 hours of resolution time, indicating significant resource strain.",
              "Summary": "The analyzed JIRA issues for the 'gridsre' team primarily revolve around critical node migrations involving extended resolution times and minimal communication efforts. Issues indicate efficient team participation but reveal workflow bottlenecks, especially in assignment speed and status transitions. There is a recurring pattern of delayed handoffs and prolonged investigations, suggesting opportunities to streamline issue resolution processes for enhanced efficiency.",
              "GroupName": "Tag: Infra_Maintenance_Impact",
              "GroupDescription": "Issues tagged with 'Infra_Maintenance_Impact', occurred 5 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1749562200,
      "startTimestamp": 1749519000
    },
    {
      "id": 3514,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-11T13:33:18Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "d431b355-8398-4b49-86c5-9317f387b3f8",
      "contentJSON": {
        "Items": [
          {
            "id": 151094,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23093,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Grid - General Hadoop - 2025-06-10",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/general-hadoop, supportal-v1-version:0.0.1370]",
              "comments": [
                {
                  "created": "2025-06-11T09:34:25.320-0700",
                  "updated": "2025-06-11T09:34:25.320-0700",
                  "comment_body": "Started a ticket with them. Will keep this thread updated on progress",
                  "commented_by": "Anush Baskaran"
                },
                {
                  "created": "2025-06-11T09:02:06.214-0700",
                  "updated": "2025-06-11T09:02:06.214-0700",
                  "comment_body": "@Anush Baskaran Can you kindly help with more details. I do not really understand your ask here. It seems you have the paths to the models but you cannot read them - which would be expected because your headless account does not own them So my understanding of your ask is If that is the case Can you join our office hours (go/hoh) tomorrow to help us better understand",
                  "commented_by": "Adeoluwa Akinwa"
                },
                {
                  "created": "2025-06-11T09:24:51.054-0700",
                  "updated": "2025-06-11T09:24:51.054-0700",
                  "comment_body": "Yeah You will need to start a conversation with infosec on this. Also still join the office hours tomorrow",
                  "commented_by": "Adeoluwa Akinwa"
                },
                {
                  "created": "2025-06-20T11:53:10.250-0700",
                  "updated": "2025-06-20T11:53:10.250-0700",
                  "comment_body": "Chatted with @Raymond Lam and we aligned on using ksudo to solve for this. Next steps: Ksudo will add our headless account at https://jarvis.corp.linkedin.com/codesearch/result/?name=constants.py&path=mlops-io-offline%2Fmlops_io_offline_dags%2Fsrc%2Fmlops_io_offline%2Fmlops_io_offline_dags&reponame=linkedin-multiproduct%2Fmlops-io-offline#53 to allow impersonation for N headless accounts We will make changes to access and get tokens via ksudo client",
                  "commented_by": "Anush Baskaran"
                },
                {
                  "created": "2025-06-11T09:16:06.330-0700",
                  "updated": "2025-06-11T09:16:06.330-0700",
                  "comment_body": "ill join the office hours You got the ask right on the ticket though. We need to access varied paths across HDFS to be able to access the model bundles uploaded.Is there a way we can get this process started out earlier if there is one?",
                  "commented_by": "Anush Baskaran"
                }
              ],
              "priority": "Major",
              "issue_key": "APA-129782",
              "created_ts": "2025-06-10T22:08:43.175+05:30",
              "issue_title": "Grid - General Hadoop - 2025-06-10",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Adeoluwa Akinwa",
              "reporter_name": "Anush Baskaran",
              "assignee_email": "aakinwa@linkedin.com",
              "reporter_email": "abaskaran@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Issue: I am from the MLOps team and we are trying to reduce MTTD and MTTR for AI model-related incidents, it’s essential to monitor input feature drift. This requires maintaining a catalog of all models and their associated features. To achieve this, we need access to the model bundles, which currently reside in HDFS. While we have the HDFS paths available in the metadata, we’re unable to access them due to ACL restrictions. Could you advise on how we can programmatically access these paths from our automated job that parses the model bundles? This job would run twice a day. Nested Titles: Grid / General Hadoop",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-11 16:04:20.934000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T16:38:43Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:17Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151095,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23093,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23096,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              }
            ],
            "title": "Grid - Change Directory Owner and/or Permissions in HDFS - 2025-06-10",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1370]",
              "comments": [],
              "priority": "Unspecified",
              "issue_key": "APA-129773",
              "created_ts": "2025-06-10T21:44:49.994+05:30",
              "issue_title": "Grid - Change Directory Owner and/or Permissions in HDFS - 2025-06-10",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Adeoluwa Akinwa",
              "reporter_name": "Rajeev Verma",
              "assignee_email": "aakinwa@linkedin.com",
              "reporter_email": "raverma@linkedin.com",
              "assignee_changes": [],
              "issue_description": "HDFS Path: Unable to ask membership for loopazaccess Error Message: Error Message: Error creating request to add raverma to headless account loopazaccess Cluster Name: loopazaccess HDFS User or Headless Account Name that launches the Job: raverma Nested Titles: Grid / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T16:14:50Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:17Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151096,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23124,
                "name": "Infra_DB_Performance",
                "teamID": 6,
                "isGroup": false,
                "description": "Database slowdowns or connection failures affecting applications"
              }
            ],
            "title": "Grid - Job Running Slow - 2025-06-10",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/job-running-slow, supportal-v1-version:0.0.1370]",
              "comments": [
                {
                  "created": "2025-06-10T14:10:19.591-0700",
                  "updated": "2025-06-10T14:10:19.591-0700",
                  "comment_body": "The flow failed but it should not take that long to fail. Here is the updated link: https://flyte-prod.prod.linkedin.com/console/projects/nba-models/domains/development/executions/fa2a6c51f80564fb8b99",
                  "commented_by": "Liyang Zhao"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-129762",
              "created_ts": "2025-06-10T20:14:35.563+05:30",
              "issue_title": "Grid - Job Running Slow - 2025-06-10",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Adeoluwa Akinwa",
              "reporter_name": "Liyang Zhao",
              "assignee_email": "aakinwa@linkedin.com",
              "reporter_email": "liyzhao@linkedin.com",
              "assignee_changes": [],
              "issue_description": "User or Headless Account name that launches the job: gtmaimd Hadoop Job Link: https://flyte-prod.prod.linkedin.com/console/projects/nba-models/domains/development/executions/fu3gxd4pk2klog Cluster Name: prod-ltx1-k8s-2 Azkaban Job Link if it's a Scheduled Job: https://flyte-prod.prod.linkedin.com/console/projects/nba-models/domains/development/executions/fu3gxd4pk2klog Nested Titles: Grid / Job Running Slow",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-10T14:44:36Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:33:17Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              151094,
              151095,
              151096
            ],
            "GroupMetaData": {
              "Actions": "To enhance workflow efficiency, reconfigure JIRA to introduce automated rule-based triage for off-hours issue routing and prioritization. Implement more granular status transitions to track issue progress more effectively and highlight blockers. Encourage broader team participation to distribute workload and improve collaboration, and establish targeted documentation or monitoring to address access, configuration, and performance-related recurring issues. These optimizations can reduce resolution time and operational toil while ensuring better knowledge distribution.",
              "GroupID": 23112,
              "Insight": "The triage and assignment process is delayed, as all issues were created during off-hours and remain unresolved without significant status updates. Workflow transitions are minimal, with only one recorded per issue, signaling potential bottlenecks in prioritization or resource allocation. Recurring themes include access and configuration errors, along with performance degradation that could indicate monitoring or infrastructure capability gaps. Resolution activity is siloed to a single assignee, which may hurt knowledge sharing and issue escalation efficiency.",
              "Summary": "The group of JIRA issues displays a pattern of operational inefficiencies, primarily characterized by prolonged 'OPEN' statuses with minimal status transitions. Team coordination appears centralized, with one assignee handling all issues, potentially causing workload imbalances. Communication overhead is generally low, suggesting either streamlined discussions or insufficient collaborative engagement on issue resolution steps.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 3 times"
            }
          },
          {
            "ItemsList": [
              151094,
              151095
            ],
            "GroupMetaData": {
              "Actions": "Implement automation for off-hours issue triage and prioritization to ensure timely assignment and reduce resolution delays. Enhance JIRA workflow visibility by configuring additional status stages or metrics to track intermediate progress. Deploy a more distributed resource allocation model or on-call rotation to avoid over-reliance on a single assignee for critical tasks. Focus on process improvements or automation scripts to address recurring configuration errors, and establish comprehensive monitoring to reduce the frequency of such issues in the future.",
              "GroupID": 23098,
              "Insight": "Triage and assignment for both issues appear delayed, with no evidence of prompt prioritization despite being created during off-hours, when quicker intervention could mitigate delays. Workflow transitions are minimal, pointing to lack of progress or timely updates, potentially impacting resolution velocity. Communication is limited, hinting at low collaboration overhead but possibly insufficient engagement for issue resolution. Recurring themes of long resolution and configuration errors suggest systemic inefficiencies in process management and monitoring gaps. Resolution times are likely elongated due to unclear or unstreamlined escalation pathways.",
              "Summary": "The provided JIRA issues highlight a workflow characterized by delayed resolution and minimal coordination complexity. Both issues are in an open status with minimal status transitions, suggesting inefficiencies in issue progression and lack of proactive triage. Team coordination appears efficient based on low communication overhead, but the delayed resolution and reliance on a single assignee indicate potential bottlenecks in resource allocation and prioritization of tasks reported during off-hours.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              151095
            ],
            "GroupMetaData": {
              "Actions": "Implementing automated triage rules to assign priority and responsible parties immediately upon issue creation will reduce initialization delays. Creating standard workflows for access-related requests, including pre-approved templates and automated permission changes, can streamline resolution. Enhancing off-hours support through rotation schedules or real-time notifications may mitigate delays originating from after-hours issue reporting.",
              "GroupID": 23101,
              "Insight": "The absence of a defined priority and a lack of immediate triage suggest gaps in the workflow that hinder the team's ability to address issues promptly. The open status of the issue, initially raised during off-hours, indicates potential delays in handoff and resolution. Additionally, the issue's association with 'LongResolution' and 'Access_Request' suggests recurring patterns related to access control that might benefit from better automation or predefined workflows for common issues.",
              "Summary": "The analyzed issue reveals inefficiencies in assignment and resolution processes, particularly due to the absence of prioritization and triage details. Created during off-hours and remaining open, the issue highlights potential delays and coordination challenges between the assignee and other team members, suggesting room for workflow optimization to reduce cycle time and operational effort.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              151096
            ],
            "GroupMetaData": {
              "Actions": "To improve workflows, implementing stricter triage timelines and auto-prioritization rules in JIRA is recommended to expedite issue assignment. Developing clear handoff protocols and enhancing round-the-clock monitoring support would better facilitate off-hour escalations. Automating workflow transitions with better status definitions and promoting real-time team collaboration through integrated tools can accelerate resolution times and reduce operational friction.",
              "GroupID": 23127,
              "Insight": "The absence of a priority designation and clear workflow transition highlights inefficiencies in triage and assignment processes. The issue's creation during off-hours suggests a need for better handoff mechanisms to support timely resolution. Minimal communication and a single comment indicate reduced collaboration, risking delayed troubleshooting. The 'LongResolution' tag points to a recurring pattern that should be addressed through systemic process improvements.",
              "Summary": "The JIRA issue under analysis reveals slow resolution times with inadequate prioritization and coordination efforts. Assigned during off-hours with an open status and minimal communication, the issue lacks clear triage direction, resulting in a prolonged unresolved state and an operational bottleneck for the gridsre team.",
              "GroupName": "Tag: Infra_DB_Performance",
              "GroupDescription": "Issues tagged with 'Infra_DB_Performance', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1749605400,
      "startTimestamp": 1749562200
    },
    {
      "id": 3515,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-11T13:34:07Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "400f6123-83bb-4145-9d48-b25b9afc8483",
      "contentJSON": {
        "Items": [
          {
            "id": 150966,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23104,
                "name": "Automation_Missing",
                "teamID": 6,
                "isGroup": false,
                "description": "Manual step that could be scripted or systematized"
              },
              {
                "id": 23108,
                "name": "Monitoring_Gap",
                "teamID": 6,
                "isGroup": false,
                "description": "Alerting was absent, delayed, or misleading"
              }
            ],
            "title": "Review and update the alert configuration to ensure timely alerts for active Namenode crashes and other critical failures. Example: mechanisms to trigger alerts for multiple NN crashes in a short time period.",
            "content": {
              "labels": "[SEV2, incident-5393, rootly-incident]",
              "comments": [
                {
                  "created": "2025-07-30T11:34:28.157-0700",
                  "updated": "2025-07-30T11:34:28.157-0700",
                  "comment_body": "The IRIS alert for a namenode from the active-standby setup going down is already an URGENT priority alert that warrants immediate attention from the oncall engineers. As the oncall engineer at the time of this incident",
                  "commented_by": "Sri Harsha Vipparti"
                },
                {
                  "created": "2025-06-23T11:28:43.516-0700",
                  "updated": "2025-06-23T11:28:43.516-0700",
                  "comment_body": "@Sri Harsha Vipparti You’re currently assigned as the incident owner for incident-5393.  This related action item is expected to be completed this week but it remains unassigned.  Can you please assist in finding the appropriate owner to see it gets closed soon",
                  "commented_by": "Justin Kominar"
                }
              ],
              "priority": "Critical",
              "issue_key": "ACTIONITEM-7338",
              "created_ts": "2025-06-11T18:52:11.684+05:30",
              "issue_title": "Review and update the alert configuration to ensure timely alerts for active Namenode crashes and other critical failures. Example: mechanisms to trigger alerts for multiple NN crashes in a short time period.",
              "resolved_ts": "2025-07-30T18:35:25.921Z",
              "project_name": "Action Items",
              "assignee_name": "Sri Harsha Vipparti",
              "reporter_name": "svc rootly-prod",
              "assignee_email": "svipparti@linkedin.com",
              "reporter_email": "svc-rootly-prod@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-06-24 17:48:48.398000 UTC",
                  "to_assignee": "Sri Harsha Vipparti",
                  "from_assignee": ""
                }
              ],
              "issue_description": "Action Item for  https://rootly.com/account/incidents/5393  :",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-11 18:52:13.236000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-30 18:35:25.932000 UTC",
                  "from_state": "In Progress"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-11T13:22:12Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:34:06Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 150979,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23088,
                "name": "Feature_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for a new capability or enhancement"
              }
            ],
            "title": "Long Term Followup: Look into making NN startup time faster",
            "content": {
              "labels": "[SEV2, incident-5393, rootly-incident]",
              "comments": [
                {
                  "created": "2025-07-31T18:03:24.956-0700",
                  "updated": "2025-07-31T18:03:24.956-0700",
                  "comment_body": "I shall create a separate long term ticket to track this AI since this requires significant investigation and discussion in a larger forum. Following is the ticket:",
                  "commented_by": "Sri Harsha Vipparti"
                },
                {
                  "created": "2025-06-23T11:29:59.224-0700",
                  "updated": "2025-06-23T11:29:59.224-0700",
                  "comment_body": "@Sri Harsha Vipparti You’re currently assigned as the incident owner for incident-5393.  This related action item is expected to be completed today but it remains unassigned.  Can you please assist in finding the appropriate owner to see it gets closed soon",
                  "commented_by": "Justin Kominar"
                }
              ],
              "priority": "Critical",
              "issue_key": "ACTIONITEM-7337",
              "created_ts": "2025-06-11T18:51:19.62+05:30",
              "issue_title": "Long Term Followup: Look into making NN startup time faster",
              "resolved_ts": "2025-08-01T01:03:33.55Z",
              "project_name": "Action Items",
              "assignee_name": "Sri Harsha Vipparti",
              "reporter_name": "svc rootly-prod",
              "assignee_email": "svipparti@linkedin.com",
              "reporter_email": "svc-rootly-prod@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-06-24 17:56:40.244000 UTC",
                  "to_assignee": "Sri Harsha Vipparti",
                  "from_assignee": ""
                }
              ],
              "issue_description": "Action Item for  https://rootly.com/account/incidents/5393  :",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-11 18:51:21.550000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Closed",
                  "timestamp": "2025-08-01 01:03:33.561000 UTC",
                  "from_state": "In Progress"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-11T13:21:20Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:34:06Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 151034,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23104,
                "name": "Automation_Missing",
                "teamID": 6,
                "isGroup": false,
                "description": "Manual step that could be scripted or systematized"
              },
              {
                "id": 23128,
                "name": "Runbook_Outdated",
                "teamID": 6,
                "isGroup": false,
                "description": "Incident response or operational docs not up to date"
              }
            ],
            "title": "Add sample DN/NN Kusto queries to runbooks to help facilitate faster debugging, avoiding logging into nodes themselves.",
            "content": {
              "labels": "[SEV2, incident-5393, rootly-incident]",
              "comments": [
                {
                  "created": "2025-08-06T09:22:06.830-0700",
                  "updated": "2025-08-06T09:22:06.830-0700",
                  "comment_body": "Sample NN/DN kusto queries and examples can be found here:",
                  "commented_by": "Sri Harsha Vipparti"
                },
                {
                  "created": "2025-06-23T11:30:50.555-0700",
                  "updated": "2025-06-23T11:30:50.555-0700",
                  "comment_body": "@Sri Harsha Vipparti You’re currently assigned as the incident owner for incident-5393.  This related action item is expected to be completed this week but it remains unassigned.  Can you please assist in finding the appropriate owner to see it gets closed soon",
                  "commented_by": "Justin Kominar"
                }
              ],
              "priority": "Critical",
              "issue_key": "ACTIONITEM-7334",
              "created_ts": "2025-06-11T18:43:06.652+05:30",
              "issue_title": "Add sample DN/NN Kusto queries to runbooks to help facilitate faster debugging, avoiding logging into nodes themselves.",
              "resolved_ts": "2025-08-06T16:28:18.821Z",
              "project_name": "Action Items",
              "assignee_name": "Sri Harsha Vipparti",
              "reporter_name": "svc rootly-prod",
              "assignee_email": "svipparti@linkedin.com",
              "reporter_email": "svc-rootly-prod@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-06-24 17:51:11.927000 UTC",
                  "to_assignee": "Sri Harsha Vipparti",
                  "from_assignee": ""
                }
              ],
              "issue_description": "Action Item for  https://rootly.com/account/incidents/5393  :",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-08-06 16:28:18.830000 UTC",
                  "from_state": "In Progress"
                },
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-06-11 18:43:08.220000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-11T13:13:07Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:34:06Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              150966,
              151034
            ],
            "GroupMetaData": {
              "Actions": "Improve monitoring configurations and implement automated alerting mechanisms to reduce detection gaps and enable faster prioritization. Update runbooks and associated documentation with detailed debugging procedures, including sample queries, to promote efficient issue resolution. Optimize JIRA workflows by defining clearer status transitions and implementing automation rules for assigning, prioritizing, and escalating critical issues. Enhance team collaboration by introducing structured handoff processes and periodic retrospectives.",
              "GroupID": 23129,
              "Insight": "The extended resolution times across both issues emphasize systemic challenges in triage and resolution workflows. Minimal communication and low participation indicate limited cross-functional collaboration, which may hinder the sharing of knowledge and issue resolution acceleration. Recurring themes include outdated documentation and gaps in monitoring, leading to preventable operational struggles. The status transitions show minimal progress tracking, suggesting a need for better-defined workflows and escalation triggers.",
              "Summary": "The group of issues under 'Automation_Missing' reflects critical gaps in workflow efficiency and monitoring processes. Both issues exhibit extended resolution times, minimal communication overhead, and low status transition activity, pointing to prolonged investigations with limited collaboration. These patterns highlight inefficiencies in automation, documentation, and team coordination, creating bottlenecks for swift resolution.",
              "GroupName": "Tag: Automation_Missing",
              "GroupDescription": "Issues tagged with 'Automation_Missing', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              150966
            ],
            "GroupMetaData": {
              "Actions": "To prevent similar inefficiencies, prioritize configuring automated alerts for critical failures such as Namenode crashes, ensuring rapid detection and response. Enhance JIRA workflows by introducing mandatory status updates at predefined intervals and fostering greater accountability through frequent team check-ins. Encourage wider collaboration by increasing participant involvement and leveraging retrospective learnings in team training sessions. Lastly, improve triage efficiency by implementing a 24/7 monitoring escalation framework to address off-hour issues with reduced delays.",
              "GroupID": 23109,
              "Insight": "The triage and assignment process appears to have lacked urgency, potentially due to the issue being created off-hours and having a long resolution time of over 1181 hours. Minimal status transitions suggest infrequent updates or process stagnation, while the low comment activity of only two contributors signifies limited collaborative effort. Recurring themes include inadequate monitoring configurations and the absence of automation for timely alerts, both of which likely extended resolution durations. These patterns collectively indicate a requirement for more robust monitoring practices and clearer assignment protocols.",
              "Summary": "The JIRA issue highlights inefficiencies related to prolonged resolution times and minimal collaboration dynamics, as evidenced by extended investigation efforts and low communication overhead. The monitoring gap caused by missing automation elements and limited status transitions suggests opportunities for enhanced workflow streamlining and proactive alert mechanisms. Overall, the issue management for this case shows room for improvement in operational processes to prevent recurrence of similar problems.",
              "GroupName": "Tag: Monitoring_Gap",
              "GroupDescription": "Issues tagged with 'Monitoring_Gap', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              150979
            ],
            "GroupMetaData": {
              "Actions": "Optimizing resolution processes for critical issues could include setting automated alerts for off-hour creation to ensure immediate follow-up and clearly defining intermediate workflow checkpoints to minimize delays. Collaboration can be improved by enforcing mandatory check-ins or updates for long-running tasks. Establishing SLA-based resolution timelines with periodic performance audits can help in identifying delays early and adjusting resources accordingly to prevent prolonged investigation periods for similar tasks in the future.",
              "GroupID": 23091,
              "Insight": "The triage and assignment processes show room for improvement, particularly in handling high-priority issues created during off-hours, which can contribute to delays in action. The workflow exhibited minimal status transitions, reflecting either a lack of well-defined stages or efforts bypassing intermediate checkpoints. Collaboration dynamics could benefit from more coordinated discussions or knowledge sharing, as minimal communication was recorded, and the lone assignee bore complete responsibility. The recurring theme reflects the need for systematic measures to expedite critical tasks with lengthy resolutions.",
              "Summary": "The issue under analysis experienced a prolonged resolution time of over 1200 hours, indicating significant delays in resolving a critical priority task. Collaboration and communication effort were minimal, as evidenced by only two comments from two participants, which might suggest either low interactivity or highly siloed efforts. The workflow saw only two status transitions, hinting at potential stagnation or process blockage during resolution stages.",
              "GroupName": "Tag: Feature_Request",
              "GroupDescription": "Issues tagged with 'Feature_Request', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              151034
            ],
            "GroupMetaData": {
              "Actions": "To address these inefficiencies, prioritize updating runbooks with sample DN/NN Kusto queries to streamline debugging activities. Implement automation for query generation and node monitoring to reduce manual involvement. Enhance resolution workflows by configuring JIRA to include automated status transitions and predefined triage checkpoints to improve tracking and oversight. Additionally, foster skills-sharing sessions within the team to mitigate reliance on single-point ownership and to distribute expertise while addressing similar future issues during off-hours.",
              "GroupID": 23130,
              "Insight": "The issue faced delayed resolution, with a notably long investigation period likely due to a lack of predefined automation and insufficient runbook documentation. Status transitions indicate limited process checkpoints, which may hinder robust tracking and proactive issue resolution. Collaboration appears low, with only two commenters, indicating either high individual ownership or limited expertise sharing. The recurring themes point to preventable inefficiencies centered around outdated processes and insufficient automation for debugging workflows.",
              "Summary": "The JIRA issue reflects moderate workflow coordination but significant inefficiency due to extended resolution time. With minimal communication overhead and only two status transitions, the assignee managed the task independently without excessive team involvement. The critical priority of the issue, combined with tags indicating outdated runbook content and missing automation, suggests systemic gaps in runbook quality and reliance on manual effort for debugging workflows.",
              "GroupName": "Tag: Runbook_Outdated",
              "GroupDescription": "Issues tagged with 'Runbook_Outdated', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              150966,
              150979,
              151034
            ],
            "GroupMetaData": {
              "Actions": "To optimize workflows, implement automation for critical alerts and enhance runbooks with updated, actionable content to expedite debugging. Reconfigure JIRA workflows to allow for earlier triage and more nuanced status transitions, reducing investigation delays. Introduce workload balancing by distributing tasks among multiple team members and encouraging collaborative problem-solving to dismantle silos. Lastly, prioritize feature requests and monitoring improvements to proactively address preventable issues.",
              "GroupID": 23112,
              "Insight": "Triage effectiveness seems limited, with delayed prioritization and minimal transitions restricting workflow fluidity. The resolution process is marked by extended investigation times, with issues such as missing automation and outdated runbooks suggesting deficiencies in tooling and procedural documentation. The recurring root causes include insufficient alert mechanisms, slow system startup, and debugging inefficiencies, exacerbated by an over-reliance on manual processes. Collaboration is restricted, as evidenced by few comments and participants in discussions, pointing to potential knowledge silos.",
              "Summary": "The gridsre team's JIRA issues display a pattern of extended resolution times, minimal status transitions, and low communication overhead. All three critical issues indicate workflow inefficiencies in both problem triage and resolution, with work initiated during off-hours and prolonged investigative phases. The centralized assignment of tasks to a single assignee raises concerns about workload distribution and scalability in handling high-priority tasks.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 3 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1749648600,
      "startTimestamp": 1749605400
    },
    {
      "id": 3516,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-11T13:34:43Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "79276aa5-920a-4454-bc70-2a0c1b1487b9",
      "contentJSON": {
        "Items": [
          {
            "id": 151125,
            "tags": [
              {
                "id": 23084,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23104,
                "name": "Automation_Missing",
                "teamID": 6,
                "isGroup": false,
                "description": "Manual step that could be scripted or systematized"
              },
              {
                "id": 23108,
                "name": "Monitoring_Gap",
                "teamID": 6,
                "isGroup": false,
                "description": "Alerting was absent, delayed, or misleading"
              }
            ],
            "title": "LSR failure emails don't create ticket for hdfs core oncall dashboard.",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1370]",
              "comments": [],
              "priority": "Unspecified",
              "issue_key": "APA-129887",
              "created_ts": "2025-06-11T23:56:57.912+05:30",
              "issue_title": "LSR failure emails don't create ticket for hdfs core oncall dashboard.",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Sri Harsha Vipparti",
              "reporter_name": "Ali Budak",
              "assignee_email": "svipparti@linkedin.com",
              "reporter_email": "abudak@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-06-12 00:00:01.104000 UTC",
                  "to_assignee": "Sri Harsha Vipparti",
                  "from_assignee": "Adeoluwa Akinwa"
                }
              ],
              "issue_description": "Problem: Hey team, currently for LSR failures, we don't get oncall tickets created automatically (hdfs core team). We expect that would work since LSR cron jobs are configured such that upon failure ask_grid_data is a recipient of email sent using Postfix. So when there's a failure, we rely on someone from our team noticing the failure email in their inbox and fwd'ing that to ask_grid_data@ so that our oncall can have a ticket on the oncall dashboard and fix the issues. Since it's critical for compliance, cdmp etc, I think this is something we need to fix. relevant thread:    When we are fixing this, it would be great to ensure the fix is applied to  all 3 LSR jobs  per NN (oiv, sync, parser). thanks! Browser: n/a Hadoop Job Link: n/a Cluster name: n/a Error Message: Nested Titles: Grid / Other Grid Issue",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-06-11T18:26:58Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-11T13:34:41Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              151125
            ],
            "GroupMetaData": {
              "Actions": "To optimize the workflow, configure JIRA automation rules to ensure immediate ticket creation for similar failures and automatic prioritization of high-priority tasks during off-hours. Improve team coordination by implementing mandatory assignee updates and structured handoff procedures. Address root causes by enhancing monitoring systems to prevent ticket escalation delays and documenting standard operating procedures for similar failure scenarios, thereby reducing reliance on manual intervention and improving resolution timelines.",
              "GroupID": 23090,
              "Insight": "Analysis indicates delays in issue triage and assignment effectiveness as the issue was created off-hours without immediate follow-up or updates. Status transitions are unclear, contributing to workflow friction and inefficiencies. The high-priority classification reveals gaps in the monitoring system and suggests recurring issues with automation implementation. Ineffective collaboration and potential knowledge gaps further exacerbate the delays, as no proactive handoff or resolution actions have been documented to date. These patterns suggest a need to refine resolution velocity while addressing process gaps contributing to monitoring and automation failures.",
              "Summary": "The JIRA issue 'LSR failure emails don't create ticket for hdfs core oncall dashboard' exhibits challenges in proper issue management efficiency due to delayed resolution and unaddressed handoff considerations. The lack of immediate status updates and priority specification highlights workflow bottlenecks and inefficiencies, particularly in automation and monitoring practices. Team coordination appears impacted as the issue remains unresolved despite its high-priority classification, suggesting room for process improvement in task assignment and escalation paths.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              151125
            ],
            "GroupMetaData": {
              "Actions": "Implement automation to ensure failure emails directly generate tickets, reducing manual effort and improving triage speed. Establish a structured workflow with clearly defined priority settings and enforce mandatory status updates to enhance resolution tracking and accountability. Conduct a monitoring system audit to identify and address gaps, ensuring timely detection of critical issues. Create a review mechanism for off-hours incidents to facilitate faster handoffs and ensure no delays in addressing high-priority issues.",
              "GroupID": 23105,
              "Insight": "The primary inefficiency stems from the absence of automation in processing failure emails, leading to manual interventions for ticket creation. This gap in automation has directly impacted resolution velocity and added operational toil. The issue's high-priority classification with unresolved status suggests bottlenecks in escalation and handoff mechanisms. The lack of a proper priority setting and status transition contributes to workflow opacity, hindering the team's ability to track and resolve the issue effectively. Repeated themes such as monitoring gaps and long resolution timelines point toward systemic process weaknesses in incident detection and handling.",
              "Summary": "The analyzed JIRA issue demonstrates significant inefficiencies in both automated monitoring and manual workflow processes. The issue, marked as high priority, remains open despite its creation during off-hours two months ago, indicating delayed handoffs and potential gaps in triage and resolution processes. Unspecified priority and missing status updates further highlight challenges in workflow clarity and prioritization within the team.",
              "GroupName": "Tag: Automation_Missing",
              "GroupDescription": "Issues tagged with 'Automation_Missing', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              151125
            ],
            "GroupMetaData": {
              "Actions": "Introduce automated workflows in JIRA to ensure that LSR failure emails directly trigger ticket creation and assignment to the appropriate on-call team, supported by clear ownership guidelines. Configure custom escalations with defined SLAs to mitigate delays in off-hours triage and resolution for high-priority issues. Optimize the team's JIRA workflow by streamlining status transitions and enforcing standard prioritization schemes, leveraging automation rules to reduce manual interventions and improve tracking. Enhance monitoring dashboards to proactively detect incidents and minimize automation gaps, preventing future operational toil.",
              "GroupID": 23109,
              "Insight": "The triage and assignment process reveals systemic delays due to the absence of robust automation for ticket creation and routing, as identified by the missing LSR email-triggered automation. Status transition patterns suggest limited progress on high-priority tasks, amplified by the absence of explicit prioritization and unclear workflows. Collaboration inefficiencies and handoff difficulties emerge as contributors to the issue lifespan, particularly for off-hours incidents, hinting at gaps in on-call processes and escalation mechanisms. Recurring themes of missing automation and insufficient monitoring stand out as key improvement areas.",
              "Summary": "The issue group exhibits inefficiencies in ticket lifecycle management, with prolonged resolutions likely caused by inadequate automation and ambiguous prioritization. Team coordination appears limited, as the current ticket assignee has not resolved the high-priority issue since its creation over two months ago, and the creation time during off-hours hints at possible delays in triage and assignment. Workflow bottlenecks persist, particularly in status transitions and escalations, indicating opportunities for process optimization to enhance overall operational efficiency.",
              "GroupName": "Tag: Monitoring_Gap",
              "GroupDescription": "Issues tagged with 'Monitoring_Gap', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1749691800,
      "startTimestamp": 1749648600
    }
  ],
  "insightMetrics": {
    "ecdf": [
      5,
      5,
      5,
      5,
      5,
      51811,
      62300,
      62854,
      72702,
      80835
    ],
    "count": 42,
    "totalTimeSpent": 1296499,
    "timeSpentBucket": {
      "0": 21,
      "4": 21
    },
    "averageTimeSpent": 30869
  }
}
 

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [jsonData, setJsonData] = useState<any>(SAMPLE_DATA);
  const [jsonInput, setJsonInput] = useState('');
  const [parseError, setParseError] = useState<string | null>(null);

  // Global filters state
  const [filters, setFilters] = useState<GlobalFilters>({
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
    console.log('Filtering items. All items:', allItems.length, 'Filters:', filters);
    
    if (!allItems.length) {
      console.log('No items to filter');
      return [];
    }

    try {
      const result = allItems.filter((item: any) => {
        // Created Date Range Filter - Issues created within time range (uses only created_ts)
        if (filters.selectedTags.length > 0) {
          const itemTags = item.tags || [];
          const itemTagNames = itemTags.map((tag: any) => tag.name || tag).filter(Boolean);
          if (!filters.selectedTags.some(filterTag => itemTagNames.includes(filterTag))) {
            return false;
          }
        }

        // Priority filter
        if (filters.selectedPriorities.length > 0) {
          const itemPriority = item.content?.priority;
          if (!itemPriority || !filters.selectedPriorities.includes(itemPriority)) {
            return false;
          }
        }

        // Project filter
        if (filters.selectedProjects.length > 0) {
          const itemProject = item.content?.project_name;
          if (!itemProject || !filters.selectedProjects.includes(itemProject)) {
            return false;
          }
        }

        // Assignee filter
        if (filters.selectedAssignees.length > 0) {
          const itemAssignee = item.content?.assignee_name;
          if (!itemAssignee || !filters.selectedAssignees.includes(itemAssignee)) {
            return false;
          }
        }

        // Reporter filter
        if (filters.selectedReporters.length > 0) {
          const itemReporter = item.content?.reporter_name;
          if (!itemReporter || !filters.selectedReporters.includes(itemReporter)) {
            return false;
          }
        }

        // Status filter
        if (filters.selectedStatuses.length > 0) {
          const statusTransitions = item.content?.status_transitions || [];
          const currentStatus = statusTransitions.length > 0 
            ? statusTransitions[statusTransitions.length - 1].to_state 
            : 'Open';
          if (!filters.selectedStatuses.includes(currentStatus)) {
            return false;
          }
        }

        // Created Date Range Filter - Issues created within time range (uses only created_ts)
        if (filters.createdDateRange.relative !== 'all' || filters.createdDateRange.startDate || filters.createdDateRange.endDate) {
          const itemCreatedDate = new Date(item.content?.created_ts);
          if (isNaN(itemCreatedDate.getTime())) {
            if (filters.createdDateRange.relative !== 'all') return false;
          } else {
            let startDate: Date | null = null;
            let endDate: Date | null = null;

            if (filters.createdDateRange.relative === 'last7days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 7);
            } else if (filters.createdDateRange.relative === 'last30days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 30);
            } else if (filters.createdDateRange.relative === 'last90days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 90);
            } else if (filters.createdDateRange.relative === 'custom') {
              if (filters.createdDateRange.startDate) {
                startDate = new Date(filters.createdDateRange.startDate);
              }
              if (filters.createdDateRange.endDate) {
                endDate = new Date(filters.createdDateRange.endDate);
              }
            }

            if (startDate && itemCreatedDate < startDate) return false;
            if (endDate && itemCreatedDate > endDate) return false;
          }
        }

        // Active Issues Filter - Issues active during time range (uses both created_ts and resolved_ts)
        if (filters.activeDateRange.relative !== 'all' || filters.activeDateRange.startDate || filters.activeDateRange.endDate) {
          const itemCreatedDate = new Date(item.content?.created_ts);
          const itemResolvedDate = item.content?.resolved_ts && item.content.resolved_ts !== "0001-01-01T00:00:00Z" 
            ? new Date(item.content.resolved_ts) 
            : null; // null means still active

          if (isNaN(itemCreatedDate.getTime())) {
            if (filters.activeDateRange.relative !== 'all') return false;
          } else {
            let startDate: Date | null = null;
            let endDate: Date | null = null;

            if (filters.activeDateRange.relative === 'last7days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 7);
            } else if (filters.activeDateRange.relative === 'last30days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 30);
            } else if (filters.activeDateRange.relative === 'last90days') {
              startDate = new Date();
              startDate.setDate(startDate.getDate() - 90);
            } else if (filters.activeDateRange.relative === 'custom') {
              if (filters.activeDateRange.startDate) {
                startDate = new Date(filters.activeDateRange.startDate);
              }
              if (filters.activeDateRange.endDate) {
                endDate = new Date(filters.activeDateRange.endDate);
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
  }, [allItems, filters]);

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
          <div className="bg-gray-50 rounded-md p-4 max-h-96 overflow-auto">
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

    const updateFilter = React.useCallback((key: keyof GlobalFilters, value: any) => {
      setFilters(prev => ({ ...prev, [key]: value }));
    }, []);

    const resetFilters = React.useCallback(() => {
      setFilters({
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
    }, []);

    const toggleArrayFilter = React.useCallback((filterKey: keyof GlobalFilters, value: string) => {
      setFilters(prev => {
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
      <div className={`${sidebarOpen ? 'w-[300px]' : 'w-0'} transition-all duration-300 bg-gray-100 border-r border-gray-300 overflow-hidden flex-shrink-0`}>
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Reset Filters Button */}
          <div className="mt-4">
            <button
              onClick={resetFilters}
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 px-4 py-2 rounded-md font-medium transition-colors text-sm"
            >
              Reset all filters
            </button>
          </div>
        </div>

        {/* Filter Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-6 space-y-4 scrollbar-hide">{/* Reduced padding and spacing + hidden scrollbar */}

          {/* Date Range Filters */}
          <LinkedInFilterSection
            title="Date Ranges"
            isExpanded={expandedSections.createdDate}
            onToggle={React.useCallback(() => toggleSection('createdDate'), [toggleSection])}
          >
            <div className="space-y-6">
              <DateRangeSelector
                label="Created Date"
                value={filters.createdDateRange}
                onChange={(value) => updateFilter('createdDateRange', value)}
              />
              <div className="border-t border-gray-200 pt-4">
                <DateRangeSelector
                  label="Active Items Period"
                  value={filters.activeDateRange}
                  onChange={(value) => updateFilter('activeDateRange', value)}
                />
              </div>
            </div>
          </LinkedInFilterSection>

          {/* Status Filter */}
          {jsonData && availableOptions.statuses.length > 0 && (
            <LinkedInFilterSection
              title="Status"
              isExpanded={expandedSections.status}
              onToggle={() => toggleSection('status')}
              count={filters.selectedStatuses.length > 0 ? `${filters.selectedStatuses.length}` : undefined}
            >
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {availableOptions.statuses.map((status) => (
                  <MultiSelectOption
                    key={status}
                    label={status}
                    isSelected={filters.selectedStatuses.includes(status)}
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
              count={filters.selectedPriorities.length > 0 ? `${filters.selectedPriorities.length}` : undefined}
            >
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {availableOptions.priorities.map((priority) => (
                  <MultiSelectOption
                    key={priority}
                    label={priority}
                    isSelected={filters.selectedPriorities.includes(priority)}
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
              count={filters.selectedTags.length > 0 ? `${filters.selectedTags.length}` : undefined}
            >
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {availableOptions.tags.map((tag) => (
                  <MultiSelectOption
                    key={tag}
                    label={tag.length > 25 ? `${tag.substring(0, 25)}...` : tag}
                    isSelected={filters.selectedTags.includes(tag)}
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
              count={filters.selectedProjects.length > 0 ? `${filters.selectedProjects.length}` : undefined}
            >
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {availableOptions.projects.map((project) => (
                  <MultiSelectOption
                    key={project}
                    label={project}
                    isSelected={filters.selectedProjects.includes(project)}
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
              count={filters.selectedAssignees.length > 0 ? `${filters.selectedAssignees.length}` : undefined}
            >
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {availableOptions.assignees.map((assignee) => (
                  <MultiSelectOption
                    key={assignee}
                    label={assignee}
                    isSelected={filters.selectedAssignees.includes(assignee)}
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
              count={filters.selectedReporters.length > 0 ? `${filters.selectedReporters.length}` : undefined}
            >
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {availableOptions.reporters.map((reporter) => (
                  <MultiSelectOption
                    key={reporter}
                    label={reporter}
                    isSelected={filters.selectedReporters.includes(reporter)}
                    onChange={() => toggleArrayFilter('selectedReporters', reporter)}
                  />
                ))}
              </div>
            </LinkedInFilterSection>
          )}
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
              onClick={() => setActiveTab(tab.id)}
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

  const DataTable = () => {
    const [selectedIssue, setSelectedIssue] = useState<any>(null);
    const [showComments, setShowComments] = useState<boolean>(false);
    const [sortColumn, setSortColumn] = useState<string>('created');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(25);

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
    const sortedItems = [...filteredItems].sort((a, b) => {
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
          <div className="overflow-x-auto">
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
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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
                      <div className="space-y-2 text-sm max-h-32 overflow-y-auto">
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
                  <div className="bg-gray-50 rounded-md p-3 text-sm text-gray-700 max-h-32 overflow-y-auto">
                    {selectedIssue.content?.issue_description || 'No description available'}
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Comments</h3>
                    <button
                      onClick={() => setShowComments(!showComments)}
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
        if (filters.createdDateRange.relative !== 'all' || filters.createdDateRange.startDate || filters.createdDateRange.endDate) {
          let startDate: Date | null = null;
          let endDate: Date | null = null;

          if (filters.createdDateRange.relative === 'last7days') {
            startDate = new Date();
            startDate.setDate(startDate.getDate() - 7);
          } else if (filters.createdDateRange.relative === 'last30days') {
            startDate = new Date();
            startDate.setDate(startDate.getDate() - 30);
          } else if (filters.createdDateRange.relative === 'last90days') {
            startDate = new Date();
            startDate.setDate(startDate.getDate() - 90);
          } else if (filters.createdDateRange.relative === 'custom') {
            if (filters.createdDateRange.startDate) {
              startDate = new Date(filters.createdDateRange.startDate);
            }
            if (filters.createdDateRange.endDate) {
              endDate = new Date(filters.createdDateRange.endDate);
              endDate.setHours(23, 59, 59, 999); // Include the entire end date
            }
          }

          if (startDate && summaryCreatedDate < startDate) return false;
          if (endDate && summaryCreatedDate > endDate) return false;
        }

        // Apply Active Items Period Filter (summaries should be relevant to the active period)
        // This checks if the summary's time range overlaps with the active items period
        if (filters.activeDateRange.relative !== 'all' || filters.activeDateRange.startDate || filters.activeDateRange.endDate) {
          let activeStartDate: Date | null = null;
          let activeEndDate: Date | null = null;

          if (filters.activeDateRange.relative === 'last7days') {
            activeStartDate = new Date();
            activeStartDate.setDate(activeStartDate.getDate() - 7);
            activeEndDate = new Date();
          } else if (filters.activeDateRange.relative === 'last30days') {
            activeStartDate = new Date();
            activeStartDate.setDate(activeStartDate.getDate() - 30);
            activeEndDate = new Date();
          } else if (filters.activeDateRange.relative === 'last90days') {
            activeStartDate = new Date();
            activeStartDate.setDate(activeStartDate.getDate() - 90);
            activeEndDate = new Date();
          } else if (filters.activeDateRange.relative === 'custom') {
            if (filters.activeDateRange.startDate) {
              activeStartDate = new Date(filters.activeDateRange.startDate);
            }
            if (filters.activeDateRange.endDate) {
              activeEndDate = new Date(filters.activeDateRange.endDate);
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
                itemsList: group.ItemsList || []
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
    }, [jsonData, filters.createdDateRange, filters.activeDateRange]);

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
        
        <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
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
                           className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                        
                        {/* Group Header */}
                        <div className="mb-5 pb-4 border-b border-gray-200">
                          <h5 className="text-lg font-bold text-gray-800 mb-2">{group.groupName}</h5>
                          <p className="text-sm text-gray-600 mb-2">{group.groupDescription}</p>
                          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                            {group.itemsCount} items
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
        if (filters.createdDateRange.relative !== 'all') {
          if (filters.createdDateRange.relative === 'custom') {
            const start = filters.createdDateRange.startDate ? new Date(filters.createdDateRange.startDate).toLocaleDateString() : '';
            const end = filters.createdDateRange.endDate ? new Date(filters.createdDateRange.endDate).toLocaleDateString() : '';
            if (start || end) {
              activeSummaries.push(`Created: ${start || 'any'} - ${end || 'any'}`);
            }
          } else {
            const labels = {
              'last7days': 'Created: Last 7 days',
              'last30days': 'Created: Last 30 days', 
              'last90days': 'Created: Last 90 days'
            };
            activeSummaries.push(labels[filters.createdDateRange.relative as keyof typeof labels] || 'Created date filter');
          }
        }

        // Active Issues Range
        if (filters.activeDateRange.relative !== 'all') {
          if (filters.activeDateRange.relative === 'custom') {
            const start = filters.activeDateRange.startDate ? new Date(filters.activeDateRange.startDate).toLocaleDateString() : '';
            const end = filters.activeDateRange.endDate ? new Date(filters.activeDateRange.endDate).toLocaleDateString() : '';
            if (start || end) {
              activeSummaries.push(`Active: ${start || 'any'} - ${end || 'any'}`);
            }
          } else {
            const labels = {
              'last7days': 'Active: Last 7 days',
              'last30days': 'Active: Last 30 days', 
              'last90days': 'Active: Last 90 days'
            };
            activeSummaries.push(labels[filters.activeDateRange.relative as keyof typeof labels] || 'Active date filter');
          }
        }

        // Other filters
        if (filters.selectedTags.length > 0) {
          activeSummaries.push(`${filters.selectedTags.length} tag${filters.selectedTags.length > 1 ? 's' : ''}`);
        }
        if (filters.selectedPriorities.length > 0) {
          activeSummaries.push(`${filters.selectedPriorities.length} priorit${filters.selectedPriorities.length > 1 ? 'ies' : 'y'}`);
        }
        if (filters.selectedProjects.length > 0) {
          activeSummaries.push(`${filters.selectedProjects.length} project${filters.selectedProjects.length > 1 ? 's' : ''}`);
        }
        if (filters.selectedAssignees.length > 0) {
          activeSummaries.push(`${filters.selectedAssignees.length} assignee${filters.selectedAssignees.length > 1 ? 's' : ''}`);
        }
        if (filters.selectedStatuses.length > 0) {
          activeSummaries.push(`${filters.selectedStatuses.length} status${filters.selectedStatuses.length > 1 ? 'es' : ''}`);
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
      return (
        <div className="flex-1 p-6 space-y-6 scrollbar-hide overflow-y-auto">
          <DataSummaryBanner />
          
          {/* Issue Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Open Issues</p>
                  <p className="text-2xl font-bold text-red-600">
                    {jsonData ? filteredItems.filter(item => {
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
                    {jsonData ? filteredItems.filter(item => {
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
                    {jsonData ? filteredItems.filter(item => 
                      item.content?.priority?.toLowerCase() === 'critical'
                    ).length : 0}
                  </p>
                </div>
                <Target className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Issue Data Table */}
          <DataTable />
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
                            className="group relative flex flex-col items-center"
                            title={`${tag.tag}: ${tag.count} issues (${tag.percentage.toFixed(1)}%)`}
                          >
                            {/* Vertical bar */}
                            <div 
                              className="w-12 bg-gray-200 rounded-t-lg mb-2 flex items-end justify-center pb-1 transition-all duration-500 ease-out hover:shadow-lg"
                              style={{ height: `${height}px` }}
                            >
                              <div 
                                className="w-full rounded-t-lg flex items-end justify-center pb-1"
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
                              {tag.tag}: {tag.count} issues ({tag.percentage.toFixed(1)}%)
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
