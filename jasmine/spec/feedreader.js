
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('URL are defined', function() {
            allFeeds.map((element)=>{
                                expect(element.url).toBeDefined();
                                expect(element.url).not.toBe('');
                                expect(element.url).not.toBeNull();
            });  
        });
   
        it('name are defined', function() {
            allFeeds.map((element)=>{
                                expect(element.name).toBeDefined();
                                expect(element.name).not.toBe('');
                                expect(element.name).not.toBeNull();
            });  
        });
    });

    describe('The Menu', function() {
      
         it('should be able hidden by default', function(){
            expect(document.querySelector('body').classList).toContain('menu-hidden');
         });
      
         it('should be able change visibility', function(){
            let body = document.querySelector('body');
            let menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).not.toBe(false);   
         });
    
    });


    describe('Initial Entries', function() {

        beforeEach(function (done) {
            loadFeed(0, done);     
        });

        it("should grab initial feeds entries", function(done) { 
            let feed = document.querySelector('.feed');
            let entryy = document.querySelector('.entry');
            expect(feed.contains(entryy)).toBeTruthy();    
            done();         
        }); 
    });


    describe('New Feed Selection',function(){
        let oldFeed = [];
        let newFeed = [];

        beforeEach(function (done) {
            loadFeed(0, function(){
                oldFeed = document.querySelector('.feed');
            });    
            done(); 
        });

        it('should grab new feed selection', function(done){
            newFeed = document.querySelector('.feed');
            expect(newFeed).not.toBe(oldFeed);
            done();
        });
    });
}());