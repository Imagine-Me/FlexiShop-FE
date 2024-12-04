import { useProductService } from 'src/service/product.service'
import { PageWrapper } from '../../Landing/PageWrapper'
import { useEffect, useMemo, useState } from 'react'
import { IVariantModel } from 'src/interfaces/product.interface'
import { GridColDef, GridPaginationModel } from '@mui/x-data-grid'
import { Box, Button, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DOMPurify from 'dompurify'

import { PaginateValue } from 'src/interfaces/common.interface'
import { Link } from 'react-router-dom'
import { adminInventoryUrls } from 'src/constants/routes.constant'
import { useAlertDialogContext } from 'src/context/alertDialog/alertDialog.hook'
import { DataGrid } from 'src/components/generic/dataGrid'

export const AllVariants = () => {
  const [variants, setVariants] = useState<PaginateValue<IVariantModel[]>>({
    data: [],
    currentPage: 1,
    total: 10,
  })
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 1,
    pageSize: 25,
  })

  const { deleteVariant, getAllVariants } = useProductService()
  const { showDialog } = useAlertDialogContext()

  const fetchTags = async () => {
    const latestProducts = await getAllVariants(
      pagination.page === 0 ? 1 : pagination.page,
      pagination.pageSize
    )
    setVariants(latestProducts)
  }

  const onTagDelete = (id: string) => {
    showDialog(
      'Are you sure you want to delete this variant?',
      'This action will permanently delete the variant',
      async () => {
        await deleteVariant(id)
        await fetchTags()
      }
    )
  }

  const columns: GridColDef<IVariantModel>[] = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Name',
        width: 300,
      },
      {
        field: 'value',
        headerName: 'Value',
        flex: 1,
      },
      {
        field: 'html',
        headerName: 'HTML',
        renderCell({ row }) {
          const sanitizedHtml = DOMPurify.sanitize(row.html ?? '')
          return (
            <Box height="100%" display="flex" alignItems="center">
              <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
            </Box>
          )
        },
        width: 300,
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
    <PageWrapper breadcrumbs={[{ title: 'Inventory' }, { title: 'Variants' }]}>
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Link to={adminInventoryUrls.tags.create}>
          <Button variant="contained">Create</Button>
        </Link>
      </Box>
      <DataGrid
        rows={variants.data}
        columns={columns}
        pagination
        paginationModel={pagination}
        onPaginationModelChange={(model) => setPagination(model)}
      />
    </PageWrapper>
  )
}
