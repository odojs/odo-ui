define 'text!components/dialog.html', [], ->
	"""
		<div class="modal-dialog animated" data-bind="css: { shake: shouldShake }">
			<!-- ko compose: composeOptions --><!-- /ko -->
		</div>
	"""
