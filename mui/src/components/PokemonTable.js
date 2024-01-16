import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { PokemonDataContext } from '../PokemonDataContext';



const columns = [
  { field: 'num', headerName: 'NUMBER', width: 200},

  {
    field: 'name',
    headerName: 'Pokemon Name',
    width: 150,
    editable: false,
    width: 200
  },
  {
    field: 'height',
    headerName: 'Pokemon Height',
    type: 'number',
    width: 110,
    editable: false,
    width: 200
  },
  {
    field: 'weight',
    headerName: 'Pokemon Weight',
    type: 'number',
    width: 110,
    editable: false,
    width: 200
  },

  {
    field: 'type',
    headerName: 'Types',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.type.map((type) => (type))|| ''}`,
      width: 200
  },

];


export default function PokemonDataTable() {
    const rows = useContext(PokemonDataContext);

    
  return (
    <Box sx={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}