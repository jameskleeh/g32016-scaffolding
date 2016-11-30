package bookstore

import org.grails.datastore.mapping.model.PersistentEntity
import org.grails.plugin.scaffolding.angular.markup.AngularContextMarkupRendererImpl
import org.grails.scaffolding.model.property.DomainProperty

/**
 * Created by jameskleeh on 11/29/16.
 */
class BootstrapContextMarkupRenderer extends AngularContextMarkupRendererImpl {

    @Override
    Closure inputContext(PersistentEntity domainClass, Closure content) {
        content
    }

    @Override
    Closure inputContext(DomainProperty property, Closure content) {
        { ->
            content.delegate = delegate
            div(class: 'form-group') {
                label([for: property.pathFromRoot], getLabelText(property))
                content.call()
            }
        }
    }

    @Override
    Closure outputContext(PersistentEntity domainClass, Closure content) {
        { ->
            div(class: 'container', content)
        }
    }

    @Override
    Closure outputContext(DomainProperty property, Closure content) {
        { ->
            div(class: 'row') {
                div(class: 'col-sm-3', getLabelText(property))
                div(class: 'col-sm-9', content)
            }
        }
    }
}
