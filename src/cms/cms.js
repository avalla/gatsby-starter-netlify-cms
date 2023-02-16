import CMS from 'netlify-cms-app'
import { createLocalizedWidget } from 'netlify-cms-i18n'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'


CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)


const LOCALES = ['en', 'de', 'it']

CMS.getWidgets().forEach((widget) => {
    const { name, control, preview } = createLocalizedWidget(widget, LOCALES)
    CMS.registerWidget(name, control, preview)
})

CMS.init()
