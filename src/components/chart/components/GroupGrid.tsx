import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import { tGroup } from "../groupdata";

type GroupProps = {
    data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    const columns: GridColDef[] = [
        { field: 'Группа', headerName: 'Группа' },
        { field: 'Минимальная высота' },
        { field: 'Максимальная высота' },
        { field: 'Средняя высота' },
    ];

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid 
                rows={data} 
                columns={columns} 
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}                
            />            
        </Container>
    );
}

export default GroupGrid;