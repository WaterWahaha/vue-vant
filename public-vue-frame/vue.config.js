const webpack = require('webpack')
module.exports = {
    runtimeCompiler: true,
	css: {
	         loaderOptions: {
	           css: {},
	           postcss: {
	             plugins: [
	               require('postcss-px2rem')({
	                 remUnit: 37.5
	               })
	             ]
	           }
	         }
	     },
	configureWebpack: {
	
	       plugins: [
	
	          new webpack.ProvidePlugin({
	
	            $:"jquery",
	
	            jQuery:"jquery",
	
	            "windows.jQuery":"jquery"
	
	          })
	
	        ]
	
	},
}