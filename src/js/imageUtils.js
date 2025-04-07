export const getImageUrl = (name, extension) => {
    try {
      // Using Vite's import.meta.url feature to handle asset URLs
      return new URL(`../assets/images/${name}.${extension}`, import.meta.url).href
    } catch (error) {
      console.error(`Failed to load image: ${name}.${extension}`, error)
      return '' // Return empty string if image fails to load
    }
  }
  
  export const getImageUrlSubfolder = (subfolder, name, extension) => {
    try {
      // Using Vite's import.meta.url feature to handle asset URLs
      return new URL(`../assets/images/${subfolder}/${name}.${extension}`, import.meta.url).href
    } catch (error) {
      console.error(`Failed to load image: ${name}.${extension}`, error)
      return '' // Return empty string if image fails to load
    }
  }