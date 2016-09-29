define(function (require) {
    'use strict';

    const
        ListChamber = require('common/platform/chamber/ListChamberAlpha');


    /*
    Examples of list styles and the ability to add classes and/or ids.

    See new documentation for ListChamber for description of elements.

    Additional features (not tested and not fully documented):
        - Support for .gif and .svg types of image icons
        - External content will work, but must end in .png/.jpg/etc
        - Changing the model will (should at least!) update the list item live.
            This should work (used elsewhere). What is not tested here is changing classes.
            A new set of classes (should be able to) be applied to an existing list by changing the model
            $class property.  To remove a class, prefix with ! (i.e. "!myClass").
    */

    var tree = [];
    tree.push({
        $class: ['foo', 'bar'],
        text: "Text Only"
    });
    tree.push({
        text: "Font Icon",
        icon: "clock-o"
    });
    tree.push({
        text: "Two items",
        text1: "of text"
    });
    tree.push({
        text: "Two items",
        text1: "of text and icon",
        icon: "gear"
    });
    tree.push({
        text: "Text",
        status: "and Status"
    });
    tree.push({
        text: "Text and Icon",
        status: "and Status",
        icon: "flag"
    });
    tree.push({
        text: "Text and Icon",
        status: "and Status",
        status1: "in two lines",
        icon: "tag"
    });
    tree.push({
        text: "Graphic Icon",
        icon: window.MODULE_PATH+"/icon.png"
    });
    tree.push({
        icon: window.MODULE_PATH+"/icon.png" // icon only
    });
    tree.push({
        text: "icon array with text",
        icons: ['fast-forward','pause', 'fast-backward']
    });
    tree.push({
        $class: "red-text",
        text: 'Content styled with class',
        status: "status"
    });
    tree.push({
        $id: "flagged-item",
        text: 'Content styled with id',
        icon: 'flag'
    });
    tree.push({
        text: 'Chamber 2a',
        text1: "secondary",
        status: "status",
        status1: "status1",
        $id: 'chamber2a'
    });
    tree.push({
        icon: 'home',
        text: 'Full',
        text1: 'House',
        icons: [
            {
                text: "one",
                src: 'refresh'
            },
            {
                text: "two",
                src: window.MODULE_PATH+"/icon.png"
            },
            {
                text: "three",
                src: 'refresh'
            }
        ]
    });
    tree.push({
        text: "Lot's going on here",
        icon: 'http://images.clipartpanda.com/happy-face-clipart-y4T9gyjiE.jpeg',
        icons: [
            {
                text: "one",
                src: 'refresh'
            },
            {
                text: "two",
                src: window.MODULE_PATH+"/icon.png"
            },
            {
                text: "three",
                src: 'refresh'
            }
        ]
    });
    /*
    // Enabling both status and icons will result in non-display and a lock up. Avoid doing this.
    tree.push({
        text: 'Too',
        text1: 'Much',
        status: 'Info',
        status1: 'Collision',
        icons: [
            {
                text: "uno",
                src: 'refresh'
            },
            {
                text: "dos",
                src: window.MODULE_PATH+"/icon.png"
            },
            {
                text: "tres",
                src: 'refresh'
            }
        ]
    });
     */
    tree.push({
        text: "data branch example",
        icon: "arrow-right",
        _data_tree_branch: [
            {
                text: 'go no where1'
            },
            {
                text: 'go no where2'
            }
        ]
    });


    return class MenuModule extends ListChamber {
        init (api, container) {
            this.api = api;
            this.container = container;
            this.setTitle('test 123');
            return super.init(api, container);
        }

        render (config) {
            config.title = "what is happening?";
            config.itemClick = function (lv, model) {
                if (!model.get('_data_tree_branch') && model.get('id')) {
                    this.goto(model.get('id'), model);
                }
            }.bind(this);
            super.render(config);
        }

        data () {
            return tree;
        }
    };
});
