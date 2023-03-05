export type ClaimStatus = 'Completed' | 'Pending' | 'Failed';

export interface ClaimsModel {
  id: string;
  licensePlateClaimant: string;
  licensePlateOther: string;
  opponentCompany: string;
  dateOfAccident: string;
  status: ClaimStatus;
  dateOfLastUpdate: string;
}
