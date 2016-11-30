package bookstore

import org.grails.scaffolding.model.property.DomainProperty
import org.grails.scaffolding.registry.input.DateInputRenderer

import java.time.LocalDateTime

/**
 * Created by jameskleeh on 11/29/16.
 */
class LocalDateTimeInputRenderer extends DateInputRenderer {

    @Override
    boolean supports(DomainProperty property) {
        property.type == LocalDateTime
    }
}
