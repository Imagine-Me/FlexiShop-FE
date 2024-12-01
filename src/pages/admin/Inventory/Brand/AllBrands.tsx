import { useProductService } from 'src/service/product.service'
import { PageWrapper } from '../../Landing/PageWrapper'
import { useEffect, useMemo, useState } from 'react'
import { IBrandModel } from 'src/interfaces/product.interface'
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid'
import { Box, Button, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

import { PaginateValue } from 'src/interfaces/common.interface'
import { Link } from 'react-router-dom'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { useAlertDialogContext } from 'src/context/alertDialog/alertDialog.hook'
import { DataGrid } from 'src/components/generic/dataGrid'

export const AllBrand = () => {
  const [brands, setBrands] = useState<PaginateValue<IBrandModel[]>>({
    data: [],
    currentPage: 1,
    total: 10,
  })
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 1,
    pageSize: 25,
  })

  const { deleteBrand, getAllBrands } = useProductService()
  const { showDialog } = useAlertDialogContext()

  const fetchBrands = async () => {
    const latestProducts = await getAllBrands(
      pagination.page === 0 ? 1 : pagination.page,
      pagination.pageSize
    )
    setBrands(latestProducts)
  }

  const onBrandDelete = (id: string) => {
    showDialog(
      'Are you sure you want to delete this brand?',
      'This action will permanently delete the brand',
      async () => {
        await deleteBrand(id)
        await fetchBrands()
      }
    )
  }

  const columns: GridColDef<IBrandModel>[] = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Name',
        width: 400,
      },
      {
        field: 'logo',
        headerName: 'Logo',
        flex: 1,
        renderCell({ row }) {
          return (
            <Box display="flex" alignItems="center" height="100%">
              <img
                height={40}
                src={row.logo?.url}
                alt={row.logo?.name}
                style={{ objectFit: 'contain' }}
              />
            </Box>
          )
        },
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
              <IconButton color="error" onClick={() => onBrandDelete(row.id!)}>
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
    fetchBrands()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination])

  return (
    <PageWrapper breadcrumbs={[{ title: 'Inventory' }, { title: 'Brands' }]}>
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Link to={adminInventoryUrls.brand.create}>
          <Button variant="contained">Create</Button>
        </Link>
      </Box>
      <DataGrid
        rows={brands.data}
        columns={columns}
        pagination
        paginationModel={pagination}
        onPaginationModelChange={(model) => setPagination(model)}
      />
    </PageWrapper>
  )
}
