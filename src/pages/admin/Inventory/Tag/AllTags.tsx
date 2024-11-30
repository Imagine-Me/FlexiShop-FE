import { useProductService } from 'src/service/product.service'
import { PageWrapper } from '../../Landing/PageWrapper'
import { useEffect, useMemo, useState } from 'react'
import { ITagModel } from 'src/interfaces/product.interface'
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid'
import { Box, Button, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

import { PaginateValue } from 'src/interfaces/common.interface'
import { Link } from 'react-router-dom'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { useAlertDialogContext } from 'src/context/alertDialog/alertDialog.hook'
import { DataGrid } from 'src/components/generic/dataGrid'

export const AllTags = () => {
  const [tags, setTags] = useState<PaginateValue<ITagModel[]>>({
    data: [],
    currentPage: 1,
    total: 10,
  })
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 1,
    pageSize: 10,
  })

  const { deleteTag, getAllTags } = useProductService()
  const { showDialog } = useAlertDialogContext()

  const fetchTags = async () => {
    const latestProducts = await getAllTags(
      pagination.page === 0 ? 1 : pagination.page,
      pagination.pageSize
    )
    setTags(latestProducts)
  }

  const onTagDelete = (id: string) => {
    showDialog(
      'Are you sure you want to delete this category?',
      'This action will permanently delete the category',
      async () => {
        await deleteTag(id)
        await fetchTags()
      }
    )
  }

  const columns: GridColDef<ITagModel>[] = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell({ row }) {
          return (
            <>
              <Link to={`edit/${row.id}`}>
                <IconButton color="info">
                  <EditOutlinedIcon />
                </IconButton>
              </Link>
              <IconButton color="error" onClick={() => onTagDelete(row.id!)}>
                <DeleteOutlineIcon />
              </IconButton>
            </>
          )
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    fetchTags()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination])

  return (
    <PageWrapper breadcrumbs={[{ title: 'Inventory' }, { title: 'Tags' }]}>
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Link to={adminInventoryUrls.tags.create}>
          <Button variant="contained">Create</Button>
        </Link>
      </Box>
      <DataGrid
        rows={tags.data}
        columns={columns}
        pagination
        paginationModel={pagination}
        onPaginationModelChange={(model) => setPagination(model)}
      />
    </PageWrapper>
  )
}
