import bookstore.BootstrapContextMarkupRenderer
import bookstore.BootstrapPropertyMarkupRenderer

// Place your Spring DSL code here
beans = {

    propertyMarkupRenderer(BootstrapPropertyMarkupRenderer)

    contextMarkupRenderer(BootstrapContextMarkupRenderer)
}
