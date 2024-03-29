export default {
	grid: {
		container: '130rem',
		containerSmall: '120rem',
		gutter: '3.2rem',
	},
	border: {
		radius: '0.4rem',
	},
	font: {
		family: 'Inter, Arial, Helvetica, sans-serif',
		light: 300,
		normal: 400,
		bold: 600,
		sizes: {
			xsmall: '1.2rem',
			small: '1.4rem',
			medium: '1.6rem',
			large: '1.8rem',
			xlarge: '2.0rem',
			xxlarge: '2.8rem',
			xxxlarge: '5.2rem',
		},
	},
	colors: {
		primary: '#757eff',
		mainBg: '#06092B',
		lightBg: '#F2F2F2',
		white: '#fff',
		black: '#030517',
		lightGray: '#EAEAEA',
		blue: '#4A53CF',
		lightBlue: '#757EFF',
		darkBlue: '#5f65c5',
		gray: '#8F8F8F',
		darkGray: '#2E2F42',
		green: '#21BE3A',
		darkGreen: '#1B9C30',
		red: '#DD4747',
		darkRed: '#A43232',
		orange: '#CF815F',
	},
	spacings: {
		xxsmall: '0.8rem',
		xsmall: '1.6rem',
		small: '2.4rem',
		medium: '3.2rem',
		large: '4.0rem',
		xlarge: '4.8rem',
		xxlarge: '5.6rem',
	},
	layers: {
		base: 10,
		menu: 20,
		overlay: 30,
		modal: 40,
		alwaysOnTop: 50,
	},
	transition: {
		default: '0.3s ease-in-out',
		fast: '0.1s ease-in-out',
	},
} as const
