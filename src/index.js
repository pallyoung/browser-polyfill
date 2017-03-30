(function (factory) {

}(function factory() {
    'use strict'
    var win = typeof window !== undefined ? window : {};
    global.window = win;

    var assign = Object.assign;

    function EventTarget() {

    }

    function Node() {
        EventTarget.call(this);
    }
    Node.prototype = new EventTarget();
    Node.prototype.constructor = Node;
    function Document() {

    }

    Document.prototype = new Document();
    Document.prototype.constructor = Document;

    function HTMLDocument() {

    }

    HTMLDocument.prototype = new HTMLDocument();
    HTMLDocument.prototype.constructor = HTMLDocument;
}))