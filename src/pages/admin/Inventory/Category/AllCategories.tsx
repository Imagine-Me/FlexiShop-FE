import { useProductService } from 'src/service/product.service'
import { PageWrapper } from '../../Landing/PageWrapper'
import { useEffect, useMemo, useState } from 'react'
import { ICategoryModel } from 'src/interfaces/product.interface'
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid'
import { Box, Button, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

import { PaginateValue } from 'src/interfaces/common.interface'
import { Link } from 'react-router-dom'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { useAlertDialogContext } from 'src/context/alertDialog/alertDialog.hook'
import { DataGrid } from 'src/components/generic/dataGrid'

export const AllCategories = () => {
  const [categories, setCategories] = useState<PaginateValue<ICategoryModel[]>>({
    data: [],
    currentPage: 1,
    total: 10,
  })
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 1,
    pageSize: 10,
  })

  const { deleteCategory, getAllCategories } = useProductService()
  const { showDialog } = useAlertDialogContext()

  const fetchCategories = async () => {
    const latestProducts = await getAllCategories(
      pagination.page === 0 ? 1 : pagination.page,
      pagination.pageSize
    )
    setCategories(latestProducts)
  }

  const onCategoryDelete = (id: string) => {
    showDialog(
      'Are you sure you want to delete this category?',
      'This action will permanently delete the category',
      async () => {
        await deleteCategory(id)
        await fetchCategories()
      }
    )
  }

  const columns: GridColDef<ICategoryModel>[] = useMemo(
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
              <IconButton color="error" onClick={() => onCategoryDelete(row.id!)}>
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
    fetchCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination])

  return (
    <PageWrapper
      breadcrumbs={[{ title: 'Inventory' }, { title: 'Categories' }]}
    >
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Link to={adminInventoryUrls.brand.create}>
          <Button variant="contained">Create</Button>
        </Link>
      </Box>
      <DataGrid
        rows={categories.data}
        columns={columns}
        pagination
        paginationModel={pagination}
        onPaginationModelChange={(model) => setPagination(model)}
      />
    </PageWrapper>
  )
}
