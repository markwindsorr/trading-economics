import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

export const DropdownSelect = ({ options, label, onSelectChange, selectedValue }) => {

    return (
        <Box sx={{ width: 320 }}>
            <FormControl fullWidth>
                <InputLabel style={{ color: 'white' }}>{label}</InputLabel>
                <Select
                    value={selectedValue}
                    onChange={(event) => onSelectChange(event.target.value)}
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid #ccc', // Change the border color to gray
                    }}
                    MenuProps={{
                        style: {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};