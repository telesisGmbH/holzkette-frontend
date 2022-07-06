import { Box } from '@mui/material';
import { List, Datagrid, TextField, DateField, NumberField } from 'react-admin';
import { MapList } from './MapList';

export const WoodPileList = () => (
        <Box flexDirection={'row'} display={'flex'}>
        <List sx={{
            width: "50%",
            px: 2
        }}>
            <Datagrid>
                <TextField source="id" />
                <DateField source="created_at" />
                <TextField source="quality" />
                <NumberField source="amount" />
                <NumberField source="length" />
            </Datagrid>
        </List>
        <List sx={{
            width: "50%",
            px: 2
        }}>
            <MapList />
        </List>
    </Box>
);