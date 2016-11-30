package bookstore

import grails.util.GrailsNameUtils
import org.grails.plugin.scaffolding.angular.markup.AngularPropertyMarkupRendererImpl
import org.grails.scaffolding.model.property.DomainProperty

/**
 * Created by jameskleeh on 11/29/16.
 */
class BootstrapPropertyMarkupRenderer extends AngularPropertyMarkupRendererImpl {

    @Override
    Map getStandardAttributes(DomainProperty property) {
        Map attributes = super.getStandardAttributes(property)
        attributes["class"] = "form-control"
        attributes
    }

}
