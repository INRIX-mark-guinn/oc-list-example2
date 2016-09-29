define(function (require) {
    'use strict';

    const
        ListDataHandlerBase = require('common/platform/ListDataHandlerBase');

    return class extends ListDataHandlerBase {
        onBeforeLeafDataLoaded () {
        }

        onLeafDataLoaded (finalObject) {
        }

        parseFetchedResponse (node, fetchFunctionName, respData) {
            return respData;
        }

        doSomething () {
            return [
                {
                    text: 'lo there'
                }
            ];
        }
    };
});
