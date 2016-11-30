package bookstore

import grails.rest.Resource

import java.time.LocalDateTime

@Resource(uri = "/books")
class Book {

    String title
    LocalDateTime published
    Author author

    static constraints = {
    }
}
