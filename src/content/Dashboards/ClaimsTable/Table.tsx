import { useState, useEffect, useCallback } from 'react';

import { Card } from '@mui/material';

import { useRefMounted } from 'src/hooks/useRefMounted';
import { ClaimsModel } from 'src/models/claims';
import RecentOrdersTable from './TableData';
import { ClaimsApi } from 'src/mocks/claims';

function RecentOrders() {
  const isMountedRef = useRefMounted();
  const [claims, setClaims] = useState<ClaimsModel[]>([]);

  const getClaims = useCallback(async () => {
    try {
      const response = await ClaimsApi.getClaims();

      if (isMountedRef()) {
        setClaims(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getClaims();
  }, [getClaims]);

  return (
    <Card
      sx={{
        width: '100%',
        marginLeft: '22px'
      }}
    >
      <RecentOrdersTable claims={claims} />
    </Card>
  );
}

export default RecentOrders;
