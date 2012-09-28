/*******************************************************************************
 * Copyright 2011 Istituto Superiore Mario Boella (ISMB)
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
 ******************************************************************************/

(function()
{
  Messaging = function(obj) {
		this.base = WebinosService;
		this.base(obj);
		
		this.test = test;
  };
  
  Messaging.prototype = new WebinosService;

  Messaging.prototype.bindService = function (bindCB, serviceId) {
	  this.test = test;

	  if (typeof bindCB.onBind === 'function') {
		  bindCB.onBind(this);
	  };
  }

  

  /**
   * 
   * */
  function test(attr, successCB,errorCB)
  {
    var rpc = webinos.rpcHandler.createRPC(this, "test", [ attr ]); // RPCservicename,
    // function
    webinos.rpcHandler.executeRPC(rpc, function(params)
    {
      successCB(params);
    }, function(error)
    {
      errorCB(error);
    });
  };
  
  
}());
