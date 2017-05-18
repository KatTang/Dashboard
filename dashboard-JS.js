// external js: packery.pkgd.js, draggabilly.pkgd.js
var pckry = new Packery('.grid', {
    itemSelector: '.grid-item'
    , gutter: 5
});
pckry.getItemElements().forEach(function (itemElem) {
    var draggie = new Draggabilly(itemElem);
    pckry.bindDraggabillyEvents(draggie);
});