import { Box, Typography, useTheme } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { useWindowSize } from '@/hooks/useWindowSize';

export default function CustomizedTimeline() {
  const theme = useTheme();

  const size = useWindowSize();

  return (
    <Box mx={2}>
      <Timeline position={size.width > 1000 ? "alternate" : 'left'}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ p: 1 }}></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent boxShadow={5} sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                borderTop: 1,
                boxShadow: 5,
                borderRadius: '8px',
                p: 2,
                width: 300,
                backgroundColor: `${theme.colors.alpha.white[100]}`
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: 1 }}>
                Sent
              </Typography>
              <Typography sx={{ opacity: '70%' }}>
                Date: Mar 10, 2023 <br />
                Flow entry submitter: John Doe, <br />
                Agreement on responsibility <br />
                Responsibility <br />
                Number of signatures: 12 <br />
                Respond by date: Mar 1, 2023
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ p: 1 }}></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent boxShadow={5} sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                borderTop: 1,
                borderRadius: '8px',
                boxShadow: 5,
                p: 2,
                marginLeft: 'auto',
                width: 300,
                backgroundColor: `${theme.colors.alpha.white[100]}`
              }}
            >
              <Typography
                variant="h4"
                sx={{ marginBottom: 1, textAlign: 'left' }}
              >
                Received
              </Typography>
              <Typography sx={{ opacity: '70%', textAlign: 'left' }}>
                Date: Mar 1, 2023 <br />
                Flow entry submitter: John Doe, <br />
                Agreement on responsibility <br />
                Responsibility <br />
                Number of signatures: 12 <br />
                Respond by date: Mar 1, 2023
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ p: 1 }}></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent boxShadow={5} sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                borderTop: 1,
                borderRadius: '8px',
                p: 2,
                width: 300,
                backgroundColor: `${theme.colors.alpha.white[100]}`
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: 1 }}>
                Document Exchange
              </Typography>
              <Typography sx={{ opacity: '70%' }}>
                Date: Mar 1, 2023 <br />
                Flow entry submitter: John Doe, <br />
                Agreement on responsibility <br />
                Responsibility <br />
                Number of signatures: 12 <br />
                Respond by date: Mar 1, 2023
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ p: 1 }}></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent boxShadow={5} sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                borderTop: 1,
                borderRadius: '8px',
                boxShadow: 5,
                p: 2,
                marginLeft: 'auto',
                width: 300,
                backgroundColor: `${theme.colors.alpha.white[100]}`
              }}
            >
              <Typography
                variant="h4"
                sx={{ marginBottom: 1, textAlign: 'left' }}
              >
                Outcomes
              </Typography>
              <Typography sx={{ opacity: '70%', textAlign: 'left' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                maxime quod fugiat ipsam nostrum quia dolorem, repellendus
                reiciendis quam consequatur dignissimos ad!
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ p: 1 }}></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent boxShadow={5} sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                borderTop: 1,
                borderRadius: '8px',
                boxShadow: 5,
                p: 2,
                width: 300,
                backgroundColor: `${theme.colors.alpha.white[100]}`
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: 1 }}>
                Elaboration
              </Typography>
              <Typography sx={{ opacity: '70%' }}>
                Date: Mar 1, 2023 <br />
                Flow entry submitter: John Doe, <br />
                Agreement on responsibility <br />
                Responsibility <br />
                Number of signatures: 12 <br />
                Respond by date: Mar 1, 2023
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
