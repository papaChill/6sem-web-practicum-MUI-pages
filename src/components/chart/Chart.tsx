import Navbar from '../Navbar';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';
import { countries, years, types } from './groupdata';
import Typography from '@mui/material/Typography';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';

type tSelect = "Страна" | "Год" | "Тип";

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Страна");
    const [groupData, setGroupData] = React.useState(countries);

     const handleChange = (event: SelectChangeEvent) => { 
        const selectedValue = event.target.value as tSelect;
        setGroup(selectedValue); 
        
        if (selectedValue === "Страна") {
            setGroupData(countries);
        } else if (selectedValue === "Год") {
            setGroupData(years);
        } else if (selectedValue === "Тип") {
            setGroupData(types);
        }
    }

    return (
        <>
            <Navbar active="3" />

            <Box sx={{ width:"200px", m:"auto" }}>
                <FormControl fullWidth>
                    <InputLabel> Группировать по </InputLabel>
                    <Select
                        id="select-group"
                        value={ group }
                        label="Группировать по"
                        onChange={ handleChange }
                    >
                        <MenuItem value="Страна"> Стране </MenuItem>
                        <MenuItem value="Год"> Году </MenuItem>
                        <MenuItem value="Тип"> Типу </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            
            <Typography variant="h4" align="center" sx={{ mt: 4 }}>
                Сгруппированные данные по странам
            </Typography>
           
            <GroupChart data={groupData} />
            <GroupGrid data={groupData} />        
        </>
    );
}

export default Chart;