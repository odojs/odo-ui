define 'transitions/back', ['durandal/system', 'odo/durandal/transitions/velocity'], (system, Velocity) ->
	(context) ->
		system.extend context, {
			inAnimation: 'slideInLeft'
			outAnimation: 'slideOutRight'
		}
		new Velocity().create context
