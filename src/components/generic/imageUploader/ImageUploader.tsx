import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  IconButton,
  Paper,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { ChangeEvent, useRef, useState } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { useImageService } from 'src/service/images.service'
import { IImageModel } from 'src/interfaces/image.interface'
import { readFileAsDataURL } from 'src/utils/file.utils'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CloseIcon from '@mui/icons-material/Close'
import { useImageStore } from 'src/store/image.store'
import { FormError } from 'src/components/formError/FormError'

interface ImageUploaderProps {
  multiple?: boolean
  value: IImageModel[]
  label: string
  name?: string
  description?: string
  onChange?: (value: IImageModel | IImageModel[]) => void
}

const StyledIconButton = styled(IconButton)(() => ({
  width: '100px',
  height: '100px',
  borderRadius: '4px',
  border: '1px dashed',
}))

const StyledDeleteIconBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  '>div': {
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.action.disabled,
  },
  '&:hover >div': {
    display: 'flex',
  },
}))

const StyledSelectImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  '>.hover-content': {
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.action.disabled,
    cursor: 'pointer',
  },
  '&:hover >.hover-content': {
    display: 'flex',
  },
  '.selected': {
    position: 'absolute',
    bottom: 2,
    right: 2,
    display: 'none',
  },
  '&.active .selected': {
    display: 'block',
  },
}))

interface IDeletableImageProps {
  index: number
  image: string
  onDeleted: (value: number) => void
}

