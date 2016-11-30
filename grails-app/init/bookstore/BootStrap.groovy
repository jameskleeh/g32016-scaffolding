package bookstore

import org.grails.scaffolding.registry.DomainInputRendererRegistry

class BootStrap {

    DomainInputRendererRegistry domainInputRendererRegistry

    def init = { servletContext ->
        domainInputRendererRegistry.registerDomainRenderer(new LocalDateTimeInputRenderer(), 1)
    }
    def destroy = {
    }
}
