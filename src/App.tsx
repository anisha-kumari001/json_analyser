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
      "id": 3887,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-14T05:09:24Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "592d04b3-32a7-4d6a-b46f-640b60bf0696",
      "contentJSON": {
        "Items": [
          {
            "id": 152997,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              },
              {
                "id": 23518,
                "name": "Infra_Deployment_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Deployment failures causing infrastructure instability or downtime"
              }
            ],
            "title": "Improve resilience for small clusters ",
            "content": {
              "labels": "",
              "comments": [
                {
                  "created": "2025-08-03T21:57:48.274-0700",
                  "updated": "2025-08-03T21:57:48.274-0700",
                  "comment_body": "Snap logs: is_Ramped [2025-08-04, 00:53:18 UTC] {generic_tasks.py:1145} INFO - [OsUpgradeStatus] Target images have been ramped to 4 hosts get_hosts_to_submit: [2025-08-04, 00:52:41 UTC] {generic_tasks.py:484} INFO - Step: {'name': 'datanode-gud0', 'description': 'Upgrade snap-01 datanode from gud0', 'actions': [{'osUpgradeAction': {'completionThreshold': {'percent': 94.0}, 'upgradeParameters': {'retainDisk': True, 'maasParameters': {'lightcop': False, 'eraseDataDisks': False, 'ipv6Only': False, 'retainExistingPartitions': True, 'dataDiskType': 'RAID6'}, 'maxInQueuePerFabric': 15, 'maxHostsToSubmitPerFabric': 5, 'emptyHostsToMaintain': [], 'osAffinity': [{'sourceOs': 'AZURELINUX_3', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'MARINER_2', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'CENTOS_7', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'REDHAT_7', 'targetOs': 'AZURELINUX_3'}], 'maxAttempts': {'window': 48, 'attempts': 1}, 'autoRollbackEnabled': True}}}], 'assets': [{'name': 'snap-01-datanode-gud0', 'payload': {'ranges': ['%grid-lva1-worker-datanode.lva1-snap-gud0', '%grid-lva2-worker-datanode.lva1-snap-gud0']}}]}\n[2025-08-04, 00:52:41 UTC] {generic_tasks.py:485} INFO - Asset: {'name': 'snap-01-datanode-gud0', 'payload': {'ranges': ['%grid-lva1-worker-datanode.lva1-snap-gud0', '%grid-lva2-worker-datanode.lva1-snap-gud0']}}\n[2025-08-04, 00:52:41 UTC] {generic_tasks.py:486} INFO - Action: {'osUpgradeAction': {'completionThreshold': {'percent': 94.0}, 'upgradeParameters': {'retainDisk': True, 'maasParameters': {'lightcop': False, 'eraseDataDisks': False, 'ipv6Only': False, 'retainExistingPartitions': True, 'dataDiskType': 'RAID6'}, 'maxInQueuePerFabric': 15, 'maxHostsToSubmitPerFabric': 5, 'emptyHostsToMaintain': [], 'osAffinity': [{'sourceOs': 'AZURELINUX_3', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'MARINER_2', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'CENTOS_7', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'REDHAT_7', 'targetOs': 'AZURELINUX_3'}], 'maxAttempts': {'window': 48, 'attempts': 1}, 'autoRollbackEnabled': True}}}\n[2025-08-04, 00:52:41 UTC] {generic_tasks.py:565} INFO - Resolved total 7 hosts from the asset. Per-fabric host count: [('grid2', 7)]\n[2025-08-04, 00:52:41 UTC] {generic_tasks.py:593} INFO - Resolved 7 hosts from Rain backend for STATIC_GRID2_WORKERS_NODES_0 in Fabric('grid2').\n[2025-08-04, 00:52:42 UTC] {generic_tasks.py:631} INFO - OS image distribution of AZURELINUX_3 on the resolved asset in grid2: [('azurelinux3-release-x86_64-r11', 4)]\n[2025-08-04, 00:52:42 UTC] {generic_tasks.py:663} INFO - After applying all filters on STATIC_GRID2_WORKERS_NODES_0 in grid2 The previous submissions failed due to failed blessin approval. [(\\'yarn-capacity-check\\', \\'[check: yarn-capacity-check] Active to non-active node ratio is 0.8802083333333334 in cluster YarnCluster.SNAP. Pause maintenance activity.\\')] failed for node-manager.lva1-snap\"",
                  "commented_by": "Siddhi Tripathi"
                },
                {
                  "created": "2025-08-03T22:03:04.955-0700",
                  "updated": "2025-08-03T22:03:04.955-0700",
                  "comment_body": "The RM page UI shows 87% capacity:",
                  "commented_by": "Siddhi Tripathi"
                },
                {
                  "created": "2025-08-03T21:45:34.848-0700",
                  "updated": "2025-08-03T21:45:34.848-0700",
                  "comment_body": "holdem-02 2025-08-04 05:34:16 17.1 loop-01 2025-08-04 05:33:12 65.2 snap-01 2025-08-04 06:23:21 57.1 yugioh-01 2025-08-04 05:52:21 42.9",
                  "commented_by": "Siddhi Tripathi"
                },
                {
                  "created": "2025-08-03T21:44:11.942-0700",
                  "updated": "2025-08-03T21:44:11.942-0700",
                  "comment_body": "Figuring out clusters with low completion percentage and/or stuck in a GUD.",
                  "commented_by": "Siddhi Tripathi"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-286891",
              "created_ts": "2025-07-18T07:06:59.798+05:30",
              "issue_title": "Improve resilience for small clusters ",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Siddhi Tripathi",
              "reporter_name": "Sampath S Pattanshetty",
              "assignee_email": "sitripathi@linkedin.com",
              "reporter_email": "spattanshetty@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Clusters like Loop, Snap are stuck at initial guds When they enter the OSUA process Upgrade process gets stuck. for example, Snap cluster hits YARN threshold, blocking Snap HDFS upgrades. Persistent issues with threshold breaches and instability. Hosts with metal inops state invalid also being reason for failures",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-08-04 04:43:35.336000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-18T01:37:00Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:09:22Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153080,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              },
              {
                "id": 23532,
                "name": "Release_Blocker",
                "teamID": 6,
                "isGroup": false,
                "description": "Issue is preventing scheduled release from going live"
              }
            ],
            "title": "Improve resilience for small clusters ",
            "content": {
              "labels": "",
              "comments": [
                {
                  "created": "2025-08-03T21:44:11.942-0700",
                  "updated": "2025-08-03T21:44:11.942-0700",
                  "comment_body": "Figuring out clusters with low completion percentage and/or stuck in a GUD.",
                  "commented_by": "Siddhi Tripathi"
                },
                {
                  "created": "2025-08-03T21:57:48.274-0700",
                  "updated": "2025-08-03T21:57:48.274-0700",
                  "comment_body": "Snap logs: is_Ramped [2025-08-04, 00:53:18 UTC] {generic_tasks.py:1145} INFO - [OsUpgradeStatus] Target images have been ramped to 4 hosts get_hosts_to_submit: [2025-08-04, 00:52:41 UTC] {generic_tasks.py:484} INFO - Step: {'name': 'datanode-gud0', 'description': 'Upgrade snap-01 datanode from gud0', 'actions': [{'osUpgradeAction': {'completionThreshold': {'percent': 94.0}, 'upgradeParameters': {'retainDisk': True, 'maasParameters': {'lightcop': False, 'eraseDataDisks': False, 'ipv6Only': False, 'retainExistingPartitions': True, 'dataDiskType': 'RAID6'}, 'maxInQueuePerFabric': 15, 'maxHostsToSubmitPerFabric': 5, 'emptyHostsToMaintain': [], 'osAffinity': [{'sourceOs': 'AZURELINUX_3', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'MARINER_2', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'CENTOS_7', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'REDHAT_7', 'targetOs': 'AZURELINUX_3'}], 'maxAttempts': {'window': 48, 'attempts': 1}, 'autoRollbackEnabled': True}}}], 'assets': [{'name': 'snap-01-datanode-gud0', 'payload': {'ranges': ['%grid-lva1-worker-datanode.lva1-snap-gud0', '%grid-lva2-worker-datanode.lva1-snap-gud0']}}]}\n[2025-08-04, 00:52:41 UTC] {generic_tasks.py:485} INFO - Asset: {'name': 'snap-01-datanode-gud0', 'payload': {'ranges': ['%grid-lva1-worker-datanode.lva1-snap-gud0', '%grid-lva2-worker-datanode.lva1-snap-gud0']}}\n[2025-08-04, 00:52:41 UTC] {generic_tasks.py:486} INFO - Action: {'osUpgradeAction': {'completionThreshold': {'percent': 94.0}, 'upgradeParameters': {'retainDisk': True, 'maasParameters': {'lightcop': False, 'eraseDataDisks': False, 'ipv6Only': False, 'retainExistingPartitions': True, 'dataDiskType': 'RAID6'}, 'maxInQueuePerFabric': 15, 'maxHostsToSubmitPerFabric': 5, 'emptyHostsToMaintain': [], 'osAffinity': [{'sourceOs': 'AZURELINUX_3', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'MARINER_2', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'CENTOS_7', 'targetOs': 'AZURELINUX_3'}, {'sourceOs': 'REDHAT_7', 'targetOs': 'AZURELINUX_3'}], 'maxAttempts': {'window': 48, 'attempts': 1}, 'autoRollbackEnabled': True}}}\n[2025-08-04, 00:52:41 UTC] {generic_tasks.py:565} INFO - Resolved total 7 hosts from the asset. Per-fabric host count: [('grid2', 7)]\n[2025-08-04, 00:52:41 UTC] {generic_tasks.py:593} INFO - Resolved 7 hosts from Rain backend for STATIC_GRID2_WORKERS_NODES_0 in Fabric('grid2').\n[2025-08-04, 00:52:42 UTC] {generic_tasks.py:631} INFO - OS image distribution of AZURELINUX_3 on the resolved asset in grid2: [('azurelinux3-release-x86_64-r11', 4)]\n[2025-08-04, 00:52:42 UTC] {generic_tasks.py:663} INFO - After applying all filters on STATIC_GRID2_WORKERS_NODES_0 in grid2 The previous submissions failed due to failed blessin approval. [(\\'yarn-capacity-check\\', \\'[check: yarn-capacity-check] Active to non-active node ratio is 0.8802083333333334 in cluster YarnCluster.SNAP. Pause maintenance activity.\\')] failed for node-manager.lva1-snap\"",
                  "commented_by": "Siddhi Tripathi"
                },
                {
                  "created": "2025-08-03T22:03:04.955-0700",
                  "updated": "2025-08-03T22:03:04.955-0700",
                  "comment_body": "The RM page UI shows 87% capacity:",
                  "commented_by": "Siddhi Tripathi"
                },
                {
                  "created": "2025-08-03T21:45:34.848-0700",
                  "updated": "2025-08-03T21:45:34.848-0700",
                  "comment_body": "holdem-02 2025-08-04 05:34:16 17.1 loop-01 2025-08-04 05:33:12 65.2 snap-01 2025-08-04 06:23:21 57.1 yugioh-01 2025-08-04 05:52:21 42.9",
                  "commented_by": "Siddhi Tripathi"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-286891",
              "created_ts": "2025-07-18T07:06:59.798+05:30",
              "issue_title": "Improve resilience for small clusters ",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Siddhi Tripathi",
              "reporter_name": "Sampath S Pattanshetty",
              "assignee_email": "sitripathi@linkedin.com",
              "reporter_email": "spattanshetty@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Clusters like Loop, Snap are stuck at initial guds When they enter the OSUA process Upgrade process gets stuck. for example, Snap cluster hits YARN threshold, blocking Snap HDFS upgrades. Persistent issues with threshold breaches and instability. Hosts with metal inops state invalid also being reason for failures",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-08-04 04:43:35.336000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-18T01:37:00Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:09:22Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152997
            ],
            "GroupMetaData": {
              "GroupID": 23519,
              "Insight": "Common issue: limited fault tolerance in configurations for small clusters. Optimization needed for recovery speed and overall reliability.",
              "Summary": "Deployment on small clusters lacks resilience, risking instability and prolonged downtime during errors or failures.",
              "GroupName": "Tag: Infra_Deployment_Error",
              "GroupDescription": "Issues tagged with 'Infra_Deployment_Error', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153080
            ],
            "GroupMetaData": {
              "GroupID": 23533,
              "Insight": "Delay caused by unspecified resolution status; risk tied to resilience dependencies and lack of clear priority assignment.",
              "Summary": "GRID-286891 blocks small cluster resiliency improvements, delaying the release timeline until resolved.",
              "GroupName": "Tag: Release_Blocker",
              "GroupDescription": "Issues tagged with 'Release_Blocker', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              152997,
              153080
            ],
            "GroupMetaData": {
              "GroupID": 23522,
              "Insight": "Primary delay factors were technical complexity, including persistent threshold breaches and blocked upgrades, as well as process inefficiencies such as retrying manual fixes and affected network performance. These challenges compounded due to unclear dependencies and workflow inefficiencies.",
              "Summary": "These issues relate to improving resilience for small clusters in the GRID infrastructure. Core problem types include persistent technical complexities like threshold breaches, stuck OSUA upgrade processes, and dependencies involving ineligible clusters. Such systemic issues made resolution more challenging.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              152997,
              153080
            ],
            "GroupMetaData": {
              "GroupID": 23534,
              "Insight": "Lack of issue clarity, validation gaps, and absence of automated checks/rollback protocols hinder resolution and prevent robust change management.",
              "Summary": "Duplicate issues point to unclear resolution standards; small cluster resilience affected by misconfiguration errors causing degraded service or delay.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 2 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1752845400,
      "startTimestamp": 1752802200
    },
    {
      "id": 3888,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-14T05:10:26Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "95edde85-a919-406c-9604-a7c82207c665",
      "contentJSON": {
        "Items": [
          {
            "id": 152990,
            "tags": [
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              },
              {
                "id": 23524,
                "name": "Documentation_Gap",
                "teamID": 6,
                "isGroup": false,
                "description": "Missing or incorrect internal/external docs"
              }
            ],
            "title": "Promote the headless account `widget` to WAR",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1393]",
              "comments": [
                {
                  "created": "2025-07-21T12:05:12.770-0700",
                  "updated": "2025-07-21T12:05:12.770-0700",
                  "comment_body": "please create a new request including successful workflows in holdem and confirmation of alerts for workflow failures",
                  "commented_by": "Heagan Ahmed"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131468",
              "created_ts": "2025-07-18T21:38:54.672+05:30",
              "issue_title": "Promote the headless account `widget` to WAR",
              "resolved_ts": "2025-07-21T19:05:12.732Z",
              "project_name": "APA Support Project",
              "assignee_name": "Heagan Ahmed",
              "reporter_name": "Xiaotian Zhan",
              "assignee_email": "heahmed@linkedin.com",
              "reporter_email": "xizhan@linkedin.com",
              "assignee_changes": [],
              "issue_description": "HDFS Path: N/A Error Message: Promote the headless account `widget` to WAR Cluster Name: WAR HDFS User or Headless Account Name that launches the Job: widget Nested Titles: Grid / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-21 19:05:12.798000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-18T16:08:55Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:10:24Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153081,
            "tags": [
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              }
            ],
            "title": "Grid - Not Able to Access Data - 2025-07-18",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/not-able-to-access-data, supportal-v1-version:0.0.1393]",
              "comments": [
                {
                  "created": "2025-07-22T13:27:47.524-0700",
                  "updated": "2025-07-22T13:27:47.524-0700",
                  "comment_body": "",
                  "commented_by": "Heagan Ahmed"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131479",
              "created_ts": "2025-07-18T23:57:01.394+05:30",
              "issue_title": "Grid - Not Able to Access Data - 2025-07-18",
              "resolved_ts": "2025-07-22T20:27:47.488Z",
              "project_name": "APA Support Project",
              "assignee_name": "Heagan Ahmed",
              "reporter_name": "Hao Wang",
              "assignee_email": "heahmed@linkedin.com",
              "reporter_email": "hwang7@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Request to onboard this Airflow DAG in war: https://war.oklahoma-airflow.grid.linkedin.com/dags/messages_sent_war__messaging-offline-tools/grid?root= Cluster Name: war Error Message: User:  ksudo@GRID.LINKEDIN.COM  is not allowed to impersonate messagingclient/mu_grid2_spark_009de3f0-17e1-4f75-aa37-125f95e7e97e@GRID.LINKEDIN.COM) encountered. Will not retry. User or Headless Account name that launches the job: proxy user used in Airflow DAG: messagingclient user:hwang7 Holdem executiom: https://holdem.oklahoma-airflow.grid.linkedin.com/dags/messages_sent_holdem__messaging-offline-tools/graph?execution_date=2025-07-18+23%3A58%3A03.435349%2B00%3A00 iris plan:  messaging-platform-airflow-offline-alerts Nested Titles: Grid / Not Able to Access Data",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-22 20:27:47.550000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-18T18:27:01Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:10:24Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153082,
            "tags": [
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Promote the headless account `widget` to WAR",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1393]",
              "comments": [
                {
                  "created": "2025-07-21T12:05:12.770-0700",
                  "updated": "2025-07-21T12:05:12.770-0700",
                  "comment_body": "please create a new request including successful workflows in holdem and confirmation of alerts for workflow failures",
                  "commented_by": "Heagan Ahmed"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131468",
              "created_ts": "2025-07-18T21:38:54.672+05:30",
              "issue_title": "Promote the headless account `widget` to WAR",
              "resolved_ts": "2025-07-21T19:05:12.732Z",
              "project_name": "APA Support Project",
              "assignee_name": "Heagan Ahmed",
              "reporter_name": "Xiaotian Zhan",
              "assignee_email": "heahmed@linkedin.com",
              "reporter_email": "xizhan@linkedin.com",
              "assignee_changes": [],
              "issue_description": "HDFS Path: N/A Error Message: Promote the headless account `widget` to WAR Cluster Name: WAR HDFS User or Headless Account Name that launches the Job: widget Nested Titles: Grid / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-21 19:05:12.798000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-18T16:08:55Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:10:24Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152990,
              153081
            ],
            "GroupMetaData": {
              "GroupID": 23534,
              "Insight": "Lack of robust validation, automated checks, and change control contributed to delays; absence of rollback mechanisms worsened issue recovery times.",
              "Summary": "Both issues stem from configuration errors delaying service, with prolonged resolution times of 74 and 98 hours, affecting deployment and data access reliability.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              152990
            ],
            "GroupMetaData": {
              "GroupID": 23527,
              "Insight": "Lack of detailed, updated documentation led to unclear workflows, highlighting the need for maintaining accurate and comprehensive technical resources.",
              "Summary": "Documentation gaps on process steps for promoting `widget` to WAR hindered timely resolution, causing delays and inefficiencies in task execution.",
              "GroupName": "Tag: Documentation_Gap",
              "GroupDescription": "Issues tagged with 'Documentation_Gap', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153081,
              153082
            ],
            "GroupMetaData": {
              "GroupID": 23535,
              "Insight": "Centralized approval bottlenecks and lack of clear prioritization extended resolution times, hindering efficiency for access provisioning in high-priority workflows.",
              "Summary": "Two access request issues logged; resolution times exceeded 74 hours, indicating delays in approvals or technical processes for essential internal access needs.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 2 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1752888600,
      "startTimestamp": 1752845400
    },
    {
      "id": 3889,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-14T05:14:03Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "cccb95a2-793c-4a3a-87f2-5845420100b1",
      "contentJSON": {
        "Items": [
          {
            "id": 153086,
            "tags": [
              {
                "id": 23513,
                "name": "Integration_Failure",
                "teamID": 6,
                "isGroup": false,
                "description": "Dependency between systems or services failed"
              },
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              }
            ],
            "title": "grid hosts faling ucm due to corepam module ",
            "content": {
              "labels": "",
              "comments": [
                {
                  "created": "2025-07-23T03:01:33.978-0700",
                  "updated": "2025-07-23T03:01:33.978-0700",
                  "comment_body": "All hosts associated with this ticket have completed the reimage process. Closing this ticket.",
                  "commented_by": "Ganesh Bingimalla"
                },
                {
                  "created": "2025-07-21T10:17:09.630-0700",
                  "updated": "2025-07-21T10:17:09.630-0700",
                  "comment_body": "After resubmitting the boxes ltx1-hcl29147.grid.linkedin.com\nltx1-hcl25768.grid.linkedin.com\nltx1-hcl29638.grid.linkedin.com\nltx1-hcl31643.grid.linkedin.com\nltx1-hcl31970.grid.linkedin.com\nltx1-hcl29175.grid.linkedin.com\nltx1-hcl46204.grid.linkedin.com\nltx1-hcl26016.grid.linkedin.com\nltx1-hcl29179.grid.linkedin.com\nltx1-hcl25970.grid.linkedin.com\nltx1-hcl29634.grid.linkedin.com\nltx1-hcl44113.grid.linkedin.com\nltx1-hcl30696.grid.linkedin.com\nltx1-hcl29008.grid.linkedin.com\nltx1-hcl31255.grid.linkedin.com\nltx1-hcl29109.grid.linkedin.com\nltx1-hcl31334.grid.linkedin.com\nltx1-hcl32000.grid.linkedin.com\nltx1-hcl31934.grid.linkedin.com\nltx1-hcl31376.grid.linkedin.com\nltx1-hcl29150.grid.linkedin.com\nltx1-hcl29839.grid.linkedin.com\nltx1-hcl29113.grid.linkedin.com\nltx1-hcl44068.grid.linkedin.com\nltx1-hcl44042.grid.linkedin.com\nltx1-hcl29151.grid.linkedin.com\nltx1-hcl28976.grid.linkedin.com\nltx1-hcl31327.grid.linkedin.com\nltx1-hcl30197.grid.linkedin.com\nltx1-hcl28951.grid.linkedin.com\nltx1-hcl44193.grid.linkedin.com\nltx1-hcl30252.grid.linkedin.com\nltx1-hcl29081.grid.linkedin.com\nltx1-hcl28956.grid.linkedin.com\nltx1-hcl44043.grid.linkedin.com\nltx1-hcl29594.grid.linkedin.com\nltx1-hcl31163.grid.linkedin.com\nltx1-hcl29662.grid.linkedin.com\nltx1-hcl44098.grid.linkedin.com\nltx1-hcl44118.grid.linkedin.com\nltx1-hcl29085.grid.linkedin.com\nltx1-hcl28915.grid.linkedin.com\nltx1-hcl29787.grid.linkedin.com\nltx1-hcl28920.grid.linkedin.com\nltx1-hcl44151.grid.linkedin.com\nltx1-hcl25857.grid.linkedin.com\nltx1-hcl28994.grid.linkedin.com\nltx1-hcl29074.grid.linkedin.com\nltx1-hcl31518.grid.linkedin.com\nltx1-hcl29139.grid.linkedin.com\nltx1-hcl29531.grid.linkedin.com\nltx1-hcl29162.grid.linkedin.com\nltx1-hcl29088.grid.linkedin.com\nltx1-hcl30240.grid.linkedin.com\nltx1-hcl44087.grid.linkedin.com\nltx1-hcl31059.grid.linkedin.com\nltx1-hcl29080.grid.linkedin.com\nltx1-hcl28977.grid.linkedin.com\nltx1-hcl29740.grid.linkedin.com\nltx1-hcl31868.grid.linkedin.com\nltx1-hcl29120.grid.linkedin.com\nltx1-hcl29640.grid.linkedin.com\nltx1-hcl28970.grid.linkedin.com\nltx1-hcl31926.grid.linkedin.com\nltx1-hcl31274.grid.linkedin.com\nltx1-hcl14838.grid.linkedin.com\nltx1-hcl28966.grid.linkedin.com\nltx1-hcl44176.grid.linkedin.com\nltx1-hcl41082.grid.linkedin.com\nltx1-hcl28912.grid.linkedin.com\nltx1-hcl28988.grid.linkedin.com\nltx1-hcl30672.grid.linkedin.com\nltx1-hcl44080.grid.linkedin.com\nltx1-hcl25906.grid.linkedin.com\nltx1-hcl44436.grid.linkedin.com\nltx1-hcl29186.grid.linkedin.com\nltx1-hcl29194.grid.linkedin.com\nltx1-hcl29020.grid.linkedin.com\nltx1-hcl23351.grid.linkedin.com\nltx1-hcl29144.grid.linkedin.com\nltx1-hcl31979.grid.linkedin.com\nltx1-hcl29556.grid.linkedin.com\nltx1-hcl29574.grid.linkedin.com\nltx1-hcl44192.grid.linkedin.com\nltx1-hcl29785.grid.linkedin.com\nltx1-hcl29618.grid.linkedin.com\nltx1-hcl31986.grid.linkedin.com\nltx1-hcl41162.grid.linkedin.com\nltx1-hcl29128.grid.linkedin.com\nltx1-hcl29730.grid.linkedin.com\nltx1-hcl31075.grid.linkedin.com\nltx1-hcl29014.grid.linkedin.com\nltx1-hcl44101.grid.linkedin.com\nltx1-hcl44457.grid.linkedin.com\nltx1-hcl31772.grid.linkedin.com\nltx1-hcl29073.grid.linkedin.com\nltx1-hcl29780.grid.linkedin.com\nltx1-hcl44237.grid.linkedin.com\nltx1-hcl26102.grid.linkedin.com\nltx1-hcl31139.grid.linkedin.com\nltx1-hcl29848.grid.linkedin.com\nltx1-hcl31901.grid.linkedin.com\nltx1-hcl31956.grid.linkedin.com\nltx1-hcl14935.grid.linkedin.com\nltx1-hcl28990.grid.linkedin.com\nltx1-hcl46212.grid.linkedin.com\nltx1-hcl29217.grid.linkedin.com\nltx1-hcl29544.grid.linkedin.com\nltx1-hcl29112.grid.linkedin.com\nltx1-hcl29554.grid.linkedin.com\nltx1-hcl28996.grid.linkedin.com\nltx1-hcl29042.grid.linkedin.com\nltx1-hcl29022.grid.linkedin.com\nltx1-hcl31682.grid.linkedin.com\nltx1-hcl29077.grid.linkedin.com\nltx1-hcl28902.grid.linkedin.com\nltx1-hcl29078.grid.linkedin.com\nltx1-hcl29694.grid.linkedin.com\nltx1-hcl46220.grid.linkedin.com\nltx1-hcl14839.grid.linkedin.com\nltx1-hcl44484.grid.linkedin.com\nltx1-hcl29534.grid.linkedin.com\nltx1-hcl14934.grid.linkedin.com\nltx1-hcl25846.grid.linkedin.com\nltx1-hcl29084.grid.linkedin.com\nltx1-hcl31828.grid.linkedin.com\nltx1-hcl28980.grid.linkedin.com\nltx1-hcl29007.grid.linkedin.com\nltx1-hcl29192.grid.linkedin.com\nltx1-hcl28930.grid.linkedin.com\nltx1-hcl29056.grid.linkedin.com\nltx1-hcl29102.grid.linkedin.com\nltx1-hcl31864.grid.linkedin.com\nltx1-hcl29154.grid.linkedin.com\nltx1-hcl29581.grid.linkedin.com\nltx1-hcl29015.grid.linkedin.com\nltx1-hcl41160.grid.linkedin.com\nltx1-hcl41094.grid.linkedin.com\nltx1-hcl46228.grid.linkedin.com\nltx1-hcl46214.grid.linkedin.com\nltx1-hcl44115.grid.linkedin.com\nltx1-hcl31871.grid.linkedin.com\nltx1-hcl41111.grid.linkedin.com\nltx1-hcl31921.grid.linkedin.com\nltx1-hcl29009.grid.linkedin.com\nltx1-hcl29168.grid.linkedin.com\nltx1-hcl28933.grid.linkedin.com\nltx1-hcl31639.grid.linkedin.com\nltx1-hcl44126.grid.linkedin.com\nltx1-hcl31820.grid.linkedin.com\nltx1-hcl46236.grid.linkedin.com\nltx1-hcl29733.grid.linkedin.com\nltx1-hcl30405.grid.linkedin.com\nltx1-hcl31907.grid.linkedin.com\nltx1-hcl30707.grid.linkedin.com\nltx1-hcl31922.grid.linkedin.com\nltx1-hcl29526.grid.linkedin.com\nltx1-hcl31672.grid.linkedin.com\nltx1-hcl25710.grid.linkedin.com\nltx1-hcl29765.grid.linkedin.com\nltx1-hcl29019.grid.linkedin.com\nltx1-hcl25829.grid.linkedin.com\nltx1-hcl44148.grid.linkedin.com\nltx1-hcl29043.grid.linkedin.com\nltx1-hcl30290.grid.linkedin.com\nltx1-hcl44093.grid.linkedin.com\nltx1-hcl29086.grid.linkedin.com\nltx1-hcl31467.grid.linkedin.com\nltx1-hcl29612.grid.linkedin.com\nltx1-hcl31507.grid.linkedin.com\nltx1-hcl44190.grid.linkedin.com\nltx1-hcl29036.grid.linkedin.com\nltx1-hcl29664.grid.linkedin.com\nltx1-hcl31285.grid.linkedin.com\nltx1-hcl30222.grid.linkedin.com\nltx1-hcl31195.grid.linkedin.com\nltx1-hcl31633.grid.linkedin.com",
                  "commented_by": "Mandaala Vishnu Naidu"
                },
                {
                  "created": "2025-07-21T04:02:59.483-0700",
                  "updated": "2025-07-21T04:02:59.483-0700",
                  "comment_body": "slack thread: Main thread: The absence of misc under /export/apps/gridops/ causing failure in corepam module convergence The dir is being created by the gridhadoop module and not in corepam since these hosts were k8s hosts and the gridhadoop module won’t be converged here (Since the gridhadoop is ramped by grid hosts only for hadoop worker fleet) We should revisit the approach creating misc dir under /export/apps/gridops fixes the issue with ownership root:hadooop and perm 755",
                  "commented_by": "Hariharan S"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-287111",
              "created_ts": "2025-07-21T10:23:05.72+05:30",
              "issue_title": "grid hosts faling ucm due to corepam module ",
              "resolved_ts": "2025-07-23T10:01:52.24Z",
              "project_name": "GRID",
              "assignee_name": "Hariharan S",
              "reporter_name": "Ganesh Bingimalla",
              "assignee_email": "hsivaprakash@linkedin.com",
              "reporter_email": "gbingimalla@linkedin.com",
              "assignee_changes": [],
              "issue_description": "We have received ucm failures on over 150 grid hosts due to the  corepam  module, with the error below.  sample hosts : ltx1-hcl31934.grid.linkedin.com ltx1-hcl29075.grid.linkedin.com puppet apply log for  corepam root@ltx1-hcl31934 [ ~ ]# /opt/puppetlabs/bin/puppet apply -e  'include corepam'\nNotice: Scope(Class[Corepam::Smart_quota]): running corepam smartquota\nError: Could not find resource 'File[/export/apps/gridops]' in parameter 'require' (file: /export/content/ucm/puppet/modules/corepam/manifests/smart_quota.pp, line: 49) on node ltx1-hcl31934.grid.linkedin.com\nroot@ltx1-hcl31934 [ ~ ]#  log: Error: Could not set 'file' on ensure: No such file or directory - A directory component in /export/apps/gridops/misc/smart_quota.profile20250721-908314-139stjo.lock does not exist or is a dangling symbolic link (file: /export/content/ucm/puppet/modules/corepam/manifests/smart_quota.pp, line: 56)\nError: Could not set 'file' on ensure: No such file or directory - A directory component in /export/apps/gridops/misc/smart_quota.profile20250721-908314-139stjo.lock does not exist or is a dangling symbolic link (file: /export/content/ucm/puppet/modules/corepam/manifests/smart_quota.pp, line: 56)\nWrapped exception:\nNo such file or directory - A directory component in /export/apps/gridops/misc/smart_quota.profile20250721-908314-139stjo.lock does not exist or is a dangling symbolic link\nError: /Stage[main]/Corepam::Smart_quota/File[/export/apps/gridops/misc/smart_quota.profile]/ensure: change from 'absent' to 'file' failed: Could not set 'file' on ensure: No such file or directory - A directory component in /export/apps/gridops/misc/smart_quota.profile20250721-908314-139stjo.lock does not exist or is a dangling symbolic link (file: /export/content/ucm/puppet/modules/corepam/manifests/smart_quota.pp, line: 56) ltx1-hcl28915.grid.linkedin.com ltx1-hcl44068.grid.linkedin.com ltx1-hcl28976.grid.linkedin.com ltx1-hcl44043.grid.linkedin.com ltx1-hcl44151.grid.linkedin.com ltx1-hcl29640.grid.linkedin.com ltx1-hcl29162.grid.linkedin.com ltx1-hcl31934.grid.linkedin.com ltx1-hcl14838.grid.linkedin.com ltx1-hcl29531.grid.linkedin.com ltx1-hcl31059.grid.linkedin.com ltx1-hcl30197.grid.linkedin.com ltx1-hcl31868.grid.linkedin.com ltx1-hcl28951.grid.linkedin.com ltx1-hcl41082.grid.linkedin.com ltx1-hcl29594.grid.linkedin.com ltx1-hcl31518.grid.linkedin.com ltx1-hcl31960.grid.linkedin.com ltx1-hcl25857.grid.linkedin.com ltx1-hcl29113.grid.linkedin.com ltx1-hcl28912.grid.linkedin.com ltx1-hcl31274.grid.linkedin.com ltx1-hcl28988.grid.linkedin.com ltx1-hcl29839.grid.linkedin.com ltx1-hcl28956.grid.linkedin.com ltx1-hcl44087.grid.linkedin.com ltx1-hcl44193.grid.linkedin.com ltx1-hcl40096.grid.linkedin.com ltx1-hcl31327.grid.linkedin.com ltx1-hcl31926.grid.linkedin.com ltx1-hcl29139.grid.linkedin.com ltx1-hcl29662.grid.linkedin.com ltx1-hcl29074.grid.linkedin.com ltx1-hcl29186.grid.linkedin.com ltx1-hcl29085.grid.linkedin.com ltx1-hcl28966.grid.linkedin.com ltx1-hcl29075.grid.linkedin.com ltx1-hcl44098.grid.linkedin.com ltx1-hcl30672.grid.linkedin.com ltx1-hcl44176.grid.linkedin.com ltx1-hcl28994.grid.linkedin.com ltx1-hcl44080.grid.linkedin.com ltx1-hcl31376.grid.linkedin.com ltx1-hcl44436.grid.linkedin.com ltx1-hcl29080.grid.linkedin.com ltx1-hcl31979.grid.linkedin.com ltx1-hcl44192.grid.linkedin.com ltx1-hcl29544.grid.linkedin.com ltx1-hcl26102.grid.linkedin.com ltx1-hcl14935.grid.linkedin.com ltx1-hcl31901.grid.linkedin.com ltx1-hcl46212.grid.linkedin.com ltx1-hcl31956.grid.linkedin.com ltx1-hcl29848.grid.linkedin.com ltx1-hcl29217.grid.linkedin.com ltx1-hcl29143.grid.linkedin.com ltx1-hcl31139.grid.linkedin.com ltx1-hcl29554.grid.linkedin.com ltx1-hcl28990.grid.linkedin.com ltx1-hcl28996.grid.linkedin.com ltx1-hcl29112.grid.linkedin.com ltx1-hcl29077.grid.linkedin.com ltx1-hcl29042.grid.linkedin.com ltx1-hcl29022.grid.linkedin.com ltx1-hcl29078.grid.linkedin.com ltx1-hcl31682.grid.linkedin.com ltx1-hcl29154.grid.linkedin.com ltx1-hcl29056.grid.linkedin.com ltx1-hcl28902.grid.linkedin.com ltx1-hcl29581.grid.linkedin.com ltx1-hcl29534.grid.linkedin.com ltx1-hcl25807.grid.linkedin.com ltx1-hcl46220.grid.linkedin.com ltx1-hcl14839.grid.linkedin.com ltx1-hcl14934.grid.linkedin.com ltx1-hcl29694.grid.linkedin.com ltx1-hcl31828.grid.linkedin.com ltx1-hcl29084.grid.linkedin.com ltx1-hcl28930.grid.linkedin.com ltx1-hcl44484.grid.linkedin.com ltx1-hcl28980.grid.linkedin.com ltx1-hcl31633.grid.linkedin.com ltx1-hcl29612.grid.linkedin.com ltx1-hcl39039.grid.linkedin.com ltx1-hcl47435.grid.linkedin.com ltx1-hcl29120.grid.linkedin.com ltx1-hcl29018.grid.linkedin.com ltx1-hcl30252.grid.linkedin.com ltx1-hcl42723.grid.linkedin.com ltx1-hcl29088.grid.linkedin.com ltx1-hcl44042.grid.linkedin.com ltx1-hcl29787.grid.linkedin.com ltx1-hcl29151.grid.linkedin.com ltx1-hcl29194.grid.linkedin.com ltx1-hcl29150.grid.linkedin.com ltx1-hcl29081.grid.linkedin.com ltx1-hcl30240.grid.linkedin.com ltx1-hcl29020.grid.linkedin.com ltx1-hcl31163.grid.linkedin.com ltx1-hcl28977.grid.linkedin.com ltx1-hcl28920.grid.linkedin.com ltx1-hcl23351.grid.linkedin.com ltx1-hcl25906.grid.linkedin.com ltx1-hcl29144.grid.linkedin.com ltx1-hcl29574.grid.linkedin.com ltx1-hcl29556.grid.linkedin.com ltx1-hcl29618.grid.linkedin.com ltx1-hcl29785.grid.linkedin.com ltx1-hcl44494.grid.linkedin.com ltx1-hcl44101.grid.linkedin.com ltx1-hcl31772.grid.linkedin.com ltx1-hcl31075.grid.linkedin.com ltx1-hcl29128.grid.linkedin.com ltx1-hcl31986.grid.linkedin.com ltx1-hcl29730.grid.linkedin.com ltx1-hcl41162.grid.linkedin.com ltx1-hcl31358.grid.linkedin.com ltx1-hcl44457.grid.linkedin.com ltx1-hcl29060.grid.linkedin.com ltx1-hcl44237.grid.linkedin.com ltx1-hcl29073.grid.linkedin.com ltx1-hcl29780.grid.linkedin.com ltx1-hcl29014.grid.linkedin.com ltx1-hcl41160.grid.linkedin.com ltx1-hcl29192.grid.linkedin.com ltx1-hcl29102.grid.linkedin.com ltx1-hcl25846.grid.linkedin.com ltx1-hcl29007.grid.linkedin.com ltx1-hcl31864.grid.linkedin.com ltx1-hcl46214.grid.linkedin.com ltx1-hcl41094.grid.linkedin.com ltx1-hcl29015.grid.linkedin.com ltx1-hcl29009.grid.linkedin.com ltx1-hcl31639.grid.linkedin.com ltx1-hcl44115.grid.linkedin.com ltx1-hcl47378.grid.linkedin.com ltx1-hcl5638.grid.linkedin.com lva1-hcl27119.grid.linkedin.com ltx1-hcl46228.grid.linkedin.com ltx1-hcl31871.grid.linkedin.com ltx1-hcl29168.grid.linkedin.com ltx1-hcl31820.grid.linkedin.com ltx1-hcl31921.grid.linkedin.com ltx1-hcl41111.grid.linkedin.com ltx1-hcl44126.grid.linkedin.com ltx1-hcl29733.grid.linkedin.com ltx1-hcl46236.grid.linkedin.com ltx1-hcl28933.grid.linkedin.com ltx1-hcl30405.grid.linkedin.com ltx1-hcl31922.grid.linkedin.com ltx1-hcl30707.grid.linkedin.com ltx1-hcl29526.grid.linkedin.com ltx1-hcl31672.grid.linkedin.com ltx1-hcl25710.grid.linkedin.com ltx1-hcl29043.grid.linkedin.com ltx1-hcl44093.grid.linkedin.com ltx1-hcl31907.grid.linkedin.com ltx1-hcl29019.grid.linkedin.com ltx1-hcl30290.grid.linkedin.com ltx1-hcl25829.grid.linkedin.com ltx1-hcl30222.grid.linkedin.com ltx1-hcl29627.grid.linkedin.com ltx1-hcl44148.grid.linkedin.com ltx1-hcl29765.grid.linkedin.com ltx1-hcl29036.grid.linkedin.com ltx1-hcl29086.grid.linkedin.com ltx1-hcl31195.grid.linkedin.com ltx1-hcl31507.grid.linkedin.com ltx1-hcl29664.grid.linkedin.com ltx1-hcl44190.grid.linkedin.com ltx1-hcl31467.grid.linkedin.com ltx1-hcl31285.grid.linkedin.com ltx1-hcl11198.grid.linkedin.com ltx1-hcl47471.grid.linkedin.com ltx1-hcl44118.grid.linkedin.com ltx1-hcl28970.grid.linkedin.com ltx1-hcl29740.grid.linkedin.com ltx1-hcl8887.grid.linkedin.com ltx1-hcl57554.grid.linkedin.com",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-23 10:01:52.278000 UTC",
                  "from_state": "In Progress"
                },
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-07-23 10:01:44.307000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-21T04:53:06Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:14:01Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              153086
            ],
            "GroupMetaData": {
              "GroupID": 23515,
              "Insight": "Integration broke due to module dependency mismatch; early validation and configuration audits can prevent similar incidents in the future.",
              "Summary": "CorePAM module misconfiguration caused grid host failures in UCM, resolved within 53 hours, impacting system functionality and team productivity.",
              "GroupName": "Tag: Integration_Failure",
              "GroupDescription": "Issues tagged with 'Integration_Failure', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153086
            ],
            "GroupMetaData": {
              "GroupID": 23517,
              "Insight": "Weak change validation in corepam updates caused delays; improved automated checks and rollback planning are essential to prevent similar issues.",
              "Summary": "Grid hosts outage caused by corepam misconfiguration, leading to failed UCM operations and 53-hour resolution time.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1753104600,
      "startTimestamp": 1753061400
    },
    {
      "id": 3890,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-14T05:14:40Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "3ec167c6-05fd-4df8-ae95-1a2df63b6e0c",
      "contentJSON": {
        "Items": [
          {
            "id": 153088,
            "tags": [
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23536,
                "name": "Change_Approval_Delay",
                "teamID": 6,
                "isGroup": false,
                "description": "Deployment or hotfix blocked due to missing approvals"
              }
            ],
            "title": "Request to add svc_pr_vsmind to svc_pr_cdmp headless account",
            "content": {
              "labels": "[grid_self_service]",
              "comments": [
                {
                  "created": "2025-07-21T14:10:20.698-0700",
                  "updated": "2025-07-21T14:10:20.698-0700",
                  "comment_body": "User svc_pr_vsmind has been added to svc_pr_cdmp by @Hao Fu",
                  "commented_by": ""
                },
                {
                  "created": "2025-07-21T14:03:55.249-0700",
                  "updated": "2025-07-21T14:03:55.249-0700",
                  "comment_body": "Added group admin(s) as watchers for approval. This request requires one of the following people to approve it in self service: @Naren Bhosle @Anupchandra Rao @Hao Fu @Chris Trezzo Please log in and visit https://www.grid.linkedin.com/self_service/#/account/svc_pr_cdmp to review this request.",
                  "commented_by": ""
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-287263",
              "created_ts": "2025-07-21T21:03:38.237+05:30",
              "issue_title": "Request to add svc_pr_vsmind to svc_pr_cdmp headless account",
              "resolved_ts": "2025-07-21T21:10:22.32Z",
              "project_name": "GRID",
              "assignee_name": "Naren Bhosle",
              "reporter_name": "Gaurav Ahlawat",
              "assignee_email": "nbhosle@linkedin.com",
              "reporter_email": "gahlawat@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-07-21 21:03:39.914000 UTC",
                  "to_assignee": "Naren Bhosle",
                  "from_assignee": ""
                }
              ],
              "issue_description": "  Glean profile  has requested to add the  svc_pr_vsmind          headless account to the  svc_pr_cdmp  headless account. This would allow  svc_pr_vsmind : Access to all files on HDFS owned by  svc_pr_cdmp Permission to create and delete files on HDFS owned by  svc_pr_cdmp",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-21 21:10:22.357000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-21T15:33:38Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:14:38Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              153088
            ],
            "GroupMetaData": {
              "GroupID": 23507,
              "Insight": "Missing priority tags and status updates may delay resolution tracking, emphasizing the need for standardized ticketing practices and transparent workflows.",
              "Summary": "A single access request resolved in 5h37m indicates efficient handling but lacks detailed priority categorization or explicit status tracking.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153088
            ],
            "GroupMetaData": {
              "GroupID": 23537,
              "Insight": "Lack of clear status updates hindered transparency, creating bottlenecks in the approval workflow and slowing resolution.",
              "Summary": "Approval delays caused a resolution time of over 5 hours, impacting task efficiency and delivery timelines.",
              "GroupName": "Tag: Change_Approval_Delay",
              "GroupDescription": "Issues tagged with 'Change_Approval_Delay', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1753147800,
      "startTimestamp": 1753104600
    },
    {
      "id": 3893,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-14T05:15:29Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "fd2dc738-1045-4a0c-bef6-7b2b95d52027",
      "contentJSON": {
        "Items": [
          {
            "id": 153092,
            "tags": [
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              },
              {
                "id": 23518,
                "name": "Infra_Deployment_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Deployment failures causing infrastructure instability or downtime"
              }
            ],
            "title": "Grid - promote the headless acc 'slm' to WAR",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1401]",
              "comments": [
                {
                  "created": "2025-07-22T04:07:35.345-0700",
                  "updated": "2025-07-22T04:07:35.345-0700",
                  "comment_body": "https://linkedin.atlassian.net/browse/GRID-287396",
                  "commented_by": "Hariharan S"
                },
                {
                  "created": "2025-07-24T01:48:06.369-0700",
                  "updated": "2025-07-24T01:48:06.369-0700",
                  "comment_body": "Request completed and the acc promoted to WAR Closing the ticket",
                  "commented_by": "Hariharan S"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131540",
              "created_ts": "2025-07-22T10:47:19.123+05:30",
              "issue_title": "Grid - promote the headless acc 'slm' to WAR",
              "resolved_ts": "2025-07-24T08:48:14.772Z",
              "project_name": "APA Support Project",
              "assignee_name": "Hariharan S",
              "reporter_name": "Anirban Biswas",
              "assignee_email": "hsivaprakash@linkedin.com",
              "reporter_email": "anbiswas@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Browser: https://www.grid.linkedin.com/self_service/#/account/slm Hadoop Job Link: https://www.grid.linkedin.com/self_service/#/account/slm Cluster name: lva1-war Error Message: The slm headless that got created don't have lva1-war space. Can you please help allocate that? Nested Titles: Grid / Other Grid Issue",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-07-22 11:07:40.808000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-24 08:48:14.803000 UTC",
                  "from_state": "In Progress"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-22T05:17:19Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:15:28Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              153092
            ],
            "GroupMetaData": {
              "GroupID": 23519,
              "Insight": "Delayed resolution (51h) may indicate inadequate rollback mechanisms or monitoring gaps, impacting reliability and timely recovery in the deployment pipeline.",
              "Summary": "Deployment of 'slm' to WAR caused delays, resolving after 51+ hours. Effects included potential instability or downtime during long resolution time.",
              "GroupName": "Tag: Infra_Deployment_Error",
              "GroupDescription": "Issues tagged with 'Infra_Deployment_Error', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153092
            ],
            "GroupMetaData": {
              "GroupID": 23517,
              "Insight": "Lack of pre-deployment checks and clear rollback processes led to prolonged outages; automated validations and better oversight could mitigate such risks.",
              "Summary": "Misconfiguration during 'slm' deployment to WAR caused extended resolution time of 51.5 hours, highlighting inadequate validation procedures and readiness issues.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1753191000,
      "startTimestamp": 1753147800
    },
    {
      "id": 3894,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-14T05:17:11Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "c6635954-327c-43a5-9dbc-758314bf2652",
      "contentJSON": {
        "Items": [
          {
            "id": 153095,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Offline Data Processing - Requests:  Quotas, Accounts, Permissions, etc. - Change Directory Owner and/or Permissions in HDFS - 2025-07-23",
            "content": {
              "labels": "[from-supportal, supportal-grid, supportal-grid-change-ownership, supportal-v1, supportal-v1-problem-type:activityflow/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1401]",
              "comments": [],
              "priority": "Unspecified",
              "issue_key": "APA-131593",
              "created_ts": "2025-07-23T00:28:20.636+05:30",
              "issue_title": "Offline Data Processing - Requests:  Quotas, Accounts, Permissions, etc. - Change Directory Owner and/or Permissions in HDFS - 2025-07-23",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Anisha Bopardikar",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "abopardikar@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-07-23 00:31:44.194000 UTC",
                  "to_assignee": "Anisha Bopardikar",
                  "from_assignee": "Bowen Jiao"
                },
                {
                  "timestamp": "2025-07-23 00:32:01.341000 UTC",
                  "to_assignee": "",
                  "from_assignee": "Anisha Bopardikar"
                },
                {
                  "timestamp": "2025-07-23 00:33:03.985000 UTC",
                  "to_assignee": "Bowen Jiao",
                  "from_assignee": ""
                }
              ],
              "issue_description": "Hdfs Path: Three paths: / user / abopardi / u_abopardi.db / ne_1day_dataset_cleaned1/   ,     / user / abopardi / u_abopardi.db / ne_1day_dataset_cleaned1_updated /   ,         / user / abopardi / u_abopardi.db / ne_1day_dataset/ Cluster Name: holdem Error Message: Query failed: Access denied: The table u_abopardi.ne_1day_dataset_cleaned1_updated is not readable and may have been locked and marked for deletion. You can unlock your data by following the procedure at go/limited-retention. Query Details can be found at:  https://trino.corp.linkedin.com/ui/query.html?20250723_000116_00151_iqg53  If you are getting 'Query not found' in trino portal due to expiry, please re-execute the query to get new url. user or Headless Account Name That Launches the Job: abopardi Nested Titles: Offline Data Processing / Requests:  Quotas, Accounts, Permissions, etc. / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-22T18:58:21Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:17:09Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153096,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              }
            ],
            "title": "Offline Data Processing - Requests:  Quotas, Accounts, Permissions, etc. - Change Directory Owner and/or Permissions in HDFS - 2025-07-23",
            "content": {
              "labels": "[from-supportal, supportal-grid, supportal-grid-change-ownership, supportal-v1, supportal-v1-problem-type:activityflow/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1401]",
              "comments": [],
              "priority": "Unspecified",
              "issue_key": "APA-131592",
              "created_ts": "2025-07-23T00:23:45.706+05:30",
              "issue_title": "Offline Data Processing - Requests:  Quotas, Accounts, Permissions, etc. - Change Directory Owner and/or Permissions in HDFS - 2025-07-23",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Anisha Bopardikar",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "abopardikar@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Hdfs Path: / user / abopardi / u_abopardi.db / ne_1day_dataset_cleaned1_updated / Cluster Name: holdem Error Message: Query failed: Access denied: The table u_abopardi.ne_1day_dataset_cleaned1_updated is not readable and may have been locked and marked for deletion. You can unlock your data by following the procedure at go/limited-retention. Query Details can be found at:  https://trino.corp.linkedin.com/ui/query.html?20250723_000116_00151_iqg53  If you are getting 'Query not found' in trino portal due to expiry, please re-execute the query to get new url. user or Headless Account Name That Launches the Job: u_abopardi Nested Titles: Offline Data Processing / Requests:  Quotas, Accounts, Permissions, etc. / Change Directory Owner and/or Permissions in HDFS",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-22T18:53:46Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:17:09Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153097,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Grid - General Hadoop - 2025-07-23",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/general-hadoop, supportal-v1-version:0.0.1401]",
              "comments": [
                {
                  "created": "2025-07-22T17:12:16.228-0700",
                  "updated": "2025-07-22T17:12:16.228-0700",
                  "comment_body": "Could not ssh to ssh -K ltx1-faroaz03.grid.linkedin.com UNAUTHORIZED ACCESS TO THIS DEVICE IS PROHIBITED. All attempts to access this system are monitored and recorded. All access to this system is monitored and recorded.  Connection closed by UNKNOWN port 65535 mikwang@mikwang-mn1 ~ % ssh using -vvv                         OpenSSH_9.9p2",
                  "commented_by": "Mike Wang"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131591",
              "created_ts": "2025-07-23T00:11:32.796+05:30",
              "issue_title": "Grid - General Hadoop - 2025-07-23",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Mike Wang",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "mikwang@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Cluster name: ltx1-faroaz03.grid.linkedin.com Nested Titles: Grid / General Hadoop",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-22T18:41:33Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:17:09Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153098,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23538,
                "name": "Quota_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "User hit an internal quota or service limit"
              }
            ],
            "title": "Grid - Quota Request - 2025-07-22",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/quota-request, supportal-v1-version:0.0.1401]",
              "comments": [
                {
                  "created": "2025-07-22T15:00:00.541-0700",
                  "updated": "2025-07-22T15:00:00.541-0700",
                  "comment_body": "Please use go/selfservice to raise quota expansion request",
                  "commented_by": "Bowen Jiao"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131579",
              "created_ts": "2025-07-22T21:52:44.846+05:30",
              "issue_title": "Grid - Quota Request - 2025-07-22",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Shifu Wang",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "shiwang@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Retention policy: Bump headless account quota  HDFS Path: https://ltx1-holdemaz03.grid.linkedin.com:8443/hdfs/jobs/imventure Use-case Justification: We have two use cases sharing the same headless account. Insights  and jtbd-loops.  Insights is the original one. jtbd-loops is a venture project. We can potentially move this venture project to a new headless account later if we plan to ramp it up. Cluster Name: holdemaz03 Nested Titles: Grid / Quota Request",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-22T16:22:45Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:17:09Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153099,
            "tags": [
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "Request to add gtmmarketing to svc_pr_cdmp headless account",
            "content": {
              "labels": "[grid_self_service]",
              "comments": [
                {
                  "created": "2025-07-22T13:23:30.241-0700",
                  "updated": "2025-07-22T13:23:30.241-0700",
                  "comment_body": "Added group admin(s) as watchers for approval. This request requires one of the following people to approve it in self service: @Naren Bhosle @Hao Fu @Anupchandra Rao @Chris Trezzo Please log in and visit https://www.grid.linkedin.com/self_service/#/account/svc_pr_cdmp to review this request.",
                  "commented_by": ""
                },
                {
                  "created": "2025-07-22T13:26:09.767-0700",
                  "updated": "2025-07-22T13:26:09.767-0700",
                  "comment_body": "User gtmmarketing has been added to svc_pr_cdmp by @Hao Fu",
                  "commented_by": ""
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-287496",
              "created_ts": "2025-07-22T20:23:17.08+05:30",
              "issue_title": "Request to add gtmmarketing to svc_pr_cdmp headless account",
              "resolved_ts": "2025-07-22T20:26:11.461Z",
              "project_name": "GRID",
              "assignee_name": "Naren Bhosle",
              "reporter_name": "Sachin Rodge",
              "assignee_email": "nbhosle@linkedin.com",
              "reporter_email": "sarodge@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-07-22 20:23:18.547000 UTC",
                  "to_assignee": "Naren Bhosle",
                  "from_assignee": ""
                }
              ],
              "issue_description": "  Glean profile  has requested to add the  gtmmarketing          headless account to the  svc_pr_cdmp  headless account. This would allow  gtmmarketing : Access to all files on HDFS owned by  svc_pr_cdmp Permission to create and delete files on HDFS owned by  svc_pr_cdmp",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-22 20:26:11.518000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-22T14:53:17Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:17:09Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153100,
            "tags": [
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              }
            ],
            "title": "promote headless account `widget to war",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/change-directory-owner-andor-permissions-in-hdfs, supportal-v1-version:0.0.1311]",
              "comments": [
                {
                  "created": "2025-07-22T12:19:32.684-0700",
                  "updated": "2025-07-22T12:19:32.684-0700",
                  "comment_body": "please ping current oncall for this ticket cc @Bowen Jiao",
                  "commented_by": "Heagan Ahmed"
                },
                {
                  "created": "2025-07-22T14:11:31.543-0700",
                  "updated": "2025-07-22T14:11:31.543-0700",
                  "comment_body": "Request has been approved by @Bowen Jiao Comment:",
                  "commented_by": ""
                },
                {
                  "created": "2025-07-22T16:57:52.211-0700",
                  "updated": "2025-07-22T16:57:52.211-0700",
                  "comment_body": "bjiao updated request in the queue. Updated fields: {'status': 'pending'}.                     Comment: Try again",
                  "commented_by": ""
                },
                {
                  "created": "2025-07-22T13:27:02.603-0700",
                  "updated": "2025-07-22T13:27:02.603-0700",
                  "comment_body": "Hi @Heagan Ahmed",
                  "commented_by": "Xiaotian Zhan"
                },
                {
                  "created": "2025-07-22T17:39:39.508-0700",
                  "updated": "2025-07-22T17:39:39.508-0700",
                  "comment_body": "Request is automatically processed.",
                  "commented_by": ""
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-287510",
              "created_ts": "2025-07-22T19:03:49.732+05:30",
              "issue_title": "promote headless account `widget to war",
              "resolved_ts": "2025-07-23T00:39:40.339Z",
              "project_name": "GRID",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Xiaotian Zhan",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "xizhan@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-07-22 19:19:41.012000 UTC",
                  "to_assignee": "Bowen Jiao",
                  "from_assignee": "Heagan Ahmed"
                }
              ],
              "issue_description": "promote headless account  widget  to war Successful Holdem Execution:  https://flyte-prod.prod.linkedin.com/projects/widget-data-processing/domains/development/workflows/flows.widget_tracking_process_flow.process_widget_tracking_data_flow Iris plan:   ",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-23 00:39:40.365000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-22T13:33:50Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:17:09Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153101,
            "tags": [
              {
                "id": 23523,
                "name": "Monitoring_Gap",
                "teamID": 6,
                "isGroup": false,
                "description": "Alerting was absent, delayed, or misleading"
              },
              {
                "id": 23538,
                "name": "Quota_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "User hit an internal quota or service limit"
              }
            ],
            "title": "Grid - Other Grid Issue - 2025-07-22",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1401]",
              "comments": [
                {
                  "created": "2025-07-22T12:50:22.625-0700",
                  "updated": "2025-07-22T12:50:22.625-0700",
                  "comment_body": "The alert is firing for path /user/follrecs",
                  "commented_by": "Bowen Jiao"
                },
                {
                  "created": "2025-07-22T12:02:02.266-0700",
                  "updated": "2025-07-22T12:02:02.266-0700",
                  "comment_body": "Keep getting quota issue eventhoug not near limit",
                  "commented_by": "Abdullah Siddique"
                },
                {
                  "created": "2025-07-22T12:02:41.168-0700",
                  "updated": "2025-07-22T12:02:41.168-0700",
                  "comment_body": "Alert on slack that keep happening",
                  "commented_by": "Abdullah Siddique"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131564",
              "created_ts": "2025-07-22T19:00:36.654+05:30",
              "issue_title": "Grid - Other Grid Issue - 2025-07-22",
              "resolved_ts": "2025-07-23T01:19:15.63Z",
              "project_name": "APA Support Project",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Abdullah Siddique",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "absiddique@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Browser: NA Hadoop Job Link: NA Cluster name: HOLDEM Error Message: KEEP GETTING NSQUOTA ALERT Nested Titles: Grid / Other Grid Issue",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-23 01:19:15.659000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-22T13:30:37Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:17:09Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              153101
            ],
            "GroupMetaData": {
              "GroupID": 23539,
              "Insight": "The gap stemmed from incomplete alert coverage and a lack of automated escalation mechanisms for timely detection and response.",
              "Summary": "Monitoring failed to detect or escalate a critical grid issue on time, resulting in a delayed resolution of nearly 12 hours.",
              "GroupName": "Tag: Monitoring_Gap",
              "GroupDescription": "Issues tagged with 'Monitoring_Gap', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153095,
              153096,
              153097,
              153098
            ],
            "GroupMetaData": {
              "GroupID": 23540,
              "Insight": "Primary delays appear linked to resource constraints, as all tasks were assigned to one individual, Bowen Jiao, who may have faced workload balancing challenges. Additionally, the absence of detailed status changes and comments suggests potential delays due to untracked workflows or unclear requirement transitions.",
              "Summary": "These Jira issues primarily revolved around administrative requests involving HDFS directory permissions, quota changes, and general Hadoop operations. The core challenges likely stemmed from technical complexities related to data processing systems, compounded by possible dependencies on underlying Hadoop infrastructure and processes.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 4 times"
            }
          },
          {
            "ItemsList": [
              153095,
              153096,
              153097,
              153099,
              153100
            ],
            "GroupMetaData": {
              "GroupID": 23541,
              "Insight": "Delays stem from vague status updates, dependency on specific assignees, and inconsistent prioritization or workflow clarity for access permissions.",
              "Summary": "Five access requests, with delays primarily in unclear priorities or processing timelines. Resolutions ranged from 5 to 11 hours for 2 recorded cases.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 5 times"
            }
          },
          {
            "ItemsList": [
              153096
            ],
            "GroupMetaData": {
              "GroupID": 23517,
              "Insight": "Processes lack robust change validation, automated checks, and rollback mechanisms, increasing risk of service disruption due to configuration errors.",
              "Summary": "Misconfiguration in HDFS directory ownership/permissions caused degraded service; validation and approval gaps likely contributed to the issue.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153098,
              153101
            ],
            "GroupMetaData": {
              "GroupID": 23542,
              "Insight": "Frequent unresolved quota limits suggest misconfigurations or lack of automation for scaling user services quickly.",
              "Summary": "Quota request issues indicate unclear resolution paths and delays, impacting grid scalability and user experience.",
              "GroupName": "Tag: Quota_Request",
              "GroupDescription": "Issues tagged with 'Quota_Request', occurred 2 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1753234200,
      "startTimestamp": 1753191000
    },
    {
      "id": 3895,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-14T05:18:01Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "c35a685c-e5c5-44be-aa22-86a56043f7e4",
      "contentJSON": {
        "Items": [
          {
            "id": 152996,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              }
            ],
            "title": "Grid - Other Grid Issue - 2025-07-24",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1402]",
              "comments": [
                {
                  "created": "2025-08-06T19:22:56.962-0700",
                  "updated": "2025-08-06T19:22:56.962-0700",
                  "comment_body": "please close this ticket for posterity: the headless ltsops did not have any crews attached to it",
                  "commented_by": "Ujjwal Kumar"
                },
                {
                  "created": "2025-07-24T01:58:50.863-0700",
                  "updated": "2025-07-24T01:58:50.863-0700",
                  "comment_body": "@Simin Wang (GFuel oncall) Will you be able to take a look thanks !!",
                  "commented_by": "Hariharan S"
                },
                {
                  "created": "2025-07-23T20:48:31.549-0700",
                  "updated": "2025-07-23T20:48:31.549-0700",
                  "comment_body": "Unable to request access to ltsops headless from teaidata:",
                  "commented_by": "Ujjwal Kumar"
                },
                {
                  "created": "2025-08-06T16:21:33.241-0700",
                  "updated": "2025-08-06T16:21:33.241-0700",
                  "comment_body": "please use go/ggrid",
                  "commented_by": "Simin Wang"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131681",
              "created_ts": "2025-07-24T03:46:45.29+05:30",
              "issue_title": "Grid - Other Grid Issue - 2025-07-24",
              "resolved_ts": "2025-08-07T02:23:29.611Z",
              "project_name": "APA Support Project",
              "assignee_name": "Simin Wang",
              "reporter_name": "Ujjwal Kumar",
              "assignee_email": "simwang@linkedin.com",
              "reporter_email": "ujkumar@linkedin.com",
              "assignee_changes": [
                {
                  "timestamp": "2025-07-24 08:58:57.659000 UTC",
                  "to_assignee": "Simin Wang",
                  "from_assignee": "Hariharan S"
                }
              ],
              "issue_description": "Browser: Chrome Hadoop Job Link: https://www.grid.linkedin.com/self_service/#/account/teaidata Cluster name: Holdem Error Message: Error creating request to add teaidata to headless account ltsops Nested Titles: Grid / Other Grid Issue",
              "status_transitions": [
                {
                  "to_state": "Resolved",
                  "timestamp": "2025-08-07 02:23:10.777000 UTC",
                  "from_state": "On Hold"
                },
                {
                  "to_state": "On Hold",
                  "timestamp": "2025-08-06 23:22:25.741000 UTC",
                  "from_state": "Open"
                },
                {
                  "to_state": "Closed",
                  "timestamp": "2025-08-07 02:23:29.658000 UTC",
                  "from_state": "Resolved"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-23T22:16:45Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:18:00Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153116,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23543,
                "name": "Region_Specific",
                "teamID": 6,
                "isGroup": false,
                "description": "Outage limited to a particular region or zone"
              }
            ],
            "title": "Requesting the node for Trino's NSS migration in prod-lva1",
            "content": {
              "labels": "",
              "comments": [
                {
                  "created": "2025-07-31T10:17:11.030-0700",
                  "updated": "2025-07-31T10:17:11.030-0700",
                  "comment_body": "@Slim Bouguerra / @Jalpan Randeri Here is the hostlist https://inops.corp.linkedin.com/inops/devices/list?device_id=%3D%3D+2663962 The above list has 26 hosts (4 + 22 as per the ask) Just renamed Only pool remains unchanged and that will get changed while migrating to nimbus lva1-app181286.prod.linkedin.com\nlva1-app181288.prod.linkedin.com\nlva1-app181298.prod.linkedin.com\nlva1-app181302.prod.linkedin.com\nlva1-app181283.prod.linkedin.com\nlva1-app181301.prod.linkedin.com\nlva1-app181284.prod.linkedin.com\nlva1-app181296.prod.linkedin.com\nlva1-app181294.prod.linkedin.com\nlva1-app181290.prod.linkedin.com\nlva1-app181300.prod.linkedin.com\nlva1-app181278.prod.linkedin.com\nlva1-app181292.prod.linkedin.com\nlva1-app181287.prod.linkedin.com\nlva1-app181303.prod.linkedin.com\nlva1-app181297.prod.linkedin.com\nlva1-app181295.prod.linkedin.com\nlva1-app181279.prod.linkedin.com\nlva1-app181299.prod.linkedin.com\nlva1-app181285.prod.linkedin.com\nlva1-app181280.prod.linkedin.com\nlva1-app181281.prod.linkedin.com\nlva1-app181282.prod.linkedin.com\nlva1-app181293.prod.linkedin.com\nlva1-app181289.prod.linkedin.com\nlva1-app181291.prod.linkedin.com cc @Somnath Pal",
                  "commented_by": "Hariharan S"
                },
                {
                  "created": "2025-07-28T09:07:55.941-0700",
                  "updated": "2025-07-28T09:07:55.941-0700",
                  "comment_body": "Machines to be returned ➜  trino-acm git:(jranderi/use-atd) ergo %inops.allocation.pool.lps_k8s_0_trino | grep  'lva'\nlva1-hcl24431.grid.linkedin.com\nlva1-hcl24432.grid.linkedin.com\nlva1-hcl24444.grid.linkedin.com\nlva1-hcl24446.grid.linkedin.com\nlva1-hcl24451.grid.linkedin.com\nlva1-hcl24454.grid.linkedin.com\nlva1-hcl24461.grid.linkedin.com\nlva1-hcl24463.grid.linkedin.com\nlva1-hcl24466.grid.linkedin.com\nlva1-hcl24468.grid.linkedin.com\nlva1-hcl24473.grid.linkedin.com\nlva1-hcl24479.grid.linkedin.com\nlva1-hcl24483.grid.linkedin.com\nlva1-hcl24528.grid.linkedin.com\nlva1-hcl24537.grid.linkedin.com\nlva1-hcl24544.grid.linkedin.com\nlva1-hcl24548.grid.linkedin.com\nlva1-hcl24552.grid.linkedin.com\nlva1-hcl24553.grid.linkedin.com\nlva1-hcl24576.grid.linkedin.com\nlva1-hcl24578.grid.linkedin.com\nlva1-hcl24584.grid.linkedin.com\nlva1-hcl24587.grid.linkedin.com\nlva1-hcl24588.grid.linkedin.com\nlva1-hcl24609.grid.linkedin.com",
                  "commented_by": "Jalpan Randeri"
                },
                {
                  "created": "2025-07-28T09:20:32.466-0700",
                  "updated": "2025-07-28T09:20:32.466-0700",
                  "comment_body": "Trino SKU in prod-lva1 ➜  trino-acm git:(jranderi/use-atd) nimbus cb nodeprofile show trino -f prod-lva1\nName:                               trino\nCM Profile:                         nimbus-general\nOS Distribution Version:            MARINER_2\nHardware Profile:                   SKU List: [ServerSku_C4a_64C_512GB_3p2T, ServerSku_C4a_64C_512GB_6p4T, ServerSku_C4a_64C_512GB_12T]\nDisk Profile:                       Disk profile is not set\nRequire Same Subnet:                false\n➜  trino-acm git:(jranderi/use-atd)",
                  "commented_by": "Jalpan Randeri"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-287837",
              "created_ts": "2025-07-23T23:36:23.571+05:30",
              "issue_title": "Requesting the node for Trino's NSS migration in prod-lva1",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "GRID",
              "assignee_name": "Hariharan S",
              "reporter_name": "Jalpan Randeri",
              "assignee_email": "hsivaprakash@linkedin.com",
              "reporter_email": "jranderi@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Hello Grid Team,  Trino team is planning prod-lva1 migration. However, We do not have spare machines to perform this migration thus requesting machines for it.  NSS Details: Trino cluster: war01 product-tag:  war01-coordinator nss-pool:   prod-lva1.k8s-34.trino-4fce9 count:  2 product-tag:  war01-worker nss-pool:  prod-lva1.k8s-35.trino-4fce9 count:  9 Trino cluster: war02 product-tag:  war02-coordinator nss-pool:  prod-lva1.k8s-1.trino-4fce9 count:  2 product-tag:  war02-worker nss-pool:  prod-lva1.k8s-36.trino-4fce9 count:  9 Additional 4 machines for the trino-war-preprod canary.",
              "status_transitions": [
                {
                  "to_state": "In Progress",
                  "timestamp": "2025-07-31 17:17:32.975000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-23T18:06:24Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:18:00Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153117,
            "tags": [
              {
                "id": 23513,
                "name": "Integration_Failure",
                "teamID": 6,
                "isGroup": false,
                "description": "Dependency between systems or services failed"
              },
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              }
            ],
            "title": "Grid - Other Grid Issue - 2025-07-23",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1401]",
              "comments": [
                {
                  "created": "2025-07-23T17:37:22.936-0700",
                  "updated": "2025-07-23T17:37:22.936-0700",
                  "comment_body": "Does the flow run successfully on Holdem?",
                  "commented_by": "Bowen Jiao"
                },
                {
                  "created": "2025-07-24T09:10:04.670-0700",
                  "updated": "2025-07-24T09:10:04.670-0700",
                  "comment_body": "Yes example running .",
                  "commented_by": "Aaron Xiong"
                },
                {
                  "created": "2025-07-24T09:18:46.857-0700",
                  "updated": "2025-07-24T09:18:46.857-0700",
                  "comment_body": "It’s already promoted in",
                  "commented_by": "Bowen Jiao"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "GRID-287956",
              "created_ts": "2025-07-23T22:59:14.726+05:30",
              "issue_title": "Grid - Other Grid Issue - 2025-07-23",
              "resolved_ts": "2025-07-24T16:18:55.102Z",
              "project_name": "GRID",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Amelia Lane",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "amlane@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Browser: Onboarding Airflow DAGs to war Hadoop Job Link: Existing Holdem DAG:  https://holdem.oklahoma-airflow.grid.linkedin.com/dags/pacing-forecast_holdem5__tscp-revenue-forecast-offline/grid?root=&dag_run_id=scheduled__2025-07-22T09%3A00%3A00%2B00%3A00 War Dag:  https://war.oklahoma-airflow.grid.linkedin.com/log?dag_id=pacing-forecast_war__tscp-revenue-forecast-offline&task_id=forecast_group_pacing_forecast&execution_date=2025-07-23T22%3A30%3A26%2B00%3A00&map_index=-1 Iris plan : We have email notification enabled for the above DAG on war via IRIS notification callbacks. Cluster name: war Error Message: 'com.linkedin.mufn.common.exception.GridGatewayUserException: Failed to get hadoop tokens! Unable to fetch token from KSudocom.linkedin.ksudo.client.KSudoAuthenticationException: Ksudo authenticate  to service [lva1-mahjong|HCAT, lva1-war|HDFS, lva1-mahjong|JH, lva1-mahjong|RM, lva1-mahjong|HDFS, lva1-mahjong|OPENHOUSE]failed for user: rfcst Nested Titles: Grid / Other Grid Issue",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-24 16:18:55.142000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-23T17:29:15Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:18:00Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153118,
            "tags": [
              {
                "id": 23457,
                "name": "LongResolution",
                "teamID": 6,
                "isGroup": false,
                "description": "Long resolution time "
              },
              {
                "id": 23544,
                "name": "Data_Quality_Issue",
                "teamID": 6,
                "isGroup": false,
                "description": "Corrupt, missing, or incorrect data in tables, APIs, or schemas"
              }
            ],
            "title": "Grid - Other Grid Issue - 2025-07-23",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1401]",
              "comments": [
                {
                  "created": "2025-07-25T09:05:34.915-0700",
                  "updated": "2025-07-25T09:05:34.915-0700",
                  "comment_body": "Thank you @Bowen Jiao ! Are you able to share this dataset name with me? I’d like to verify that before this change Jobs_Model_Training",
                  "commented_by": "Patrick Stetz"
                },
                {
                  "created": "2025-07-23T12:59:17.173-0700",
                  "updated": "2025-07-23T12:59:17.173-0700",
                  "comment_body": "",
                  "commented_by": "Patrick Stetz"
                },
                {
                  "created": "2025-07-25T09:57:29.082-0700",
                  "updated": "2025-07-25T09:57:29.082-0700",
                  "comment_body": "Should be this one: u_gridldap.headless",
                  "commented_by": "Bowen Jiao"
                },
                {
                  "created": "2025-07-24T17:11:45.260-0700",
                  "updated": "2025-07-24T17:11:45.260-0700",
                  "comment_body": "We have a dataset that dumps the account info every day. We found the Purpose was changed recently: 62\t2025-07-21-00\tjss\tJobs_Model_Training\n63\t2025-07-22-00\tjss\tJobs_Model_Training\n64\t2025-07-23-00\tjss\tInternal_Analytics_And_Reporting",
                  "commented_by": "Bowen Jiao"
                },
                {
                  "created": "2025-07-24T16:11:34.290-0700",
                  "updated": "2025-07-24T16:11:34.290-0700",
                  "comment_body": "Hi @Bowen Jiao",
                  "commented_by": "Patrick Stetz"
                },
                {
                  "created": "2025-07-25T10:26:57.510-0700",
                  "updated": "2025-07-25T10:26:57.510-0700",
                  "comment_body": "Thank you! This resolves my ask. Closing the ticket",
                  "commented_by": "Patrick Stetz"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131654",
              "created_ts": "2025-07-23T19:57:39.455+05:30",
              "issue_title": "Grid - Other Grid Issue - 2025-07-23",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Patrick Stetz",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "pstetz@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Browser: N/A Hadoop Job Link: N/A Cluster name: N/A Error Message: Our team has a headless account,  jss . How do we see any changes to the \"Account Purpose\" over time? Nested Titles: Grid / Other Grid Issue",
              "status_transitions": [
                {
                  "to_state": "Resolved",
                  "timestamp": "2025-07-25 17:27:00.357000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-23T14:27:39Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:18:00Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              152996,
              153116,
              153118
            ],
            "GroupMetaData": {
              "GroupID": 23545,
              "Insight": "Primary delay factors included resource constraints (e.g., infrastructure provisioning), likely external dependencies, and potential communication gaps. Complexity in workflows and unclear prioritization also contributed to bottlenecks, increasing the overall resolution time.",
              "Summary": "The issues primarily involved grid-related problems and infrastructure provisioning (e.g., Trino's NSS migration). Complexity arose from unclear priorities, delays in resource allocation, and potential infrastructure dependencies, resulting in extended resolution times.",
              "GroupName": "Tag: LongResolution",
              "GroupDescription": "Issues tagged with 'LongResolution', occurred 3 times"
            }
          },
          {
            "ItemsList": [
              152996,
              153116
            ],
            "GroupMetaData": {
              "GroupID": 23535,
              "Insight": "Delays suggest unclear workflows, lack of prioritization, and insufficient resource allocation. Streamlining approvals and status tracking could prevent prolonged resolution times.",
              "Summary": "Two access requests show delays with unclear status, one resolved in 340 hours, indicating inefficiencies in communication or resolution processes.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              152996,
              153117
            ],
            "GroupMetaData": {
              "GroupID": 23534,
              "Insight": "Weak validation and lack of automated checks highlight a need for stricter change control and improved rollback processes to minimize downtime.",
              "Summary": "Two misconfigurations in the Grid system caused extended disruptions, with resolution times varying significantly from 22h50m to 340h7m.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 2 times"
            }
          },
          {
            "ItemsList": [
              153116
            ],
            "GroupMetaData": {
              "GroupID": 23546,
              "Insight": "Outage likely linked to infrastructure or migration dependencies, as no network or provider causes are indicated in the available data.",
              "Summary": "Region-specific outage observed in prod-lva1 due to Trino's NSS migration; scope limited to the specific node requested.",
              "GroupName": "Tag: Region_Specific",
              "GroupDescription": "Issues tagged with 'Region_Specific', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153117
            ],
            "GroupMetaData": {
              "GroupID": 23515,
              "Insight": "Root causes remain unclear due to vague descriptions, highlighting the need for detailed documentation to pinpoint system interoperability or dependency mismatches.",
              "Summary": "The integration failure involved unspecified issues within the grid system, resolved in under 23 hours, showing limited operational downtime impact.",
              "GroupName": "Tag: Integration_Failure",
              "GroupDescription": "Issues tagged with 'Integration_Failure', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153118
            ],
            "GroupMetaData": {
              "GroupID": 23547,
              "Insight": "Root cause likely includes incomplete issue diagnostics or missing validation protocols in grid data ingestion and processing workflows.",
              "Summary": "Grid system data shows unspecified issues under 'Data_Quality_Issue,' impacting data consistency and reliability across related systems and processes.",
              "GroupName": "Tag: Data_Quality_Issue",
              "GroupDescription": "Issues tagged with 'Data_Quality_Issue', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1753320600,
      "startTimestamp": 1753277400
    },
    {
      "id": 3896,
      "teamID": 6,
      "teamName": "gridsre",
      "createdAt": "2025-08-14T05:19:07Z",
      "hashValue": "",
      "isCurrent": true,
      "versionId": "b9f5f975-2f15-4554-b1b4-5a501d4371dc",
      "contentJSON": {
        "Items": [
          {
            "id": 153122,
            "tags": [
              {
                "id": 23506,
                "name": "Access_Request",
                "teamID": 6,
                "isGroup": false,
                "description": "Request for access or permissions to internal systems"
              },
              {
                "id": 23516,
                "name": "Config_Error",
                "teamID": 6,
                "isGroup": false,
                "description": "Misconfiguration led to outage or degraded service"
              }
            ],
            "title": "Promote headless account riioffline to war",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/other-grid-issue, supportal-v1-version:0.0.1402]",
              "comments": [
                {
                  "created": "2025-07-24T05:05:26.960-0700",
                  "updated": "2025-07-24T05:05:26.960-0700",
                  "comment_body": "Done will be provisioned in sometime: Thanks !!",
                  "commented_by": "Hariharan S"
                }
              ],
              "priority": "Unspecified",
              "issue_key": "APA-131695",
              "created_ts": "2025-07-24T09:52:44.001+05:30",
              "issue_title": "Promote headless account riioffline to war",
              "resolved_ts": "2025-07-24T12:05:35.69Z",
              "project_name": "APA Support Project",
              "assignee_name": "Hariharan S",
              "reporter_name": "Ayush Gupta",
              "assignee_email": "hsivaprakash@linkedin.com",
              "reporter_email": "aygupta@linkedin.com",
              "assignee_changes": [],
              "issue_description": "We started running one of our offline flows in war yesterday and it failed with the reason that ksudo is not able to impersonate as the headless account. Going through the slack threads, it seems like the headless account needs to be promoted to war. Following  this  wiki, below are the relevant required details. Successful holdem job link:  https://holdem.oklahoma-airflow.grid.linkedin.com/dags/OfflineFlowReporting_holdem5__talent-intelligence-hadoop/grid Iris plan link: rii_offline_oklahoma_low_priority War dag code link:  https://jarvis.corp.linkedin.com/codesearch/result/?name=OfflineFlowReporting_war__talent-intelligence-hadoop.py&path=talent-intelligence-hadoop%2Ftalent_intelligence_hadoop_airflow%2Fsrc%2Ftalent_intelligence_hadoop%2Ftalent_intelligence_hadoop_airflow%2Fwar&reponame=linkedin-multiproduct%2Ftalent-intelligence-hadoop Failed War Job Link: https://war.oklahoma-airflow.grid.linkedin.com/dags/OfflineFlowReporting_war__talent-intelligence-hadoop/grid?dag_run_id=scheduled__2025-07-22T23%3A00%3A00%2B00%3A00&task_id=create_offline_flow_report&map_index=-1&tab=logs Cluster name: war Error Message: Caused by: com.linkedin.ksudo.client.KSudoAuthenticationException: Ksudo authenticate  to service [lva2-atlas|HCAT, lva1-war|HCAT, lva2-atlas|JH, lva2-atlas|RM, lva2-atlas|HDFS, lva2-atlas|OPENHOUSE, lva1-war|HDFS]failed for user: riioffline, exception: Client-side error com.linkedin.restli.client.RestLiResponseException: Response status 403, serviceErrorMessage: Failed to fetch credential for located services lva2-atlas|HCAT: java.io.IOException: MetaException(message:org.apache.hadoop.security.authorize.AuthorizationException: User: ksudo@GRID.LINKEDIN.COM is not allowed to impersonate riioffline/mu_grid2_spark_6bff6292-6556-4ad1-af72-5257e0f1181e@GRID.LINKEDIN.COM) encountered Nested Titles: Grid / Other Grid Issue",
              "status_transitions": [
                {
                  "to_state": "Closed",
                  "timestamp": "2025-07-24 12:05:35.730000 UTC",
                  "from_state": "Open"
                }
              ]
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-24T04:22:44Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-08-14T05:19:06Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          },
          {
            "id": 153137,
            "tags": [],
            "title": "Grid - Job Failures - 2025-07-24",
            "content": {
              "labels": "[ask_grid_sre, decision-grid, from-supportal, supportal-v1, supportal-v1-problem-type:askgridsre/job-failures, supportal-v1-version:0.0.1402]",
              "comments": [],
              "priority": "Unspecified",
              "issue_key": "APA-131701",
              "created_ts": "2025-07-24T14:41:40.198+05:30",
              "issue_title": "Grid - Job Failures - 2025-07-24",
              "resolved_ts": "0001-01-01T00:00:00Z",
              "project_name": "APA Support Project",
              "assignee_name": "Bowen Jiao",
              "reporter_name": "Andrew Huang",
              "assignee_email": "bjiao@linkedin.com",
              "reporter_email": "andhuang@linkedin.com",
              "assignee_changes": [],
              "issue_description": "Cluster Name: PROD Error Message: 2025/07/23 15:13:07.296 +0000 [ INFO] Caused by: org.apache.hadoop.hdfs.protocol.NSQuotaExceededException: The NameSpace quota (directories and files) of directory /user/consumerbi is exceeded: quota=20000 file count=20001  User or Headless Account name that launches the job: consumerbi Azkaban Job Link if it's a Scheduled Job: https://holdem.oklahoma-airflow.grid.linkedin.com/dags/feed_updates_viewed_union__cbia_metric_ecosystem/grid?dag_run_id=manual__2025-07-24T14%3A24%3A21.228729%2B00%3A00&task_id=sql_tasks.duration&map_index=0 Hadoop Job Link: https://observe.prod.linkedin.com/g/d/de6o8t03b6mtca/grid-gateway-job-execution-dashboard?var-ExecutionUrn=urn:li:mu:grid1:function%28spark%29:execution%28e10158a8-54a4-4db4-87db-e1ff9164bc8e%29&orgId=1&refresh=1m Nested Titles: Grid / Job Failures",
              "status_transitions": []
            },
            "itemType": "JiraActivity",
            "createdAt": "2025-07-24T09:11:40Z",
            "productID": 6,
            "timeSpent": 0,
            "updatedAt": "2025-07-24T09:11:40Z",
            "itemStatus": "",
            "description": "",
            "additionalContext": ""
          }
        ],
        "Groups": [
          {
            "ItemsList": [
              153122
            ],
            "GroupMetaData": {
              "GroupID": 23507,
              "Insight": "Lack of defined priority and status fields hampers transparency, potentially slowing approval workflows and resolution efficiency.",
              "Summary": "The access request for promoting 'riioffline' was resolved in 7h43m, with unclear delays due to unspecified status and priority fields.",
              "GroupName": "Tag: Access_Request",
              "GroupDescription": "Issues tagged with 'Access_Request', occurred 1 times"
            }
          },
          {
            "ItemsList": [
              153122
            ],
            "GroupMetaData": {
              "GroupID": 23517,
              "Insight": "Lack of automated validation and thorough change control procedures likely contributed to the misconfiguration and delays.",
              "Summary": "Issue involved promoting a headless account without proper configuration checks, causing delays resolved in 7h43m.",
              "GroupName": "Tag: Config_Error",
              "GroupDescription": "Issues tagged with 'Config_Error', occurred 1 times"
            }
          }
        ],
        "summaryType": "system_daily_v0"
      },
      "summaryType": "system_daily_v0",
      "endTimestamp": 1753363800,
      "startTimestamp": 1753320600
    }
  ],
  "insightMetrics": {
    "ecdf": [
      5,
      5,
      5,
      5,
      332,
      462,
      1369,
      3188,
      5880,
      20406
    ],
    "count": 43,
    "totalTimeSpent": 105874,
    "timeSpentBucket": {
      "0": 21,
      "4": 22
    },
    "averageTimeSpent": 2462
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
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Assignee Changes</h3>
                      <div className="space-y-2 text-sm max-h-32 overflow-y-auto scrollbar-hide">
                        {selectedIssue.content?.assignee_changes?.map((change: any, index: number) => (
                          <div key={index} className="py-1 px-2 bg-gray-50 rounded">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">
                                {change.from_assignee || 'Unassigned'} → {change.to_assignee || 'Unassigned'}
                              </span>
                              <span className="text-gray-500">{formatDate(change.timestamp)}</span>
                            </div>
                          </div>
                        )) || <span className="text-gray-500">No assignee changes</span>}
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
