import React, { useState } from 'react';
import { BarChart3, FileJson, Search, Tags, Target, Calendar } from 'lucide-react';
import JsonViewer from './components/JsonViewer';
import DataOverview from './components/DataOverview';
import IssueAnalysis from './components/IssueAnalysis';
import TagAnalytics from './components/TagAnalytics';
import GroupInsights from './components/GroupInsights';

// Sample JSON data
const sampleData = {
 
  "Items": [
    {
      "id": 118096,
      "tags": [
        {
          "id": 14200,
          "name": "LongResolution",
          "teamID": 5,
          "isGroup": false,
          "description": "Long resolution time "
        },
        {
          "id": 14246,
          "name": "Security_Concern",
          "teamID": 5,
          "isGroup": false,
          "description": "The ticket requires a review of the app's permissions and adherence to security protocols to avoid potential service disruptions caused by revoked permissions.\nThis aligns strongly with issues related to authentication, authorization, or security vulnerabilities."
        }
      ],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1117",
        "created_ts": "2025-07-24T18:31:25.363+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Adam Butac",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "abutac@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (f3c23a35-9f05-480e-8e6f-ec242244093a) with the display name (pinot-portal-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:25Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-08-04T17:58:06Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118097,
      "tags": [
        {
          "id": 14200,
          "name": "LongResolution",
          "teamID": 5,
          "isGroup": false,
          "description": "Long resolution time "
        },
        {
          "id": 14246,
          "name": "Security_Concern",
          "teamID": 5,
          "isGroup": false,
          "description": "The ticket requires a review of the app's permissions and adherence to security protocols to avoid potential service disruptions caused by revoked permissions.\nThis aligns strongly with issues related to authentication, authorization, or security vulnerabilities."
        }
      ],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1095",
        "created_ts": "2025-07-24T18:31:10.593+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (e387ce36-1c6f-40a5-a39e-d59c805c27f1) with the display name (pinot-workflows-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:11Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-08-04T17:58:06Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118098,
      "tags": [
        {
          "id": 14200,
          "name": "LongResolution",
          "teamID": 5,
          "isGroup": false,
          "description": "Long resolution time "
        },
        {
          "id": 14247,
          "name": "Access_Request",
          "teamID": 5,
          "isGroup": false,
          "description": "The ticket requires submitting an Admin Consent Request and reviewing permissions for an application, which aligns with provisioning or validation of access.\nThe dependency on LinkedIn InfoSec for review and the risk of revoked permissions further support this categorization."
        }
      ],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-923",
        "created_ts": "2025-07-24T18:29:08.397+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (2d15c1c0-e5aa-42b5-b0c9-357c930bd0f4) with the display name (pinot-portal-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:59:08Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-08-04T17:58:06Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118099,
      "tags": [
        {
          "id": 14200,
          "name": "LongResolution",
          "teamID": 5,
          "isGroup": false,
          "description": "Long resolution time "
        },
        {
          "id": 14247,
          "name": "Access_Request",
          "teamID": 5,
          "isGroup": false,
          "description": "The ticket requires submitting an Admin Consent Request and reviewing permissions for an application, which aligns with provisioning or validation of access.\nThe dependency on LinkedIn InfoSec for review and the risk of revoked permissions further support this categorization."
        }
      ],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-900",
        "created_ts": "2025-07-24T18:28:50.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (15b00cc6-e57e-4298-ab90-d1e1ba56b745) with the display name (pinot-portal-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:51Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-08-04T17:58:06Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118100,
      "tags": [
        {
          "id": 14200,
          "name": "LongResolution",
          "teamID": 5,
          "isGroup": false,
          "description": "Long resolution time "
        },
        {
          "id": 14247,
          "name": "Access_Request",
          "teamID": 5,
          "isGroup": false,
          "description": "The ticket requires submitting an Admin Consent Request and reviewing permissions for an application, which aligns with provisioning or validation of access.\nThe dependency on LinkedIn InfoSec for review and the risk of revoked permissions further support this categorization."
        }
      ],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-899",
        "created_ts": "2025-07-24T18:28:50.171+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1384e3be-0d75-4391-a4bc-410d4f4dc95d) with the display name (pinot-workflows-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:50Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-08-04T17:58:06Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118101,
      "tags": [
        {
          "id": 14200,
          "name": "LongResolution",
          "teamID": 5,
          "isGroup": false,
          "description": "Long resolution time "
        },
        {
          "id": 14247,
          "name": "Access_Request",
          "teamID": 5,
          "isGroup": false,
          "description": "The ticket requires submitting an Admin Consent Request and reviewing permissions for an application, which aligns with provisioning or validation of access.\nThe dependency on LinkedIn InfoSec for review and the risk of revoked permissions further support this categorization."
        }
      ],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-896",
        "created_ts": "2025-07-24T18:28:47.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1145ec88-08dc-4f99-906e-81a136414775) with the display name (pinot-workflows-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:48Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-08-04T17:58:06Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118102,
      "tags": [
        {
          "id": 14248,
          "name": "Env_Parity_Issue",
          "teamID": 5,
          "isGroup": false,
          "description": "The deployment issue is caused by mismatched environment state where the node exists in the cluster but is unavailable as a compute broker.\nEvidence includes comments about an unhealthy node state, manual intervention for swapping instances, and specific environment discrepancies."
        }
      ],
      "title": "Deployment stuck on non-existing/removed instance",
      "content": {
        "labels": "",
        "comments": [
          {
            "created": "2025-07-24T09:33:28.067-0700",
            "updated": "2025-07-24T09:33:28.067-0700",
            "comment_body": "kubectl describe listatefuldeployment appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 -n kafka-f0a79 --context=prod-ltx1-k8s-9 \nEvents:\n  Type     Reason           Age                  From                             Message\n  ----     ------           ----                 ----                             -------\n  Warning  CBNodeGetFailed  13m (x102 over 27h)  listatefuldeployment-controller  failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \"ltx1-app167322.prod.linkedin.com\" not found",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:50:04.784-0700",
            "updated": "2025-07-28T09:50:04.784-0700",
            "comment_body": "Resolved by completing the instance manually and also swapped out the bad instance.",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:51:10.191-0700",
            "updated": "2025-07-28T16:54:57.900-0700",
            "comment_body": "#incident-6354 was created for this issue. The problem is that the node ltx1-app167322.prod.linkedin.com shows up in the k8s cluster but the corresponding cb node was gone. Event timeline: 6/2 NSS log : 12:39AM disruption76c0c68ef2061850 was created for app instance appinstance-53a4b496-43cc-4608-9cf4-b84cb042b7c7 on node ltx1-app167322.prod.linkedin.com and completed with failed due to AssignedCBNodeIsInUnhealthyState. 12:42AM swapdfcf5b5dfba3e2d5 was created for the same instance and completed successfully. The new instance appinstance-ff2f34e4-7bee-467c-9ef5-08c4612a0789 landed on node ltx1-app85151.prod.linkedin.com . CB log for ltx1-app167322.prod.linkedin.com 12:39:55AM node cordoned. 12:39:58AM node drained. 12:40:25AM node deallocated from CB pool 6/18 Node log : 09:16AM node controller registered node ltx1-app167322.prod.linkedin.com and NLM has been throwing errors “NodeDeletionRejected: Node is still actively in use (not tainted/cordoned by node-lifecycle-manager)” since then. 6/24 NSS log : Scaleup9052aab76c339706 was created and acked. Pod appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 was created and assigned to node ltx1-app167322.prod.linkedin.com . We have been seeing the “failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \" ltx1-app167322.prod.linkedin.com \" not found” error since then.",
            "commented_by": "Xinlin Zhou"
          }
        ],
        "priority": "Blocker",
        "issue_key": "LPS-40356",
        "created_ts": "2025-07-24T13:57:45.129+05:30",
        "issue_title": "Deployment stuck on non-existing/removed instance",
        "resolved_ts": "2025-07-28T16:50:29.985Z",
        "project_name": "LinkedIn Platform as a Service",
        "assignee_name": "Xinlin Zhou",
        "reporter_name": "Maryan Hratson",
        "assignee_email": "xinlzhou@linkedin.com",
        "reporter_email": "mhratson@linkedin.com",
        "assignee_changes": [
          {
            "timestamp": "2025-07-24 16:26:10.416000 UTC",
            "to_assignee": "Xinlin Zhou",
            "from_assignee": "confapi-supportal"
          }
        ],
        "issue_description": "deployment  stuck on non-existing instance. $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka status instance appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EWPXWP5CM to authenticate.\nSuccessfully created /Users/mhratson/.kube/config and configured 159 clusters\n\nStatus for instance: \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\"\n------------------------------------------------------------------------\n  Name               | appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8  \n  Namespace          | kafka-f0a79                                       \n  LiStatefulSet      | kafka                                             \n  Cluster            | prod-ltx1-k8s-9                                   \n  Product Version    | 3.0.580                                           \n  Spec.State         | RUNNING                                           \n  Status.State       | PENDING                                           \n  Pod.Status         | Not Found                                         \n  Node Name          | ltx1-app167322.prod.linkedin.com                  \n  MZ                 | 13                                                \n  Running Operations | deployment569b565971a26540                        \n------------------------------------------------------------------------ $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka get pods appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nError: failed to get pod for scope: failed to get resources for scope: 1 error occurred:\n        * failed to get resource infos: pods \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\" not found",
        "status_transitions": [
          {
            "to_state": "In Progress",
            "timestamp": "2025-07-24 16:33:14.609000 UTC",
            "from_state": "Open"
          },
          {
            "to_state": "Resolved",
            "timestamp": "2025-07-28 16:50:13.285000 UTC",
            "from_state": "In Progress"
          },
          {
            "to_state": "Closed",
            "timestamp": "2025-07-28 16:50:30.011000 UTC",
            "from_state": "Resolved"
          }
        ]
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T08:27:45Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-08-04T17:58:06Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118110,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1117",
        "created_ts": "2025-07-24T18:31:25.363+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Adam Butac",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "abutac@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (f3c23a35-9f05-480e-8e6f-ec242244093a) with the display name (pinot-portal-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:25Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:25Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118111,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1095",
        "created_ts": "2025-07-24T18:31:10.593+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (e387ce36-1c6f-40a5-a39e-d59c805c27f1) with the display name (pinot-workflows-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:11Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:11Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118112,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-923",
        "created_ts": "2025-07-24T18:29:08.397+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (2d15c1c0-e5aa-42b5-b0c9-357c930bd0f4) with the display name (pinot-portal-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:59:08Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:59:08Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118113,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-900",
        "created_ts": "2025-07-24T18:28:50.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (15b00cc6-e57e-4298-ab90-d1e1ba56b745) with the display name (pinot-portal-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:51Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:51Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118114,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-899",
        "created_ts": "2025-07-24T18:28:50.171+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1384e3be-0d75-4391-a4bc-410d4f4dc95d) with the display name (pinot-workflows-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:50Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:50Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118115,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-896",
        "created_ts": "2025-07-24T18:28:47.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1145ec88-08dc-4f99-906e-81a136414775) with the display name (pinot-workflows-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:48Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:48Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118116,
      "tags": [],
      "title": "Deployment stuck on non-existing/removed instance",
      "content": {
        "labels": "",
        "comments": [
          {
            "created": "2025-07-24T09:33:28.067-0700",
            "updated": "2025-07-24T09:33:28.067-0700",
            "comment_body": "kubectl describe listatefuldeployment appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 -n kafka-f0a79 --context=prod-ltx1-k8s-9 \nEvents:\n  Type     Reason           Age                  From                             Message\n  ----     ------           ----                 ----                             -------\n  Warning  CBNodeGetFailed  13m (x102 over 27h)  listatefuldeployment-controller  failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \"ltx1-app167322.prod.linkedin.com\" not found",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:50:04.784-0700",
            "updated": "2025-07-28T09:50:04.784-0700",
            "comment_body": "Resolved by completing the instance manually and also swapped out the bad instance.",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:51:10.191-0700",
            "updated": "2025-07-28T16:54:57.900-0700",
            "comment_body": "#incident-6354 was created for this issue. The problem is that the node ltx1-app167322.prod.linkedin.com shows up in the k8s cluster but the corresponding cb node was gone. Event timeline: 6/2 NSS log : 12:39AM disruption76c0c68ef2061850 was created for app instance appinstance-53a4b496-43cc-4608-9cf4-b84cb042b7c7 on node ltx1-app167322.prod.linkedin.com and completed with failed due to AssignedCBNodeIsInUnhealthyState. 12:42AM swapdfcf5b5dfba3e2d5 was created for the same instance and completed successfully. The new instance appinstance-ff2f34e4-7bee-467c-9ef5-08c4612a0789 landed on node ltx1-app85151.prod.linkedin.com . CB log for ltx1-app167322.prod.linkedin.com 12:39:55AM node cordoned. 12:39:58AM node drained. 12:40:25AM node deallocated from CB pool 6/18 Node log : 09:16AM node controller registered node ltx1-app167322.prod.linkedin.com and NLM has been throwing errors “NodeDeletionRejected: Node is still actively in use (not tainted/cordoned by node-lifecycle-manager)” since then. 6/24 NSS log : Scaleup9052aab76c339706 was created and acked. Pod appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 was created and assigned to node ltx1-app167322.prod.linkedin.com . We have been seeing the “failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \" ltx1-app167322.prod.linkedin.com \" not found” error since then.",
            "commented_by": "Xinlin Zhou"
          }
        ],
        "priority": "Blocker",
        "issue_key": "LPS-40356",
        "created_ts": "2025-07-24T13:57:45.129+05:30",
        "issue_title": "Deployment stuck on non-existing/removed instance",
        "resolved_ts": "2025-07-28T16:50:29.985Z",
        "project_name": "LinkedIn Platform as a Service",
        "assignee_name": "Xinlin Zhou",
        "reporter_name": "Maryan Hratson",
        "assignee_email": "xinlzhou@linkedin.com",
        "reporter_email": "mhratson@linkedin.com",
        "assignee_changes": [
          {
            "timestamp": "2025-07-24 16:26:10.416000 UTC",
            "to_assignee": "Xinlin Zhou",
            "from_assignee": "confapi-supportal"
          }
        ],
        "issue_description": "deployment  stuck on non-existing instance. $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka status instance appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EWPXWP5CM to authenticate.\nSuccessfully created /Users/mhratson/.kube/config and configured 159 clusters\n\nStatus for instance: \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\"\n------------------------------------------------------------------------\n  Name               | appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8  \n  Namespace          | kafka-f0a79                                       \n  LiStatefulSet      | kafka                                             \n  Cluster            | prod-ltx1-k8s-9                                   \n  Product Version    | 3.0.580                                           \n  Spec.State         | RUNNING                                           \n  Status.State       | PENDING                                           \n  Pod.Status         | Not Found                                         \n  Node Name          | ltx1-app167322.prod.linkedin.com                  \n  MZ                 | 13                                                \n  Running Operations | deployment569b565971a26540                        \n------------------------------------------------------------------------ $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka get pods appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nError: failed to get pod for scope: failed to get resources for scope: 1 error occurred:\n        * failed to get resource infos: pods \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\" not found",
        "status_transitions": [
          {
            "to_state": "Closed",
            "timestamp": "2025-07-28 16:50:30.011000 UTC",
            "from_state": "Resolved"
          },
          {
            "to_state": "Resolved",
            "timestamp": "2025-07-28 16:50:13.285000 UTC",
            "from_state": "In Progress"
          },
          {
            "to_state": "In Progress",
            "timestamp": "2025-07-24 16:33:14.609000 UTC",
            "from_state": "Open"
          }
        ]
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T08:27:45Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T08:27:45Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118124,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1117",
        "created_ts": "2025-07-24T18:31:25.363+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Adam Butac",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "abutac@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (f3c23a35-9f05-480e-8e6f-ec242244093a) with the display name (pinot-portal-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:25Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:25Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118125,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1095",
        "created_ts": "2025-07-24T18:31:10.593+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (e387ce36-1c6f-40a5-a39e-d59c805c27f1) with the display name (pinot-workflows-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:11Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:11Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118126,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-923",
        "created_ts": "2025-07-24T18:29:08.397+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (2d15c1c0-e5aa-42b5-b0c9-357c930bd0f4) with the display name (pinot-portal-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:59:08Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:59:08Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118127,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-900",
        "created_ts": "2025-07-24T18:28:50.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (15b00cc6-e57e-4298-ab90-d1e1ba56b745) with the display name (pinot-portal-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:51Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:51Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118128,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-899",
        "created_ts": "2025-07-24T18:28:50.171+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1384e3be-0d75-4391-a4bc-410d4f4dc95d) with the display name (pinot-workflows-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:50Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:50Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118129,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-896",
        "created_ts": "2025-07-24T18:28:47.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1145ec88-08dc-4f99-906e-81a136414775) with the display name (pinot-workflows-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:48Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:48Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118130,
      "tags": [],
      "title": "Deployment stuck on non-existing/removed instance",
      "content": {
        "labels": "",
        "comments": [
          {
            "created": "2025-07-28T09:50:04.784-0700",
            "updated": "2025-07-28T09:50:04.784-0700",
            "comment_body": "Resolved by completing the instance manually and also swapped out the bad instance.",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:51:10.191-0700",
            "updated": "2025-07-28T16:54:57.900-0700",
            "comment_body": "#incident-6354 was created for this issue. The problem is that the node ltx1-app167322.prod.linkedin.com shows up in the k8s cluster but the corresponding cb node was gone. Event timeline: 6/2 NSS log : 12:39AM disruption76c0c68ef2061850 was created for app instance appinstance-53a4b496-43cc-4608-9cf4-b84cb042b7c7 on node ltx1-app167322.prod.linkedin.com and completed with failed due to AssignedCBNodeIsInUnhealthyState. 12:42AM swapdfcf5b5dfba3e2d5 was created for the same instance and completed successfully. The new instance appinstance-ff2f34e4-7bee-467c-9ef5-08c4612a0789 landed on node ltx1-app85151.prod.linkedin.com . CB log for ltx1-app167322.prod.linkedin.com 12:39:55AM node cordoned. 12:39:58AM node drained. 12:40:25AM node deallocated from CB pool 6/18 Node log : 09:16AM node controller registered node ltx1-app167322.prod.linkedin.com and NLM has been throwing errors “NodeDeletionRejected: Node is still actively in use (not tainted/cordoned by node-lifecycle-manager)” since then. 6/24 NSS log : Scaleup9052aab76c339706 was created and acked. Pod appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 was created and assigned to node ltx1-app167322.prod.linkedin.com . We have been seeing the “failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \" ltx1-app167322.prod.linkedin.com \" not found” error since then.",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-24T09:33:28.067-0700",
            "updated": "2025-07-24T09:33:28.067-0700",
            "comment_body": "kubectl describe listatefuldeployment appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 -n kafka-f0a79 --context=prod-ltx1-k8s-9 \nEvents:\n  Type     Reason           Age                  From                             Message\n  ----     ------           ----                 ----                             -------\n  Warning  CBNodeGetFailed  13m (x102 over 27h)  listatefuldeployment-controller  failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \"ltx1-app167322.prod.linkedin.com\" not found",
            "commented_by": "Xinlin Zhou"
          }
        ],
        "priority": "Blocker",
        "issue_key": "LPS-40356",
        "created_ts": "2025-07-24T13:57:45.129+05:30",
        "issue_title": "Deployment stuck on non-existing/removed instance",
        "resolved_ts": "2025-07-28T16:50:29.985Z",
        "project_name": "LinkedIn Platform as a Service",
        "assignee_name": "Xinlin Zhou",
        "reporter_name": "Maryan Hratson",
        "assignee_email": "xinlzhou@linkedin.com",
        "reporter_email": "mhratson@linkedin.com",
        "assignee_changes": [
          {
            "timestamp": "2025-07-24 16:26:10.416000 UTC",
            "to_assignee": "Xinlin Zhou",
            "from_assignee": "confapi-supportal"
          }
        ],
        "issue_description": "deployment  stuck on non-existing instance. $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka status instance appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EWPXWP5CM to authenticate.\nSuccessfully created /Users/mhratson/.kube/config and configured 159 clusters\n\nStatus for instance: \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\"\n------------------------------------------------------------------------\n  Name               | appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8  \n  Namespace          | kafka-f0a79                                       \n  LiStatefulSet      | kafka                                             \n  Cluster            | prod-ltx1-k8s-9                                   \n  Product Version    | 3.0.580                                           \n  Spec.State         | RUNNING                                           \n  Status.State       | PENDING                                           \n  Pod.Status         | Not Found                                         \n  Node Name          | ltx1-app167322.prod.linkedin.com                  \n  MZ                 | 13                                                \n  Running Operations | deployment569b565971a26540                        \n------------------------------------------------------------------------ $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka get pods appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nError: failed to get pod for scope: failed to get resources for scope: 1 error occurred:\n        * failed to get resource infos: pods \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\" not found",
        "status_transitions": [
          {
            "to_state": "In Progress",
            "timestamp": "2025-07-24 16:33:14.609000 UTC",
            "from_state": "Open"
          },
          {
            "to_state": "Closed",
            "timestamp": "2025-07-28 16:50:30.011000 UTC",
            "from_state": "Resolved"
          },
          {
            "to_state": "Resolved",
            "timestamp": "2025-07-28 16:50:13.285000 UTC",
            "from_state": "In Progress"
          }
        ]
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T08:27:45Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T08:27:45Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118138,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1117",
        "created_ts": "2025-07-24T18:31:25.363+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Adam Butac",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "abutac@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (f3c23a35-9f05-480e-8e6f-ec242244093a) with the display name (pinot-portal-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:25Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:25Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118139,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1095",
        "created_ts": "2025-07-24T18:31:10.593+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (e387ce36-1c6f-40a5-a39e-d59c805c27f1) with the display name (pinot-workflows-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:11Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:11Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118140,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-923",
        "created_ts": "2025-07-24T18:29:08.397+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (2d15c1c0-e5aa-42b5-b0c9-357c930bd0f4) with the display name (pinot-portal-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:59:08Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:59:08Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118141,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-900",
        "created_ts": "2025-07-24T18:28:50.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (15b00cc6-e57e-4298-ab90-d1e1ba56b745) with the display name (pinot-portal-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:51Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:51Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118142,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-899",
        "created_ts": "2025-07-24T18:28:50.171+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1384e3be-0d75-4391-a4bc-410d4f4dc95d) with the display name (pinot-workflows-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:50Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:50Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118143,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-896",
        "created_ts": "2025-07-24T18:28:47.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1145ec88-08dc-4f99-906e-81a136414775) with the display name (pinot-workflows-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:48Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:48Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118144,
      "tags": [],
      "title": "Deployment stuck on non-existing/removed instance",
      "content": {
        "labels": "",
        "comments": [
          {
            "created": "2025-07-28T09:51:10.191-0700",
            "updated": "2025-07-28T16:54:57.900-0700",
            "comment_body": "#incident-6354 was created for this issue. The problem is that the node ltx1-app167322.prod.linkedin.com shows up in the k8s cluster but the corresponding cb node was gone. Event timeline: 6/2 NSS log : 12:39AM disruption76c0c68ef2061850 was created for app instance appinstance-53a4b496-43cc-4608-9cf4-b84cb042b7c7 on node ltx1-app167322.prod.linkedin.com and completed with failed due to AssignedCBNodeIsInUnhealthyState. 12:42AM swapdfcf5b5dfba3e2d5 was created for the same instance and completed successfully. The new instance appinstance-ff2f34e4-7bee-467c-9ef5-08c4612a0789 landed on node ltx1-app85151.prod.linkedin.com . CB log for ltx1-app167322.prod.linkedin.com 12:39:55AM node cordoned. 12:39:58AM node drained. 12:40:25AM node deallocated from CB pool 6/18 Node log : 09:16AM node controller registered node ltx1-app167322.prod.linkedin.com and NLM has been throwing errors “NodeDeletionRejected: Node is still actively in use (not tainted/cordoned by node-lifecycle-manager)” since then. 6/24 NSS log : Scaleup9052aab76c339706 was created and acked. Pod appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 was created and assigned to node ltx1-app167322.prod.linkedin.com . We have been seeing the “failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \" ltx1-app167322.prod.linkedin.com \" not found” error since then.",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-24T09:33:28.067-0700",
            "updated": "2025-07-24T09:33:28.067-0700",
            "comment_body": "kubectl describe listatefuldeployment appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 -n kafka-f0a79 --context=prod-ltx1-k8s-9 \nEvents:\n  Type     Reason           Age                  From                             Message\n  ----     ------           ----                 ----                             -------\n  Warning  CBNodeGetFailed  13m (x102 over 27h)  listatefuldeployment-controller  failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \"ltx1-app167322.prod.linkedin.com\" not found",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:50:04.784-0700",
            "updated": "2025-07-28T09:50:04.784-0700",
            "comment_body": "Resolved by completing the instance manually and also swapped out the bad instance.",
            "commented_by": "Xinlin Zhou"
          }
        ],
        "priority": "Blocker",
        "issue_key": "LPS-40356",
        "created_ts": "2025-07-24T13:57:45.129+05:30",
        "issue_title": "Deployment stuck on non-existing/removed instance",
        "resolved_ts": "2025-07-28T16:50:29.985Z",
        "project_name": "LinkedIn Platform as a Service",
        "assignee_name": "Xinlin Zhou",
        "reporter_name": "Maryan Hratson",
        "assignee_email": "xinlzhou@linkedin.com",
        "reporter_email": "mhratson@linkedin.com",
        "assignee_changes": [
          {
            "timestamp": "2025-07-24 16:26:10.416000 UTC",
            "to_assignee": "Xinlin Zhou",
            "from_assignee": "confapi-supportal"
          }
        ],
        "issue_description": "deployment  stuck on non-existing instance. $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka status instance appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EWPXWP5CM to authenticate.\nSuccessfully created /Users/mhratson/.kube/config and configured 159 clusters\n\nStatus for instance: \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\"\n------------------------------------------------------------------------\n  Name               | appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8  \n  Namespace          | kafka-f0a79                                       \n  LiStatefulSet      | kafka                                             \n  Cluster            | prod-ltx1-k8s-9                                   \n  Product Version    | 3.0.580                                           \n  Spec.State         | RUNNING                                           \n  Status.State       | PENDING                                           \n  Pod.Status         | Not Found                                         \n  Node Name          | ltx1-app167322.prod.linkedin.com                  \n  MZ                 | 13                                                \n  Running Operations | deployment569b565971a26540                        \n------------------------------------------------------------------------ $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka get pods appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nError: failed to get pod for scope: failed to get resources for scope: 1 error occurred:\n        * failed to get resource infos: pods \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\" not found",
        "status_transitions": [
          {
            "to_state": "In Progress",
            "timestamp": "2025-07-24 16:33:14.609000 UTC",
            "from_state": "Open"
          },
          {
            "to_state": "Resolved",
            "timestamp": "2025-07-28 16:50:13.285000 UTC",
            "from_state": "In Progress"
          },
          {
            "to_state": "Closed",
            "timestamp": "2025-07-28 16:50:30.011000 UTC",
            "from_state": "Resolved"
          }
        ]
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T08:27:45Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T08:27:45Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118152,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1117",
        "created_ts": "2025-07-24T18:31:25.363+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Adam Butac",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "abutac@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (f3c23a35-9f05-480e-8e6f-ec242244093a) with the display name (pinot-portal-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:25Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:25Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118153,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1095",
        "created_ts": "2025-07-24T18:31:10.593+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (e387ce36-1c6f-40a5-a39e-d59c805c27f1) with the display name (pinot-workflows-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:11Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:11Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118154,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-923",
        "created_ts": "2025-07-24T18:29:08.397+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (2d15c1c0-e5aa-42b5-b0c9-357c930bd0f4) with the display name (pinot-portal-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:59:08Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:59:08Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118155,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-900",
        "created_ts": "2025-07-24T18:28:50.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (15b00cc6-e57e-4298-ab90-d1e1ba56b745) with the display name (pinot-portal-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:51Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:51Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118156,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-899",
        "created_ts": "2025-07-24T18:28:50.171+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1384e3be-0d75-4391-a4bc-410d4f4dc95d) with the display name (pinot-workflows-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:50Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:50Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118157,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-896",
        "created_ts": "2025-07-24T18:28:47.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1145ec88-08dc-4f99-906e-81a136414775) with the display name (pinot-workflows-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:48Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:48Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118158,
      "tags": [],
      "title": "Deployment stuck on non-existing/removed instance",
      "content": {
        "labels": "",
        "comments": [
          {
            "created": "2025-07-24T09:33:28.067-0700",
            "updated": "2025-07-24T09:33:28.067-0700",
            "comment_body": "kubectl describe listatefuldeployment appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 -n kafka-f0a79 --context=prod-ltx1-k8s-9 \nEvents:\n  Type     Reason           Age                  From                             Message\n  ----     ------           ----                 ----                             -------\n  Warning  CBNodeGetFailed  13m (x102 over 27h)  listatefuldeployment-controller  failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \"ltx1-app167322.prod.linkedin.com\" not found",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:51:10.191-0700",
            "updated": "2025-07-28T16:54:57.900-0700",
            "comment_body": "#incident-6354 was created for this issue. The problem is that the node ltx1-app167322.prod.linkedin.com shows up in the k8s cluster but the corresponding cb node was gone. Event timeline: 6/2 NSS log : 12:39AM disruption76c0c68ef2061850 was created for app instance appinstance-53a4b496-43cc-4608-9cf4-b84cb042b7c7 on node ltx1-app167322.prod.linkedin.com and completed with failed due to AssignedCBNodeIsInUnhealthyState. 12:42AM swapdfcf5b5dfba3e2d5 was created for the same instance and completed successfully. The new instance appinstance-ff2f34e4-7bee-467c-9ef5-08c4612a0789 landed on node ltx1-app85151.prod.linkedin.com . CB log for ltx1-app167322.prod.linkedin.com 12:39:55AM node cordoned. 12:39:58AM node drained. 12:40:25AM node deallocated from CB pool 6/18 Node log : 09:16AM node controller registered node ltx1-app167322.prod.linkedin.com and NLM has been throwing errors “NodeDeletionRejected: Node is still actively in use (not tainted/cordoned by node-lifecycle-manager)” since then. 6/24 NSS log : Scaleup9052aab76c339706 was created and acked. Pod appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 was created and assigned to node ltx1-app167322.prod.linkedin.com . We have been seeing the “failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \" ltx1-app167322.prod.linkedin.com \" not found” error since then.",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:50:04.784-0700",
            "updated": "2025-07-28T09:50:04.784-0700",
            "comment_body": "Resolved by completing the instance manually and also swapped out the bad instance.",
            "commented_by": "Xinlin Zhou"
          }
        ],
        "priority": "Blocker",
        "issue_key": "LPS-40356",
        "created_ts": "2025-07-24T13:57:45.129+05:30",
        "issue_title": "Deployment stuck on non-existing/removed instance",
        "resolved_ts": "2025-07-28T16:50:29.985Z",
        "project_name": "LinkedIn Platform as a Service",
        "assignee_name": "Xinlin Zhou",
        "reporter_name": "Maryan Hratson",
        "assignee_email": "xinlzhou@linkedin.com",
        "reporter_email": "mhratson@linkedin.com",
        "assignee_changes": [
          {
            "timestamp": "2025-07-24 16:26:10.416000 UTC",
            "to_assignee": "Xinlin Zhou",
            "from_assignee": "confapi-supportal"
          }
        ],
        "issue_description": "deployment  stuck on non-existing instance. $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka status instance appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EWPXWP5CM to authenticate.\nSuccessfully created /Users/mhratson/.kube/config and configured 159 clusters\n\nStatus for instance: \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\"\n------------------------------------------------------------------------\n  Name               | appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8  \n  Namespace          | kafka-f0a79                                       \n  LiStatefulSet      | kafka                                             \n  Cluster            | prod-ltx1-k8s-9                                   \n  Product Version    | 3.0.580                                           \n  Spec.State         | RUNNING                                           \n  Status.State       | PENDING                                           \n  Pod.Status         | Not Found                                         \n  Node Name          | ltx1-app167322.prod.linkedin.com                  \n  MZ                 | 13                                                \n  Running Operations | deployment569b565971a26540                        \n------------------------------------------------------------------------ $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka get pods appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nError: failed to get pod for scope: failed to get resources for scope: 1 error occurred:\n        * failed to get resource infos: pods \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\" not found",
        "status_transitions": [
          {
            "to_state": "Closed",
            "timestamp": "2025-07-28 16:50:30.011000 UTC",
            "from_state": "Resolved"
          },
          {
            "to_state": "In Progress",
            "timestamp": "2025-07-24 16:33:14.609000 UTC",
            "from_state": "Open"
          },
          {
            "to_state": "Resolved",
            "timestamp": "2025-07-28 16:50:13.285000 UTC",
            "from_state": "In Progress"
          }
        ]
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T08:27:45Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T08:27:45Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118166,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1117",
        "created_ts": "2025-07-24T18:31:25.363+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Adam Butac",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "abutac@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (f3c23a35-9f05-480e-8e6f-ec242244093a) with the display name (pinot-portal-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:25Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:25Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118167,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-1095",
        "created_ts": "2025-07-24T18:31:10.593+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (e387ce36-1c6f-40a5-a39e-d59c805c27f1) with the display name (pinot-workflows-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T13:01:11Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T13:01:11Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118168,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-923",
        "created_ts": "2025-07-24T18:29:08.397+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (2d15c1c0-e5aa-42b5-b0c9-357c930bd0f4) with the display name (pinot-portal-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:59:08Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:59:08Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118169,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-900",
        "created_ts": "2025-07-24T18:28:50.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-portal-prod] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (15b00cc6-e57e-4298-ab90-d1e1ba56b745) with the display name (pinot-portal-prod).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:51Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:51Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118170,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-899",
        "created_ts": "2025-07-24T18:28:50.171+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-corp] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1384e3be-0d75-4391-a4bc-410d4f4dc95d) with the display name (pinot-workflows-corp).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:50Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:50Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118171,
      "tags": [],
      "title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
      "content": {
        "labels": "[msit-sdl-review]",
        "comments": [],
        "priority": "",
        "issue_key": "SECACTN-896",
        "created_ts": "2025-07-24T18:28:47.97+05:30",
        "issue_title": "A review needs to be conducted for your MSIT app [pinot-workflows-ei] - please action to ensure continued uptime",
        "resolved_ts": "0001-01-01T00:00:00Z",
        "project_name": "InfoSec Security Actions",
        "assignee_name": "Benson Yuan",
        "reporter_name": "Shozub Qureshi",
        "assignee_email": "beyuan@linkedin.com",
        "reporter_email": "squreshi@linkedin.com",
        "assignee_changes": [],
        "issue_description": "Issue: You are assigned this ticket because you are the owner of an Entra app in the Microsoft Corp tenant that requires a MSFT review and approval of assigned consented permissions. If the review is not completed by 8/31, your app risks Microsoft revoking the assigned permissions.Impact: By 8/31/2025 all apps without an approved review will have their permissions revoked and their online access removed which will likley cause servic disruption.Scope: This ticket scope specifically covers App ID (1145ec88-08dc-4f99-906e-81a136414775) with the display name (pinot-workflows-ei).Action Items: To proceed with this review, please:1. Confirm app status – Comment on this ticket to confirm if the app is still needed and if you're the right contact. If not needed, delete the app to close the ticket.2. If needed – LinkedIn InfoSec will review the app (see that there is a linked 'INFOSEC' ticket for confirmation this has started).3. Submit Admin Consent – Create a request in the MSFT SPACE tool (see instructions below).     a. Go to the SPACE tool at  https://spacetool.microsoft.com/      b. Sign in with your linkedin.biz credentials     c. Select Submit an Admin Consent Request            Fill out the form with the below required details:             - Is this assessment request related to MS Federal? (in most cases the answer is No)             - Entra ID             - Service Tree Name/ID (All Admin consent requests must be associated with a Service in ServiceTree. Find an existing Service tree or create new service at  https://microsoftservicetree.com/home#              - Business Justification",
        "status_transitions": []
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T12:58:48Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T12:58:48Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    },
    {
      "id": 118172,
      "tags": [],
      "title": "Deployment stuck on non-existing/removed instance",
      "content": {
        "labels": "",
        "comments": [
          {
            "created": "2025-07-24T09:33:28.067-0700",
            "updated": "2025-07-24T09:33:28.067-0700",
            "comment_body": "kubectl describe listatefuldeployment appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 -n kafka-f0a79 --context=prod-ltx1-k8s-9 \nEvents:\n  Type     Reason           Age                  From                             Message\n  ----     ------           ----                 ----                             -------\n  Warning  CBNodeGetFailed  13m (x102 over 27h)  listatefuldeployment-controller  failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \"ltx1-app167322.prod.linkedin.com\" not found",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:50:04.784-0700",
            "updated": "2025-07-28T09:50:04.784-0700",
            "comment_body": "Resolved by completing the instance manually and also swapped out the bad instance.",
            "commented_by": "Xinlin Zhou"
          },
          {
            "created": "2025-07-28T09:51:10.191-0700",
            "updated": "2025-07-28T16:54:57.900-0700",
            "comment_body": "#incident-6354 was created for this issue. The problem is that the node ltx1-app167322.prod.linkedin.com shows up in the k8s cluster but the corresponding cb node was gone. Event timeline: 6/2 NSS log : 12:39AM disruption76c0c68ef2061850 was created for app instance appinstance-53a4b496-43cc-4608-9cf4-b84cb042b7c7 on node ltx1-app167322.prod.linkedin.com and completed with failed due to AssignedCBNodeIsInUnhealthyState. 12:42AM swapdfcf5b5dfba3e2d5 was created for the same instance and completed successfully. The new instance appinstance-ff2f34e4-7bee-467c-9ef5-08c4612a0789 landed on node ltx1-app85151.prod.linkedin.com . CB log for ltx1-app167322.prod.linkedin.com 12:39:55AM node cordoned. 12:39:58AM node drained. 12:40:25AM node deallocated from CB pool 6/18 Node log : 09:16AM node controller registered node ltx1-app167322.prod.linkedin.com and NLM has been throwing errors “NodeDeletionRejected: Node is still actively in use (not tainted/cordoned by node-lifecycle-manager)” since then. 6/24 NSS log : Scaleup9052aab76c339706 was created and acked. Pod appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8 was created and assigned to node ltx1-app167322.prod.linkedin.com . We have been seeing the “failed to get the computeBrokerNode: ComputeBrokerNode.compute.linkedin.com \" ltx1-app167322.prod.linkedin.com \" not found” error since then.",
            "commented_by": "Xinlin Zhou"
          }
        ],
        "priority": "Blocker",
        "issue_key": "LPS-40356",
        "created_ts": "2025-07-24T13:57:45.129+05:30",
        "issue_title": "Deployment stuck on non-existing/removed instance",
        "resolved_ts": "2025-07-28T16:50:29.985Z",
        "project_name": "LinkedIn Platform as a Service",
        "assignee_name": "Xinlin Zhou",
        "reporter_name": "Maryan Hratson",
        "assignee_email": "xinlzhou@linkedin.com",
        "reporter_email": "mhratson@linkedin.com",
        "assignee_changes": [
          {
            "timestamp": "2025-07-24 16:26:10.416000 UTC",
            "to_assignee": "Xinlin Zhou",
            "from_assignee": "confapi-supportal"
          }
        ],
        "issue_description": "deployment  stuck on non-existing instance. $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka status instance appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nTo sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EWPXWP5CM to authenticate.\nSuccessfully created /Users/mhratson/.kube/config and configured 159 clusters\n\nStatus for instance: \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\"\n------------------------------------------------------------------------\n  Name               | appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8  \n  Namespace          | kafka-f0a79                                       \n  LiStatefulSet      | kafka                                             \n  Cluster            | prod-ltx1-k8s-9                                   \n  Product Version    | 3.0.580                                           \n  Spec.State         | RUNNING                                           \n  Status.State       | PENDING                                           \n  Pod.Status         | Not Found                                         \n  Node Name          | ltx1-app167322.prod.linkedin.com                  \n  MZ                 | 13                                                \n  Running Operations | deployment569b565971a26540                        \n------------------------------------------------------------------------ $ kubectl-in -f prod-ltx1 -t kafka.queuing -a kafka get pods appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\nError: failed to get pod for scope: failed to get resources for scope: 1 error occurred:\n        * failed to get resource infos: pods \"appinstance-f95a496b-60c0-4bdd-ae13-f58c9b8071f8\" not found",
        "status_transitions": [
          {
            "to_state": "Closed",
            "timestamp": "2025-07-28 16:50:30.011000 UTC",
            "from_state": "Resolved"
          },
          {
            "to_state": "In Progress",
            "timestamp": "2025-07-24 16:33:14.609000 UTC",
            "from_state": "Open"
          },
          {
            "to_state": "Resolved",
            "timestamp": "2025-07-28 16:50:13.285000 UTC",
            "from_state": "In Progress"
          }
        ]
      },
      "itemType": "JiraActivity",
      "createdAt": "2025-07-24T08:27:45Z",
      "productID": 5,
      "timeSpent": 0,
      "updatedAt": "2025-07-24T08:27:45Z",
      "itemStatus": "",
      "description": "",
      "additionalContext": ""
    }
  ],
  "Groups": [
    {
      "ItemsList": [
        118098,
        118099,
        118100,
        118101
      ],
      "GroupMetaData": {
        "Actions": "JIRA workflow improvements: [1] Process optimization recommendations: Implement workflow automation to triage similar issues (tagged as Access_Request) to distribute workload across team members automatically. [2] Workflow configuration changes: Configure JIRA to enforce SLA-based escalation for issues remaining in an OPEN status beyond a specific timeframe, ensuring timely action. [3] Team coordination enhancements: Create periodic review checkpoints within active sprints for backlog grooming and status updates to prevent extended delays during off-hours or handoff scenarios. [4] Issue prevention strategies: Introduce monitoring tools and automated tasks to preemptively identify and address app uptime concerns before creating manual Access_Request issues. Focus on JIRA-specific improvements with clear implementation steps.",
        "GroupID": 14249,
        "Insight": "JIRA process intelligence: [1] Issue triage and assignment effectiveness: All issues were created and assigned to the same individual (Benson Yuan) during off-hours, suggesting a lack of triage distribution to mitigate workload concentration and facilitate quicker resolution across multiple team members. [2] Workflow transition patterns and bottlenecks: All issues remain in an OPEN status with no status transitions since their creation on 2025-07-24, indicating a potential bottleneck in the initial actioning or review phase. [3] Team collaboration and handoff quality: Handoff considerations are flagged for all issues, but there is no evidence of proactive reassignment or collaboration to address these during the retrospective period. [4] Recurring issue themes and root causes: All issues relate to the same recurring theme of app uptime reviews for various MSIT apps under the 'pinot' ecosystem, highlighting a need for improved automation or proactive checks. [5] Resolution time distribution and efficiency patterns: All issues are tagged with 'LongResolution' and have not been resolved over 11 days since creation, reflecting a need for prioritization and potential SLA adherence reinforcement.",
        "Summary": "JIRA workflow summary: Overall issue management efficiency, team coordination patterns, and workflow bottlenecks for this issue group",
        "GroupName": "Tag: Access_Request",
        "GroupDescription": "Issues tagged with 'Access_Request', occurred 4 times"
      }
    },
    {
      "ItemsList": [
        118110,
        118111,
        118112,
        118113,
        118114,
        118115,
        118116,
        118124,
        118125,
        118126,
        118127,
        118128,
        118129,
        118130,
        118138,
        118139,
        118140,
        118141,
        118142,
        118143,
        118144,
        118152,
        118153,
        118154,
        118155,
        118156,
        118157,
        118158,
        118166,
        118167,
        118168,
        118169,
        118170,
        118171,
        118172
      ],
      "GroupMetaData": {
        "Actions": "JIRA workflow improvements: [1] Improve categorization and assignment processes to reduce open backlog issues in handoff [2] Introduce automated triage systems for off-hours incident creation [3] Optimize communication and tracking for extended investigation workflows [4] Ensure proactive remediation for recurring themes, especially InfoSec-related incidents. Focus on JIRA-specific improvements with clear implementation steps.",
        "GroupID": 14250,
        "Insight": "JIRA process intelligence: [1] Issue triage and assignment effectiveness [2] Workflow transition patterns and bottlenecks [3] Team collaboration and handoff quality [4] Recurring issue themes and root causes [5] Resolution time distribution and efficiency patterns",
        "Summary": "JIRA workflow summary: Overall issue management efficiency, team coordination patterns, and workflow bottlenecks for this issue group",
        "GroupName": "Tag: Uncategorized",
        "GroupDescription": "Issues tagged with 'Uncategorized', occurred 35 times"
      }
    },
    {
      "ItemsList": [
        118096,
        118097,
        118098,
        118099,
        118100,
        118101
      ],
      "GroupMetaData": {
        "Actions": "JIRA workflow improvements: [1] Process optimization recommendations: Implement automated reminders or alerts for off-hours ticket triage to ensure timely action on high-priority issues [2] Workflow configuration changes: Add a mandatory triage status and SLA tracking for open issues to prevent them from stagnating in the workflow [3] Team coordination enhancements: Assign backup assignees or enable load balancing to reduce reliance on individual team members for multiple tickets [4] Issue prevention strategies: Create a recurring automated audit for MSIT uptime and access health to reduce reactive issue generation while adding proactive resolution workflows for recurring themes.",
        "GroupID": 14251,
        "Insight": "JIRA process intelligence: [1] Issue triage and assignment effectiveness: All issues were created during off-hours and left in OPEN status, indicating delays in triage and handoff prioritization [2] Workflow transition patterns and bottlenecks: There are no status transitions recorded, suggesting that these issues are stuck in the initial phase, likely due to inefficient triage or routing [3] Team collaboration and handoff quality: Significant reliance on a single individual (Benson Yuan), with no evidence of effective load sharing or handoff planning [4] Recurring issue themes and root causes: The issues revolve around MSIT application reviews related to uptime and access, with clear clusters such as 'security concerns' and 'access requests' [5] Resolution time distribution and efficiency patterns: No progress has been tracked, as all issues remain unresolved, highlighting a major gap in resolution workflows and time allocation.",
        "Summary": "JIRA workflow summary: Overall issue management efficiency, team coordination patterns, and workflow bottlenecks for this issue group",
        "GroupName": "Tag: LongResolution",
        "GroupDescription": "Issues tagged with 'LongResolution', occurred 6 times"
      }
    },
    {
      "ItemsList": [
        118096,
        118097
      ],
      "GroupMetaData": {
        "Actions": "JIRA workflow improvements: [1] Process optimization recommendations: Implement stricter Service Level Agreements (SLAs) for triage and resolution timelines to ensure timely action on security concerns. [2] Workflow configuration changes: Introduce automated triggers to reassign or escalate issues that remain in OPEN status beyond a set timeframe. Add more descriptive and mandatory workflow statuses to track issue progress more granally. [3] Team coordination enhancements: Establish better off-hour workflows for responding to tickets created outside business hours to prevent initial triage delays. Create clearer handoff documentation to improve collaboration during oncall rotations. [4] Issue prevention strategies: Perform root-cause analysis for recurring security concerns to identify systemic issues, enabling proactive mitigation. Develop pre-configured response templates for common security-related action requests to streamline resolutions. Focus on JIRA-specific improvements with clear implementation steps.",
        "GroupID": 14252,
        "Insight": "JIRA process intelligence: [1] Issue triage and assignment effectiveness: Both issues were created during off-hours and remain in OPEN status, indicating potential delays in triage and resolution. [2] Workflow transition patterns and bottlenecks: LongResolution tag suggests prolonged issue handling processes, with no visible transitions from OPEN to resolution stages. [3] Team collaboration and handoff quality: Both issues were assigned but remain unresolved, highlighting potential handoff inefficiencies or lack of timely follow-up. [4] Recurring issue themes and root causes: Similar issue descriptions and a shared focus on app uptime reflect a common operational theme of security maintenance for MSIT apps, suggesting repeatable processes may need bolstering. [5] Resolution time distribution and efficiency patterns: Absence of resolution movement implies low efficiency in closing these issues, possibly due to unclear workflows or resource allocation.",
        "Summary": "JIRA workflow summary: Overall issue management efficiency, team coordination patterns, and workflow bottlenecks for this issue group",
        "GroupName": "Tag: Security_Concern",
        "GroupDescription": "Issues tagged with 'Security_Concern', occurred 2 times"
      }
    }
  ],
  "summaryType": "system_daily_v0"

 
 
};

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [jsonData, setJsonData] = useState(sampleData);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'issues', name: 'Issues', icon: Search },
    { id: 'tags', name: 'Tags', icon: Tags },
    { id: 'groups', name: 'Groups', icon: Target },
    { id: 'json', name: 'JSON', icon: FileJson },
  ];

  const handleJsonUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsedData = JSON.parse(e.target?.result as string);
          setJsonData(parsedData);
        } catch (error) {
          alert('Invalid JSON file. Please check the format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return <DataOverview data={jsonData} />;
      case 'issues':
        return <IssueAnalysis data={jsonData} />;
      case 'tags':
        return <TagAnalytics data={jsonData} />;
      case 'groups':
        return <GroupInsights data={jsonData} />;
      case 'json':
        return <JsonViewer data={jsonData} title="JSON Data" />;
      default:
        return <DataOverview data={jsonData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">JSON Analysis Dashboard</h1>
              <p className="text-sm text-gray-600">JIRA Activity Data Intelligence</p>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors">
                <FileJson className="w-4 h-4" />
                Upload JSON
                <input
                  type="file"
                  accept=".json"
                  onChange={handleJsonUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveTab()}
      </div>
    </div>
  );
}

export default App;