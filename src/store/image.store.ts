import { IImageModel } from 'src/interfaces/image.interface'
import { create } from 'zustand'

interface IImageStore {
  images: IImageModel[] | null
  setImages: (images: IImageModel[] | null) => void // This function updates the state of images array.
}

export const useImageStore = create<IImageStore>()((set) => ({
  images: null,
  async setImages(images: IImageModel[] | null) {
    set({ images })
  },
}))