const DeletableImage: React.FC<IDeletableImageProps> = ({
  index,
  image,
  onDeleted,
}) => {
  return (
    <StyledDeleteIconBox key={`selected_image_${index}`}>
      <img
        src={image as string}
        alt={`selected_image_${index}`}
        loading="lazy"
        style={{ objectFit: 'cover' }}
        width={100}
        height={100}
      />
      <div>
        <IconButton color="error" onClick={() => onDeleted(index)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </StyledDeleteIconBox>
  )
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  multiple = false,
  value,
  label,
  description = '',
  onChange = () => null,
}) => {
  const [showImageSelectDialog, setShowImageSelectDialog] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const { images } = useImageStore()
  const [uploadingImages, setUploadingImages] = useState<File[]>([])
  const [imageUrls, setImageUrls] = useState<
    Array<string | ArrayBuffer | null>
  >([])

  const [selectedImages, setSelectedImages] = useState<IImageModel[]>(value)

  const { isLoading, error, getImages, uploadFiles } = useImageService()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onFileInputButtonClicked = () => {
    fileInputRef.current?.click()
  }

  const closeForm = () => {
    setImageUrls([])
    setUploadingImages([])
    setShowForm(false)
  }
  const openForm = () => setShowForm(true)
  const closeDialog = () => {
    setImageUrls([])
    setUploadingImages([])
    setShowImageSelectDialog(false)
  }
  const openDialog = () => setShowImageSelectDialog(true)

  const onInputFileChanged = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = [...uploadingImages, ...(e.target.files ?? [])]
    const imageUrls: (string | ArrayBuffer | null)[] = []
    for (const file of files) {
      try {
        const imageUrl = await readFileAsDataURL(file)
        imageUrls.push(imageUrl)
      } catch (error) {
        console.error('Error reading file:', error)
      }
    }
    setUploadingImages(files)
    setImageUrls(imageUrls)
  }

  const onFileDeleted = (index: number) => {
    const newUploadingImages = [...uploadingImages]
    newUploadingImages.splice(index, 1)
    setUploadingImages(newUploadingImages)
    const newImageUrls = [...imageUrls]
    newImageUrls.splice(index, 1)
    setImageUrls(newImageUrls)
  }

  const selectImages = (item: IImageModel, isSelected: boolean) => {
    if (isSelected) {
      setSelectedImages(selectedImages.filter((image) => image.id !== item.id))
      return
    }
    if (multiple) {
      const newImages = [...selectedImages, item]
      setSelectedImages(newImages)
      return
    }
    setSelectedImages([item])
  }

  const onSelectImages = () => {
    if (multiple) {
      onChange(selectedImages)
    } else {
      onChange(selectedImages[0])
    }
    closeDialog()
  }

  const onSelectedImageDelete = (index: number) => {
    setSelectedImages(selectedImages.filter((_, i) => index !== i))
  }

  return (
    <>
      <Box>
        <FormLabel>{label}</FormLabel>
        <Typography sx={{ mb: 2 }}>{description}</Typography>

        {(multiple || selectedImages.length === 0) && (
          <StyledIconButton onClick={openDialog}>
            <AddIcon />
          </StyledIconButton>
        )}
        <Box display="flex">
          {selectedImages.map((item, index) => (
            <DeletableImage
              key={`selected_image_${index}`}
              index={index}
              image={item.url}
              onDeleted={onSelectedImageDelete}
            />
          ))}
        </Box>
      </Box>

      {/* image dialog */}
      <Dialog
        open={showImageSelectDialog}
        onClose={closeDialog}
        fullWidth
        maxWidth="xl"
      >
        <DialogTitle
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ backgroundColor: 'grey.100' }}
        >
          Select Images
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FileUploadIcon />}
            onClick={openForm}
          >
            Upload
          </Button>
        </DialogTitle>
        <DialogContent sx={{ minHeight: 200 }}>
          <Box display="flex" flexWrap="wrap" gap={3} paddingY={3}>
            {(images ?? []).map((item) => {
              const updatedImages = Array.isArray(selectedImages)
                ? selectedImages
                : []
              const isSelected = updatedImages.some(
                (image) => image.id === item.id
              )
              return (
                <StyledSelectImage
                  key={item.id}
                  className={isSelected ? 'active' : ''}
                  width={100}
                  height={100}
                  sx={{ border: '1px', borderColor: 'secondary.main' }}
                >
                  <img
                    width="100"
                    height="100"
                    style={{ objectFit: 'cover' }}
                    srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div
                    className="hover-content"
                    onClick={() => selectImages(item, isSelected)}
                  >
                    {isSelected ? (
                      <CloseIcon color="error" />
                    ) : (
                      <DoneIcon color="success" />
                    )}
                  </div>
                  <CheckCircleIcon color="success" className="selected" />
                </StyledSelectImage>
              )
            })}
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'grey.100' }}>
          <Button onClick={closeDialog} variant="outlined">
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={selectedImages.length === 0}
            onClick={onSelectImages}
          >
            Select
          </Button>
        </DialogActions>
      </Dialog>

      {/* Image uploader */}
      <Dialog
        open={showForm}
        onClose={closeForm}
        fullWidth
        maxWidth="md"
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            uploadingImages.forEach((file) => {
              formData.append('files', file)
            })
            uploadFiles(formData).then(() => {
              getImages()
              closeForm()
            })
          },
        }}
      >
        <DialogTitle>Upload</DialogTitle>
        <DialogContent style={{ paddingTop: 8 }}>
          <FormError message={error} sx={{ mb: 4 }} />
          <TextField name="name" fullWidth label="Image Name" />
          <Paper sx={{ mt: 2, p: 4 }}>
            <TextField name="url" fullWidth label="Image Url" />
            <Typography align="center" variant="h6" sx={{ my: 2 }}>
              Or
            </Typography>
            <Box display="flex" gap={3}>
              <StyledIconButton onClick={onFileInputButtonClicked}>
                <AddIcon />
              </StyledIconButton>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                style={{ display: 'none' }}
                onChange={onInputFileChanged}
              />
              {imageUrls.map((image, index) => (
                <DeletableImage
                  key={`uploading_image_${index}`}
                  index={index}
                  image={image as string}
                  onDeleted={onFileDeleted}
                />
              ))}
            </Box>
          </Paper>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'grey.100' }}>
          <Button onClick={closeForm} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            {isLoading && <CircularProgress />}
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
