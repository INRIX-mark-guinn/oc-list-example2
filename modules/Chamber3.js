define(function (require) {
    'use strict';

    const
        Chamber = require('common/platform/chamber/Chamber');

    return class NowPlayingChamber extends Chamber {
        init (screen) {
            document.getElementById('chamber3-to-screen1').getControl().addClickListener(function () {
                this.goto('screen1');
            }.bind(this));

            document.getElementById('chamber3-to-chamber1').getControl().addClickListener(function () {
                this.goto('chamber1').then(() => {
                    Log.log("WENT TO CHAMBER 1");
                });
            }.bind(this));

            document.getElementById('chamber3-to-screen2').getControl().addClickListener(function () {
                this.goto('screen2');
            }.bind(this));

            document.getElementById('chamber3-to-chamber2a').getControl().addClickListener(function () {
                this.goto('chamber2a');
            }.bind(this));

            document.getElementById('chamber3-to-chamber2b').getControl().addClickListener(function () {
                this.goto('chamber2b');
            }.bind(this));
            return super.init(screen);
        }

        focusDefault () {
            super.focusDefault();
            document.getElementById('chamber3-to-screen1').getControl().requestFocus();
        }

        goto (id) {
            return this.moduleView.goto(id);
        }
    };
});
