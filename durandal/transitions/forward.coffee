define 'transitions/forward', ['durandal/system', 'odo/durandal/transitions/velocity'], (system, Velocity) ->
	(context) ->
		system.extend context, {
			inAnimation: 'slideInRight'
			outAnimation: 'slideOutLeft'
		}
		new Velocity().create context
