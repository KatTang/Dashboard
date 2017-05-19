// external js: packery.pkgd.js, draggabilly.pkgd.js
var pckry = new Packery('.grid', {
    itemSelector: '.grid-item'
    , rowHeight: 295
    , columnWidth: 492
    , gutter: 10
});
pckry.getItemElements().forEach(function (itemElem) {
    var draggie = new Draggabilly(itemElem);
    pckry.bindDraggabillyEvents(draggie);
});
