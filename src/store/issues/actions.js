import { ADD_ISSUES, ADD_ISSUE, BACKUP_ISSUES, UPDATE_OPINION } from "./issueSlice";
import { getAuthToken, getUser } from "../../utils/localStorge";
import axios from "axios";

export const getIssues = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_PROXY}/api/issues/view`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken(),
      },
    })
    .then((response) => {
      console.log(response.data.issues);
      switch (response.status) {
        case 200:
          dispatch(ADD_ISSUES({ issues: response.data.issues }));
          dispatch(BACKUP_ISSUES());
          break;
        default:
          console.log("issues did not loaded");
      }
    });
};

export const addIssue = (title, content) => (dispatch) => {
  const newIssue = {
    title: title,
    content: content,
    creator: getUser()._id,
  };
  axios
    .post(`${process.env.REACT_APP_PROXY}/api/issues/add`, newIssue)
    .then((response) => {
      const output = response.data;
      // console.log(output);
      switch (response.status) {
        case 200:
          dispatch(ADD_ISSUE(output.issue));
          return false;
        default:
          console.error("Issue can't be created");
          return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const submitOpinion = (issueId, userOpinion) => (dispatch) => {
  axios
    .put(
      `${process.env.REACT_APP_PROXY}/api/issues/update/opinion/${issueId}`,
      { userId: getUser()._id, opinion: userOpinion },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: getAuthToken(),
        },
      }
    )
    .then((response) => {
      switch (response.status) {
        case 200:
          dispatch(
            UPDATE_OPINION({ issueId, userOpinion, userId: getUser()._id })
          );
          break;
        default:
          console.log("issues did not loaded");
      }
    });
};
