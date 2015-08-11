angular.module("2l-oauth", []).provider("oauth2l", function oauth2lProvider(){

	var oauth2l = {};

	oauth2l.setKeys = function(ck, ks){
			this.ck = ck;
			this.cks = ks;
		}

		//modified makeSignedRequest function originally by Paul Donnelly
		oauth2l.makeSignedRequest = function(consumer,secret,url) {

			var ck, cks, encodedurl;

			if(arguments.length==1){
				if(this.ck && this.cks){
					encodedurl = arguments[0];
					ck = this.ck;
					cks = this.cks 
				}
				else{
					console.error("makeSignedRequest needs 3 args if you don't use setKeys");
				}
			}

			else if(arguments.length==3){
				ck = consumer;
				cks = secret;
				encodedurl = url;
			}    

			else{
				console.error("makeSignedRequest invalid arguments number");
			} 

			var accessor = { consumerSecret: cks, tokenSecret: ""};          
			var message = { action: encodedurl, method: "GET", parameters: [["oauth_version","1.0"],["oauth_consumer_key",ck]]};

			OAuth.setTimestampAndNonce(message);
			OAuth.SignatureMethod.sign(message, accessor);

			var parameterMap = OAuth.getParameterMap(message);
			var baseStr = OAuth.decodeForm(OAuth.SignatureMethod.getBaseString(message));           
			var theSig = "";

			if (parameterMap.parameters) {
				for (var item in parameterMap.parameters) {
					for (var subitem in parameterMap.parameters[item]) {
						if (parameterMap.parameters[item][subitem] == "oauth_signature") {
							theSig = parameterMap.parameters[item][1];                    
							break;                      
						}
					}
				}
			}

			var paramList = baseStr[2][0].split("&");
			paramList.push("oauth_signature="+ encodeURIComponent(theSig));
			paramList.sort(function(a,b) {
				if (a[0] < b[0]) return -1;
				if (a[0] > b[0]) return 1;
				if (a[1] < b[1]) return  -1;
				if (a[1] > b[1]) return 1;
				return 0;
			});

			var locString = "";
			for (var x in paramList) {
				locString += paramList[x] + "&";                
			}

			var finalStr = baseStr[1][0] + "?" + locString.slice(0,locString.length - 1);

			return finalStr;
		};

	this.$get = [function(){

		return oauth2l;
	}];

});