/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

    /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */
 
    iris.cache(false);
    function createDeferred() {
        window.deferred = {};
        window.deferred.main = new $.Deferred();
        window.deferred.help = new $.Deferred();
    }
    
    function destroyDeferred() {
        window.deferred = {};
    }
    
    function clearBody() {
        var irisGeneratedCode = $("#start_iris").nextAll();
        if (irisGeneratedCode !== undefined) {
            irisGeneratedCode.remove();
        }
    }
    
    
    
    module( "UI Life Cycle", {
        setup: function() {
            window.location.hash = "";
            clearBody();
            createDeferred();
            iris.init();
            iris.welcome("test/ui_life_cycle/welcome.js");
        },
        teardown: function () {
            destroyDeferred();
        }
    });
    
    asyncTest("Create my_ui directly in screen.create() method", function() {        
        window.expect(2);
        iris.navigate("#main");
        
    }
    );
        
    asyncTest("Create my_ui directly in screen.awake() method", function() {        
        window.expect(2);
        iris.navigate("#main2");
    }
    );
        
    asyncTest("Create my_ui from button_click event", function() {        
        window.expect(2);
        iris.navigate("#main3");
    }
    );
        
    asyncTest("Create my_ui with an inner UI", function() {        
        window.expect(8);
        iris.navigate("#main4");
    }
    );
        
    asyncTest("Testing sleep UI event", function() {        
        window.expect(6);
        iris.navigate("#main5");
        window.deferred.main.done(
            function() {
                iris.navigate("#help");
            }
            );
    }
    );
        
    asyncTest("Testing destroy UI event", function() {        
        window.expect(8);
        iris.navigate("#main6");
    }
    );
        
    asyncTest("Testing sleep and destroy events when destroyScreen() method is called", function() {        
        window.expect(8);
        iris.navigate("#main5");
        window.deferred.main.done(
            function() {
                iris.navigate("#help2");
            }
            );
                
        window.deferred.help.done(
            function() {
                setTimeout(function () {
                    iris.destroyScreen("#main5");
                    window.start();
                }, 10);
            }
            );
    }
    );
    

}(jQuery));