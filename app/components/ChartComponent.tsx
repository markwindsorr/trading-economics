import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from "@mui/material";


export const ChartComponent = ({ title = "Trading Economics Chart", chartData }) => {

    return (
        <Box sx={{ padding: 2, border: 0.5, borderColor: "rgba(255,255,255,0.1)" }}>
            <Typography variant='h5'>
                {title}
            </Typography>
            <LineChart
                sx={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.04)' }}
                series={[
                    {
                        data: chartData.y,
                        showMark: false
                    }
                ]}
                sx={{
                    '.MuiLineElement-root': {
                        stroke: '#8884d8',
                        strokeWidth: 2,
                    },
                    '.MuiMarkElement-root': {
                        stroke: '#8884d8',
                        scale: '0.6',
                        fill: '#fff',
                        strokeWidth: 2,
                    },
                }}
                width={500}
                height={300}

            />
        </Box>

    )
}