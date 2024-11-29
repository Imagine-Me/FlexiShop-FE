import { DataGridProps, DataGrid as MuiDataGrid } from '@mui/x-data-grid'

import classes from './DataGrid.module.css'

export const DataGrid: React.FC<DataGridProps> = ({ className, ...props }) => {
  return <MuiDataGrid {...props} className={`${classes.table} ${className}`} />
}
