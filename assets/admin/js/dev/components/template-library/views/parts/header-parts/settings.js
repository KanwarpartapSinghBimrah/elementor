var TemplateLibraryHeaderSettingsView;

TemplateLibraryHeaderSettingsView = Marionette.ItemView.extend( {
	template: '#tmpl-elementor-template-library-header-save',

	id: 'elementor-template-library-header-save',

	className: 'elementor-template-library-header-item',

	events: {
		'click': 'onSaveButtonClick'
	},

	onSaveButtonClick: function() {
		elementor.templates.getLayout().showSaveTemplateView();
	}
} );

module.exports = TemplateLibraryHeaderSettingsView;
