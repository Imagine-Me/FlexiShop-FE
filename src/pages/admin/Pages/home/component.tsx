import {
  Alert,
  Button,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ReactDragList from 'react-drag-list'
import { HomeComponents } from 'src/interfaces/components/home.interface'
import { convertCamelCaseToReadableString } from 'src/utils/string.utils'
import { useHomeContext } from 'src/context/home/home.hook'

import classes from './component.module.css'
import { useAlertDialogContext } from 'src/context/alertDialog/alertDialog.hook'
import { Link } from 'react-router-dom'
import { PageWrapper } from '../../Landing/PageWrapper'

interface DraggableCardProps {
  prop: HomeComponents
  isDraggable?: boolean
  actions?: {
    onAdd?: (component: HomeComponents) => void
    onDelete?: (id: string) => void
  }
}

const ListCard: React.FC<DraggableCardProps> = ({
  prop,
  isDraggable = true,
  actions,
}) => {
  const { showDialog } = useAlertDialogContext()

  const deleteComponent = (action?: any) => () => {
    showDialog(
      'Remove Component?',
      'Are you sure you want to remove this component from the home page? This action cannot be undone.',
      action
    )
  }

  return (
    <Card className={classes.draggableCard}>
      {isDraggable && <DragIndicatorIcon color="action" />}
      <div className={classes.content}>
        <Typography variant="h6">
          {convertCamelCaseToReadableString(prop.name)}
        </Typography>
        <Typography variant="body2">{prop.description}</Typography>
      </div>
      <div className={classes.action}>
        {isDraggable ? (
          <>
            <Link to={`edit/${prop.id}`}>
              <IconButton color="info" title="Edit component">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton
              color="error"
              title="Remove component"
              onClick={deleteComponent(() => actions?.onDelete?.(prop.id!))}
            >
              <DeleteIcon />
            </IconButton>
          </>
        ) : (
          <IconButton
            color="primary"
            title="Add component"
            onClick={() => actions?.onAdd?.(prop)}
          >
            <AddCircleIcon />
          </IconButton>
        )}
      </div>
    </Card>
  )
}

export const ComponentPage = () => {
  const {
    components,
    allComponents,
    setComponents,
    addComponent,
    deleteComponent,
    saveComponent,
    isLoading,
  } = useHomeContext()

  const onListChange = (_: any, newList: unknown) => {
    setComponents(newList as HomeComponents[])
  }

  return (
    <PageWrapper
      breadcrumbs={[{ title: 'Pages' }, { title: 'Home' }]}
      footer={{
        right: (
          <Button
            variant="contained"
            disabled={isLoading}
            onClick={saveComponent}
          >
            {isLoading && (
              <CircularProgress sx={{ mr: 1, color: 'white' }} size={12} />
            )}
            Update
          </Button>
        ),
      }}
    >
      <Typography>
        This page allows you to configure the <b>Home Page</b> of your app
      </Typography>

      <Alert severity="warning" sx={{ my: 1 }}>
        After making your updates, click the "Update" button at the bottom-right
        corner to apply the changes to the app.
      </Alert>

      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={12} md={6}>
          <Alert severity="info">
            <Typography>
              This section displays all the components currently added to the
              Home Page.
            </Typography>
            <Typography sx={{ mt: 2 }}> You can:</Typography>
            <Typography
              component="ul"
              sx={{ paddingLeft: 3, ml: 2 }}
              className={classes.list}
            >
              <li>
                <Typography>
                  Reorder Components: Drag and drop to change their positions.
                </Typography>
              </li>
              <li>
                <Typography>
                  Reorder components by dragging and dropping to change their
                  positions.
                </Typography>
              </li>
              <li>
                <Typography>
                  Edit a component's content by clicking the 'Edit' button.
                </Typography>
              </li>
              <li>
                <Typography>
                  Remove a component by clicking the 'Delete' button.
                </Typography>
              </li>
            </Typography>
          </Alert>
        </Grid>
        <Grid item xs={12} md={6}>
          <Alert severity="info">
            <Typography>
              This section contains all the component available to add to home
              page.
            </Typography>
            <Typography
              component="ul"
              sx={{ paddingLeft: 3, mt: 2 }}
              className={classes.list}
            >
              <li>
                <Typography>
                  Add new components to the Home Page by clicking the "Add"
                  button.
                </Typography>
              </li>
              <li>
                <Typography>
                  Preview a component before adding it by clicking the "View"
                  button.
                </Typography>
              </li>
            </Typography>
          </Alert>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.listContainer}>
            <ReactDragList
              rowKey="id"
              dataSource={components}
              handles={false}
              row={(record) => (
                <ListCard
                  prop={record as HomeComponents}
                  actions={{ onDelete: deleteComponent }}
                />
              )}
              onUpdate={onListChange}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.listContainer}>
            {allComponents.map((component) => (
              <ListCard
                key={component.id}
                prop={component}
                isDraggable={false}
                actions={{ onAdd: addComponent }}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </PageWrapper>
  )
}
