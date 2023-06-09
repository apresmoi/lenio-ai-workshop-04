import axios from "axios";

function getDefaultPayload(summary: string, description: string) {
  return {
    project: {
      key: process.env.JIRA_PROJECT_KEY,
    },
    description: {
      version: 1,
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: description,
            },
          ],
        },
      ],
    },
    summary: summary,
  };
}

const incidentLevel = {
  CRITICAL: "10020",
  HIGH: "10021",
  MEDIUM: "10022",
  LOW: "10023",
};

function incidentPayload(level: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW") {
  return {
    customfield_10010: "255",
    issuetype: {
      id: "10010",
    },
    customfield_10040: {
      id: incidentLevel[level],
    },
  };
}

const requestTypes = {
  CHANGE_PASSWORD: "10268",
  CREATE_USER: "10269",
  OTHER: "10270",
};

function serviceRequestPayload(
  requestType: "CHANGE_PASSWORD" | "CREATE_USER" | "OTHER"
) {
  return {
    customfield_10010: "252",
    issuetype: {
      id: "10011",
    },
    customfield_10098: {
      id: requestTypes[requestType],
    },
  };
}

function createTicket(payload: Object) {
  return new Promise((resolve, reject) => {
    if (
      !process.env.JIRA_USER ||
      !process.env.JIRA_TOKEN ||
      !process.env.JIRA_SERVER ||
      !process.env.JIRA_PROJECT_KEY
    ) {
      reject(
        "JIRA_USER, JIRA_TOKEN, JIRA_SERVER and JIRA_PROJECT_KEY must be set in .env"
      );
    }

    const auth = btoa(`${process.env.JIRA_USER}:${process.env.JIRA_TOKEN}`);

    return axios
      .post(
        process.env.JIRA_SERVER + "/rest/api/3/issue",
        {
          fields: {
            ...payload,
          },
        },
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function createServiceTicket(
  summary: string,
  description: string,
  requestType: "CHANGE_PASSWORD" | "CREATE_USER" | "OTHER"
) {
  return createTicket({
    ...getDefaultPayload(summary, description),
    ...serviceRequestPayload(requestType),
  });
}

export function createIncidentTicket(
  summary: string,
  description: string,
  level: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"
) {
  return createTicket({
    ...getDefaultPayload(summary, description),
    ...incidentPayload(level),
  });
}
