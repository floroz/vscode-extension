import { CodeIssueCommandArg } from '../../snykCode/views/interfaces';
import { OssIssueCommandArg } from '../../snykOss/views/ossVulnerabilityTreeProvider';
import { CodeIssueData, Issue } from '../languageServer/types';

export enum OpenCommandIssueType {
  CodeIssueOld,
  CodeIssue,
  OssVulnerability,
}

export type OpenIssueCommandArg = {
  issue: CodeIssueCommandArg | OssIssueCommandArg;
  issueType: OpenCommandIssueType;
};

export const isCodeIssue = (
  _issue: Issue<CodeIssueData> | OssIssueCommandArg,
  issueType: OpenCommandIssueType,
): _issue is Issue<CodeIssueData> => {
  return issueType === OpenCommandIssueType.CodeIssue;
};

export const isOssIssue = (
  _issue: Issue<CodeIssueData> | OssIssueCommandArg,
  issueType: OpenCommandIssueType,
): _issue is OssIssueCommandArg => {
  return issueType === OpenCommandIssueType.OssVulnerability;
};
