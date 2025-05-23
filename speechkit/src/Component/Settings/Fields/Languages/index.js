/* global jQuery, TomSelect */
'use strict';

( function ( $ ) {
	$( document ).ready( function () {
		if ($('#beyondwords_languages').length) {
			new TomSelect( '#beyondwords_languages', {
				maxOptions: null,
				plugins: {
					change_listener: {},
					no_backspace_delete: {},
					no_active_items: {},
					remove_button: {
						title: 'Remove'
					}
				}
			});
		}
	} );
} )( jQuery );
