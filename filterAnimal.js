var filterAnimal = React.createClass({
	displayName: 'filterAnimal',
	propTypes: {
		nameDivText: React.PropTypes.string.isRequired,
		animalsarrprop: React.PropTypes.array.isRequired,
		animalText: React.PropTypes.string.isRequired,
	},
	getInitialState: function() {
		return { 
			checked: false,
			defAnimalsarrprop: this.props.animalsarrprop,
			defanimalText: this.props.animalText,
		};
	},
	handelChange: function() {
		this.setState({checked: !this.state.checked})
		if (!this.state.checked) {
			var sortdefAnimalsarrprop = [...this.state.defAnimalsarrprop].sort(function(a, b) {
				return (a.text < b.text) ? -1 : (a.text > b.text) ? 1 : 0});
			this.setState({defAnimalsarrprop: sortdefAnimalsarrprop})
		}
		else {
			var firstdefAnimalsarrprop = [...this.state.defAnimalsarrprop].sort(function(a, b) {
				return (a.code < b.code) ? -1 : (a.code > b.code) ? 1 : 0});
			this.setState({defAnimalsarrprop: firstdefAnimalsarrprop})
		}
	},
	animalSearch: function (EO) {
		this.setState( {defanimalText: EO.target.value})
	},
	ResetClick: function () {
		var firstdefAnimalsarrprop = [...this.state.defAnimalsarrprop].sort(function(a, b) {
			return (a.code < b.code) ? -1 : (a.code > b.code) ? 1 : 0});
		this.setState({
		checked: false,
		defanimalText: '',
		defAnimalsarrprop: firstdefAnimalsarrprop,
		})
	}, 
			render: function() {
			var animalsList = [];
			this.state.defAnimalsarrprop.forEach(element => {
				if (element.text.includes(this.state.defanimalText))
				var animalsCode = 
				React.DOM.option( 
					{key:element.code, value: element.text }, element.text
					);
					animalsList.push(animalsCode)
				});

			return React.DOM.div( {className:'animalsPlace'}, 
			React.DOM.div( null, nameDivText ),
			React.DOM.input( {type:'checkbox', onChange: this.handelChange, checked: this.state.checked}, ),
			React.DOM.div ( {className:'label'}, 'Alphabet order' ),
			React.DOM.input( {
				type:'text',  
				placeholder: 'Enter the name of the animal', 
				onChange: this.animalSearch, 
				value: this.state.defanimalText,
			}, ),
			React.DOM.button( {onClick: this.ResetClick}, 'Reset'),
			React.DOM.select( {multiple: true, size: 15, defaultValue: animalsList }, animalsList ),
			);
	},
});
