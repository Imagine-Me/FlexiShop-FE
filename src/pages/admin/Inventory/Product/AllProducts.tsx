import { useProductService } from 'src/service/product.service'
import { PageWrapper } from '../../Landing/PageWrapper'
import { useEffect, useMemo, useState } from 'react'
import { IProductModel } from 'src/interfaces/product.interface'
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid'
import { Box, Button, Chip, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

import classes from './AllProducts.module.css'
import { PaginateValue, StatusEnum } from 'src/interfaces/common.interface'
import { Link } from 'react-router-dom'
import { AdminUrls } from 'src/constants/routes.constant'
import { useAlertDialogContext } from 'src/context/alertDialog/alertDialog.hook'

export const AllProducts = () => {
  const [products, setProducts] = useState<PaginateValue<IProductModel[]>>({
    data: [],
    currentPage: 1,
    total: 10,
  })
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 1,
    pageSize: 10,
  })

  const { getAllProducts, deleteProduct } = useProductService()
  const { showDialog } = useAlertDialogContext()

  const fetchProducts = async () => {
    const latestProducts = await getAllProducts(
      pagination.page === 0 ? 1 : pagination.page,
      pagination.pageSize
    )
    setProducts(latestProducts)
  }

  const onProductDelete = (id: string) => {
    showDialog(
      'Are you sure you want to delete this product?',
      'This action will permanently delete the product',
      async () => {
        await deleteProduct(id)
        await fetchProducts()
      }
    )
  }

  const columns: GridColDef<IProductModel>[] = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 1,
      },
      {
        field: 'price',
        headerName: 'Price',
        flex: 1,
      },
      {
        field: 'discountPrice',
        headerName: 'Discount Price',
        flex: 1,
      },
      {
        field: 'stock',
        headerName: 'Stock',
        flex: 1,
      },
      {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        renderCell({ row }) {
          switch (row.status) {
            case StatusEnum.ACTIVE:
              return <Chip label="Active" color="success" />
            case StatusEnum.DRAFT:
              return <Chip label="Draft" color="info" />
            case StatusEnum.ARCHIVED:
              return <Chip label="Archived" color="error" />
          }
        },
      },
      {
        field: 'action',
        headerName: 'Action',
        flex: 1,
        renderCell({ row }) {
          return (
            <>
              <Link to={`edit/${row.id}`}>
                <IconButton color="info">
                  <EditOutlinedIcon />
                </IconButton>
              </Link>
              <IconButton color="error" onClick={() => onProductDelete(row.id)}>
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
    fetchProducts()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination])

  return (
    <PageWrapper breadcrumbs={[{ title: 'Inventory' }, { title: 'Products' }]}>
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Link to={AdminUrls.PRODUCT_CREATE_PAGE}>
          <Button variant="contained">Create</Button>
        </Link>
      </Box>
      <DataGrid
        className={classes.table}
        rows={products.data}
        columns={columns}
        pagination
        paginationModel={pagination}
        onPaginationModelChange={(model) => setPagination(model)}
      />
    </PageWrapper>
  )
}
