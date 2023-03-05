import type { ClaimsModel } from 'src/models/claims';

class claimsApi {
  getClaims(): Promise<ClaimsModel[]> {
    const products: ClaimsModel[] = [
      {
        id: '2134352435',
        licensePlateClaimant: 'LON XXXX',
        licensePlateOther: 'DSA321',
        opponentCompany: 'Loews Corporation',
        dateOfAccident: '09 September, 2022',
        status: 'Completed',
        dateOfLastUpdate: '28 Jan, 2023'
      },
      {
        id: '2134352435',
        licensePlateClaimant: 'ASD123',
        licensePlateOther: 'CA XXXX',
        opponentCompany: 'Allianz',
        dateOfAccident: '1 Jan, 2023',
        status: 'Completed',
        dateOfLastUpdate: '28 Jan, 2023'
      },
      {
        id: '2134352435',
        licensePlateClaimant: 'ASD123',
        licensePlateOther: 'DSGA XXXX',
        opponentCompany: 'Prudential Financial',
        dateOfAccident: '10 Feb, 2023',
        status: 'Pending',
        dateOfLastUpdate: '21 Feb, 2023'
      },
      {
        id: '2134352435',
        licensePlateClaimant: 'ASD123',
        licensePlateOther: 'DSA321',
        opponentCompany: 'Axa',
        dateOfAccident: '11 Feb, 2023',
        status: 'Failed',
        dateOfLastUpdate: '20 Feb, 2023'
      }
    ];

    return Promise.resolve(products);
  }
}

export const ClaimsApi = new claimsApi();
