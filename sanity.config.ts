import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'necta-studio',
  title: 'necta-news-studio',
  projectId: '6e1kvr5x',
  dataset: 'production',
  basepath:"/studio",
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
