/*******************************************************************************
*  Code contributed to the webinos project
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*  
*     http://www.apache.org/licenses/LICENSE-2.0
*  
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* 
* Copyright 2012 Telecom Italia Spa 
******************************************************************************/

(function() {
	"use strict";
	var path = require('path');
	//var moduleRoot = require(path.resolve(__dirname, '../dependencies.json'));
	//var dependencies = require(path.resolve(__dirname, '../' + moduleRoot.root.location + '/dependencies.json'));
	//var webinosRoot = path.resolve(__dirname, '../' + moduleRoot.root.location);
	
	//var contacts_module = require(path.resolve(__dirname,'contacts_module.js'));
	
	/**
	 * Webinos Service constructor.
	 * @param rpcHandler A handler for functions that use RPC to deliver their result.  
	 */
	var Messaging = function(rpcHandler,params) {
		console.log("Messaging 01");
		// inherit from RPCWebinosService
		this.base = RPCWebinosService;
		this.base({
			api: 'http://webinos.org/api/messaging',
			displayName: 'Messaging',
			description: 'Messaging Module'
		});

	};

	
	Messaging.prototype = new RPCWebinosService;

/**
 *
 */
Messaging.prototype.test = function (params, successCB, errorCB, objectRef)
{
  "use strict";
  //contacts_module.authenticate(params,successCB);
  successCB(params[0]);
}



// export our object
exports.Service = Messaging;
	

})()
