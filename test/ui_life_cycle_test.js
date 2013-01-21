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
    
    function clearBody() {
        var irisGeneratedCode = $("#start_iris").nextAll();
        if (irisGeneratedCode !== undefined) {
            irisGeneratedCode.remove();
        }
    }
    
    
    module( "UI Life Cycle", {
        setup: function() {
            iris.notify("iris-reset");
            iris.welcome("test/ui_life_cycle/welcome.js");
        },
        teardown: function () {
            clearBody();
        }
    });
    
    asyncTest("Create my_ui directly in screen.create() method", function() {        
        window.expect(2);

        iris.on(iris.AFTER_NAVIGATION, function () {
            iris.off(iris.AFTER_NAVIGATION);

            iris.navigate("#/main");
        });
        
    }
    );
        
    asyncTest("Create my_ui directly in screen.awake() method", function() {        
        window.expect(2);

        iris.on(iris.AFTER_NAVIGATION, function () {
            iris.off(iris.AFTER_NAVIGATION);

            iris.navigate("#/main2");
        });
    }
    );
        
    asyncTest("Create my_ui from button_click event", function() {        
        window.expect(2);

        iris.on(iris.AFTER_NAVIGATION, function () {
            iris.off(iris.AFTER_NAVIGATION);
            
            iris.navigate("#/main3");
        });
    }
    );
        
    asyncTest("Create my_ui with an inner UI", function() {        
        window.expect(8);

        iris.on(iris.AFTER_NAVIGATION, function () {
            iris.off(iris.AFTER_NAVIGATION);
            
            iris.navigate("#/main4");
        });
    }
    );
        
    asyncTest("Testing sleep UI event", function() {        
        window.expect(6);

        iris.on(iris.AFTER_NAVIGATION, function () {
            iris.off(iris.AFTER_NAVIGATION);
            
            iris.navigate("#/main5");

            iris.on(iris.AFTER_NAVIGATION, function () {
                iris.off(iris.AFTER_NAVIGATION);
                iris.navigate("#/help");
            });
        });
    }
    );
        
    asyncTest("Testing destroy UI event", function() {        
        window.expect(8);

        iris.on(iris.AFTER_NAVIGATION, function () {
            iris.off(iris.AFTER_NAVIGATION);
            
            iris.navigate("#/main6");
        });
    }
    );
        
    asyncTest("Testing sleep and destroy events when destroyScreen() method is called", function() {        
        window.expect(8);

        iris.on(iris.AFTER_NAVIGATION, function () {
            iris.off(iris.AFTER_NAVIGATION);
        
            iris.navigate("#/main5");

            iris.on(iris.AFTER_NAVIGATION, function () {
                iris.off(iris.AFTER_NAVIGATION);

                iris.navigate("#/help2");

                iris.on(iris.AFTER_NAVIGATION, function () {
                    iris.off(iris.AFTER_NAVIGATION);

                    iris.destroyScreen("#/main5");
                    start();

                });

            });
        });
    });
    

}(jQuery));