package bookstore

import grails.rest.Resource

@Resource(uri = "/authors")
class Author {

    String name

    static constraints = {
    }
}
