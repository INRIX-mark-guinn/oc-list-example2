define(function (require) {
    'use strict';

    const
        Chamber = require('common/platform/chamber/Chamber');

    return class NowPlayingChamber extends Chamber {
        init ( screen) {
            document.getElementById('chamber2b-to-screen1').getControl().addClickListener(function () {
                this.goto('screen1');
            }.bind(this));

            document.getElementById('chamber2b-to-chamber1').getControl().addClickListener(function () {
                this.goto('chamber1');
            }.bind(this));

            document.getElementById('chamber2b-to-chamber2a').getControl().addClickListener(function () {
                this.goto('chamber2a');
            }.bind(this));

            document.getElementById('chamber2b-to-screen3').getControl().addClickListener(function () {
                this.goto('screen3');
            }.bind(this));

            document.getElementById('chamber2b-to-chamber3').getControl().addClickListener(function () {
                this.goto('chamber3');
            }.bind(this));
            return super.init(screen);
        }

        focusDefault () {
            super.focusDefault();
            document.getElementById('chamber2b-to-screen1').getControl().requestFocus();
        }

        goto (id) {
            this.moduleView.goto(id);
        }
    };
});
