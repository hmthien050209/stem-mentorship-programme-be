import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {sanityDataset, sanityProjectId} from './envLoader'

export default defineConfig({
  name: 'default',
  title: 'STEM Mentorship Programme Website',

  projectId: sanityProjectId,
  dataset: sanityDataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
