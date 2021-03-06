/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Jim Fang. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *  Server sided hosted on Heroku. Website hosted on Infinity Free.
 *  WEBSITE WITH IMPLIMENTATION: http://generator.rocketscience.monster/
 *--------------------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

var form = document.getElementById('classForm');

form.onsubmit = function (e) {
    // stop the regular form submission
    e.preventDefault();
    // collect the form data while iterating over the inputs
    var data = {};
    for (var i = 0, ii = form.length; i < ii; ++i) {
        var input = form[i];
        if (input.value.length > 100) { // sanitize input
            alert(`Class name of ${input.name} is way too long.`)
        }
        else if (input.name) {
            data[input.name] = input.value;
        }
    }
    // construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // send the collected data as JSON
    xhr.send(JSON.stringify(data));
    xhr.onloadend = function () {
        // done
    };
};