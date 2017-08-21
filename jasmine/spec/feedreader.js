/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


           it('Test of Url',function() {
            for(var i=0; i<allFeeds.length; i++) {          //test a url and check to not be empty this tested by length of url
                expect(allFeeds[i].url).toBeDefined();      
                expect(allFeeds[i].url.length).not.toBe(0); //if length not equl zero mens this not empty have a url
            }

        });

        
           it('Test of name',function() {
            for(var i=0; i<allFeeds.length; i++) {         //test a name and chek to not be empty this tested by length of name
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0); //if length not equl zero mens this not empty have a name
            }

        });
    });

               describe('The menu',function() { 

                    var check= $('body').hasClass('menu-hidden'); //check body to detect class (menu-hidden)
                    it('Menu heddin by defult',function() {
                    expect(check).toBe(true);   //menu-hidden responsible to hidden a menu by default

                });

                    it('The menu change visibility when the menu icon is clicked ',function() {

                    $('.menu-icon-link').click();  //when icon is clicked show menu because hide  class menu-hidden
                    $('.menu-hidden').hide();
                    expect($('body')).not.toContain('.menu-hidden');  
                    $('.menu-icon-link').click(); //when clicked agen hide menu call class menu-hidden
                    expect(check).toBe(true);

                });
        });

         
           describe('Initial Entries',function() {
        
                  beforeEach(function(done) {
         
                    loadFeed(0,function(){  //to check loadfeed is work or not using first index  
                        done();
                    })             
                    });
                     
               it('loadFeed function completes its work when loadFeed called',function(done) {

                var entry=$('.feed .entry')[0];
               expect(entry).toBeGreaterThan(''); //when contaener page not null complite work
              done();
                
          });
         
        });

        describe('New Feed Selection',function() {
                      
                  beforeEach(function(done) {
         
                    loadFeed(0,function(){
                        done();                  
                    })             
                    });
                        
               it('Contain update when loadfeed called',function() {

                for(var i=0; i<allFeeds.length; i++) {
                    var con1=$('.feed .entry')[i];        ///test the conatin of first feed not equla the second feed
                    var con2=$('.feed .entry')[i+1];       //when loadfeed called contain changed the conatin of ech feed not
                                                           //be the same is updated when loadfeed called .
                    if(i==allFeeds.length-1)
                    {   
                          con2=$('.feed .entry')[0];
                          expect(con2).not.toContain(con1);
                    }
                    else {
                    expect(con2).not.toContain(con1);
                }

                }      
          });
         
        });

}());
