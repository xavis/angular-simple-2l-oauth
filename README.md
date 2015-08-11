# Angular Simple 2legged  oAuth module

With this module you can generate easily 2-legged oauth URLs in you AngularJS projects using consumer and consumer secret oAuth keys.

This module was developed to enable communication between Drupal 7 Services and a Ionic Framework App.

### Version
1.0.0

### Installation

You need bower installed globally:

```sh
$ npm i -g bower
```

```sh
$ bower install angular-simple-2l-oauth
```

Then you just need to add angular-simple-2l-oauth.min.js to your webapp. Writing in your index.html something like:

``
<script src="lib/angular-simple-2l-oauth/angular-simple-2l-oauth.min.js"></script>
``

### Using it

You must add 2l-oauth to your module dependencies:

``
angular.module( 'myModules', ['2l-oauth'] )
``

And now you can use it in your fabrics, services or controllers just like:

```
.factory('myFactory', function( oauth2l ) {
	var myOauthURL = (oauth2l.makeSignedRequest("CONSUMER_KEY","CONSUMER_SECRET","MY_OAUTH_PROTECTED_URL");
});
```

Or you can add directly your keys and reuse them without retyping them:

```
.factory('myFactory', function( oauth2l ) {
    oauth2l.setKeys("CONSUMER_KEY","CONSUMER_SECRET");
	var myOAuthURL = (oauth2l.makeSignedRequest("MY_OAUTH_PROTECTED_URL");
});
```


### CREDITS
oAuth.js by Netflix (http://code.google.com/p/oauth/source/browse/code/javascript/oauth.js) is included in the package.
SHA1.js by Paul Johnston and Colaborators (http://pajhome.org.uk/crypt/md5/sha1.js) is included in the package.
Thanks to Paul Donnelly for the original makeSignedRequest function (http://paul.donnelly.org/2008/10/31/2-legged-oauth-javascript-function-for-yql/).

### LICENSES

Each file conserve its licenses:

* SHA1.js by Paul Johnston distributed under the BSD License
* Apache License, Version 2.0 for oAuth.js by Netflix
* My code is licensed under Apache License, Version 2.0:


>Copyright 2015 Javier Sánchez Riquelme

>Licensed under the Apache License, Version 2.0 (the "License");
>you may not use this file except in compliance with the License.
>You may obtain a copy of the License at

>   http://www.apache.org/licenses/LICENSE-2.0

>Unless required by applicable law or agreed to in writing, software
>distributed under the License is distributed on an "AS IS" BASIS,
>WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
>See the License for the specific language governing permissions and
>limitations under the License.

