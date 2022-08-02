import { IacOrgSettings } from '../../../../cli/commands/test/iac/local-execution/types';
import { SEVERITY } from '../../../snyk-test/legacy';
import { ProjectAttributes } from '../../../types';

export interface TestConfig {
  paths: string[];
  iacCachePath: string;
  userRulesBundlePath?: string;
  userPolicyEnginePath?: string;
  projectName: string;
  orgSettings: IacOrgSettings;
  severityThreshold?: SEVERITY;
  attributes?: ProjectAttributes;
}
